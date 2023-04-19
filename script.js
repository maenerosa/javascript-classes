class Animal {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hi, my name is ${this.name}. I'm a ${this.species} and I'm ${this.age} years old`
    );
  }

  birthday() {
    this.age++;
  }
}

const animal1 = new Animal("Fluffy", "cat", 2);
const animal2 = new Animal("Buddy", "dog", 4);
const animal3 = new Animal("Chirpy", "bird", 1);

animal1.introduce();
animal2.introduce();
animal3.introduce();

animal2.birthday();
console.log(`It's ${animal2.name}'s birthday!`);
animal2.introduce();
