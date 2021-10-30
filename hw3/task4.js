
const str = 'HE!!LL??O0'
const symbols = ['!', '@', '#', '$', '%', '^','&', '*', '(', ')', '?', '/', '|', '0', '1', '2','3','4','5','6','7','8','9'] 


function removeSpecialCharacters (string, symbolsToDel) { 
  for (i=0; i<symbolsToDel.length; i++) {
    string=string.split(symbolsToDel[i]).join('')
}
console.log(string)
}
removeSpecialCharacters(str, symbols)
