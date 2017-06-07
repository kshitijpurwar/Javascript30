const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];


function tableRender(data, id){
  const tableBody = document.querySelector(`#${id} tbody`);

  let dataRows = data.map((person,i) =>
  `<tr>
  <td> ${i+1}</td>
  <td> ${person.first} ${person.last}</td>
  <td> ${person.passed - person.year}</td>
  <td> ${person.year}</td>
  <td> ${person.passed}</td>
  </tr>
  `
);
tableBody.innerHTML = dataRows.join("");
console.table(data)
}



//  People Dataset
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];



window.onload = function() {



  // Fill the inventors Data in the table

  tableRender(inventors, "completeData")



  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's


  const born1500s = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599));

  tableRender(born1500s, "bornIn1500s");



  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names

  // Already done in tableRender function


  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest

  const orderedByBirth = inventors.sort((a,b) => (a.year > b.year) ? 1 : -1 );

  tableRender(orderedByBirth, "orderdBirth")


  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?


  // 5. Sort the inventors by years lived

  const orderedByLived = inventors.sort((a,b) => (a.passed - a.year > b.passed -  b.year) ? 1 : -1 );

  tableRender(orderedByLived, "orderedLived")


  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


  // We get a nodeList querySelector, using spread (...) we convert it into a Array
  // links = [...document.querySelectorAll('.mw-category a')];
  //
  // // Takes all the  links and gets out all the names
  // const de = links
  // .map( place => place.innerHTML )
  // .filter(place => place.search(" de ") > 0 );
  //
  // console.log(de);


  // Filling the paragraph with data
  const peoplePara = document.querySelector('#people');

  let paragraph = people.map(p => p.split(',').reverse().join().replace(','," ")).join(',')

  peoplePara.innerHTML = paragraph;

  // 7. sort Exercise
  // Sort the people alphabetically by last name

  const peopleSortedPara = document.querySelector('#peopleSorted');

  const sortedPeople = people.sort((lastOne, nextOne) =>
  lastOne.split(', ')[1] > nextOne.split(', ')[1] ? 1 : -1
);


//  Destructuring array into variables
// const [last, first] = lastOne.split(', ');


paragraph = sortedPeople.map(p => p.split(',').reverse().join().replace(','," ")).join(',')

peopleSortedPara.innerHTML = paragraph;



// Reduce starts with a blank object and the loops over the complete array

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transports = data.reduce(function(obj, item) {

  // Checks if the object has the current item key, if not makes on and defaults it to 0
  if(!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  // console.log(obj,item);
  return obj;
},{})


console.log(transports);




// IMDB top Indian movies yearwise
// http://www.imdb.com/india/top-rated-indian-movies/

// Fetches the spans containing the year
// yearSpans = document.querySelectorAll('.secondaryInfo')
//
//
// // Converts nodeList from of spans to array
// y = [...yearSpans]
//
// // fetchs the year out of the span
// years = y.map(year => year.innerHTML.substring(1,5))
//
//
// // Reduces the years into a collection, takes in empty object,
// // if key exists in object, it ++  else makes one and the  ++
// const yearwise = years.reduce((obj,year)=> {
//   if(!obj[year]){
//     obj[year]=0
//   }
//   obj[year]++;
//   return obj;
// },{})
//
// console.log(yearwise)

};
