// Interface segregation principle

class Animals {
    constructor(name) {
        this.name = name
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} умеет плавать`)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} умеет летать`)
    }
}

const walker = {
    walk() {
        console.log(`${this.name} умеет ходить`)
    }
}

class Dog extends Animals {}
class Eagle extends Animals {}
class Whale extends Animals {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Sus')
dog.swim()

const eagle = new Eagle('Eagle')
eagle.walk()

const whale = new Whale('big whale')
whale.swim()
