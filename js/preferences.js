// Open Closed Pattern
/*
In this part, the Open Closed Pattern is used because it
has an interface that allows the class to be extended but not modified.
*/

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
