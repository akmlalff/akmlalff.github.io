#import <AppKit/AppKit.h>
#import <Foundation/Foundation.h>
#import <PDFKit/PDFKit.h>

static NSArray<NSURL *> *PDFURLs(NSURL *root) {
  NSFileManager *manager = [NSFileManager defaultManager];
  NSDirectoryEnumerator *enumerator = [manager enumeratorAtURL:root
                                    includingPropertiesForKeys:@[NSURLIsRegularFileKey]
                                                       options:NSDirectoryEnumerationSkipsHiddenFiles
                                                  errorHandler:nil];
  NSMutableArray<NSURL *> *urls = [NSMutableArray array];

  for (NSURL *url in enumerator) {
    if ([[url.pathExtension lowercaseString] isEqualToString:@"pdf"]) {
      [urls addObject:url];
    }
  }

  return [urls sortedArrayUsingComparator:^NSComparisonResult(NSURL *a, NSURL *b) {
    return [a.path compare:b.path];
  }];
}

static void RemoveOldPages(NSURL *pagesURL, NSString *baseName) {
  NSFileManager *manager = [NSFileManager defaultManager];
  NSArray<NSURL *> *files = [manager contentsOfDirectoryAtURL:pagesURL
                                  includingPropertiesForKeys:nil
                                                     options:0
                                                       error:nil];
  NSString *prefix = [baseName stringByAppendingString:@"-page-"];

  for (NSURL *file in files) {
    if ([file.lastPathComponent hasPrefix:prefix] && [[file.pathExtension lowercaseString] isEqualToString:@"png"]) {
      [manager removeItemAtURL:file error:nil];
    }
  }
}

static BOOL WritePNG(NSImage *image, NSURL *url) {
  NSData *tiff = [image TIFFRepresentation];
  if (!tiff) return NO;

  NSBitmapImageRep *bitmap = [NSBitmapImageRep imageRepWithData:tiff];
  if (!bitmap) return NO;

  NSData *png = [bitmap representationUsingType:NSBitmapImageFileTypePNG properties:@{}];
  if (!png) return NO;

  return [png writeToURL:url atomically:YES];
}

int main(void) {
  @autoreleasepool {
    NSFileManager *manager = [NSFileManager defaultManager];
    NSURL *root = [NSURL fileURLWithPath:[manager currentDirectoryPath] isDirectory:YES];
    NSURL *writeups = [root URLByAppendingPathComponent:@"assets/writeups" isDirectory:YES];

    NSInteger documentCount = 0;
    NSInteger pageCount = 0;

    for (NSURL *pdfURL in PDFURLs(writeups)) {
      PDFDocument *document = [[PDFDocument alloc] initWithURL:pdfURL];
      if (!document) {
        fprintf(stderr, "Could not open %s\n", pdfURL.path.UTF8String);
        continue;
      }

      NSURL *pagesURL = [[pdfURL URLByDeletingLastPathComponent] URLByAppendingPathComponent:@"pages" isDirectory:YES];
      [manager createDirectoryAtURL:pagesURL withIntermediateDirectories:YES attributes:nil error:nil];

      NSString *baseName = [[pdfURL lastPathComponent] stringByDeletingPathExtension];
      RemoveOldPages(pagesURL, baseName);

      for (NSInteger index = 0; index < document.pageCount; index++) {
        PDFPage *page = [document pageAtIndex:index];
        if (!page) continue;

        NSRect bounds = [page boundsForBox:kPDFDisplayBoxMediaBox];
        CGFloat scale = 2.0;
        NSSize size = NSMakeSize(NSWidth(bounds) * scale, NSHeight(bounds) * scale);
        NSImage *image = [[NSImage alloc] initWithSize:size];

        [image lockFocus];
        [[NSColor whiteColor] setFill];
        NSRectFill(NSMakeRect(0, 0, size.width, size.height));

        CGContextRef context = [[NSGraphicsContext currentContext] CGContext];
        CGContextSaveGState(context);
        CGContextScaleCTM(context, scale, scale);
        CGContextTranslateCTM(context, -bounds.origin.x, -bounds.origin.y);
        [page drawWithBox:kPDFDisplayBoxMediaBox toContext:context];
        CGContextRestoreGState(context);

        [image unlockFocus];

        NSString *fileName = [NSString stringWithFormat:@"%@-page-%03ld.png", baseName, (long)index + 1];
        NSURL *output = [pagesURL URLByAppendingPathComponent:fileName];
        if (WritePNG(image, output)) {
          pageCount++;
        } else {
          fprintf(stderr, "Could not write %s\n", output.path.UTF8String);
        }
      }

      documentCount++;
    }

    printf("Rendered %ld pages from %ld PDFs.\\n", (long)pageCount, (long)documentCount);
  }
  return 0;
}
