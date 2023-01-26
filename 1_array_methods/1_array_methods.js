const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: 10001,
    },
    hobbies: ["reading", "running", "gaming"],
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        age: 25,
      },
      {
        id: 3,
        name: "Bob Johnson",
        age: 35,
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    address: {
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zip: 90001,
    },
    hobbies: ["hiking", "cooking", "traveling"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30,
      },
      {
        id: 4,
        name: "Samantha Brown",
        age: 28,
      },
    ],
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    address: {
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: 60001,
    },
    hobbies: ["fishing", "golfing", "watching TV"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30,
      },
      {
        id: 5,
        name: "Emily Davis",
        age: 32,
      },
    ],
  },
];

const isAdultFunc = (age) => age >= 18;

// FILTER

// Exercise 1: Use the filter method to get all the friends of John Doe

const filterFriends = data.filter((person) => {
  let flag = false;
  person.friends.forEach((friend) => {
    if (friend.name === "John Doe") {
      flag = true;
    }
  });

  return flag;
});
console.log(filterFriends[0].name, filterFriends[1].name);

// Exercise 2: Use the filter method to get all the people who live in New York

const newYorkPeople = data.filter((person) => {
  if (person.address.city === "New York") {
    return true;
  }
  return false;
});
console.log(newYorkPeople[0].name);

// Exercise 3: Use the filter method to get all the people who are older than 30

const oldPeople = data.filter((person) => {
  if (person.age > 30) {
    return true;
  }
  return false;
});
console.log(oldPeople[0].name + " - " + oldPeople[0].age);

// MAP

// Exercise 1: Use the map method to put the names of all the friends of John Doe in a single array (use also the flat method)
const friendsOfJohn = filterFriends.map((friend) => friend.name).flat(); //=

// Exercise 2: Use the map method to get the full addresses (street, city, state, and zip) of all the people in the data array
const getDetails = data
  .map((person) => {
    return [Object.values(person.address)];
  })
  .flat();
console.log(getDetails);

// Exercise 3: Use the map method to get the hobbies of all the people in the data array in a single array
const hobbiesArr = data
  .map((person) => {
    return [Object.values(person.hobbies)];
  })
  .flat()
  .flat();
console.log(hobbiesArr);

// FIND

// Exercise 1: Use the find method to find the first person who lives in Chicago
const firstChicagoPerson = data.find(
  (person) => person.address.city == "Chicago"
);
console.log(firstChicagoPerson);

// Exercise 2: Use the find method to find the first person who is older than 30
const firstOldPerson = data.find((person) => person.age > 30);
console.log(firstOldPerson);

// Exercise 3: Use the find method to find the first person who has "reading" as a hobby
const firstReaderPerson = data.find(
  (person) => person.hobbies.includes("reading") === true
);
console.log(firstReaderPerson);
// FOREACH

// Exercise 1: Use the forEach method to print out the names of all the people in the data array
data.forEach((person) => {
  console.log(person.name);
});
// Exercise 2: Use the forEach method to add a new property "isAdult" to each person object and set it to true if the person is over 18 and false if not
data.forEach((person) => {
  person.isAdult = isAdultFunc(person.age);
});

data.forEach((person) => {
  console.log(person.isAdult);
});

// Exercise 3: Use the forEach method to print out the names of all the friends of each person
peopleAndFriends = [];
let man = "";
data.forEach((person) => {
  if (man != "") {
    peopleAndFriends.push(man);
  }
  man = person.name + ": ";
  person.friends.forEach((friend) => {
    man += " " + friend.name;
  });
});
peopleAndFriends.push(man);
console.log(peopleAndFriends);

// SOME

// Exercise 1: Use the some method to check if any of the people in the data array have "cooking" as a hobby
const getCooking = (person) => person.hobbies.includes("cooking");
console.log(data.some(getCooking));

// Exercise 2: Use the some method to check if any of the people in the data array live in California
const getCali = (person) => person.address.city === "California";
console.log(data.some(getCali));

// Exercise 3: Use the some method to check if any of the friends of each person in the data array are older than 30
const getOldFriends = (person) => {
  let flag = false;
  person.friends.forEach((friend) => {
    if (friend.age > 30) {
      flag = true;
    }
  });
  return flag;
};
console.log(data.some(getOldFriends));

// EVERY

// Exercise 1: Use the every method to check if all the people in the data array have "reading" as a hobby
const getReading = (person) => person.hobbies.includes("reading");
console.log(data.every(getOldFriends));

// Exercise 2: Use the every method to check if all the people in the data array live in the same state
const isSameState = (person) => person.address.state === data[0].address.state;
console.log(data.every(isSameState));

// Exercise 3: Use the every method to check if all the friends of each person in the data array are older than 25
const getSemiOldFriends = (person) => {
  let flag = true;
  person.friends.forEach((friend) => {
    if (friend.age < 25) {
      flag = false;
    }
  });
  return flag;
};
console.log(data.every(getSemiOldFriends));

// REDUCE

// Exercise 1: Use the reduce method to get the total age of all the people in the data array
const sumOfAges = data.reduce((acc, curr) => acc + curr.age, 0);
console.log(sumOfAges);

// Exercise 2: Use the reduce method to get the number of people who live in each state
const peopleInEachState = data.reduce((acc, curr) => {
  if (!acc[curr.address.state]) {
    acc[curr.address.state] = 1;
  } else {
    acc[curr.address.state]++;
  }
  return acc;
}, {});
console.log(peopleInEachState);

// Exercise 3: Use the reduce method to get the average age of all the people in the data array
const avgOfAges = data
  .reduce((acc, curr) => (acc + curr.age) / data.length, 0)
  .toFixed(2);
console.log(avgOfAges);

// INCLUDES
const getPerson = (name) => data.filter(person=> person.name===name)[0];

// Exercise 1: Use the includes method to check if the hobbies of John Doe include "gaming"
const john =getPerson('John Doe');
;
if(john){
console.log(john.hobbies.includes('gaming'));
}
// Exercise 2: Use the includes method to check if the friends of Jane Smith include someone with the id of 4
const jane = getPerson('Jane Smith');
const getPersonById = (arr,id) => {
  let result = {};
  arr.forEach(friend => {
    if(friend.id === id){
      result = friend;
    }
  });
  return result;
}
if(jane){
  console.log(jane.friends.includes(getPersonById(jane.friends,4)));
  }


// Exercise 3: Use the includes method to check if the data array includes a person with the name "Emily Davis"
const getPersonByName = (arr,name) => {
  let result = {};
  arr.forEach(person => {
    if(person.name === name){
      result = person;
    }
  });
  return result;
}
console.log(data.includes(getPersonByName(data,'Emily Davis')));