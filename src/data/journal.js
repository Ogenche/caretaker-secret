// src/data/journal.js

export const journalData = [
  {
    id: "entry1",
    date: "December 28, 2024",
    content: [
      "Another year almost gone. The lodge feels different under Victoria's ownership.",
      "Found some interesting documents while cleaning out the old filing cabinet in the east wing today.",
      "Dr. Turing especially keeps asking about the old research facilities. Had to remind him those areas are strictly off-limits.",
    ],
    isDamaged: false,
  },
  {
    id: "entry2",
    date: "January 5, 2025",
    content: [
      "V.B. asked about access to the sealed records again. Told her the same thing - some things are better left in the past. She didn't like that answer.",
      'Must remember: 7-15-50 = HVJNBS XFDSFY [Encoded: "HIDDEN SECRET"]',
    ],
    isDamaged: false,
  },
  {
    id: "entry3",
    date: "January 20, 2025",
    content: [
      "Found G.B.'s old research files. Now I understand why Victoria's so interested.",
      "If these records ever got out... God help us all. Moving everything to the hidden room tonight.",
      "The combination is Sarah's birthday - she always said the best hiding place is the most obvious.",
    ],
    isDamaged: true, // For the tea/coffee stain effect
  },
  {
    id: "entry4",
    date: "January 24, 2025",
    content: [
      "Victoria knows. She found the ph[stain]ographs. Meeting her tonight to discuss terms.",
      "Moved the most damaging files to- [entry ends abruptly]",
    ],
    isDamaged: true, // For the blood stain effect
    isBloodStained: true,
  },
];
