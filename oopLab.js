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

 class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  } 
  //Add the roll method to the Character class - Roll method simulate a dice roll
roll() {
    // Assuming a six-sided dice, change the range if needed
    const diceResult = Math.floor(Math.random() * 6) + 1;
    console.log(`${this.name} rolled a ${diceResult}!`);
    return diceResult;
  }
// Example usage:
const player = new Character("Player1");
const diceResult = player.roll();

// Now, we can re-create Robin using the Character class!
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
// we need to extend the Character class for added specificity

class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  
    roll() {
      // Simulate rolling a six-sided dice
      return Math.floor(Math.random() * 6) + 1;
    }
  }
  
  class Hero extends Character {
    constructor(name, role) {
      super(name);
      this.role = role;
      this.companion = null; // A hero may have a companion
    }
  
    // Method specific to the Hero class
    useSpecialAbility() {
      console.log(`${this.name} uses a special ability as a ${this.role}!`);
      // Add logic for the special ability
    }
  }
  
  // Example usage:
  const robin = new Hero("Robin", "Archer");
  robin.inventory = ["sword", "potion", "artifact"];
  
  robin.companion = new Hero("Leo", "Cat");
  robin.companion.companion = new Hero("Frank", "Flea");
  robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // Accessing properties and methods
  console.log(robin.name);  // "Robin"
  console.log(robin.role);  // "Archer"
  robin.useSpecialAbility(); // "Robin uses a special ability as an Archer!"
  
  // Accessing properties and methods of the companion
  console.log(robin.companion.name);  // "Leo"
  console.log(robin.companion.role);  // "Cat"
  console.log(robin.companion.companion.name);  // "Frank"
  console.log(robin.companion.companion.role);  // "Flea"
  
/* === Part 3: Class Features === */
