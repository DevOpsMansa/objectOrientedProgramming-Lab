/* === Part 1: Humble Beginnings === */

const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact"]
}
//create a loop that logs each item in Robin’s inventory.
for (const item of adventurer.inventory) {
    console.log(item);
  }

/* === Next, give Robin’s feline friend a friend of his own:
Add a “companion” sub-object to “Leo” with the following properties:
The companion’s name is “Frank.”
The companion’s type is “Flea.”
The companion has its own belongings, which includes a small hat and sunglasses. === */

const adventurerWithCompanion = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      belongings: ["small hat", "sunglasses"]
    }
  };
  
  // Adding a companion to "Leo"
  adventurerWithCompanion.companion.companionOfLeo = {
    name: "Frank",
    type: "Flea",
    belongings: ["small hat", "sunglasses"]
  };
  
  console.log(adventurerWithCompanion);

//Give Robin the following method:
const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact"],
companion: ...
roll (mod = 0) {
const result = Math.floor(Math.random() * 20) + 1 + mod;
console.log(`${this.name} rolled a ${result}.`)
}
} 
// Test this method by calling adventurer.roll() a few times.
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      belongings: ["small hat", "sunglasses"]
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  };
  
  // Test the roll method
  adventurer.roll(); // Roll without modifier
  adventurer.roll(2); // Roll with a modifier of 2
  adventurer.roll(-1); // Roll with a modifier of -1
  
  /* === Part 2: Class Fantasy === */
  