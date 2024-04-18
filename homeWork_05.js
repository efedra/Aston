//1)
let promiseTwo = new Promise((resolve, reject) => {
    resolve("a");
});
promiseTwo
    .then((res) => {
        return res + "b";
    })
    .then((res) => {
        return res + "с";
    })
    .finally((res) => {
        return res + "!!!!!!!";
    })
    .catch((res) => {
        return res + "d";
    })
    .then((res) => {
        console.log(res);
    });
//abc - finally ничего не будет делать, потому что finally не должно получать параметров
// 2)
function doSmth() {
    return Promise.resolve("123");
}

doSmth()
    .then(function (a) {
        console.log("1", a); //
        return a;
    })
    .then(function (b) {
        console.log("2", b);
        return Promise.reject("321");
    })
    .catch(function (err) {
        console.log("3", err);
    })
    .then(function (c) {
        console.log("4", c);
        return c;
    });
//1 123
//2 123
//3 321
//4 undefined

// 3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]
let arr = [10, 12, 15, 21]

async function logArrayDelay(arr) {
    arr.forEach((el,index)=>{
        new Promise(resolve => {
            setTimeout(() => {
                console.log(index);
            }, 3000 * index);
        });
    })
}
logArrayDelay(arr)
// 4) Прочитать про Top Level Await (можно ли использовать await вне функции async)
// await работает только внутри async функций, но можно объявить функцию и сразу ее вызвать вот так: (async () => {
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();
//   ...
// })(); будет работать в глобальном контексте
//  await верхнего уровня позволяет модульной системе заботиться о разрешении промисов и их взаимодействии между собой.
// Глобальный await работает только с ES модулями.
//
// БОНУС ЗАДАНИЕ
// /* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
// Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
// Promise с содержимым страницы или вызывает reject */
// fetchUrl('https://google/com&#39;)
// .then(...)
// .catch(...) // сatch должен сработать только после 5 неудачных попыток
// получить содержимое страницы внутри fetchUrl

function fetchUrl(url) {
    let attempts = 0;

    return new Promise((resolve, reject) => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network problem");
                }
                const data = await response.json();
                resolve(data);
            } catch (error) {
                attempts++;
                if (attempts < 5) {
                    console.log(`Не получилось`);
                    fetchData();
                } else { reject(error) }
            }
        };

        fetchData();
    });
}

fetchUrl("https://google/com&#39")
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });