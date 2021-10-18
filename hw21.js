
function pinCodeGenerator (lenght) {
let arr = []
for (i= 0; i <lenght; i++ ) {
    arr.unshift(getRandomInt(0, 9))
}
console.log(arr.join(""));
}

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  pinCodeGenerator (5)