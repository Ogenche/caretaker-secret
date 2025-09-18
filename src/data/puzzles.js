// src/data/puzzles.js

export const cipherPuzzleData = {
  id: "cipher1",
  title: "Journal Cipher",
  instructions:
    "As found in the journal, use the repeating key to decode the message. The key is a significant date from the resort's history.",
  // This is the corrected string that will decode properly
  encodedString: "OJIIEU TJHRLU",
  key: "71550",
  solution: "HIDDEN SECRET",
};

// --- The rest of the file (winePuzzleData, documentPuzzleData) remains the same ---
export const winePuzzleData = {
  id: "wine1",
  title: "Wine Cellar Chronology",
  instructions:
    "The resort's history is in its wine. Arrange the key historical vintages in the correct chronological order to reveal what's hidden.",
  bottles: [
    { year: 1980, event: "Blackwood Estate" },
    { year: 1950, event: "Chateau Mont Echo" },
    { year: 1995, event: "Anniversary Cuvee" },
    { year: 1970, event: "Project Echo Red" },
    { year: 1965, event: "Evergreen Reserve" },
    { year: 2005, event: "Modern Decadence" },
    { year: 1984, event: "Caretaker's Selection" },
  ],
  correctSequence: [1950, 1965, 1970, 1980, 1984],
  successMessage:
    "As the last bottle settles, you hear a faint *click*. A section of the wine rack recedes, revealing a hidden compartment behind it.",
};

export const documentPuzzleData = {
  id: "doc1",
  title: "A Torn Letter",
  instructions:
    "This letter was found shredded in a waste bin. Piece it back together to understand its contents.",
  // This is the new solution message you will type
  solution: "PROJECT ECHO MUST BE CONTAINED",
  successMessage:
    'The letter, now assembled, is a damning piece of evidence written by Victoria\'s grandfather, detailing his concerns over the "moral and ethical lines" being crossed by Project Echo.',
  pieces: [
    {
      id: 1,
      content: "PRO",
      initialTop: 50,
      initialLeft: 50,
      initialRotation: 0,
      finalTop: 0,
      finalLeft: 0,
    },
    {
      id: 2,
      content: "JECT",
      initialTop: 180,
      initialLeft: 100,
      initialRotation: 0,
      finalTop: 0,
      finalLeft: 150,
    },
    {
      id: 3,
      content: "ECHO",
      initialTop: 30,
      initialLeft: 280,
      initialRotation: 0,
      finalTop: 0,
      finalLeft: 300,
    },
    {
      id: 4,
      content: "MUST BE",
      initialTop: 250,
      initialLeft: 20,
      initialRotation: 0,
      finalTop: 100,
      finalLeft: 0,
    },
    {
      id: 5,
      content: "CONTA",
      initialTop: 120,
      initialLeft: 350,
      initialRotation: 0,
      finalTop: 100,
      finalLeft: 150,
    },
    {
      id: 6,
      content: "INED",
      initialTop: 200,
      initialLeft: 400,
      initialRotation: 0,
      finalTop: 100,
      finalLeft: 300,
    },
  ],
  gridSize: { rows: 2, cols: 3, pieceWidth: 150, pieceHeight: 100 },
};
