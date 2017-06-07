'use strict';

var inventors = [{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }, { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }, { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }, { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }, { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }, { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 }, { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 }, { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }];

function tableRender(data, id) {
  var tableBody = document.querySelector('#' + id + ' tbody');

  var dataRows = data.map(function (person, i) {
    return '<tr>\n  <td> ' + (i + 1) + '</td>\n  <td> ' + person.first + ' ' + person.last + '</td>\n  <td> ' + (person.passed - person.year) + '</td>\n  <td> ' + person.year + '</td>\n  <td> ' + person.passed + '</td>\n  </tr>\n  ';
  });
  tableBody.innerHTML = dataRows.join("");
  console.table(data);
}

//  People Dataset
var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

window.onload = function () {

  // Fill the inventors Data in the table

  tableRender(inventors, "completeData");

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's


  var born1500s = inventors.filter(function (inventor) {
    return inventor.year >= 1500 && inventor.year <= 1599;
  });

  tableRender(born1500s, "bornIn1500s");

  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names

  // Already done in tableRender function


  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest

  var orderedByBirth = inventors.sort(function (a, b) {
    return a.year > b.year ? 1 : -1;
  });

  tableRender(orderedByBirth, "orderdBirth");

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?


  // 5. Sort the inventors by years lived

  var orderedByLived = inventors.sort(function (a, b) {
    return a.passed - a.year > b.passed - b.year ? 1 : -1;
  });

  tableRender(orderedByLived, "orderedLived");

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
  var peoplePara = document.querySelector('#people');

  var paragraph = people.map(function (p) {
    return p.split(',').reverse().join().replace(',', " ");
  }).join(',');

  peoplePara.innerHTML = paragraph;

  // 7. sort Exercise
  // Sort the people alphabetically by last name

  var peopleSortedPara = document.querySelector('#peopleSorted');

  var sortedPeople = people.sort(function (lastOne, nextOne) {
    return lastOne.split(', ')[1] > nextOne.split(', ')[1] ? 1 : -1;
  });

  //  Destructuring array into variables
  // const [last, first] = lastOne.split(', ');


  paragraph = sortedPeople.map(function (p) {
    return p.split(',').reverse().join().replace(',', " ");
  }).join(',');

  peopleSortedPara.innerHTML = paragraph;

  // Reduce starts with a blank object and the loops over the complete array

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

  var transports = data.reduce(function (obj, item) {

    // Checks if the object has the current item key, if not makes on and defaults it to 0
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    // console.log(obj,item);
    return obj;
  }, {});

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsiaW52ZW50b3JzIiwiZmlyc3QiLCJsYXN0IiwieWVhciIsInBhc3NlZCIsInRhYmxlUmVuZGVyIiwiZGF0YSIsImlkIiwidGFibGVCb2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YVJvd3MiLCJtYXAiLCJwZXJzb24iLCJpIiwiaW5uZXJIVE1MIiwiam9pbiIsImNvbnNvbGUiLCJ0YWJsZSIsInBlb3BsZSIsIndpbmRvdyIsIm9ubG9hZCIsImJvcm4xNTAwcyIsImZpbHRlciIsImludmVudG9yIiwib3JkZXJlZEJ5QmlydGgiLCJzb3J0IiwiYSIsImIiLCJvcmRlcmVkQnlMaXZlZCIsInBlb3BsZVBhcmEiLCJwYXJhZ3JhcGgiLCJwIiwic3BsaXQiLCJyZXZlcnNlIiwicmVwbGFjZSIsInBlb3BsZVNvcnRlZFBhcmEiLCJzb3J0ZWRQZW9wbGUiLCJsYXN0T25lIiwibmV4dE9uZSIsInRyYW5zcG9ydHMiLCJyZWR1Y2UiLCJvYmoiLCJpdGVtIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFlBQVksQ0FDaEIsRUFBRUMsT0FBTyxRQUFULEVBQW1CQyxNQUFNLFVBQXpCLEVBQXFDQyxNQUFNLElBQTNDLEVBQWlEQyxRQUFRLElBQXpELEVBRGdCLEVBRWhCLEVBQUVILE9BQU8sT0FBVCxFQUFrQkMsTUFBTSxRQUF4QixFQUFrQ0MsTUFBTSxJQUF4QyxFQUE4Q0MsUUFBUSxJQUF0RCxFQUZnQixFQUdoQixFQUFFSCxPQUFPLFNBQVQsRUFBb0JDLE1BQU0sU0FBMUIsRUFBcUNDLE1BQU0sSUFBM0MsRUFBaURDLFFBQVEsSUFBekQsRUFIZ0IsRUFJaEIsRUFBRUgsT0FBTyxPQUFULEVBQWtCQyxNQUFNLE9BQXhCLEVBQWlDQyxNQUFNLElBQXZDLEVBQTZDQyxRQUFRLElBQXJELEVBSmdCLEVBS2hCLEVBQUVILE9BQU8sVUFBVCxFQUFxQkMsTUFBTSxRQUEzQixFQUFxQ0MsTUFBTSxJQUEzQyxFQUFpREMsUUFBUSxJQUF6RCxFQUxnQixFQU1oQixFQUFFSCxPQUFPLFVBQVQsRUFBcUJDLE1BQU0sWUFBM0IsRUFBeUNDLE1BQU0sSUFBL0MsRUFBcURDLFFBQVEsSUFBN0QsRUFOZ0IsRUFPaEIsRUFBRUgsT0FBTyxLQUFULEVBQWdCQyxNQUFNLFFBQXRCLEVBQWdDQyxNQUFNLElBQXRDLEVBQTRDQyxRQUFRLElBQXBELEVBUGdCLEVBUWhCLEVBQUVILE9BQU8sV0FBVCxFQUFzQkMsTUFBTSxVQUE1QixFQUF3Q0MsTUFBTSxJQUE5QyxFQUFvREMsUUFBUSxJQUE1RCxFQVJnQixFQVNoQixFQUFFSCxPQUFPLEtBQVQsRUFBZ0JDLE1BQU0sVUFBdEIsRUFBa0NDLE1BQU0sSUFBeEMsRUFBOENDLFFBQVEsSUFBdEQsRUFUZ0IsRUFVaEIsRUFBRUgsT0FBTyxVQUFULEVBQXFCQyxNQUFNLE9BQTNCLEVBQW9DQyxNQUFNLElBQTFDLEVBQWdEQyxRQUFRLElBQXhELEVBVmdCLEVBV2hCLEVBQUVILE9BQU8sTUFBVCxFQUFpQkMsTUFBTSxTQUF2QixFQUFrQ0MsTUFBTSxJQUF4QyxFQUE4Q0MsUUFBUSxJQUF0RCxFQVhnQixFQVloQixFQUFFSCxPQUFPLE9BQVQsRUFBa0JDLE1BQU0sYUFBeEIsRUFBdUNDLE1BQU0sSUFBN0MsRUFBbURDLFFBQVEsSUFBM0QsRUFaZ0IsQ0FBbEI7O0FBZ0JBLFNBQVNDLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCQyxFQUEzQixFQUE4QjtBQUM1QixNQUFNQyxZQUFZQyxTQUFTQyxhQUFULE9BQTJCSCxFQUEzQixZQUFsQjs7QUFFQSxNQUFJSSxXQUFXTCxLQUFLTSxHQUFMLENBQVMsVUFBQ0MsTUFBRCxFQUFRQyxDQUFSO0FBQUEsOEJBRWpCQSxJQUFFLENBRmUsdUJBR2pCRCxPQUFPWixLQUhVLFNBR0RZLE9BQU9YLElBSE4sdUJBSWpCVyxPQUFPVCxNQUFQLEdBQWdCUyxPQUFPVixJQUpOLHVCQUtqQlUsT0FBT1YsSUFMVSxzQkFNakJVLE9BQU9ULE1BTlU7QUFBQSxHQUFULENBQWY7QUFVRkksWUFBVU8sU0FBVixHQUFzQkosU0FBU0ssSUFBVCxDQUFjLEVBQWQsQ0FBdEI7QUFDQUMsVUFBUUMsS0FBUixDQUFjWixJQUFkO0FBQ0M7O0FBSUQ7QUFDQSxJQUFNYSxTQUFTLENBQUMsYUFBRCxFQUFnQixjQUFoQixFQUFnQyxpQkFBaEMsRUFBbUQsZUFBbkQsRUFBb0UsZ0JBQXBFLEVBQXNGLG1CQUF0RixFQUEyRyxpQkFBM0csRUFBOEgsaUJBQTlILEVBQWlKLGNBQWpKLEVBQWlLLGtCQUFqSyxFQUFxTCxpQkFBckwsRUFBd00sbUJBQXhNLEVBQTZOLGtCQUE3TixFQUFpUCxZQUFqUCxFQUErUCxxQkFBL1AsRUFBc1IsZUFBdFIsRUFBdVMsYUFBdlMsRUFBc1QsZ0JBQXRULEVBQXdVLGFBQXhVLEVBQXVWLGlCQUF2VixFQUEwVyxnQkFBMVcsRUFBNFgsZUFBNVgsRUFBNlksZ0JBQTdZLEVBQStaLGFBQS9aLEVBQThhLGtCQUE5YSxFQUFrYyxhQUFsYyxFQUFpZCxjQUFqZCxFQUFpZSxnQkFBamUsRUFBbWYsY0FBbmYsRUFBbWdCLGdCQUFuZ0IsRUFBcWhCLFlBQXJoQixFQUFtaUIsZUFBbmlCLEVBQW9qQixpQkFBcGpCLEVBQXVrQixhQUF2a0IsRUFBc2xCLGdCQUF0bEIsRUFBd21CLGVBQXhtQixFQUF5bkIsb0JBQXpuQixFQUErb0IsWUFBL29CLEVBQTZwQixlQUE3cEIsRUFBOHFCLGFBQTlxQixFQUE2ckIsZ0JBQTdyQixDQUFmOztBQUlBQyxPQUFPQyxNQUFQLEdBQWdCLFlBQVc7O0FBSXpCOztBQUVBaEIsY0FBWUwsU0FBWixFQUF1QixjQUF2Qjs7QUFJQTtBQUNBOzs7QUFHQSxNQUFNc0IsWUFBWXRCLFVBQVV1QixNQUFWLENBQWlCO0FBQUEsV0FBYUMsU0FBU3JCLElBQVQsSUFBaUIsSUFBakIsSUFBeUJxQixTQUFTckIsSUFBVCxJQUFpQixJQUF2RDtBQUFBLEdBQWpCLENBQWxCOztBQUVBRSxjQUFZaUIsU0FBWixFQUF1QixhQUF2Qjs7QUFJQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBLE1BQU1HLGlCQUFpQnpCLFVBQVUwQixJQUFWLENBQWUsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsV0FBVUQsRUFBRXhCLElBQUYsR0FBU3lCLEVBQUV6QixJQUFaLEdBQW9CLENBQXBCLEdBQXdCLENBQUMsQ0FBbEM7QUFBQSxHQUFmLENBQXZCOztBQUVBRSxjQUFZb0IsY0FBWixFQUE0QixhQUE1Qjs7QUFHQTtBQUNBOzs7QUFHQTs7QUFFQSxNQUFNSSxpQkFBaUI3QixVQUFVMEIsSUFBVixDQUFlLFVBQUNDLENBQUQsRUFBR0MsQ0FBSDtBQUFBLFdBQVVELEVBQUV2QixNQUFGLEdBQVd1QixFQUFFeEIsSUFBYixHQUFvQnlCLEVBQUV4QixNQUFGLEdBQVl3QixFQUFFekIsSUFBbkMsR0FBMkMsQ0FBM0MsR0FBK0MsQ0FBQyxDQUF6RDtBQUFBLEdBQWYsQ0FBdkI7O0FBRUFFLGNBQVl3QixjQUFaLEVBQTRCLGNBQTVCOztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxNQUFNQyxhQUFhckIsU0FBU0MsYUFBVCxDQUF1QixTQUF2QixDQUFuQjs7QUFFQSxNQUFJcUIsWUFBWVosT0FBT1AsR0FBUCxDQUFXO0FBQUEsV0FBS29CLEVBQUVDLEtBQUYsQ0FBUSxHQUFSLEVBQWFDLE9BQWIsR0FBdUJsQixJQUF2QixHQUE4Qm1CLE9BQTlCLENBQXNDLEdBQXRDLEVBQTBDLEdBQTFDLENBQUw7QUFBQSxHQUFYLEVBQWdFbkIsSUFBaEUsQ0FBcUUsR0FBckUsQ0FBaEI7O0FBRUFjLGFBQVdmLFNBQVgsR0FBdUJnQixTQUF2Qjs7QUFFQTtBQUNBOztBQUVBLE1BQU1LLG1CQUFtQjNCLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBekI7O0FBRUEsTUFBTTJCLGVBQWVsQixPQUFPTyxJQUFQLENBQVksVUFBQ1ksT0FBRCxFQUFVQyxPQUFWO0FBQUEsV0FDakNELFFBQVFMLEtBQVIsQ0FBYyxJQUFkLEVBQW9CLENBQXBCLElBQXlCTSxRQUFRTixLQUFSLENBQWMsSUFBZCxFQUFvQixDQUFwQixDQUF6QixHQUFrRCxDQUFsRCxHQUFzRCxDQUFDLENBRHRCO0FBQUEsR0FBWixDQUFyQjs7QUFLRjtBQUNBOzs7QUFHQUYsY0FBWU0sYUFBYXpCLEdBQWIsQ0FBaUI7QUFBQSxXQUFLb0IsRUFBRUMsS0FBRixDQUFRLEdBQVIsRUFBYUMsT0FBYixHQUF1QmxCLElBQXZCLEdBQThCbUIsT0FBOUIsQ0FBc0MsR0FBdEMsRUFBMEMsR0FBMUMsQ0FBTDtBQUFBLEdBQWpCLEVBQXNFbkIsSUFBdEUsQ0FBMkUsR0FBM0UsQ0FBWjs7QUFFQW9CLG1CQUFpQnJCLFNBQWpCLEdBQTZCZ0IsU0FBN0I7O0FBSUE7O0FBRUE7QUFDQTtBQUNBLE1BQU16QixPQUFPLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxPQUFmLEVBQXdCLE9BQXhCLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDLEVBQWlELEtBQWpELEVBQXdELEtBQXhELEVBQStELE1BQS9ELEVBQXVFLE1BQXZFLEVBQStFLEtBQS9FLEVBQXNGLEtBQXRGLEVBQTZGLEtBQTdGLEVBQW9HLE9BQXBHLENBQWI7O0FBRUEsTUFBTWtDLGFBQWFsQyxLQUFLbUMsTUFBTCxDQUFZLFVBQVNDLEdBQVQsRUFBY0MsSUFBZCxFQUFvQjs7QUFFakQ7QUFDQSxRQUFHLENBQUNELElBQUlDLElBQUosQ0FBSixFQUFlO0FBQ2JELFVBQUlDLElBQUosSUFBWSxDQUFaO0FBQ0Q7QUFDREQsUUFBSUMsSUFBSjtBQUNBO0FBQ0EsV0FBT0QsR0FBUDtBQUNELEdBVGtCLEVBU2pCLEVBVGlCLENBQW5COztBQVlBekIsVUFBUTJCLEdBQVIsQ0FBWUosVUFBWjs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUMsQ0F4SUQiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGludmVudG9ycyA9IFtcbiAgeyBmaXJzdDogJ0FsYmVydCcsIGxhc3Q6ICdFaW5zdGVpbicsIHllYXI6IDE4NzksIHBhc3NlZDogMTk1NSB9LFxuICB7IGZpcnN0OiAnSXNhYWMnLCBsYXN0OiAnTmV3dG9uJywgeWVhcjogMTY0MywgcGFzc2VkOiAxNzI3IH0sXG4gIHsgZmlyc3Q6ICdHYWxpbGVvJywgbGFzdDogJ0dhbGlsZWknLCB5ZWFyOiAxNTY0LCBwYXNzZWQ6IDE2NDIgfSxcbiAgeyBmaXJzdDogJ01hcmllJywgbGFzdDogJ0N1cmllJywgeWVhcjogMTg2NywgcGFzc2VkOiAxOTM0IH0sXG4gIHsgZmlyc3Q6ICdKb2hhbm5lcycsIGxhc3Q6ICdLZXBsZXInLCB5ZWFyOiAxNTcxLCBwYXNzZWQ6IDE2MzAgfSxcbiAgeyBmaXJzdDogJ05pY29sYXVzJywgbGFzdDogJ0NvcGVybmljdXMnLCB5ZWFyOiAxNDczLCBwYXNzZWQ6IDE1NDMgfSxcbiAgeyBmaXJzdDogJ01heCcsIGxhc3Q6ICdQbGFuY2snLCB5ZWFyOiAxODU4LCBwYXNzZWQ6IDE5NDcgfSxcbiAgeyBmaXJzdDogJ0thdGhlcmluZScsIGxhc3Q6ICdCbG9kZ2V0dCcsIHllYXI6IDE4OTgsIHBhc3NlZDogMTk3OSB9LFxuICB7IGZpcnN0OiAnQWRhJywgbGFzdDogJ0xvdmVsYWNlJywgeWVhcjogMTgxNSwgcGFzc2VkOiAxODUyIH0sXG4gIHsgZmlyc3Q6ICdTYXJhaCBFLicsIGxhc3Q6ICdHb29kZScsIHllYXI6IDE4NTUsIHBhc3NlZDogMTkwNSB9LFxuICB7IGZpcnN0OiAnTGlzZScsIGxhc3Q6ICdNZWl0bmVyJywgeWVhcjogMTg3OCwgcGFzc2VkOiAxOTY4IH0sXG4gIHsgZmlyc3Q6ICdIYW5uYScsIGxhc3Q6ICdIYW1tYXJzdHLDtm0nLCB5ZWFyOiAxODI5LCBwYXNzZWQ6IDE5MDkgfVxuXTtcblxuXG5mdW5jdGlvbiB0YWJsZVJlbmRlcihkYXRhLCBpZCl7XG4gIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfSB0Ym9keWApO1xuXG4gIGxldCBkYXRhUm93cyA9IGRhdGEubWFwKChwZXJzb24saSkgPT5cbiAgYDx0cj5cbiAgPHRkPiAke2krMX08L3RkPlxuICA8dGQ+ICR7cGVyc29uLmZpcnN0fSAke3BlcnNvbi5sYXN0fTwvdGQ+XG4gIDx0ZD4gJHtwZXJzb24ucGFzc2VkIC0gcGVyc29uLnllYXJ9PC90ZD5cbiAgPHRkPiAke3BlcnNvbi55ZWFyfTwvdGQ+XG4gIDx0ZD4gJHtwZXJzb24ucGFzc2VkfTwvdGQ+XG4gIDwvdHI+XG4gIGBcbik7XG50YWJsZUJvZHkuaW5uZXJIVE1MID0gZGF0YVJvd3Muam9pbihcIlwiKTtcbmNvbnNvbGUudGFibGUoZGF0YSlcbn1cblxuXG5cbi8vICBQZW9wbGUgRGF0YXNldFxuY29uc3QgcGVvcGxlID0gWydCZWNrLCBHbGVubicsICdCZWNrZXIsIENhcmwnLCAnQmVja2V0dCwgU2FtdWVsJywgJ0JlZGRvZXMsIE1pY2snLCAnQmVlY2hlciwgSGVucnknLCAnQmVldGhvdmVuLCBMdWR3aWcnLCAnQmVnaW4sIE1lbmFjaGVtJywgJ0JlbGxvYywgSGlsYWlyZScsICdCZWxsb3csIFNhdWwnLCAnQmVuY2hsZXksIFJvYmVydCcsICdCZW5lbnNvbiwgUGV0ZXInLCAnQmVuLUd1cmlvbiwgRGF2aWQnLCAnQmVuamFtaW4sIFdhbHRlcicsICdCZW5uLCBUb255JywgJ0Jlbm5pbmd0b24sIENoZXN0ZXInLCAnQmVuc29uLCBMZWFuYScsICdCZW50LCBTaWxhcycsICdCZW50c2VuLCBMbG95ZCcsICdCZXJnZXIsIFJpYycsICdCZXJnbWFuLCBJbmdtYXInLCAnQmVyaW8sIEx1Y2lhbm8nLCAnQmVybGUsIE1pbHRvbicsICdCZXJsaW4sIElydmluZycsICdCZXJuZSwgRXJpYycsICdCZXJuaGFyZCwgU2FuZHJhJywgJ0JlcnJhLCBZb2dpJywgJ0JlcnJ5LCBIYWxsZScsICdCZXJyeSwgV2VuZGVsbCcsICdCZXRoZWEsIEVyaW4nLCAnQmV2YW4sIEFuZXVyaW4nLCAnQmV2ZWwsIEtlbicsICdCaWRlbiwgSm9zZXBoJywgJ0JpZXJjZSwgQW1icm9zZScsICdCaWtvLCBTdGV2ZScsICdCaWxsaW5ncywgSm9zaCcsICdCaW9uZG8sIEZyYW5rJywgJ0JpcnJlbGwsIEF1Z3VzdGluZScsICdCbGFjaywgRWxrJywgJ0JsYWlyLCBSb2JlcnQnLCAnQmxhaXIsIFRvbnknLCAnQmxha2UsIFdpbGxpYW0nXTtcblxuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXG5cbiAgLy8gRmlsbCB0aGUgaW52ZW50b3JzIERhdGEgaW4gdGhlIHRhYmxlXG5cbiAgdGFibGVSZW5kZXIoaW52ZW50b3JzLCBcImNvbXBsZXRlRGF0YVwiKVxuXG5cblxuICAvLyBBcnJheS5wcm90b3R5cGUuZmlsdGVyKClcbiAgLy8gMS4gRmlsdGVyIHRoZSBsaXN0IG9mIGludmVudG9ycyBmb3IgdGhvc2Ugd2hvIHdlcmUgYm9ybiBpbiB0aGUgMTUwMCdzXG5cblxuICBjb25zdCBib3JuMTUwMHMgPSBpbnZlbnRvcnMuZmlsdGVyKGludmVudG9yID0+IChpbnZlbnRvci55ZWFyID49IDE1MDAgJiYgaW52ZW50b3IueWVhciA8PSAxNTk5KSk7XG5cbiAgdGFibGVSZW5kZXIoYm9ybjE1MDBzLCBcImJvcm5JbjE1MDBzXCIpO1xuXG5cblxuICAvLyBBcnJheS5wcm90b3R5cGUubWFwKClcbiAgLy8gMi4gR2l2ZSB1cyBhbiBhcnJheSBvZiB0aGUgaW52ZW50b3JzJyBmaXJzdCBhbmQgbGFzdCBuYW1lc1xuXG4gIC8vIEFscmVhZHkgZG9uZSBpbiB0YWJsZVJlbmRlciBmdW5jdGlvblxuXG5cbiAgLy8gQXJyYXkucHJvdG90eXBlLnNvcnQoKVxuICAvLyAzLiBTb3J0IHRoZSBpbnZlbnRvcnMgYnkgYmlydGhkYXRlLCBvbGRlc3QgdG8geW91bmdlc3RcblxuICBjb25zdCBvcmRlcmVkQnlCaXJ0aCA9IGludmVudG9ycy5zb3J0KChhLGIpID0+IChhLnllYXIgPiBiLnllYXIpID8gMSA6IC0xICk7XG5cbiAgdGFibGVSZW5kZXIob3JkZXJlZEJ5QmlydGgsIFwib3JkZXJkQmlydGhcIilcblxuXG4gIC8vIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoKVxuICAvLyA0LiBIb3cgbWFueSB5ZWFycyBkaWQgYWxsIHRoZSBpbnZlbnRvcnMgbGl2ZT9cblxuXG4gIC8vIDUuIFNvcnQgdGhlIGludmVudG9ycyBieSB5ZWFycyBsaXZlZFxuXG4gIGNvbnN0IG9yZGVyZWRCeUxpdmVkID0gaW52ZW50b3JzLnNvcnQoKGEsYikgPT4gKGEucGFzc2VkIC0gYS55ZWFyID4gYi5wYXNzZWQgLSAgYi55ZWFyKSA/IDEgOiAtMSApO1xuXG4gIHRhYmxlUmVuZGVyKG9yZGVyZWRCeUxpdmVkLCBcIm9yZGVyZWRMaXZlZFwiKVxuXG5cbiAgLy8gNi4gY3JlYXRlIGEgbGlzdCBvZiBCb3VsZXZhcmRzIGluIFBhcmlzIHRoYXQgY29udGFpbiAnZGUnIGFueXdoZXJlIGluIHRoZSBuYW1lXG4gIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NhdGVnb3J5OkJvdWxldmFyZHNfaW5fUGFyaXNcblxuXG4gIC8vIFdlIGdldCBhIG5vZGVMaXN0IHF1ZXJ5U2VsZWN0b3IsIHVzaW5nIHNwcmVhZCAoLi4uKSB3ZSBjb252ZXJ0IGl0IGludG8gYSBBcnJheVxuICAvLyBsaW5rcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXctY2F0ZWdvcnkgYScpXTtcbiAgLy9cbiAgLy8gLy8gVGFrZXMgYWxsIHRoZSAgbGlua3MgYW5kIGdldHMgb3V0IGFsbCB0aGUgbmFtZXNcbiAgLy8gY29uc3QgZGUgPSBsaW5rc1xuICAvLyAubWFwKCBwbGFjZSA9PiBwbGFjZS5pbm5lckhUTUwgKVxuICAvLyAuZmlsdGVyKHBsYWNlID0+IHBsYWNlLnNlYXJjaChcIiBkZSBcIikgPiAwICk7XG4gIC8vXG4gIC8vIGNvbnNvbGUubG9nKGRlKTtcblxuXG4gIC8vIEZpbGxpbmcgdGhlIHBhcmFncmFwaCB3aXRoIGRhdGFcbiAgY29uc3QgcGVvcGxlUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZW9wbGUnKTtcblxuICBsZXQgcGFyYWdyYXBoID0gcGVvcGxlLm1hcChwID0+IHAuc3BsaXQoJywnKS5yZXZlcnNlKCkuam9pbigpLnJlcGxhY2UoJywnLFwiIFwiKSkuam9pbignLCcpXG5cbiAgcGVvcGxlUGFyYS5pbm5lckhUTUwgPSBwYXJhZ3JhcGg7XG5cbiAgLy8gNy4gc29ydCBFeGVyY2lzZVxuICAvLyBTb3J0IHRoZSBwZW9wbGUgYWxwaGFiZXRpY2FsbHkgYnkgbGFzdCBuYW1lXG5cbiAgY29uc3QgcGVvcGxlU29ydGVkUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZW9wbGVTb3J0ZWQnKTtcblxuICBjb25zdCBzb3J0ZWRQZW9wbGUgPSBwZW9wbGUuc29ydCgobGFzdE9uZSwgbmV4dE9uZSkgPT5cbiAgbGFzdE9uZS5zcGxpdCgnLCAnKVsxXSA+IG5leHRPbmUuc3BsaXQoJywgJylbMV0gPyAxIDogLTFcbik7XG5cblxuLy8gIERlc3RydWN0dXJpbmcgYXJyYXkgaW50byB2YXJpYWJsZXNcbi8vIGNvbnN0IFtsYXN0LCBmaXJzdF0gPSBsYXN0T25lLnNwbGl0KCcsICcpO1xuXG5cbnBhcmFncmFwaCA9IHNvcnRlZFBlb3BsZS5tYXAocCA9PiBwLnNwbGl0KCcsJykucmV2ZXJzZSgpLmpvaW4oKS5yZXBsYWNlKCcsJyxcIiBcIikpLmpvaW4oJywnKVxuXG5wZW9wbGVTb3J0ZWRQYXJhLmlubmVySFRNTCA9IHBhcmFncmFwaDtcblxuXG5cbi8vIFJlZHVjZSBzdGFydHMgd2l0aCBhIGJsYW5rIG9iamVjdCBhbmQgdGhlIGxvb3BzIG92ZXIgdGhlIGNvbXBsZXRlIGFycmF5XG5cbi8vIDguIFJlZHVjZSBFeGVyY2lzZVxuLy8gU3VtIHVwIHRoZSBpbnN0YW5jZXMgb2YgZWFjaCBvZiB0aGVzZVxuY29uc3QgZGF0YSA9IFsnY2FyJywgJ2NhcicsICd0cnVjaycsICd0cnVjaycsICdiaWtlJywgJ3dhbGsnLCAnY2FyJywgJ3ZhbicsICdiaWtlJywgJ3dhbGsnLCAnY2FyJywgJ3ZhbicsICdjYXInLCAndHJ1Y2snIF07XG5cbmNvbnN0IHRyYW5zcG9ydHMgPSBkYXRhLnJlZHVjZShmdW5jdGlvbihvYmosIGl0ZW0pIHtcblxuICAvLyBDaGVja3MgaWYgdGhlIG9iamVjdCBoYXMgdGhlIGN1cnJlbnQgaXRlbSBrZXksIGlmIG5vdCBtYWtlcyBvbiBhbmQgZGVmYXVsdHMgaXQgdG8gMFxuICBpZighb2JqW2l0ZW1dKSB7XG4gICAgb2JqW2l0ZW1dID0gMDtcbiAgfVxuICBvYmpbaXRlbV0rKztcbiAgLy8gY29uc29sZS5sb2cob2JqLGl0ZW0pO1xuICByZXR1cm4gb2JqO1xufSx7fSlcblxuXG5jb25zb2xlLmxvZyh0cmFuc3BvcnRzKTtcblxuXG5cblxuLy8gSU1EQiB0b3AgSW5kaWFuIG1vdmllcyB5ZWFyd2lzZVxuLy8gaHR0cDovL3d3dy5pbWRiLmNvbS9pbmRpYS90b3AtcmF0ZWQtaW5kaWFuLW1vdmllcy9cblxuLy8gRmV0Y2hlcyB0aGUgc3BhbnMgY29udGFpbmluZyB0aGUgeWVhclxuLy8geWVhclNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY29uZGFyeUluZm8nKVxuLy9cbi8vXG4vLyAvLyBDb252ZXJ0cyBub2RlTGlzdCBmcm9tIG9mIHNwYW5zIHRvIGFycmF5XG4vLyB5ID0gWy4uLnllYXJTcGFuc11cbi8vXG4vLyAvLyBmZXRjaHMgdGhlIHllYXIgb3V0IG9mIHRoZSBzcGFuXG4vLyB5ZWFycyA9IHkubWFwKHllYXIgPT4geWVhci5pbm5lckhUTUwuc3Vic3RyaW5nKDEsNSkpXG4vL1xuLy9cbi8vIC8vIFJlZHVjZXMgdGhlIHllYXJzIGludG8gYSBjb2xsZWN0aW9uLCB0YWtlcyBpbiBlbXB0eSBvYmplY3QsXG4vLyAvLyBpZiBrZXkgZXhpc3RzIGluIG9iamVjdCwgaXQgKysgIGVsc2UgbWFrZXMgb25lIGFuZCB0aGUgICsrXG4vLyBjb25zdCB5ZWFyd2lzZSA9IHllYXJzLnJlZHVjZSgob2JqLHllYXIpPT4ge1xuLy8gICBpZighb2JqW3llYXJdKXtcbi8vICAgICBvYmpbeWVhcl09MFxuLy8gICB9XG4vLyAgIG9ialt5ZWFyXSsrO1xuLy8gICByZXR1cm4gb2JqO1xuLy8gfSx7fSlcbi8vXG4vLyBjb25zb2xlLmxvZyh5ZWFyd2lzZSlcblxufTtcbiJdfQ==
