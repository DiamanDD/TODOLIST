"use strict";

document.querySelector(".todo_btn").onclick=readInput;

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
function creatLi() {
    let elemLi = document.createElement("li")
    elemLi.className = "lili"
    elemLi.onclick=switchClass

    return elemLi
}

function createClose() {
    let btnClose = document.createElement("div")
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
    event.target.classList.toggle("qq")
}








