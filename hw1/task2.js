for (let i = 1; i < 101; i++) {
  
    if (i%3==0) {
        if (i%5==0) {
            console.log (i + ' делится и на 5 и на 3 без остатка') 
        } 

        console.log (i + ' делится на 3 без остатка')  
      
        if (i%5==0) {
            console.log (i + ' делится на 5 без остатка')
        } 
   
    } else {
    console.log (i)
    }
}