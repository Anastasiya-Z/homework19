"use strict"

// у нас текстовое поле, списк и кнопка, при сохранении новой задачи 
// она появляется в списке ниже
// рядом с каждой задачей есть чекбокс, 
// если его нажать, то задача становится выполненной и текст 
// должен быть зачеркнутым
// также рядом с каждой задачей есть крестик, 
// при клике на который задача удаляется из списка

let formSubmit = document.querySelector('form');
let itemsArray = [];
let todoList = document.querySelector('.toDoContent')
let itemIdNumber = 0;

console.log(formSubmit);
console.log(todoList);

formSubmit.addEventListener('submit', function (e) {
    e.preventDefault();
    itemIdNumber++;
    let newItem = document.querySelector('input').value

    itemsArray.push(newItem);

    let oneItem = document.createElement('li');

    let itemText = document.createElement('span');
    let itemCheck = document.createElement('input');

    let closeBlock = document.createElement('div');

    itemCheck.setAttribute('id', itemIdNumber);
    itemCheck.setAttribute('type', 'checkbox');
    itemCheck.classList.add('checkThis');
    closeBlock.classList.add('close');

    oneItem.classList.add('item');   
    itemText.innerHTML =  newItem;

    todoList.append(oneItem);
    oneItem.prepend(itemCheck);
    oneItem.append(itemText);
    oneItem.append(closeBlock);

    itemCheck.addEventListener('click', function(){

        if(this.closest('.item').classList.contains('checkd')){
            this.closest('.item').classList.remove('checkd');
            console.log('remove class')
        } else {
            this.closest('.item').classList.add('checkd');
            console.log('add class')
        }
       }) 

    closeBlock.addEventListener('click', function(){

        this.closest('li').style.display = "none"

    }) 

});







