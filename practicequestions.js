////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function NumbasSum(d, e) {

  return d + e + x;
}
console.log(NumbasSum);

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const NumbasSum2 = (d, e) => d + e + x;

console.log(NumbasSum2);

// 3. Write a function that returns another function. (use arrow functions please)

const returnFunc = (item) => {

  return (number) => {

    return number * item;
  };
};

const FunctioninAFunc = returnFunc(4);

console.log(FunctioninAFunc(5));

//OR (ALternate Solution for 3)

//const callbackFunc = (callback, numb1 = 1, numb2 = 2, multiplier) =>
 //callback(numb1, numb2) * multiplier;


//console.log(callbackFunc(otherFunction, 4, 6, 2));


// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.


const getFunction = () => {

  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))

//Answer for Number 4
// y=5 is analyzed as a local variable before insideFunc is retuned, when the insideFunc 
// is executed the program already knows y's value is 5,  it assignns that value to the new return 
// which is  y + a



// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){

    throw new Error("Error was thrown");
  }
  
  return 'success'
}
//Answer to 5
const callbackFunc2 = (callback) => {

  try {

    return callback();

  } catch (event) {

    console.log("error")

  }
}

console.log(callbackFunc2(couldThrowError));


////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

//Answer

let objectMaker = (array) => {

  let newerArray = array.map((element) => {

    return {

      id: element.id,
      favoriteFoods: element.favorite.food.length
    };

  } )

  return newerArray
}

console.log(objectMaker(userData));

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

let foodies = (array) => {

  return array.reduce((collection, element) => {

     if (element.favorites.food.includes("tacos")){

      collection.push(element.name);
     }
     return collection;

  }, [])
};

console.log(foodies(userData));

// 7. Show an an example of a switch statement being used
/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/
switch (userData[2].id) {

  case "333":
    
    console.log('id is a match, permission to access authorized');

    break;

  default:

    console.log('id not found, permission to access denied');

    break
}

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
  

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

let comboObjects = (obj1, obj2) => {
  return {
    obj1, obj2
  }
};
const User2 = comboObjects(userPersonalData, userGameData);
console.log(User2);



// 9. Make a copy of your new user object but override the birthday to december 31st
 
const user2Bday = {
  User2,
  birthday: "dec 31th"
};
console.log(user2Bday);

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable


const newerArray2 = [user2Bday.accomplishments];
console.log(newerArray2);



//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };

 const { name: { favoriteThings: { movies } } } = user;

 //THIS IS THE ANSWER!!!
 //Every time I inserted food a problem below this would error out and I couldn't figure it out 
 //const { name: { favoriteThings: { food } } } = user;


 
// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

var { name: { favoriteThings: { food: [firstFood, secondFood] } } } = user;

//OR
// var { name: { favoriteThings: { food: [0, 1] } } } = user;  ??? 



// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

const [name, age, ...food] = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

//OR
// const [name, age, ...food] = data;


// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};

var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});

