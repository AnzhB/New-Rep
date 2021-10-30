const myCat = {
    name: 'Rex',
    age: 6,
    color: 'Grey',
    needFood: false,
    get getSummary(){
        return `Cat's name is ${this.name}. He is ${this.age}. His color is ${this.color}. Needs food: ${this.needFood}`
    },
    get getLog(){
        console.log(`This content:`, this)
    },
    get getCatsColor(){
        if(this.color){
            return `Cat's color is ${this.color}`
        } else{
            return `No data`
        }
    },
    set setCatsColor(color){
        if(color){
            this.color = color
        } else{
            throw new Error('Check the argument')
        }
    }
}

const myFriendsCat = Object.create(myCat)

myFriendsCat.name = 'Bill'
myFriendsCat.age = 4
myFriendsCat.color = 'black'
myFriendsCat.needFood = true


console.log(myFriendsCat)