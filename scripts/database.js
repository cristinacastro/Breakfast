'use strict'

class Database {
  getAllUsers = () => {
    const usersStr = localStorage.getItem("users");
    const usersArr = JSON.parse(usersStr);

    if (usersArr === null) {
      return []; 
    } else {
      return usersArr;
    }

  }

  saveNewUser = (newUser) => {
    const usersArr = this.getAllUsers();
    usersArr.push(newUser);
    const usersStr = JSON.stringify(usersArr);
    localStorage.setItem("users", usersStr);
  }
}

const db = new Database();
console.log('db', db)