// let promise = new Promise(function(resolve, reject) {
//   // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });



// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve("done!"), 1000);
// });

// // resolve запустит первую функцию, переданную в .then
// promise.then(
//   result => console.log(result), // выведет "done!" через одну секунду
//   error => alert(error) // не будет запущена
// );

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(12345), 2000)
// })
//   .finally(() => alert("Промис завершён"))
//   .then(result => alert(result)); // <-- .then обработает результат


// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

//     document.head.append(script);
//   });
// }

// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(
//   script => alert(`${script.src} загружен!`),
//   error => alert(`Ошибка: ${error.message}`)
// );

// promise.then(script => alert('Ещё один обработчик...'));

// Делаем список todo:



// у нас текстовое поле, списк и кнопка, при сохранении новой задачи она появляется в списке ниже
// рядом с каждой задачей есть чекбокс, если его нажать, то задача становится выполненной и текст должен быть зачеркнутым
// также рядом с каждой задачей есть крестик, при клике на который задача удаляется из списка


