//Simple Factory Function to create a new user
class userFactory {
  static createUser(userName, password, email, key) {
    switch (key) {
      case 1:
        return new User1(userName, password, email);
      case 2:
        return new User2(userName, password, email);
      case 3:
        return new User3(userName, password, email);
      case 4:
        return new User4(userName, password, email);
      case 5:
        return new User5(userName, password, email);
    }
  }
}

// Single Responsibility Principle

class Users {
  constructor(userName, password, email, key) {
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.key = key;
  }

  updateKey(key) {
    this.key = key;
  }
}
class User1 extends Users {
  constructor(userName, password, email) {
    super(userName, password, email, 1);
  }

  updateKey(key) {
    this.key = key;
  }
}
class User2 extends Users {
  constructor(userName, password, email) {
    super(userName, password, email, 2);
  }

  updateKey(key) {
    this.key = key;
  }
}
class User3 extends Users {
  constructor(userName, password, email) {
    super(userName, password, email, 3);
  }

  updateKey(key) {
    this.key = key;
  }
}
class User4 extends Users {
  constructor(userName, password, email) {
    super(userName, password, email, 4);
  }

  updateKey(key) {
    this.key = key;
  }
}

class User5 extends Users {
  constructor(userName, password, email) {
    super(userName, password, email, 5);
  }

  updateKey(key) {
    this.key = key;
  }
}

module.exports = userFactory;
