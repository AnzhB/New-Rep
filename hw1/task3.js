const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

let summ = 0
for (let i = 0; i <= prices.length-1; i++) {
     summ += parseInt(prices[i])  
}
const avv = summ/prices.length
   
    console.log('Итого: ' + summ + ' гривен, средняя цена товара ' + avv + ' гривен');

