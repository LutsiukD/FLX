let data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

//1. Write function, which returns types of passed parameters (one and more parameters).
function findTypes() {
	let typesArray = [];
	for(let i = 0; i < arguments.length; i++) {
		typesArray.push(typeof(arguments[i]));
	}
	return typesArray;
}
	
console.log(findTypes(null, 5, 'hello')); //returns ["object", "number", "string"]

// 2. Write function, which iterates over array and executes function on each element.
const executeforEach = (arr, func) => {
	for(let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

executeforEach([1,2,3], function(el) {
 console.log(el) 
}); // 1 2 3

// 3. Write function, which returns transformed array based on function,
// which passed as a parameter. Reuse function from task 2.
const mapArray = (arr, func) => {
	let transformArr = [];
	executeforEach(arr, element => transformArr.push(func(element)));
	return transformArr;	
}

console.log(mapArray([2, 5, 8], function(el) {
 return el + 3 
})); // returns [5, 8, 11]

// 4. Write function, which returns filtered array based on function,
// which passed as a parameter. Reuse function from task 2.
const filterArray = (arr, func) => {
	let filteredArr = [];
	executeforEach(arr, element => {
		if(func(element)){
			filteredArr.push(element);
		}
	})
	return filteredArr;
}

console.log(filterArray([2, 5, 8], function(el) {
 return el > 3 
})); // returns [5, 8]

// 5. Write function, which returns amount of people, who are over 18. Reuse function from task 4.
const getAmountOfAdultPeople = data => {
	let amountOfAdultPeople = 0;
	filterArray(data, element => {
		if(element["age"] >= 18) {
			amountOfAdultPeople++;
		}
	})
	return amountOfAdultPeople; 
} 

console.log(getAmountOfAdultPeople(data)); //returns 3

// 6. Write function, which returns array of names of people, who are over 18 , their favorite 
//fruit is banana and their eye color is green. Reuse functions from task 3 and 4.
const getGreenAdultBananaLovers = data => {
	let filteredData = filterArray(data, param => {
		return param["age"] >= 18 && param["eyeColor"] === "green" && param["favoriteFruit"] === "banana"
	})
	return mapArray(filteredData, el => el["name"]);
}

console.log(getGreenAdultBananaLovers(data)); //returns ["George"]

// 7. Write function, which returns array of keys of an object.
const keys = obj => {
	let keys = [];
	for(let key in obj){
		if(obj.hasOwnProperty(key)) {
			keys.push(key);
		}
	}
	return keys;
}

console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3})); // returns ["keyOne", "keyTwo", "keyThree"]

// 8. Write function, which returns array of values of an object.
const values = obj => {
	let values = [];
	for(let key in obj){
		if(obj.hasOwnProperty(key)) {
			values.push(obj[key]);
		}
	}
	return values;
}

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3})); // returns [1, 2, 3]

// 9. Write function, which returns formatted date.
const showFormattedDate = date => {
   const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   return `Date: ${date.getDate()} of ${monthName[date.getMonth()]}, ${date.getFullYear()}`;
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00'))); // returns "Date: 27 of Jan, 2019"

// 10. Write function, which returns true if Year is even, otherwise returns false.
const isEvenYear = date => (date.getFullYear() % 2) === 0;

console.log(isEvenYear(new Date('2019-01-27T01:10:00'))); // returns false

// 11. Write function, which returns true if Month is even, otherwise returns false.
const isEvenMonth = date => (date.getMonth() % 2) !== 0;

console.log(isEvenMonth(new Date('2019-02-27T01:10:00'))); // returns true







