//Simple Factory Function to create a new user
/*
  In this part, the simple factory design pattern is used, because there
  is a class that creates different types of users with a super class in common.
*/
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
/*
  In this part, the single responsibility principle is used, because
  the class User1, User2, User3, User4, and User5 only have one reason to change,
  updating the key.
*/

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
