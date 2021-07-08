"use strict";

document.querySelector(".todo_btn").onclick=readInput;
// ты не читаешь инпут ты берешь значение из него getValue 
function readInput() {
    let data = document.querySelector(".todo_input").value;
    createElement(data)
}

function createElement(data) {
    // если поле не пустое
    if (data != "") {
        // создаем элемент списка
        let elemLi = creatLi()
        // добавлем кнопку для закрытия
        let btnClose = createClose()
        // добавляем в элемент текст из поля
        elemLi = addText(elemLi, data)
        // добавляем в конец кнопку закрытия
        elemLi = addBtnClose(elemLi, btnClose)

        // Добавляем в тег Ul наш элемент
        addElemHtml(elemLi)
    }
}
// create - опечатка
function creatLi() {
    let elemLi = document.createElement("li")
    // заебись название класса =) Нужно более осознано 
    elemLi.className = "lili"
    elemLi.onclick=switchClass

    return elemLi
}
// функция создает иконку или она будет с возможностью удалять ? createClose я понимаю как создать закрыть - createCloseHandler - создать обработчик закрытия
function createClose() {
    let btnClose = document.createElement("div")
    // аналогично с неймингом классов
    btnClose.className = "x"
    btnClose.onclick=removeItem

    return btnClose
}

function addText(elemLi, data) {
    elemLi.innerText = data;
    return elemLi
}

function addBtnClose(elemLi, btnClose) {
    elemLi.append(btnClose)
    return (elemLi)
}

function addElemHtml(elemLi) {
    document.querySelector(".todo_elements").append(elemLi)
}


function removeItem() {

    event.target.parentNode.remove();
}

function switchClass(){
    // в китае есть такой мессенджер qq . а класснейм надо бы сменить
    event.target.classList.toggle("qq")
}








