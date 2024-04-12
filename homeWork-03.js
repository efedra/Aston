//1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

//Массивы в JavaScript действительно являются "неправильными" в том смысле, что они могут содержать элементы различных
// типов данных. Это связано с тем, что в JavaScript массивы реализованы как объекты, а не как строго типизированные структуры данных.

//Кроме того, в JavaScript массивы могут быть использованы как списки (список элементов), стеки (последний вошел - первый вышел),
//очереди (первый вошел - первый вышел), динамические массивы, ассоциативные массивы и свойства объекта. Это означает, что массивы в JavaScript могут совмещать в себе несколько структур
// данных и использоваться для различных целей.

//2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)
function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = {item: "some value"};

logger.bind(obj)()
logger.call(obj)
logger.apply(obj)
// 3.1 Массивы:
//
// - Создайте массив чисел и найдите его сумму.
// - Создайте массив строк и объедините их в одну строку.
// - Найдите максимальный и минимальный элементы в массиве чисел.

let arr = [1,2,3,4,5,6,7,8]
console.log(arr.reduce((accumulator,el)=>{
    return accumulator+=el
},0))
let arrStr= ['b','a','n','a','na']
console.log(arrStr.join('')) //без пробела
console.log(arrStr.join(' ')) //с пробелом

// 3.2 Stack (стек):
//
// - Реализуйте стек с использованием массива.
let stack = {
    items: [],
    push(element) {
        this.items.push(element);
    },
    pop() {
        if(!this.items.length) return "empty stack"
        return this.items.pop()
    },
    peek() {
        return this.items[this.items.length - 1];
    },

    isEmpty() {
        return this.items.length === 0;
    },
    size() {
        return this.items.length;
    }
}
// 3.3 Queue (очередь):
//
// - Реализуйте очередь с использованием массива.
// - Имитируйте работу очереди на примере ожидания на кассе.

function Queue() {
    this.items = [];

    this.enqueue = function(element) {
        this.items.push(element);
    };

    this.dequeue = function() {
        if (this.isEmpty()) {
            return "Empty Queue";
        }
        return this.items.shift();
    };

    this.front = function() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    };

    this.isEmpty = function() {
        return this.items.length === 0;
    };

    this.size = function() {
        return this.items.length;
    };
}

const queue = new Queue();

queue.enqueue("Покупатель 1");
queue.enqueue("Покупатель 2");
queue.enqueue("Покупатель 3");

console.log(queue.front()); // Покупатель 1

queue.dequeue();

console.log(queue.front()); // Покупатель 2

// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

Function.prototype.myBind = function (obj,...args) {
    let func = this;
    return function () {
        func.apply(obj,[...args]);
    };
}
function logger(c){
    console.log(`a - ${this.a}, b-${this.b}, c--${c}`)
}

let obj2={
    a:1,
    b:'ssssss'
}

logger.myBind(obj2)()
logger.myBind(obj2,'with arguments')()