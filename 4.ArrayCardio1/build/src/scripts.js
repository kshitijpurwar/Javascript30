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

// function to render the table of given data
function tableRender(data, id){
  const tableBody = document.querySelector(`#${id} tbody`);

  let dataRows =
    data.map((person,i) =>
      `<tr>
      <td> ${i+1}</td>
      <td> ${person.first} ${person.last}</td>
      <td> ${person.passed - person.year}</td>
      <td> ${person.year}</td>
      <td> ${person.passed}</td>
      </tr>
      `
).join("");


tableBody.innerHTML = dataRows;

console.table(data)

}

// function to render the paragraph of given data

function renderParagraph(data, paragraphID){
    const Para = document.querySelector(`#${paragraphID}`);

    const paragraph = data.map(p => p.split(',')
                          .reverse()
                          .join()
                          .replace(','," ")).join(',');

    Para.innerHTML = paragraph;
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

  // Fill the para with data
  renderParagraph(people, "people");

  // 7. sort Exercise
  // Sort the people alphabetically by last name
  const sortedPeople = people.sort((lastOne, nextOne) =>
  lastOne.split(', ')[1] > nextOne.split(', ')[1] ? 1 : -1);

renderParagraph(sortedPeople, "peopleSorted");

};
