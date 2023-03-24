class Hobbit {
  constructor(info) {
    this.name = info.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
  }

  celebrateBirthday() {
    this.age += 1;
    this.isAdult(); // update the adult property after each birthday
    this.isOld(); // update the old property after each birthday
  }

  isAdult() {
    if (this.age >= 33) {
      this.adult = true;
    }
    else {
      this.adult = false;
    }
  }

  isOld() {
    if (this.age >= 101) {
      this.old = true;
    }
    else {
      this.old = false;
    }
  }
}

module.exports = Hobbit;