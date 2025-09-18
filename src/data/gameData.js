// src/data/gameData.js

export const gameData = {
  clues: {
    initial_report: {
      title: "Police Report",
      content: "Victim: Edgar Thornhill. Cause of Death: Blunt force trauma.",
      type: "official",
    },
    victim_profile: {
      title: "Victim Profile",
      content:
        "Known for meticulous record-keeping and collecting antique watches.",
      type: "official",
    },
    decoded_message: {
      title: "Decoded Message",
      content: "The journal cipher revealed the words: HIDDEN SECRET.",
      type: "discovery",
    },
    hidden_compartment_unlocked: {
      title: "Wine Cellar Secret",
      content:
        "Solving the wine puzzle opened a hidden compartment in the cellar.",
      type: "discovery",
    },
    torn_letter_content: {
      title: "The Torn Letter",
      content:
        "A letter from Victoria's grandfather mentions his concerns about 'Project Echo'.",
      type: "discovery",
    },
    project_echo_files: {
      title: "Project Echo Files",
      content:
        "Classified files detail illegal Cold War-era government experiments at the resort.",
      type: "secret",
    },
    victoria_blackmail: {
      title: "Blackmail Evidence",
      content:
        "Edgar was blackmailing Victoria with the Project Echo files to protect the resort's history.",
      type: "secret",
    },
  },

  accusationOptions: {
    motives: [
      {
        id: "m1",
        text: "To protect the Blackwood family's reputation from the Project Echo scandal.",
      },
      {
        id: "m2",
        text: "To steal valuable antique watches from Edgar's collection.",
      },
      {
        id: "m3",
        text: "Out of anger during a heated argument about resort renovations.",
      },
      {
        id: "m4",
        text: "To silence Edgar, who was an undercover government agent.",
      },
    ],
    evidence: [
      {
        id: "e1",
        text: "The torn piece of her high-tech fabric found at the scene.",
      },
      {
        id: "e2",
        text: "Security footage showing her entering the cellar with a weapon.",
      },
      { id: "e3", text: "A signed confession found in her office." },
      {
        id: "e4",
        text: "Her fingerprints on the missing knife set from the kitchen.",
      },
    ],
  },

  solution: {
    murderer: "Victoria Blackwood",
    motive: "m1",
    evidence: "e1",
  },
};
