
'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let sales = document.getElementById('sales');
function randomNumber(min, max) {
  return (Math.floor(Math.random() * (max - min + 1) + min));
}

let all = [];
function Shop(LocationCity, minNumOfCust, maxNumOfCust, avgCookiesSales) {
  this.LocationCity = LocationCity;
  this.minNumOfCust = minNumOfCust;
  this.maxNumOfCust = maxNumOfCust;
  this.avgCookiesSales = avgCookiesSales;
  this.numOFCookies = [];
  this.totalCookies = 0;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  all.push(this);
};
Shop.prototype.getCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    let randdom1 = Math.ceil(randomNumber(this.minNumOfCust, this.maxNumOfCust) * this.avgCookiesSales);
    this.numOFCookies.push(randdom1);
    this.totalCookies += randdom1;
  }
  return this.numOFCookies, this.totalCookies;
}


Shop.prototype.rendaring = function () {
  let trElement = document.createElement('tr');
  sales.appendChild(trElement);

  let thElement = document.createElement('th');
  thElement.textContent = this.LocationCity;
  trElement.appendChild(thElement);

  for (let i = 0; i < this.numOFCookies.length; i++) {
    let tdElement1 = document.createElement('td');
    tdElement1.textContent = this.numOFCookies[i];
    trElement.appendChild(tdElement1);
  }
  let tdElement1 = document.createElement('td');
  tdElement1.textContent = this.totalCookies;
  trElement.appendChild(tdElement1);
};
let Seattle = new Shop('Seattle', 23, 65, 6.3)
tblHeader()
Seattle.getCookies();
Seattle.rendaring();
let Tokyo = new Shop('Tokyo', 3, 24, 1.2)
Tokyo.getCookies();
Tokyo.rendaring();
let Dubai = new Shop('Dubai', 11, 38, 6.3)
Dubai.getCookies();
Dubai.rendaring();
let Paris = new Shop('Paris', 20, 38, 2.3)
Paris.getCookies();
Paris.rendaring();
let Lima = new Shop('Lima', 2, 16, 4.6)
Lima.getCookies();
Lima.rendaring();
tblFooter()

