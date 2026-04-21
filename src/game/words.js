export const wordChains = {
  easy: [
    { cat: "Drinks", items: ["Tea", "Chai", "Hot", "Mug", "Leaf"] },
    { cat: "Drinks", items: ["Coffee", "Cafe", "Bean", "Drink", "Mug"] },
    { cat: "Animals", items: ["Dog", "Puppy", "Pet", "Animal", "Bark"] },
    { cat: "Animals", items: ["Cat", "Kitten", "Pet", "Meow", "Fur"] },
    { cat: "Transport", items: ["Car", "Vehicle", "Engine", "Road", "Drive"] },
    { cat: "Transport", items: ["Truck", "Heavy", "Wheels", "Road", "Haul"] },
    { cat: "Nature", items: ["Tree", "Branch", "Leaf", "Green", "Wood"] },
    { cat: "Nature", items: ["Flower", "Petal", "Bloom", "Plant", "Scent"] },
    { cat: "Weather", items: ["Sun", "Star", "Light", "Bright", "Sky"] },
    { cat: "Weather", items: ["Moon", "Orbit", "Glow", "Night", "Space"] },
    { cat: "Food", items: ["Apple", "Fruit", "Crunch", "Red", "Sweet"] },
    { cat: "Food", items: ["Orange", "Fruit", "Juice", "Peel", "Segments"] },
    { cat: "Tech", items: ["Phone", "Screen", "Call", "Device", "App"] },
    { cat: "Tech", items: ["Tablet", "Pad", "Touch", "Digital", "Screen"] },
    { cat: "Time", items: ["Clock", "Time", "Hour", "Minute", "Tick"] },
    { cat: "Time", items: ["Watch", "Wrist", "Hand", "Time", "Steel"] },
  ],
  medium: [
    { cat: "Music", items: ["Guitar", "Strings", "Strum", "Sound", "Wood"] },
    { cat: "Music", items: ["Violin", "Bow", "Strings", "Music", "High"] },
    { cat: "Geography", items: ["Mountain", "Peak", "High", "Climb", "Rock"] },
    { cat: "Geography", items: ["Valley", "Deep", "Green", "Low", "Base"] },
    { cat: "Combat", items: ["Sword", "Blade", "Sharp", "Duel", "Knight"] },
    { cat: "Combat", items: ["Shield", "Armor", "Plate", "Block", "Safe"] },
    { cat: "Space", items: ["Planet", "Globe", "Orbit", "Gravity", "Sphere"] },
    { cat: "Space", items: ["Star", "Galaxy", "Light", "Far", "Burning"] },
    { cat: "Weather", items: ["Rain", "Wet", "Drop", "Cloud", "Storm"] },
    { cat: "Weather", items: ["Snow", "Ice", "Cold", "White", "Flake"] },
    { cat: "Landscape", items: ["Forest", "Woods", "Dense", "Nature", "Wild"] },
    { cat: "Landscape", items: ["Desert", "Sand", "Dry", "Dunes", "Hot"] },
    { cat: "Body", items: ["Brain", "Smart", "Mind", "Neural", "Thought"] },
    { cat: "Body", items: ["Heart", "Blood", "Pulse", "Beat", "Core"] },
    { cat: "Fantasy", items: ["Wizard", "Magic", "Staff", "Spell", "Robe"] },
    { cat: "Fantasy", items: ["Knight", "Armor", "Quest", "Honor", "Title"] },
  ],
  hard: [
    { cat: "Crime", items: ["Pirate", "Cove", "Ship", "Flag", "Map"] },
    { cat: "Crime", items: ["Viking", "North", "Ship", "Raider", "Shield"] },
    { cat: "DeepSea", items: ["Whale", "Ocean", "Mammal", "Tail", "Big"] },
    { cat: "DeepSea", items: ["Submarine", "Depth", "Sonar", "Ocean", "Hull"] },
    { cat: "Insects", items: ["Spider", "Web", "Legs", "eight", "Venom"] },
    { cat: "Insects", items: ["Butterfly", "Wings", "Color", "Silk", "Soft"] },
    { cat: "Science", items: ["Telescope", "Stars", "Lens", "Galaxy", "Eye"] },
    { cat: "Science", items: ["Microscope", "Lens", "Cell", "Science", "Lab"] },
    { cat: "Buildings", items: ["Castle", "Stone", "Moat", "Wall", "Keep"] },
    { cat: "Buildings", items: ["Lighthouse", "Beam", "Tower", "Ocean", "Safety"] },
    { cat: "Art", items: ["Statue", "Stone", "Shape", "Artist", "Stand"] },
    { cat: "Art", items: ["Painting", "Canvas", "Color", "Brush", "Frame"] },
  ]
};

export const getRandomPair = (difficulty = "medium") => {
  const chains = wordChains[difficulty];
  const allCats = [...new Set(chains.map(c => c.cat))];
  const randomCat = allCats[Math.floor(Math.random() * allCats.length)];
  
  const options = chains.filter(c => c.cat === randomCat);
  
  // Pick two random indices within the category
  let idxA = Math.floor(Math.random() * options.length);
  let idxB = Math.floor(Math.random() * options.length);
  
  // If we have at least 2 options, make sure they are different
  if (options.length > 1) {
    while (idxB === idxA) {
        idxB = Math.floor(Math.random() * options.length);
    }
  }

  // Get original indexes in the main chains array
  const mainIdxA = chains.indexOf(options[idxA]);
  const mainIdxB = chains.indexOf(options[idxB]);

  return [mainIdxA, mainIdxB];
};
