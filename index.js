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