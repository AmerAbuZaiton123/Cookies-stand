
 'use strict';

 let hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
 let sales=document.getElementById('sales');
 function randomNumber(min, max) {
     return(Math.floor(Math.random() * (max - min + 1) + min));
   }
 
 const Seattle =
 {
     LocationCity:'seattle',
     minNumOfCust:23,
     maxNumOfCust:65,
     avgCookiesSales:6.3,
     numOFCookies: [], 
     totalCookies: 0,
     getCookies: function() {
         for(let i=0; i<hours.length; i++) {
           let randdom1 = Math.ceil(randomNumber(this.minNumOfCust, this.maxNumOfCust) * this.avgCookiesSales);
           this.numOFCookies.push(randdom1);
           this.totalCookies += randdom1;
         }
         return this.numOFCookies, this.totalCookies;
       },
 
     rendering: function() {
         let articleElement = document.createElement('article');
         sales.appendChild(articleElement);
         
         let h3Element = document.createElement('h3');
         h3Element.textContent = this.LocationCity;
         articleElement.appendChild(h3Element);
         
         let ulElement = document.createElement('ul');
         articleElement.appendChild(ulElement);
         for(let j = 0; j<hours.length; j++) {
           let liElement = document.createElement('li');
           liElement.textContent = `${hours[j]}: ${this.numOFCookies[j]} cookies`;
           ulElement.appendChild(liElement);
         }
         
         let liElement = document.createElement('li');
         liElement.textContent = `Total: ${this.totalCookies} cookies`;
         ulElement.appendChild(liElement);
       },
     
 };
 
 
 
 const Tokyo = {
     LocationCity:'Tokyo',
     minNumOfCust:3,
     maxNumOfCust:24,
     avgCookiesSales:1.2,
     numOFCookies: [], 
     totalCookies: 0,
     getCookies: function() {
         for(let i=0; i<hours.length; i++) {
           let randdom1 = Math.ceil(randomNumber(this.minNumOfCust, this.maxNumOfCust) * this.avgCookiesSales);
           this.numOFCookies.push(randdom1);
           this.totalCookies += randdom1;
         }
         return this.numOFCookies, this.totalCookies;
       },
 
     rendering: function() {
         let articleElement = document.createElement('article');
         sales.appendChild(articleElement);
         
         let h3Element = document.createElement('h3');
         h3Element.textContent = this.LocationCity;
         articleElement.appendChild(h3Element);
         
         let ulElement = document.createElement('ul');
         articleElement.appendChild(ulElement);
         for(let j = 0; j<hours.length; j++) {
           let liElement = document.createElement('li');
           liElement.textContent = `${hours[j]}: ${this.numOFCookies[j]} cookies`;
           ulElement.appendChild(liElement);
         }
         
         let liElement = document.createElement('li');
         liElement.textContent = `Total: ${this.totalCookies} cookies`;
         ulElement.appendChild(liElement);
       },
 
   };
   
 
   
 const Dubai = {
     LocationCity:'Dubai',
     minNumOfCust: 11,
     maxNumOfCust:38,
     avgCookiesSales:6.3,
     numOFCookies: [], 
     totalCookies: 0,
     getCookies: function() {
         for(let i=0; i<hours.length; i++) {
           let randdom1 = Math.ceil(randomNumber(this.minNumOfCust, this.maxNumOfCust) * this.avgCookiesSales);
           this.numOFCookies.push(randdom1);
           this.totalCookies += randdom1;
         }
         return this.numOFCookies, this.totalCookies;
       },
 
     rendering: function() {
         let articleElement = document.createElement('article');
         sales.appendChild(articleElement);
         
         let h3Element = document.createElement('h3');
         h3Element.textContent = this.LocationCity;
         articleElement.appendChild(h3Element);
         
         let ulElement = document.createElement('ul');
         articleElement.appendChild(ulElement);
         for(let j = 0; j<hours.length; j++) {
           let liElement = document.createElement('li');
           liElement.textContent = `${hours[j]}: ${this.numOFCookies[j]} cookies`;
           ulElement.appendChild(liElement);
         }
         
         let liElement = document.createElement('li');
         liElement.textContent = `Total: ${this.totalCookies} cookies`;
         ulElement.appendChild(liElement);
       },
 
   };
   
   
   const Paris = {
     LocationCity:'Paris',
     minNumOfCust: 20,
     maxNumOfCust:38,
     avgCookiesSales:2.3,
     numOFCookies: [], 
     totalCookies: 0,
     getCookies: function() {
         for(let i=0; i<hours.length; i++) {
           let randdom1 = Math.ceil(randomNumber(this.minNumOfCust, this.maxNumOfCust) * this.avgCookiesSales);
           this.numOFCookies.push(randdom1);
           this.totalCookies += randdom1;
         }
         return this.numOFCookies, this.totalCookies;
       },
 
     rendering: function() {
         let articleElement = document.createElement('article');
         sales.appendChild(articleElement);
         
         let h3Element = document.createElement('h3');
         h3Element.textContent = this.LocationCity;
         articleElement.appendChild(h3Element);
         
         let ulElement = document.createElement('ul');
         articleElement.appendChild(ulElement);
         for(let j = 0; j<hours.length; j++) {
           let liElement = document.createElement('li');
           liElement.textContent = `${hours[j]}: ${this.numOFCookies[j]} cookies`;
           ulElement.appendChild(liElement);
         }
         
         let liElement = document.createElement('li');
         liElement.textContent = `Total: ${this.totalCookies} cookies`;
         ulElement.appendChild(liElement);
       },
 
   };
   
 
   const Lima = {
     LocationCity:'lima',
     minNumOfCust: 2,
     maxNumOfCust:16,
     avgCookiesSales:4.6,
     numOFCookies: [], 
     totalCookies: 0,
     getCookies: function() {
         for(let i=0; i<hours.length; i++) {
           let randdom1 = Math.ceil(randomNumber(this.minNumOfCust, this.maxNumOfCust) * this.avgCookiesSales);
           this.numOFCookies.push(randdom1);
           this.totalCookies += randdom1;
         }
         return this.numOFCookies, this.totalCookies;
       },
 
     rendering: function() {
         let articleElement = document.createElement('article');
         sales.appendChild(articleElement);
         
         let h3Element = document.createElement('h3');
         h3Element.textContent = this.LocationCity;
         articleElement.appendChild(h3Element);
         
         let ulElement = document.createElement('ul');
         articleElement.appendChild(ulElement);
         for(let j = 0; j<hours.length; j++) {
           let liElement = document.createElement('li');
           liElement.textContent = `${hours[j]}: ${this.numOFCookies[j]} cookies`;
           ulElement.appendChild(liElement);
         }
         
         let liElement = document.createElement('li');
         liElement.textContent = `Total: ${this.totalCookies} cookies`;
         ulElement.appendChild(liElement);
       },
 
           
   };
   
 
 //Calling functions for each LocationCity:
 Seattle.getCookies(); 
 Seattle.rendering();
 
 Tokyo.getCookies();
 Tokyo.rendering();
 
 Dubai.getCookies();
 Dubai.rendering();
 
 Paris.getCookies();
 Paris.rendering();
 
 Lima.getCookies();
 Lima.rendering();
 