class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.count = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    this.count++;
    if (this.count >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;