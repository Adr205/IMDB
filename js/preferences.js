class Preferences {
  constructor() {
    this.comedy = 1;
    this.drama = 2;
    this.scifi = 3;
    this.romantic = 4;
    this.adventure = 5;
    this.size = 5;
  }

  size() {
    return this.size;
  }
}

module.exports = Preferences;
