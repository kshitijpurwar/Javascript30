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
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsiaW52ZW50b3JzIiwiZmlyc3QiLCJsYXN0IiwieWVhciIsInBhc3NlZCIsInRhYmxlUmVuZGVyIiwiZGF0YSIsImlkIiwidGFibGVCb2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YVJvd3MiLCJtYXAiLCJwZXJzb24iLCJpIiwiaW5uZXJIVE1MIiwiam9pbiIsImNvbnNvbGUiLCJ0YWJsZSIsInBlb3BsZSIsIndpbmRvdyIsIm9ubG9hZCIsImJvcm4xNTAwcyIsImZpbHRlciIsImludmVudG9yIiwib3JkZXJlZEJ5QmlydGgiLCJzb3J0IiwiYSIsImIiLCJvcmRlcmVkQnlMaXZlZCIsInBlb3BsZVBhcmEiLCJwYXJhZ3JhcGgiLCJwIiwic3BsaXQiLCJyZXZlcnNlIiwicmVwbGFjZSIsInBlb3BsZVNvcnRlZFBhcmEiLCJzb3J0ZWRQZW9wbGUiLCJsYXN0T25lIiwibmV4dE9uZSIsInRyYW5zcG9ydHMiLCJyZWR1Y2UiLCJvYmoiLCJpdGVtIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFlBQVksQ0FDaEIsRUFBRUMsT0FBTyxRQUFULEVBQW1CQyxNQUFNLFVBQXpCLEVBQXFDQyxNQUFNLElBQTNDLEVBQWlEQyxRQUFRLElBQXpELEVBRGdCLEVBRWhCLEVBQUVILE9BQU8sT0FBVCxFQUFrQkMsTUFBTSxRQUF4QixFQUFrQ0MsTUFBTSxJQUF4QyxFQUE4Q0MsUUFBUSxJQUF0RCxFQUZnQixFQUdoQixFQUFFSCxPQUFPLFNBQVQsRUFBb0JDLE1BQU0sU0FBMUIsRUFBcUNDLE1BQU0sSUFBM0MsRUFBaURDLFFBQVEsSUFBekQsRUFIZ0IsRUFJaEIsRUFBRUgsT0FBTyxPQUFULEVBQWtCQyxNQUFNLE9BQXhCLEVBQWlDQyxNQUFNLElBQXZDLEVBQTZDQyxRQUFRLElBQXJELEVBSmdCLEVBS2hCLEVBQUVILE9BQU8sVUFBVCxFQUFxQkMsTUFBTSxRQUEzQixFQUFxQ0MsTUFBTSxJQUEzQyxF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R0FBa0QsQ0FBbEQsR0FBc0QsQ0FBQyxDQUR0QjtBQUFBLEdBQVosQ0FBckI7O0FBS0Y7QUFDQTs7O0FBR0FGLGNBQVlNLGFBQWF6QixHQUFiLENBQWlCO0FBQUEsV0FBS29CLEVBQUVDLEtBQUYsQ0FBUSxHQUFSLEVBQWFDLE9BQWIsR0FBdUJsQixJQUF2QixHQUE4Qm1CLE9BQTlCLENBQXNDLEdBQXRDLEVBQTBDLEdBQTFDLENBQUw7QUFBQSxHQUFqQixFQUFzRW5CLElBQXRFLENBQTJFLEdBQTNFLENBQVo7O0FBRUFvQixtQkFBaUJyQixTQUFqQixHQUE2QmdCLFNBQTdCOztBQUlBOztBQUVBO0FBQ0E7QUFDQSxNQUFNekIsT0FBTyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsT0FBZixFQUF3QixPQUF4QixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxFQUFpRCxLQUFqRCxFQUF3RCxLQUF4RCxFQUErRCxNQUEvRCxFQUF1RSxNQUF2RSxFQUErRSxLQUEvRSxFQUFzRixLQUF0RixFQUE2RixLQUE3RixFQUFvRyxPQUFwRyxDQUFiOztBQUVBLE1BQU1rQyxhQUFhbEMsS0FBS21DLE1BQUwsQ0FBWSxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0I7O0FBRWpEO0FBQ0EsUUFBRyxDQUFDRCxJQUFJQyxJQUFKLENBQUosRUFBZTtBQUNiRCxVQUFJQyxJQUFKLElBQVksQ0FBWjtBQUNEO0FBQ0RELFFBQUlDLElBQUo7QUFDQTtBQUNBLFdBQU9ELEdBQVA7QUFDRCxHQVRrQixFQVNqQixFQVRpQixDQUFuQjs7QUFZQXpCLFVBQVEyQixHQUFSLENBQVlKLFVBQVo7QUFLQyxDQWpHRCIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW52ZW50b3JzID0gW1xuICB7IGZpcnN0OiAnQWxiZXJ0JywgbGFzdDogJ0VpbnN0ZWluJywgeWVhcjogMTg3OSwgcGFzc2VkOiAxOTU1IH0sXG4gIHsgZmlyc3Q6ICdJc2FhYycsIGxhc3Q6ICdOZXd0b24nLCB5ZWFyOiAxNjQzLCBwYXNzZWQ6IDE3MjcgfSxcbiAgeyBmaXJzdDogJ0dhbGlsZW8nLCBsYXN0OiAnR2FsaWxlaScsIHllYXI6IDE1NjQsIHBhc3NlZDogMTY0MiB9LFxuICB7IGZpcnN0OiAnTWFyaWUnLCBsYXN0OiAnQ3VyaWUnLCB5ZWFyOiAxODY3LCBwYXNzZWQ6IDE5MzQgfSxcbiAgeyBmaXJzdDogJ0pvaGFubmVzJywgbGFzdDogJ0tlcGxlcicsIHllYXI6IDE1NzEsIHBhc3NlZDogMTYzMCB9LFxuICB7IGZpcnN0OiAnTmljb2xhdXMnLCBsYXN0OiAnQ29wZXJuaWN1cycsIHllYXI6IDE0NzMsIHBhc3NlZDogMTU0MyB9LFxuICB7IGZpcnN0OiAnTWF4JywgbGFzdDogJ1BsYW5jaycsIHllYXI6IDE4NTgsIHBhc3NlZDogMTk0NyB9LFxuICB7IGZpcnN0OiAnS2F0aGVyaW5lJywgbGFzdDogJ0Jsb2RnZXR0JywgeWVhcjogMTg5OCwgcGFzc2VkOiAxOTc5IH0sXG4gIHsgZmlyc3Q6ICdBZGEnLCBsYXN0OiAnTG92ZWxhY2UnLCB5ZWFyOiAxODE1LCBwYXNzZWQ6IDE4NTIgfSxcbiAgeyBmaXJzdDogJ1NhcmFoIEUuJywgbGFzdDogJ0dvb2RlJywgeWVhcjogMTg1NSwgcGFzc2VkOiAxOTA1IH0sXG4gIHsgZmlyc3Q6ICdMaXNlJywgbGFzdDogJ01laXRuZXInLCB5ZWFyOiAxODc4LCBwYXNzZWQ6IDE5NjggfSxcbiAgeyBmaXJzdDogJ0hhbm5hJywgbGFzdDogJ0hhbW1hcnN0csO2bScsIHllYXI6IDE4MjksIHBhc3NlZDogMTkwOSB9XG5dO1xuXG5cbmZ1bmN0aW9uIHRhYmxlUmVuZGVyKGRhdGEsIGlkKXtcbiAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9IHRib2R5YCk7XG5cbiAgbGV0IGRhdGFSb3dzID0gZGF0YS5tYXAoKHBlcnNvbixpKSA9PlxuICBgPHRyPlxuICA8dGQ+ICR7aSsxfTwvdGQ+XG4gIDx0ZD4gJHtwZXJzb24uZmlyc3R9ICR7cGVyc29uLmxhc3R9PC90ZD5cbiAgPHRkPiAke3BlcnNvbi5wYXNzZWQgLSBwZXJzb24ueWVhcn08L3RkPlxuICA8dGQ+ICR7cGVyc29uLnllYXJ9PC90ZD5cbiAgPHRkPiAke3BlcnNvbi5wYXNzZWR9PC90ZD5cbiAgPC90cj5cbiAgYFxuKTtcbnRhYmxlQm9keS5pbm5lckhUTUwgPSBkYXRhUm93cy5qb2luKFwiXCIpO1xuY29uc29sZS50YWJsZShkYXRhKVxufVxuXG5cblxuLy8gIFBlb3BsZSBEYXRhc2V0XG5jb25zdCBwZW9wbGUgPSBbJ0JlY2ssIEdsZW5uJywgJ0JlY2tlciwgQ2FybCcsICdCZWNrZXR0LCBTYW11ZWwnLCAnQmVkZG9lcywgTWljaycsICdCZWVjaGVyLCBIZW5yeScsICdCZWV0aG92ZW4sIEx1ZHdpZycsICdCZWdpbiwgTWVuYWNoZW0nLCAnQmVsbG9jLCBIaWxhaXJlJywgJ0JlbGxvdywgU2F1bCcsICdCZW5jaGxleSwgUm9iZXJ0JywgJ0JlbmVuc29uLCBQZXRlcicsICdCZW4tR3VyaW9uLCBEYXZpZCcsICdCZW5qYW1pbiwgV2FsdGVyJywgJ0Jlbm4sIFRvbnknLCAnQmVubmluZ3RvbiwgQ2hlc3RlcicsICdCZW5zb24sIExlYW5hJywgJ0JlbnQsIFNpbGFzJywgJ0JlbnRzZW4sIExsb3lkJywgJ0JlcmdlciwgUmljJywgJ0JlcmdtYW4sIEluZ21hcicsICdCZXJpbywgTHVjaWFubycsICdCZXJsZSwgTWlsdG9uJywgJ0JlcmxpbiwgSXJ2aW5nJywgJ0Jlcm5lLCBFcmljJywgJ0Jlcm5oYXJkLCBTYW5kcmEnLCAnQmVycmEsIFlvZ2knLCAnQmVycnksIEhhbGxlJywgJ0JlcnJ5LCBXZW5kZWxsJywgJ0JldGhlYSwgRXJpbicsICdCZXZhbiwgQW5ldXJpbicsICdCZXZlbCwgS2VuJywgJ0JpZGVuLCBKb3NlcGgnLCAnQmllcmNlLCBBbWJyb3NlJywgJ0Jpa28sIFN0ZXZlJywgJ0JpbGxpbmdzLCBKb3NoJywgJ0Jpb25kbywgRnJhbmsnLCAnQmlycmVsbCwgQXVndXN0aW5lJywgJ0JsYWNrLCBFbGsnLCAnQmxhaXIsIFJvYmVydCcsICdCbGFpciwgVG9ueScsICdCbGFrZSwgV2lsbGlhbSddO1xuXG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cblxuICAvLyBGaWxsIHRoZSBpbnZlbnRvcnMgRGF0YSBpbiB0aGUgdGFibGVcblxuICB0YWJsZVJlbmRlcihpbnZlbnRvcnMsIFwiY29tcGxldGVEYXRhXCIpXG5cblxuXG4gIC8vIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoKVxuICAvLyAxLiBGaWx0ZXIgdGhlIGxpc3Qgb2YgaW52ZW50b3JzIGZvciB0aG9zZSB3aG8gd2VyZSBib3JuIGluIHRoZSAxNTAwJ3NcblxuXG4gIGNvbnN0IGJvcm4xNTAwcyA9IGludmVudG9ycy5maWx0ZXIoaW52ZW50b3IgPT4gKGludmVudG9yLnllYXIgPj0gMTUwMCAmJiBpbnZlbnRvci55ZWFyIDw9IDE1OTkpKTtcblxuICB0YWJsZVJlbmRlcihib3JuMTUwMHMsIFwiYm9ybkluMTUwMHNcIik7XG5cblxuXG4gIC8vIEFycmF5LnByb3RvdHlwZS5tYXAoKVxuICAvLyAyLiBHaXZlIHVzIGFuIGFycmF5IG9mIHRoZSBpbnZlbnRvcnMnIGZpcnN0IGFuZCBsYXN0IG5hbWVzXG5cbiAgLy8gQWxyZWFkeSBkb25lIGluIHRhYmxlUmVuZGVyIGZ1bmN0aW9uXG5cblxuICAvLyBBcnJheS5wcm90b3R5cGUuc29ydCgpXG4gIC8vIDMuIFNvcnQgdGhlIGludmVudG9ycyBieSBiaXJ0aGRhdGUsIG9sZGVzdCB0byB5b3VuZ2VzdFxuXG4gIGNvbnN0IG9yZGVyZWRCeUJpcnRoID0gaW52ZW50b3JzLnNvcnQoKGEsYikgPT4gKGEueWVhciA+IGIueWVhcikgPyAxIDogLTEgKTtcblxuICB0YWJsZVJlbmRlcihvcmRlcmVkQnlCaXJ0aCwgXCJvcmRlcmRCaXJ0aFwiKVxuXG5cbiAgLy8gQXJyYXkucHJvdG90eXBlLnJlZHVjZSgpXG4gIC8vIDQuIEhvdyBtYW55IHllYXJzIGRpZCBhbGwgdGhlIGludmVudG9ycyBsaXZlP1xuXG5cbiAgLy8gNS4gU29ydCB0aGUgaW52ZW50b3JzIGJ5IHllYXJzIGxpdmVkXG5cbiAgY29uc3Qgb3JkZXJlZEJ5TGl2ZWQgPSBpbnZlbnRvcnMuc29ydCgoYSxiKSA9PiAoYS5wYXNzZWQgLSBhLnllYXIgPiBiLnBhc3NlZCAtICBiLnllYXIpID8gMSA6IC0xICk7XG5cbiAgdGFibGVSZW5kZXIob3JkZXJlZEJ5TGl2ZWQsIFwib3JkZXJlZExpdmVkXCIpXG5cblxuXG5cbiAgLy8gRmlsbGluZyB0aGUgcGFyYWdyYXBoIHdpdGggZGF0YVxuICBjb25zdCBwZW9wbGVQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Blb3BsZScpO1xuXG4gIGxldCBwYXJhZ3JhcGggPSBwZW9wbGUubWFwKHAgPT4gcC5zcGxpdCgnLCcpLnJldmVyc2UoKS5qb2luKCkucmVwbGFjZSgnLCcsXCIgXCIpKS5qb2luKCcsJylcblxuICBwZW9wbGVQYXJhLmlubmVySFRNTCA9IHBhcmFncmFwaDtcblxuICAvLyA3LiBzb3J0IEV4ZXJjaXNlXG4gIC8vIFNvcnQgdGhlIHBlb3BsZSBhbHBoYWJldGljYWxseSBieSBsYXN0IG5hbWVcblxuICBjb25zdCBwZW9wbGVTb3J0ZWRQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Blb3BsZVNvcnRlZCcpO1xuXG4gIGNvbnN0IHNvcnRlZFBlb3BsZSA9IHBlb3BsZS5zb3J0KChsYXN0T25lLCBuZXh0T25lKSA9PlxuICBsYXN0T25lLnNwbGl0KCcsICcpWzFdID4gbmV4dE9uZS5zcGxpdCgnLCAnKVsxXSA/IDEgOiAtMVxuKTtcblxuXG4vLyAgRGVzdHJ1Y3R1cmluZyBhcnJheSBpbnRvIHZhcmlhYmxlc1xuLy8gY29uc3QgW2xhc3QsIGZpcnN0XSA9IGxhc3RPbmUuc3BsaXQoJywgJyk7XG5cblxucGFyYWdyYXBoID0gc29ydGVkUGVvcGxlLm1hcChwID0+IHAuc3BsaXQoJywnKS5yZXZlcnNlKCkuam9pbigpLnJlcGxhY2UoJywnLFwiIFwiKSkuam9pbignLCcpXG5cbnBlb3BsZVNvcnRlZFBhcmEuaW5uZXJIVE1MID0gcGFyYWdyYXBoO1xuXG5cblxuLy8gUmVkdWNlIHN0YXJ0cyB3aXRoIGEgYmxhbmsgb2JqZWN0IGFuZCB0aGUgbG9vcHMgb3ZlciB0aGUgY29tcGxldGUgYXJyYXlcblxuLy8gOC4gUmVkdWNlIEV4ZXJjaXNlXG4vLyBTdW0gdXAgdGhlIGluc3RhbmNlcyBvZiBlYWNoIG9mIHRoZXNlXG5jb25zdCBkYXRhID0gWydjYXInLCAnY2FyJywgJ3RydWNrJywgJ3RydWNrJywgJ2Jpa2UnLCAnd2FsaycsICdjYXInLCAndmFuJywgJ2Jpa2UnLCAnd2FsaycsICdjYXInLCAndmFuJywgJ2NhcicsICd0cnVjaycgXTtcblxuY29uc3QgdHJhbnNwb3J0cyA9IGRhdGEucmVkdWNlKGZ1bmN0aW9uKG9iaiwgaXRlbSkge1xuXG4gIC8vIENoZWNrcyBpZiB0aGUgb2JqZWN0IGhhcyB0aGUgY3VycmVudCBpdGVtIGtleSwgaWYgbm90IG1ha2VzIG9uIGFuZCBkZWZhdWx0cyBpdCB0byAwXG4gIGlmKCFvYmpbaXRlbV0pIHtcbiAgICBvYmpbaXRlbV0gPSAwO1xuICB9XG4gIG9ialtpdGVtXSsrO1xuICAvLyBjb25zb2xlLmxvZyhvYmosaXRlbSk7XG4gIHJldHVybiBvYmo7XG59LHt9KVxuXG5cbmNvbnNvbGUubG9nKHRyYW5zcG9ydHMpO1xuXG5cblxuXG59O1xuIl19
