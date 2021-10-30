// Object inheritance - modern way
const b = {
    hello: function(){
        return 'hello'
    },
    hello2: function(){
        return 'hello'
    }
}

const a = Object.create(b)
const c = Object.create(b)

// Object inheritance - lagacy way

const F = function(){} // -- need to crate it to have access to prototype property

const b_legacy = F.prototype
b_legacy.legacyHello = function(){
    return 'legacy hello!'
}

const a_legacy = new F()
console.log(a_legacy)