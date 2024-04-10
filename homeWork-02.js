//Задание 1 – Создать объект counter всеми возможными способами;
let counter1 = {count: 1}

let counter2 = new Object({count:1})

let counter5 = new Object()
counter5.count = 1

let counter3 = Object.create({},{count:{value:1}})

let counter4 = Object.assign({},{count:4})

//deFINE PROPETIES?

// Задание 2 – Скопировать объект counter всеми
// возможными способами;

//Можно скопировать с помощью библиотеки lodash
//Собственноручно написать функцию для глубокого и неглубокого копирования(проход по всем ключам и значениям)

let copyCounter1 = Object.assign({},counter1) //неглубокое копирование

let copyCounter2 = {...counter1} //неглубокое

let copyCounter3 = structuredClone(counter1) //глубокое

let copyCounter4 = Object.create(counter1) //неглубокое

let copyCounter5 = JSON.parse(JSON.stringify(counter1)) //глубокое, но есть подводные камни. Например, есть поле date: new Date(26)
// и когда будем копировать, то увидим, что date не объект, а строка с датой. Так же может произойти и с функциями. Скопируется только
// название функции, а не сама функция, потому что JSON.stringify может обрабатывать только базовые объекты,массивы и примитивы и
// JSON.stringify() полностью игнорирует некоторые вещи, такие как undefined или функции.



// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
function makeCounter1(){
    return {count:1, inc: function () {this.count++}}
}

let makeCounter2 = function (num){return {count:num}}

let makeCounter3 = (num) => {return {count:num}}

// Задание 4 - прочитать и описать работу глобальной функции structuredClone()

// Это глобальная функция, которая позваоляет глубоко коировать объект.
//Пример: structuredCloned(obj,{transfer:['массив','где хранятся поля, которые надо не копировать,а перенести т.е. чтобы они остались ссылаться на родительский объект']})
//В structuredClone нельзя копировать функции и дом узлы. Будет ошибка DataCloneError.
//Так же нельзя клонировать дескрипторвы свойств,геттеры и сеттеры.
//Еще есть особенность, что если мы хотим скопировать экземпляр класса, то копия не будет больше ссылаться на класс, но все методы можно будет использовать

// Бонус
// Задание 1 –
// Написать функцию глубокого сравнения двух объектов:
const deepClone = (obj) => {
    if (obj === null) return null
    const clone = Object.assign({}, obj)
    Object.keys(clone).forEach(
        (key) => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    )
    if (Array.isArray(obj)) {
        clone.length = obj.length
        return Array.from(clone)
    }
    return clone
}

const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };
console.log(deepClone(obj1),deepClone(obj2))

// Бонус
// Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:
function reverseStr(str) {
    return str.split('').reverse().join('')
}