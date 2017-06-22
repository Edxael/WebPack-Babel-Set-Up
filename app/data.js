  // data.js

  // Class declaration
class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello I'm a ${this.name} from Australia`);
  }
}
    // Exporting by default
export default Animal;

// --------------------------------------------------------------
