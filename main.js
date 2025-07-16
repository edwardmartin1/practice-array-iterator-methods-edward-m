/* Task 1 */
/* define array of 5 favorite cities */
let favoriteCities =
[
    "Paris",
    "Madrid",
    "Dublin",
    "Venice",
    "Sydney"
];

/* use .forEach() to loop through each element of the array */
favoriteCities.forEach(city =>
{
    /* log the city in uppercase */
    console.log(city.toUpperCase());
});


/* Task 2 */
/* define array with the numbers 1 through 5 */
let numbers = 
[
    1,
    2,
    3,
    4,
    5
];

/* use .map() to square each element */
let squares = numbers.map(number => number * number);

/* log the squares array */
console.log(squares);

/* Task 3 */
/* define array of scores */
let scores =
[
    85,
    42,
    90,
    75,
    30,
    100
];

/* use .filter() to create an array of scores >= 80 */
let highScores = scores.filter(score => score >= 80);

/* log the highScores array */
console.log(highScores);


/* Task 4 */
/* define array of favorite foods */
let favoriteFood = 
[
    "pizza",
    "burger",
    "salad",
    "lasagna",
    "pancake",
    "waffle"
];

/* use .find() to locate the first food with more than 4 letters */
let foodLongerThanFour = favoriteFood.find(food => food.length > 4);

/* log the element found */
console.log(`First food longer than 4 letters: ${foodLongerThanFour}`);

/* use .findIndex() to locate the index of the food found */
let foodIndex = favoriteFood.findIndex(food => food === foodLongerThanFour);

/* log the index of the food found */
console.log(`Index of ${foodLongerThanFour} is ${foodIndex}`);


