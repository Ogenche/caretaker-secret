// src/data/suspects.js

// We'll store all suspect data here in an array of objects.
// This makes it easy to add/remove suspects or change details
// without touching the component code.

export const suspectsData = [
  {
    name: "Victoria Blackwood",
    age: 35,
    position: "Resort Owner",
    notes:
      "Purchased the resort in 2024. Seen arguing with the victim on the day of the murder. Claims to have been in her office during the time of death.",
    image: "/suspects/victoria.png", // We'll add images later
  },
  {
    name: "Dr. Alan Turing",
    age: 55,
    position: "Tech CEO, AI Pioneer",
    notes:
      "A reclusive and frequent guest. Had a scheduled meeting with the victim that was cancelled. Was seen near the wine cellar earlier in the day.",
    image: "/suspects/turing.png",
  },
  {
    name: "Sam Thornhill",
    age: 40,
    position: "Victim's Estranged Child",
    notes:
      "A struggling artist with financial difficulties. Arrived unannounced the day before the murder after 10 years of estrangement. Has no alibi.",
    image: "/suspects/sam.png",
  },
  {
    name: "Chef Olivia Reeves",
    age: 38,
    position: "Celebrity Chef",
    notes:
      "Known for a volatile temper and was recently exposed for having significant gambling debts. Reported her professional knife set missing.",
    image: "/suspects/olivia.png",
  },
  {
    name: "Jack Harper",
    age: 42,
    position: "Waiter (Undercover Journalist)",
    notes:
      "Confirmed to be using false credentials to investigate tech scandals. Was seen having multiple conversations with the victim and found the body.",
    image: "/suspects/jack.png",
  },
  {
    name: "Marcus Stone",
    age: 50,
    position: "Head of Security",
    notes:
      "Ex-military, hired by Victoria three months ago. Key security footage from the murder night is missing. He was unaccounted for during the crucial timeframe.",
    image: "/suspects/marcus.png",
  },
];
