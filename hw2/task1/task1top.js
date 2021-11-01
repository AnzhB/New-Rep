function pinCodeGenerator (length) {

    return length < 16 ? Math.random().toFixed(length).toString().split(".")[1] : "Pin code is too long"

}

function pinCodeGeneratorForXL (lenght) {
    let pin = " "

    for (let i = 0; i < lenght; i++ ) {
        pin = pin + Math.random().toFixed(1).split(".")[1]
    }
    return pin 
}

console.log(pinCodeGenerator(6))
console.log(pinCodeGenerator(17))
console.log(pinCodeGeneratorForXL(166))
