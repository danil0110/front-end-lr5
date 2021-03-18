// =========================== МЕТОДЫ МАССИВОВ ===========================
// forEach #1
const arr1 = ['JavaScript', 'C++', 'Node.js', 'React.js', 'React Native'];
arr1.forEach(item => console.log(item));

// forEach #2
const arr2 = document.querySelectorAll('tabs tab-item');
let currentTab = 3;
arr2.forEach((item, i) => {
    item.classList.remove('visible');
});
arr2[currentTab].classList.add('visible');

// filter #1
const skillsData = [ ['C++', 'JS', 'C#'], ['Pascal', 'Ruby'], ['PHP', 'JS', 'Java', 'GO'] ];
const filteredSkillsData = skillsData.filter(item => item.length > 2);
console.log(filteredSkillsData);

// filter #2
const castingData = [ { name: 'John', age: 17 }, { name: 'Freddy', age: 19 }, { name: 'Mark', age: 20 } ];
const filteredCastingData = castingData.filter(item => item.age >= 18);
console.log(filteredCastingData);

// map #1
const wordsArray = ['Hello', 'World', 'I', 'Love', 'Programming'];
const wordsLengths = wordsArray.map(item => item.length);
console.log(wordsLengths);

// map #2
const weirdInputs = ['BaskETbaLL', 'FooTBAll', 'MotoCROss', 'RuNning', 'saILing'];
const normalInputs = weirdInputs.map(item => item.toLowerCase());
console.log(normalInputs);

// every #1
const checkboxArray = [ { checked: true }, { checked: true }, { checked: true }, { checked: true } ];
if (checkboxArray.every(item => item.checked)) {
    console.log('Every checkbox checked');
} else {
    console.log('Not every checkbox checked');
}

// every #2
const prices = [1700, 3000, 800, 750, 900, 1100];
if (prices.every(item => item > 1000)) {
    console.log('Every price higher than 1000');
} else {
    console.log('Not every price higher than 1000');
}

// some #1
const laboratoryWorks = [ { done: false }, { done: true }, { done: false }, { done: false }, { done: false } ];
if (laboratoryWorks.some(item => item.done)) {
    console.log('Student has got attestation');
} else {
    console.log('Student has been kicked from KPI');
}

// some #2
const newRecords = [500, 270, 410, 350, 510];
if (newRecords.some(item => item < 300)) {
    console.log('We got new record!');
} else {
    console.log('No new records');
}

// reduce
const salaries = [5000, 3100, 7500, 2800, 4280];
const totalSalary = salaries.reduce((sum, item) => sum + item);
console.log(totalSalary);

// reduceRight
const someStrings = ['Programming', 'Love', 'I', 'World', 'Hello'];
const resultString = someStrings.reduceRight((res, item) => `${res} ${item}`);
console.log(resultString);

// ====================== ООП ======================
// Prototypes
const Animal = function(name) {
    this.name = name;
}

Animal.prototype.run = function() {
    console.log(`running!`);
};

Animal.prototype.sayHi = function() {
    console.log(`Hi, I'm a ${this.name}!`);
}

const Dog = function(name, ownerName) {
    Animal.call(this, name);
    this.ownerName = ownerName;
    this._privateVoice = 'Woof';
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.sayHi = function() {
    console.log(`Hi, I'm ${this.name}, and I love my human ${this.ownerName}! ${this.woof()}!`);
};
Dog.prototype.woof = function() {
    return this._privateVoice;
}

const myAnimal1 = new Animal('Dinosaur');
myAnimal1.run();
myAnimal1.sayHi();

const myDog1 = new Dog('Sharik', 'John');
myDog1.run();
myDog1.sayHi();

console.log(myDog1 instanceof Animal);
console.log(myDog1 instanceof Dog);
console.log(myAnimal1 instanceof Animal);
console.log(myAnimal1 instanceof Dog);

// Функциональный стиль, замыкания
const funcAnimal = function(name) {
    this.name = name;

    this.run = function() {
        console.log('running');
    };

    this.sayHi = function() {
        console.log(`Hi, I'm ${this.name}!`);
    };
};

const funcDog = function(name, ownerName) {
    funcAnimal.call(this, name);
    this.ownerName = ownerName;
    const _privateVoice = 'Woof';

    const _woof = function() {
        return _privateVoice;
    };

    this.sayHi = function() {
        console.log(`Hi, I'm ${this.name}, and I love my human ${this.ownerName}! ${_woof()}!`);
    }
};

const myAnimal2 = new funcAnimal('Dragon');
myAnimal2.run();
myAnimal2.sayHi();

const myDog2 = new funcDog('Bobik', 'Andrew');
myDog2.run();
myDog2.sayHi();

// ES6+
class esAnimal {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log('running');
    }

    sayHi() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

class esDog extends esAnimal {
    constructor(name, ownerName) {
        super(name);
        this.ownerName = ownerName;
        this.#privateVoice = 'Woof';
    }

    #privateVoice;

    #woof() {
        return this.#privateVoice;
    }

    sayHi() {
        console.log(`Hi, I'm ${this.name}, and I love my human ${this.ownerName}! ${this.#woof()}!`);
    }
}

const myAnimal3 = new esAnimal('Crab');
myAnimal3.run();
myAnimal3.sayHi();

const myDog3 = new esDog('Laika', 'Voldemar');
myDog3.run();
myDog3.sayHi();