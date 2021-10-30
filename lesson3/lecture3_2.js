const myCat = {
    name: 'Rex',
    age: 6,
    color: 'grey',
    needFood: false,
    getSummary: function(){
        return `Cat's name is ${this.name}. He is ${this.age}. His color is ${this.color}. Needs food: ${this.needFood}`
    },
    getLog: function(){
        console.log(`This content:`, this)
    }
}

const myFriendsCat = {
    name: 'Bill',
    age: 4,
    color: 'black',
    needFood: true,
}

// myCat.getSummary.apply(myFriendsCat, [myFriendsCat.name, myFriendsCat.age, myFriendsCat.color, myFriendsCat.needFood])

const myFriendsCatInfo = myCat.getSummary.bind(myFriendsCat)
console.log(myFriendsCatInfo())