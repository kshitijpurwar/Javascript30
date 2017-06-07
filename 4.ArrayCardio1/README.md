# Array Cardio Exercise 1 ( _crd1_ )
### [Demo](https://www.kshitijpurwar.com/4.ArrayCardio1/)


This is an Array Exercise where I learn various Array Functions.

## What I leaned
- `map` - kinda like a process or factory
  1. Takes in an Array as input
  1. Does something/ Processing (multiply by 3) with each element of the array
  1. Outputs a new Array  with each element being processed
```
const a = [1, 5, 8, 4, 8, 10, 45, 24];
a.map(number => number * 5)
[5, 25, 40, 20, 40, 50, 225, 120]
```  
- `filter`
  1. Array Input
  1. Define a condition inside it to return `true`
  1. Outputs a new Array containing elements which satisfy filter condition
```
const a = [1, 5, 8, 4, 8, 10, 45, 24];
a.filter(number => number % 5 == 0 )
[5, 10, 45]
```
- `forEach` - Simply loops over an array, can be used instead of a `for` loop
- nodeList vs Array - More functions are available for array than nodeList, we get a nodeList when we use `querySelector` or `querySelectorAll`
- [Spread Operator](https://hackernoon.com/javascript-the-spread-operator-a867a71668ca) `...`
  - Convert a string into array
  ```
  let a = "HackerNoon"
  p = [...a]
  ["H", "a", "c", "k", "e", "r", "N", "o", "o", "n"]
  ```
  - Copy Array into another, actual Copy
  | If you copy using `let array2 = array1`, it will mess up array1 if you do anything with array2.
  - `Math.max(...array)` __works__ :thumbsup: !
  - Concat Arrays `const mixed = [...array1,...array2]`
  - `const Array = [...NodeList]` - Node List to array using spread `...`
- reduce - See IMDB Example
- [Template Strings](http://wesbos.com/template-strings-html/)
- Sort - sorts the array according to the given condition, expects -1 or 1 in return for each element
```
const a = [1, 5, 8, 4, 8, 10, 45, 24];
a.sort((present, next) => (present > next ) ? 1 : -1 )
[1, 4, 5, 8, 8, 10, 24, 45]
```
- `console.table` - Pass an array of objects and see the magic in console\\
- Variable Restructuring


### IMDB
#### IMDB top Indian movies yearwise
[link to page](http://www.imdb.com/india/top-rated-indian-movies/)
```

// Fetches the spans containing the year
yearSpans = document.querySelectorAll('.secondaryInfo');


// Converts nodeList from of spans to array
y = [...yearSpans];

// fetchs the year out of the span
years = y.map(year => year.innerHTML.substring(1,5));


// Reduces the years into a collection, takes in empty object,
// if key exists in object, it ++  else makes one and the  ++
const yearwise = years.reduce((obj,year)=> {
  if(!obj[year]){
    obj[year]=0
  }
  obj[year]++;
  return obj;
},{});

console.log(yearwise);

```


### Wikipedia Boulevards
#### Create a list of Boulevards in Paris that contain 'de' anywhere in the name.
[link to page](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
)
```

//We get a nodeList querySelector, using spread (...) we convert it into a Array
links = [...document.querySelectorAll('.mw-category a')];

// Takes all the  links and gets out all the names
const de = links
// Takes out all the names
.map( place => place.innerHTML )
// filters which contain `de`
.filter(place => place.search(" de ") > 0 );

console.log(de);

```

---
:wrench: :nut_and_bolt: Created by  __[Kshitij Purwar](https://kshitijpurwar.com)__
