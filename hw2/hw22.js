
function validatePhoneNymber(input) {
  let a = true
  for(n=0;n<input.length;n++){
    let ascii = input.charCodeAt(n)
  
    if (ascii>=48 && ascii<=57) { //numbers     
    } else 
    {
      if(n>0 && ascii==32){ //space after 0 position
    } else
    {
      a = false
      break
      }
    }
  }
  console.log(a)
}

let input1 = '067 734 4343'
let input2 = '094 643 7432' 
let input3 = '083 jfvj 4554' 
let input4 = 'Anton0938 884' 
let input5 = '0437348348' 
let input6 = ' 438348' 



validatePhoneNymber(input1)
validatePhoneNymber(input2)
validatePhoneNymber(input3)
validatePhoneNymber(input4)
validatePhoneNymber(input5)
validatePhoneNymber(input6)



