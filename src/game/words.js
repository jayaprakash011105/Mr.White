/**
 * Word Chains for Mr. White
 * Each difficulty has categories with multiple items.
 * A game picks 2 items from the SAME category.
 * One becomes the Civilian word (Main Chain), one becomes the Mr. White word (Parasite Chain).
 */

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
    { cat: "Clothing", items: ["Shirt", "Cotton", "Button", "Wear", "Sleeve"] },
    { cat: "Clothing", items: ["Pants", "Denim", "Zipper", "Legs", "Pockets"] },
    { cat: "Furniture", items: ["Chair", "Seat", "Wood", "Back", "Sit"] },
    { cat: "Furniture", items: ["Table", "Flat", "Legs", "Eat", "Desk"] },
    { cat: "School", items: ["Pen", "Ink", "Write", "Paper", "Point"] },
    { cat: "School", items: ["Pencil", "Graphite", "Eraser", "Sketch", "Wood"] },
    { cat: "Sports", items: ["Soccer", "Ball", "Goal", "Kick", "Pitch"] },
    { cat: "Sports", items: ["Basketball", "Hoop", "Bounce", "Dunk", "Court"] },
    { cat: "Body", items: ["Hand", "Finger", "Palm", "Grip", "Touch"] },
    { cat: "Body", items: ["Foot", "Toe", "Sole", "Walk", "Step"] },
    { cat: "Colors", items: ["Red", "Blood", "Fire", "Hot", "Bright"] },
    { cat: "Colors", items: ["Blue", "Sky", "Ocean", "Cool", "Deep"] },
    { cat: "Shapes", items: ["Circle", "Round", "Ring", "Sphere", "Loop"] },
    { cat: "Shapes", items: ["Square", "Box", "Corner", "Block", "Four"] },
    { cat: "Kitchen", items: ["Fork", "Prong", "Eat", "Metal", "Tool"] },
    { cat: "Kitchen", items: ["Spoon", "Scoop", "Soup", "Metal", "Stir"] },
    { cat: "House", items: ["Door", "Knob", "Enter", "Wood", "Open"] },
    { cat: "House", items: ["Window", "Glass", "View", "Frame", "Light"] },
    { cat: "Pets", items: ["Rabbit", "Hoppy", "Ears", "Carrot", "Fur"] },
    { cat: "Pets", items: ["Hamster", "Wheel", "Cage", "Small", "Cheek"] },
    { cat: "Birds", items: ["Pigeon", "Gray", "Park", "Wing", "Coo"] },
    { cat: "Birds", items: ["Eagle", "Height", "Nest", "Claw", "Soar"] },
    { cat: "Sky", items: ["Cloud", "White", "Rain", "Float", "Soft"] },
    { cat: "Sky", items: ["Wind", "Blow", "Air", "Gust", "Cool"] },
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
    { cat: "Instruments", items: ["Piano", "Keys", "Black", "White", "Grand"] },
    { cat: "Instruments", items: ["Drums", "Beat", "Stick", "Rhythm", "Loud"] },
    { cat: "ScienceLab", items: ["Beaker", "Glass", "Mix", "Liquid", "Lab"] },
    { cat: "ScienceLab", items: ["Tube", "Test", "Sample", "Holder", "Rack"] },
    { cat: "Medical", items: ["Doctor", "Hospital", "Cure", "Stethoscope", "Med"] },
    { cat: "Medical", items: ["Nurse", "Clinic", "Care", "Needle", "Health"] },
    { cat: "Career", items: ["Chef", "Kitchen", "Cook", "Hat", "Recipe"] },
    { cat: "Career", items: ["Baker", "Oven", "Dough", "Bread", "Flour"] },
    { cat: "Cities", items: ["Paris", "Tower", "France", "Love", "City"] },
    { cat: "Cities", items: ["London", "Bridge", "UK", "Fog", "Thames"] },
    { cat: "Mythical", items: ["Dragon", "Fire", "Scales", "Wings", "Gold"] },
    { cat: "Mythical", items: ["Phoenix", "Ash", "Rebirth", "Bird", "Flame"] },
    { cat: "Events", items: ["Hurricane", "Wind", "Storm", "Eye", "Ocean"] },
    { cat: "Events", items: ["Tornado", "Twister", "Wind", "Funnel", "Land"] },
    { cat: "Gadgets", items: ["Camera", "Lens", "Photo", "Flash", "Snap"] },
    { cat: "Gadgets", items: ["Laptop", "Keypad", "Portable", "Work", "CPU"] },
    { cat: "Vessels", items: ["Boat", "Sail", "Water", "Hull", "Deck"] },
    { cat: "Vessels", items: ["Submarine", "Depth", "Sonar", "Torpedo", "Steel"] },
    { cat: "Buildings", items: ["Skyscraper", "Tall", "Glass", "Steel", "Office"] },
    { cat: "Buildings", items: ["Castle", "Stone", "Medieval", "Tower", "Walls"] },
    { cat: "Cooking", items: ["Boil", "Water", "Hot", "Steam", "Pot"] },
    { cat: "Cooking", items: ["Fry", "Oil", "Pan", "Sizzle", "Crispy"] },
    { cat: "Camping", items: ["Tent", "Canvas", "Sleep", "Ground", "Pegs"] },
    { cat: "Camping", items: ["Fire", "Log", "Flame", "Heat", "Smoke"] },
  ],
  hard: [
    { cat: "Crime", items: ["Pirate", "Cove", "Ship", "Flag", "Map"] },
    { cat: "Crime", items: ["Viking", "North", "Ship", "Raider", "Shield"] },
    { cat: "DeepSea", items: ["Whale", "Ocean", "Mammal", "Tail", "Big"] },
    { cat: "DeepSea", items: ["Abyss", "Dark", "Pressure", "Deep", "Depth"] },
    { cat: "Insects", items: ["Spider", "Web", "Legs", "eight", "Venom"] },
    { cat: "Insects", items: ["Butterfly", "Wings", "Color", "Silk", "Soft"] },
    { cat: "Science", items: ["Telescope", "Stars", "Lens", "Galaxy", "Eye"] },
    { cat: "Science", items: ["Microscope", "Lens", "Cell", "Science", "Lab"] },
    { cat: "Art", items: ["Statue", "Stone", "Shape", "Artist", "Stand"] },
    { cat: "Art", items: ["Painting", "Canvas", "Color", "Brush", "Frame"] },
    { cat: "Quantum", items: ["Electron", "Atom", "Charge", "Physics", "Small"] },
    { cat: "Quantum", items: ["Photon", "Light", "Particle", "Wave", "Energy"] },
    { cat: "Philosophy", items: ["Stoicism", "Logic", "Virtue", "Nature", "Mind"] },
    { cat: "Philosophy", items: ["Nihilism", "Void", "Nothing", "Meaning", "Deep"] },
    { cat: "Cryptography", items: ["RSA", "Key", "Public", "Math", "Cipher"] },
    { cat: "Cryptography", items: ["AES", "Block", "Encrypt", "Security", "Standard"] },
    { cat: "Anatomy", items: ["Neuron", "Brain", "Signal", "Neural", "Pulse"] },
    { cat: "Anatomy", items: ["Synapse", "Gap", "Join", "Communication", "Link"] },
    { cat: "Economics", items: ["Inflation", "Price", "Money", "Rise", "Market"] },
    { cat: "Economics", items: ["Deflation", "Fall", "Value", "Money", "Crisis"] },
    { cat: "Geology", items: ["Magma", "Lava", "Volcano", "Melt", "Hot"] },
    { cat: "Geology", items: ["Tectonic", "Plate", "Earthquake", "Shift", "Rind"] },
    { cat: "Genetics", items: ["Genome", "DNA", "Map", "Biology", "Data"] },
    { cat: "Genetics", items: ["Chromosome", "Gene", "Heredity", "Structure", "X"] },
    { cat: "Linguistics", items: ["Syntax", "Grammar", "Structure", "Language", "Rules"] },
    { cat: "Linguistics", items: ["Semantics", "Meaning", "Logic", "Word", "Context"] },
    { cat: "Psychology", items: ["Ego", "Self", "Mind", "Freud", "Aware"] },
    { cat: "Psychology", items: ["Id", "Instinct", "Primal", "Unconscious", "Desire"] },
    { cat: "Warfare", items: ["Siege", "Wall", "Attack", "Wait", "Blockade"] },
    { cat: "Warfare", items: ["Ambush", "Trap", "Surprise", "Hidden", "Wait"] },
    { cat: "History", items: ["Maya", "Pyramid", "Temple", "Jungle", "Ancient"] },
    { cat: "History", items: ["Aztec", "Empire", "Eagle", "Lake", "Mexico"] },
    { cat: "Space", items: ["Nebula", "Cloud", "Star", "Gas", "Space"] },
    { cat: "Space", items: ["Quasar", "Bright", "Blackhole", "Radio", "Core"] },
    { cat: "Engineering", items: ["Bridge", "Span", "Support", "Steel", "Road"] },
    { cat: "Engineering", items: ["Dam", "Water", "Power", "Wall", "Concrete"] },
    { cat: "Paleontology", items: ["Fossil", "Bone", "Stone", "Dinosaur", "Ancient"] },
    { cat: "Paleontology", items: ["Skeleton", "Bone", "Structure", "Body", "Dry"] },
    { cat: "Mythology", items: ["Zeus", "Greek", "God", "Lightning", "Sky"] },
    { cat: "Mythology", items: ["Odin", "Norse", "God", "Raven", "Eye"] },
  ]
};

const HISTORY_KEY = "mrwhite_word_history";
const MAX_HISTORY = 20;

const getHistory = () => {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    return {};
  }
};

const saveHistory = (history) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};

export const getRandomPair = (difficulty = "medium") => {
  const chains = wordChains[difficulty];
  const allCats = [...new Set(chains.map(c => c.cat))];
  
  // Load history for this difficulty
  const histories = getHistory();
  const difficultyHistory = histories[difficulty] || [];

  // Filter out recently used categories
  let availableCats = allCats.filter(cat => !difficultyHistory.includes(cat));

  // If no available categories left (all used in last 20), reset or pick the oldest
  if (availableCats.length === 0) {
    availableCats = allCats;
    difficultyHistory.length = 0; // Clear it out to start fresh
  }

  const randomCat = availableCats[Math.floor(Math.random() * availableCats.length)];
  
  // Update history
  const newDifficultyHistory = [...difficultyHistory, randomCat];
  if (newDifficultyHistory.length > MAX_HISTORY) {
    newDifficultyHistory.shift(); // Remove oldest
  }
  histories[difficulty] = newDifficultyHistory;
  saveHistory(histories);

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