function tblHeader() {
  let trElement = document.createElement('tr');
  sales.appendChild(trElement);
  hours.unshift('')
  hours.push('Daily Total');
  for (let i = 0; i < hours.length; i++) {

    let thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  hours.shift();
  hours.pop();
}

function tblFooter() {
  let trElement = document.createElement('tr');
  sales.appendChild(trElement);
  hours.unshift('')
  hours.push('Daily Total');
  for (let i = 0; i < hours.length; i++) {
    let dailyTotal = 0;
    for (let j = 0; j < all.length; j++) {
      dailyTotal += all[j].numOFCookies[j]
    }
    let thElement = document.createElement('th');
    thElement.textContent = dailyTotal; 
    trElement.appendChild(thElement);
  }
  let totalOfTotal = 0
  for (let j = 0; j < all.length; j++)
   { totalOfTotal += all[j].totalCookies }

  let thElement = document.createElement('th');
  thElement.textContent = totalOfTotal;
  trElement.appendChild(thElement);
}



//  const Seattle =

//  {
//      LocationCity:'seattle',
//      minNumOfCust:23,
//      maxNumOfCust:65,
//      avgCookiesSales:6.3,
//      numOFCookies: [], 
//      totalCookies: 0,
//      getCookies: function() {
//          for(let i=0; i<hours.length; i++) {
//            let randdom1 = Math.ceil(randomNumber(this.minNumOfCust, this.maxNumOfCust) * this.avgCookiesSales);
//            this.numOFCookies.push(randdom1);
//            this.totalCookies += randdom1;
//          }
//          return this.numOFCookies, this.totalCookies;
//        },

//      rendering: function() {
//          let articleElement = document.createElement('article');
//          sales.appendChild(articleElement);

//          let h3Element = document.createElement('h3');
//          h3Element.textContent = this.LocationCity;
//          articleElement.appendChild(h3Element);


//          let ulElement = document.createElement('ul');
//          articleElement.appendChild(ulElement);
//          for(let j = 0; j<hours.length; j++) {
//            let liElement = document.createElement('li');
//            liElement.textContent = `${hours[j]}: ${this.numOFCookies[j]} cookies`;
//            ulElement.appendChild(liElement);
//          }

//          let liElement = document.createElement('li');
//          liElement.textContent = `Total: ${this.totalCookies} cookies`;
//          ulElement.appendChild(liElement);
//        },

//  };



//  const Tokyo = {
//      LocationCity:'Tokyo',
//      minNumOfCust:3,
//      maxNumOfCust:24,
//      avgCookiesSales:1.2,
//      numOFCookies: [], 
//      totalCookies: 0,
//      getCookies: function() {
//          for(let i=0; i<hours.length; i++) {
//            let randdom1 = Math.ceil(randomNumber(this.minNumOfCust, this.maxNumOfCust) * this.avgCookiesSales);
//            this.numOFCookies.push(randdom1);
//            this.totalCookies += randdom1;
//          }
//          return this.numOFCookies, this.totalCookies;
//        },

//      rendering: function() {
//          let articleElement = document.createElement('article');
//          sales.appendChild(articleElement);

//          let h3Element = document.createElement('h3');
//          h3Element.textContent = this.LocationCity;
//          articleElement.appendChild(h3Element);

//          let ulElement = document.createElement('ul');
//          articleElement.appendChild(ulElement);
//          for(let j = 0; j<hours.length; j++) {
//            let liElement = document.createElement('li');
//            liElement.textContent = `${hours[j]}: ${this.numOFCookies[j]} cookies`;
//            ulElement.appendChild(liElement);
//          }

//          let liElement = document.createElement('li');
//          liElement.textContent = `Total: ${this.totalCookies} cookies`;
//          ulElement.appendChild(liElement);
//        },

//    };



//  const Dubai = {
//      LocationCity:'Dubai',
//      minNumOfCust: 11,
//      maxNumOfCust:38,
//      avgCookiesSales:6.3,
//      numOFCookies: [], 
//      totalCookies: 0,
//      getCookies: function() {
//          for(let i=0; i<hours.length; i++) {
//            let randdom1 = Math.ceil(randomNumber(this.minNumOfCust, this.maxNumOfCust) * this.avgCookiesSales);
//            this.numOFCookies.push(randdom1);
//            this.totalCookies += randdom1;
//          }
//          return this.numOFCookies, this.totalCookies;
//        },

//      rendering: function() {
//          let articleElement = document.createElement('article');
//          sales.appendChild(articleElement);

//          let h3Element = document.createElement('h3');
//          h3Element.textContent = this.LocationCity;
//          articleElement.appendChild(h3Element);

//          let ulElement = document.createElement('ul');
//          articleElement.appendChild(ulElement);
//          for(let j = 0; j<hours.length; j++) {
//            let liElement = document.createElement('li');
//            liElement.textContent = `${hours[j]}: ${this.numOFCookies[j]} cookies`;
//            ulElement.appendChild(liElement);
//          }

//          let liElement = document.createElement('li');
//          liElement.textContent = `Total: ${this.totalCookies} cookies`;
//          ulElement.appendChild(liElement);
//        },

//    };


//    const Paris = {
//      LocationCity:'Paris',
//      minNumOfCust: 20,
//      maxNumOfCust:38,
//      avgCookiesSales:2.3,
//      numOFCookies: [], 
//      totalCookies: 0,
//      getCookies: function() {
//          for(let i=0; i<hours.length; i++) {
//            let randdom1 = Math.ceil(randomNumber(this.minNumOfCust, this.maxNumOfCust) * this.avgCookiesSales);
//            this.numOFCookies.push(randdom1);
//            this.totalCookies += randdom1;
//          }
//          return this.numOFCookies, this.totalCookies;
//        },

//      rendering: function() {
//          let articleElement = document.createElement('article');
//          sales.appendChild(articleElement);

//          let h3Element = document.createElement('h3');
//          h3Element.textContent = this.LocationCity;
//          articleElement.appendChild(h3Element);

//          let ulElement = document.createElement('ul');
//          articleElement.appendChild(ulElement);
//          for(let j = 0; j<hours.length; j++) {
//            let liElement = document.createElement('li');
//            liElement.textContent = `${hours[j]}: ${this.numOFCookies[j]} cookies`;
//            ulElement.appendChild(liElement);
//          }

//          let liElement = document.createElement('li');
//          liElement.textContent = `Total: ${this.totalCookies} cookies`;
//          ulElement.appendChild(liElement);
//        },

//    };


//    const Lima = {
//      LocationCity:'lima',
//      minNumOfCust: 2,
//      maxNumOfCust:16,
//      avgCookiesSales:4.6,
//      numOFCookies: [], 
//      totalCookies: 0,
//      getCookies: function() {
//          for(let i=0; i<hours.length; i++) {
//            let randdom1 = Math.ceil(randomNumber(this.minNumOfCust, this.maxNumOfCust) * this.avgCookiesSales);
//            this.numOFCookies.push(randdom1);
//            this.totalCookies += randdom1;
//          }
//          return this.numOFCookies, this.totalCookies;
//        },

//      rendering: function() {
//          let articleElement = document.createElement('article');
//          sales.appendChild(articleElement);

//          let h3Element = document.createElement('h3');
//          h3Element.textContent = this.LocationCity;
//          articleElement.appendChild(h3Element);

//          let ulElement = document.createElement('ul');
//          articleElement.appendChild(ulElement);
//          for(let j = 0; j<hours.length; j++) {
//            let liElement = document.createElement('li');
//            liElement.textContent = `${hours[j]}: ${this.numOFCookies[j]} cookies`;
//            ulElement.appendChild(liElement);
//          }

//          let liElement = document.createElement('li');
//          liElement.textContent = `Total: ${this.totalCookies} cookies`;
//          ulElement.appendChild(liElement);
//        },


//    };


//  //Calling functions for each LocationCity:
//  Seattle.getCookies(); 
//  Seattle.rendering();

//  Tokyo.getCookies();
//  Tokyo.rendering();

//  Dubai.getCookies();
//  Dubai.rendering();

//  Paris.getCookies();
//  Paris.rendering();

//  Lima.getCookies();
//  Lima.rendering();
