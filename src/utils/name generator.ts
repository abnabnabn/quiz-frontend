const descriptiveWords = [
  "Wacky", "Grumpy", "Snappy", "Fluffy", "Zany", "Funky", "Skanky", "Spicy", "Stinky", "Cheeky", 
  "Bouncy", "Silly", "Jumpy", "Smelly", "Fizzy", "Bizarre", "Quirky", "Goofy", "Loony", "Puffy",
  "Snoozy", "Shiny", "Funky", "Crispy", "Oddball", "Wobbly", "Mighty", "Wild", "Jiggly", "Grumpy",
  "Muggy", "Zesty", "Rowdy", "Bumpy", "Lumpy", "Slappy", "Chilly", "Fluffy", "Wobbly", "Jittery",
  "Spunky", "Noisy", "Zippy", "Twirly", "Bouncy", "Sticky", "Nifty", "Wacky", "Zany", "Mellow"
];

const regularNames = [
  "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy",
  "Kevin", "Liam", "Mia", "Nina", "Oscar", "Paul", "Quinn", "Rita", "Sam", "Tom",
  "Uma", "Vera", "Wendy", "Xander", "Yara", "Zoe", "Adam", "Ben", "Clara", "Dylan",
  "Ella", "Finn", "Gabe", "Hannah", "Isla", "Jack", "Kara", "Leo", "Maya", "Nate",
  "Olivia", "Peter", "Qiana", "Ryan", "Sophie", "Theo", "Ursula", "Victor", "Will",
  "Xander", "Yasmine", "Zack"
];

// Function to generate a random name by combining a descriptive word and a regular name
export const generateRandomName = (): string => {
  const randomDescriptiveWord = descriptiveWords[Math.floor(Math.random() * descriptiveWords.length)];
  const randomRegularName = regularNames[Math.floor(Math.random() * regularNames.length)];
  return `${randomDescriptiveWord}${randomRegularName}`;
};
