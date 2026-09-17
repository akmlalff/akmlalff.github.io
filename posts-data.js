const posts = [
  {
    "title": "NodeRabbit Malware",
    "date": "Sep 8, 2026",
    "category": "Malware Analysis",
    "tags": [
      "Malware Analysis",
      "NodeRabbit"
    ],
    "excerpt": "NodeRabbit Malware analysis covering persistence, C2 behavior, indicators of compromise, and response recommendations.",
    "cover": "",
    "url": "posts/noderabbit-malware.html"
  },
  {
    "title": "Bahtera Siber 3108 CTF 2026: Warisan Takhta",
    "date": "Aug 31, 2026",
    "category": "CTF",
    "tags": [
      "Bahtera Siber 3108 CTF 2026"
    ],
    "excerpt": "Bahtera Siber 3108 CTF 2026: Warisan Takhta writeup.",
    "cover": "",
    "url": "posts/bahtera-siber-3108-ctf-2026-warisan-takhta.html"
  },
  {
    "title": "NahamCon CTF 2025",
    "date": "May 25, 2025",
    "category": "CTF",
    "tags": [
      "NahamCon CTF 2025",
      "Writeup"
    ],
    "excerpt": "NahamCon CTF 2025 writeup.",
    "cover": "",
    "url": "posts/nahamcon-ctf-2025.html"
  },
  {
    "title": "UMCS Finals 2025",
    "date": "May 24, 2025",
    "category": "CTF",
    "tags": [
      "UMCS Finals 2025",
      "Writeup"
    ],
    "excerpt": "UMCS Finals 2025 writeup.",
    "cover": "",
    "url": "posts/umcs-finals.html"
  },
  {
    "title": "UMCS Preliminary 2025",
    "date": "May 20, 2025",
    "category": "CTF",
    "tags": [
      "UMCS Preliminary 2025",
      "Writeup"
    ],
    "excerpt": "UMCS Preliminary 2025 writeup.",
    "cover": "",
    "url": "posts/umcs-preliminary.html"
  },
  {
    "title": "Alien Encryption 101",
    "date": "Apr 14, 2025",
    "category": "CTF",
    "tags": [
      "Ritsec CTF",
      "Cryptography"
    ],
    "excerpt": "Cryptography Challenge from Ritsec CTF.",
    "cover": "",
    "url": "posts/ritsec-ctf-cryptography-alien-encryption-101.html"
  },
  {
    "title": "Cuwves 2 Electric Boogaloo",
    "date": "Apr 14, 2025",
    "category": "CTF",
    "tags": [
      "Ritsec CTF",
      "Cryptography"
    ],
    "excerpt": "Cryptography Challenge from Ritsec CTF.",
    "cover": "",
    "url": "posts/ritsec-ctf-cryptography-cuwves-2-electric-boogaloo.html"
  },
  {
    "title": "Intercepted Transmission",
    "date": "Apr 14, 2025",
    "category": "CTF",
    "tags": [
      "Ritsec CTF",
      "Forensic"
    ],
    "excerpt": "Forensic Challenge from Ritsec CTF.",
    "cover": "",
    "url": "posts/ritsec-ctf-forensic-intercepted-transmission.html"
  },
  {
    "title": "Moving Money",
    "date": "Apr 14, 2025",
    "category": "CTF",
    "tags": [
      "Ritsec CTF",
      "Misc"
    ],
    "excerpt": "Misc Challenge from Ritsec CTF.",
    "cover": "",
    "url": "posts/ritsec-ctf-misc-moving-money.html"
  },
  {
    "title": "Rope",
    "date": "Apr 14, 2025",
    "category": "CTF",
    "tags": [
      "Ritsec CTF",
      "Forensic"
    ],
    "excerpt": "Forensic Challenge from Ritsec CTF.",
    "cover": "",
    "url": "posts/ritsec-ctf-forensic-rope.html"
  },
  {
    "title": "UFO",
    "date": "Apr 14, 2025",
    "category": "CTF",
    "tags": [
      "Ritsec CTF",
      "Misc"
    ],
    "excerpt": "Misc Challenge from Ritsec CTF.",
    "cover": "",
    "url": "posts/ritsec-ctf-misc-ufo.html"
  },
  {
    "title": "Are You Ready Mr. Krabs",
    "date": "Apr 1, 2025",
    "category": "CTF",
    "tags": [
      "SillyCTF",
      "Gallimaufries"
    ],
    "excerpt": "Gallimaufries Challenge from SillyCTF.",
    "cover": "",
    "url": "posts/sillyctf-gallimaufries-are-you-ready-mr-krabs.html"
  },
  {
    "title": "Big Mood Energy",
    "date": "Apr 1, 2025",
    "category": "CTF",
    "tags": [
      "SillyCTF",
      "Ice Spice"
    ],
    "excerpt": "Ice Spice Challenge from SillyCTF.",
    "cover": "",
    "url": "posts/sillyctf-ice-spice-big-mood-energy.html"
  },
  {
    "title": "GeoGRUphical Data",
    "date": "Apr 1, 2025",
    "category": "CTF",
    "tags": [
      "SillyCTF",
      "Minions"
    ],
    "excerpt": "Minions Challenge from SillyCTF.",
    "cover": "",
    "url": "posts/sillyctf-minions-geogruphical-data.html"
  },
  {
    "title": "Gru'S Lab",
    "date": "Apr 1, 2025",
    "category": "CTF",
    "tags": [
      "SillyCTF",
      "Minions"
    ],
    "excerpt": "Minions Challenge from SillyCTF.",
    "cover": "",
    "url": "posts/sillyctf-minions-gru-s-lab.html"
  },
  {
    "title": "Hash Me, If You Can!",
    "date": "Apr 1, 2025",
    "category": "CTF",
    "tags": [
      "SillyCTF",
      "Minions"
    ],
    "excerpt": "Minions Challenge from SillyCTF.",
    "cover": "",
    "url": "posts/sillyctf-minions-hash-me-if-you-can.html"
  },
  {
    "title": "In Her Mood",
    "date": "Apr 1, 2025",
    "category": "CTF",
    "tags": [
      "SillyCTF",
      "Ice Spice"
    ],
    "excerpt": "Ice Spice Challenge from SillyCTF.",
    "cover": "",
    "url": "posts/sillyctf-ice-spice-in-her-mood.html"
  },
  {
    "title": "It Hertz When IP",
    "date": "Apr 1, 2025",
    "category": "CTF",
    "tags": [
      "SillyCTF",
      "Minions"
    ],
    "excerpt": "Minions Challenge from SillyCTF.",
    "cover": "",
    "url": "posts/sillyctf-minions-it-hertz-when-ip.html"
  },
  {
    "title": "Munch Music",
    "date": "Apr 1, 2025",
    "category": "CTF",
    "tags": [
      "SillyCTF",
      "Ice Spice"
    ],
    "excerpt": "Ice Spice Challenge from SillyCTF.",
    "cover": "",
    "url": "posts/sillyctf-ice-spice-munch-music.html"
  },
  {
    "title": "Wittle Gwean Bwean",
    "date": "Apr 1, 2025",
    "category": "CTF",
    "tags": [
      "SillyCTF",
      "Gallimaufries"
    ],
    "excerpt": "Gallimaufries Challenge from SillyCTF.",
    "cover": "",
    "url": "posts/sillyctf-gallimaufries-wittle-gwean-bwean.html"
  },
  {
    "title": "You Smell That !",
    "date": "Apr 1, 2025",
    "category": "CTF",
    "tags": [
      "SillyCTF",
      "Ice Spice"
    ],
    "excerpt": "Ice Spice Challenge from SillyCTF.",
    "cover": "",
    "url": "posts/sillyctf-ice-spice-you-smell-that.html"
  },
  {
    "title": "You Thought I Was Feeling You",
    "date": "Apr 1, 2025",
    "category": "CTF",
    "tags": [
      "SillyCTF",
      "Ice Spice"
    ],
    "excerpt": "Ice Spice Challenge from SillyCTF.",
    "cover": "",
    "url": "posts/sillyctf-ice-spice-you-thought-i-was-feeling-you.html"
  },
  {
    "title": "Beginner Pwn 1",
    "date": "Mar 30, 2025",
    "category": "CTF",
    "tags": [
      "SwampCTF 2025",
      "Pwn"
    ],
    "excerpt": "Pwn Challenge from SwampCTF 2025.",
    "cover": "",
    "url": "posts/swampctf-2025-pwn-beginner-pwn-1.html"
  },
  {
    "title": "Beginner PWN 2",
    "date": "Mar 30, 2025",
    "category": "CTF",
    "tags": [
      "SwampCTF 2025",
      "Pwn"
    ],
    "excerpt": "Pwn Challenge from SwampCTF 2025.",
    "cover": "",
    "url": "posts/swampctf-2025-pwn-beginner-pwn-2.html"
  },
  {
    "title": "Beginner Web",
    "date": "Mar 30, 2025",
    "category": "CTF",
    "tags": [
      "SwampCTF 2025",
      "Web"
    ],
    "excerpt": "Web Challenge from SwampCTF 2025.",
    "cover": "",
    "url": "posts/swampctf-2025-web-beginner-web.html"
  },
  {
    "title": "Editor",
    "date": "Mar 30, 2025",
    "category": "CTF",
    "tags": [
      "SwampCTF 2025",
      "Web"
    ],
    "excerpt": "Web Challenge from SwampCTF 2025.",
    "cover": "",
    "url": "posts/swampctf-2025-web-editor.html"
  },
  {
    "title": "Hidden Message Board",
    "date": "Mar 30, 2025",
    "category": "CTF",
    "tags": [
      "SwampCTF 2025",
      "Web"
    ],
    "excerpt": "Web Challenge from SwampCTF 2025.",
    "cover": "",
    "url": "posts/swampctf-2025-web-hidden-message-board.html"
  },
  {
    "title": "Homework Help",
    "date": "Mar 30, 2025",
    "category": "CTF",
    "tags": [
      "SwampCTF 2025",
      "Forensic"
    ],
    "excerpt": "Forensic Challenge from SwampCTF 2025.",
    "cover": "",
    "url": "posts/swampctf-2025-forensic-homework-help.html"
  },
  {
    "title": "Party Time!",
    "date": "Mar 30, 2025",
    "category": "CTF",
    "tags": [
      "SwampCTF 2025",
      "OSINT"
    ],
    "excerpt": "OSINT Challenge from SwampCTF 2025.",
    "cover": "",
    "url": "posts/swampctf-2025-osint-party-time.html"
  },
  {
    "title": "Party Time! Level 2",
    "date": "Mar 30, 2025",
    "category": "CTF",
    "tags": [
      "SwampCTF 2025",
      "OSINT"
    ],
    "excerpt": "OSINT Challenge from SwampCTF 2025.",
    "cover": "",
    "url": "posts/swampctf-2025-osint-party-time-level-2.html"
  },
  {
    "title": "Planetary Storage",
    "date": "Mar 30, 2025",
    "category": "CTF",
    "tags": [
      "SwampCTF 2025",
      "Forensic"
    ],
    "excerpt": "Forensic Challenge from SwampCTF 2025.",
    "cover": "",
    "url": "posts/swampctf-2025-forensic-planetary-storage.html"
  },
  {
    "title": "Preferential Treatment",
    "date": "Mar 30, 2025",
    "category": "CTF",
    "tags": [
      "SwampCTF 2025",
      "Forensic"
    ],
    "excerpt": "Forensic Challenge from SwampCTF 2025.",
    "cover": "",
    "url": "posts/swampctf-2025-forensic-preferential-treatment.html"
  },
  {
    "title": "Pretty Picture Double Exposure",
    "date": "Mar 30, 2025",
    "category": "CTF",
    "tags": [
      "SwampCTF 2025",
      "Misc"
    ],
    "excerpt": "Misc Challenge from SwampCTF 2025.",
    "cover": "",
    "url": "posts/swampctf-2025-misc-pretty-picture-double-exposure.html"
  },
  {
    "title": "Rock My Password",
    "date": "Mar 30, 2025",
    "category": "CTF",
    "tags": [
      "SwampCTF 2025",
      "Cryptography"
    ],
    "excerpt": "Cryptography Challenge from SwampCTF 2025.",
    "cover": "",
    "url": "posts/swampctf-2025-cryptography-rock-my-password.html"
  },
  {
    "title": "Serialise",
    "date": "Mar 30, 2025",
    "category": "CTF",
    "tags": [
      "SwampCTF 2025",
      "Web"
    ],
    "excerpt": "Web Challenge from SwampCTF 2025.",
    "cover": "",
    "url": "posts/swampctf-2025-web-serialise.html"
  },
  {
    "title": "Cryptography",
    "date": "Mar 24, 2025",
    "category": "CTF",
    "tags": [
      "UW Stout CTF",
      "Cryptography"
    ],
    "excerpt": "Cryptography Challenge from UW Stout CTF.",
    "cover": "",
    "url": "posts/uw-stout-ctf-cryptography-cryptography.html"
  },
  {
    "title": "Forensic",
    "date": "Mar 24, 2025",
    "category": "CTF",
    "tags": [
      "UW Stout CTF",
      "Forensic"
    ],
    "excerpt": "Forensic Challenge from UW Stout CTF.",
    "cover": "",
    "url": "posts/uw-stout-ctf-forensic-forensic.html"
  },
  {
    "title": "Misc",
    "date": "Mar 24, 2025",
    "category": "CTF",
    "tags": [
      "UW Stout CTF",
      "Misc"
    ],
    "excerpt": "Misc Challenge from UW Stout CTF.",
    "cover": "",
    "url": "posts/uw-stout-ctf-misc-misc.html"
  },
  {
    "title": "Scripting",
    "date": "Mar 24, 2025",
    "category": "CTF",
    "tags": [
      "UW Stout CTF",
      "Scripting"
    ],
    "excerpt": "Scripting Challenge from UW Stout CTF.",
    "cover": "",
    "url": "posts/uw-stout-ctf-scripting-scripting.html"
  },
  {
    "title": "Rearrange 1",
    "date": "Nov 16, 2024",
    "category": "CTF",
    "tags": [
      "UNIKL MIIT Internal CTF 2024",
      "Cryptography"
    ],
    "excerpt": "Cryptography Challenge from UNIKL MIIT Internal CTF 2024.",
    "cover": "",
    "url": "posts/unikl-miit-internal-ctf-2024-cryptography-rearrange-1.html"
  },
  {
    "title": "Rearranged 2",
    "date": "Nov 16, 2024",
    "category": "CTF",
    "tags": [
      "UNIKL MIIT Internal CTF 2024",
      "Cryptography"
    ],
    "excerpt": "Cryptography Challenge from UNIKL MIIT Internal CTF 2024.",
    "cover": "",
    "url": "posts/unikl-miit-internal-ctf-2024-cryptography-rearranged-2.html"
  },
  {
    "title": "Rearranged 3",
    "date": "Nov 16, 2024",
    "category": "CTF",
    "tags": [
      "UNIKL MIIT Internal CTF 2024",
      "Cryptography"
    ],
    "excerpt": "Cryptography Challenge from UNIKL MIIT Internal CTF 2024.",
    "cover": "",
    "url": "posts/unikl-miit-internal-ctf-2024-cryptography-rearranged-3.html"
  }
];
