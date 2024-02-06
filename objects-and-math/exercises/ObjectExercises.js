
let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: 'Brad',
   species: 'Chimpanzee',
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {return Math.floor(Math.random()*11)}
};

let puppyPower = {
   name: 'Leroy',
   species: 'Beagle',
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {return Math.floor(Math.random()*11)}
}

let animalFive = {
   name: 'Almina',
   species: 'Tardigrade',
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, salamander, superChimpTwo, puppyPower, animalFive]

// let crew = [superChimpOne, superChimpTwo, salamander, puppyPower, animalFive];

function crewReport(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
};
console.log(crewReport(animalFive));


function fitnessTest(crew){
   let results = []

   for (const crewMember of crew) {
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += crew[i].move();
       turns++;
       }
       results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
console.log(fitnessTest(puppyPower));

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!