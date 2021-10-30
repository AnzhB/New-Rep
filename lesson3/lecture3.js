const myCat = {
    name: 'Rex',
    age: 6,
    color: 'grey',
    needFood: false,
    getSummary: function(name, age, color, needFood){
        console.log(`Cat's name is ${name}. He is ${age}. His color is ${color}. Needs food: ${needFood}`)
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

myCat.getSummary.apply(myFriendsCat, [myFriendsCat.name, myFriendsCat.age, myFriendsCat.color, myFriendsCat.needFood])