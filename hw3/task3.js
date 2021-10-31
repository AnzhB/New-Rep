class Zoo {
    constructor(address, area, establishedDate, ticketPrice, workers = [],   animals = []){
      this._address = address
      this._area = area
      this._establishedDate = establishedDate
      this._ticketPrice = ticketPrice
      this._workers = workers
      this._animals = animals    
  }
  
  get address(){
    return this._address
  }
  
  set address (street){
    if(typeof(street) === 'string'){
        this._address = street
    } else{
        console.log('Wrong adress')
    }
  }
  
  get area(){
    return this._area
  }
  
  set area (square){
    if(typeof(square) === 'number'){
        this._area = square
    } else{
        console.log('Wrong area')
    }
  }
  
  get establishedDate(){
    return this._establishedDate
  }
  
  get ticketPrice(){
    return this._ticketPrice
  }
  
  set ticketPrice (price){
    if(typeof(price) === 'number'){
        this._ticketPrice = price
    } else{
        console.log('Invaid price')
    }
  }
  
  addWorker(value) {
    this._workers.push(value)
  }

  removeWorker(index) {
    this._workers.splice(index, 1)
  }

  editWorkers(index) {
    this._workers[index]
  }
  
  addAnimal(value) {
    this._animals.push(value)
  }
  removeAnimal(index) {
    this._animals.splice(index, 1)
  }
  editAnimals(index) {
    this._animals[index]
  }
  
  showAllAnimals () {
    console.log(Animal.animals)
  }
  
  showAnimalsById  () {
    for (i= 0; i < Animal.animals.lenght; i++ ) {
  
    console.log(Animal.animals.index + " " + Animal.animals[i])
  }
  }
  
  showAllWorkers () {
    console.log(Worker.workers)
  }
  }
  
  class Animal {
    constructor(type, color, weight, height, placeOfOrigin){
      this._type = type
      this._color = color
      this._weight = weight
      this._height = height
      this._placeOfOrigin = placeOfOrigin
  }
  
  get animalInfo(){
    return `Animal's type is ${this.type}. Color - ${this.color},  weight -  ${this.weight}, height -  ${this.height}. Place of origin: ${this.placeOfOrigin}`
  }
  
  set weight (num){
    if(typeof(num) === 'number'){
        this._weight = num
    } else{
        console.log('Wrong weight')
    }
  }
  set height (num){
    if(typeof(num) === 'number'){
        this._height = num
    } else{
        console.log('Wrong weight')
    }
  }
  }
  
  class Snakes  extends Animal {
    constructor(type, color, weight, height, placeOfOrigin, isPoisonous){
      super(type, color, weight, height, placeOfOrigin)
      this._isPoisonous = isPoisonous 
  }
  }
  
  class CatLike extends Animal{
    constructor(type, color, weight, height, placeOfOrigin, isSafeToPet){
      super(type, color, weight, height, placeOfOrigin)
      this._isSafeToPet = isSafeToPet
  }
  }
  
  class Birds extends Animal{
    constructor(type, color, weight, height, placeOfOrigin, isFlying){
      super(type, color, weight, height, placeOfOrigin)
      this._isFlying = isFlying
  }
  }
  
  class Worker {
    constructor(firstName, lastName, phone) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._phone = phone;
    }
  }
  
  