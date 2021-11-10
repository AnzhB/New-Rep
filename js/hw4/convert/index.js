import * as fs from 'fs'
import fetch from 'node-fetch'
// imports should be commented to run lite-server via npm run serve

//promises

function convert(from, amount) {

  const access_key = '1412c008416813e4c44df80a30838500';
  
  fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${ access_key }&symbols=USD,AUD,CAD,PLN,MXN&format=1`) 
  .then(response => response.json())
  .then(data => {

    if (data.error) {
      console.log('Error:', data.error);
      return;
    }
   // console.log(data);

    if(from === "USD") {
       console.log(amount +' USD = ', Math.round(amount / data.rates.USD) + ' EUR');
    }
    if(from === "EUR") {
      console.log(amount +' EUR = ', Math.round(data.rates.USD * amount) + ' USD');
      }
    })
      .catch((error) => {
      console.error('Error:', error);
    });
}

convert("EUR", 10);
convert("USD", 20);


//async/await

async function convert2 (from, amount) {
  try {
    const access_key = '1412c008416813e4c44df80a30838500';
    const res = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${ access_key }&symbols=USD,AUD,CAD,PLN,MXN&format=1`); 

    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }

    const data = await res.json();

   // console.log(data);

    if(from === "USD") {
      console.log(amount +' USD = ', Math.round(amount / data.rates.USD) + ' EUR');
   }
   if(from === "EUR") {
     console.log(amount +' EUR = ', Math.round(data.rates.USD * amount) + ' USD');
     }

  } catch (err) {
    console.error(err);
  }
}

convert2("EUR", 30);
convert2("USD", 40);