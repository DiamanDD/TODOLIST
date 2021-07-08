"use strict";

// считываем поле ввода
this.onclick = getElementstrike


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
    console.log("вызов1")
    return elemLi
}

function createClose() {
    let btnClose = document.createElement("div")
    btnClose.className = "x"
    console.log("вызов2")
    return btnClose
}

function addText(elemLi, data) {
    elemLi.innerHTML = data;
    return elemLi

}

function addBtnClose(elemLi, btnClose) {
    elemLi.append(btnClose)
    return (elemLi)
}

function addElemHtml(elemLi) {
    document.querySelector(".todo_elements").append(elemLi)
}

// зачеркивание
function getElementstrike(){
    let elemClass=event.target.className
     strikethrough(elemClass)
}




function strikethrough(elemClass) {
// если кликнули на крестик, удаляем родителя
    switch (elemClass) {
        case "x":
            event.target.parentNode.remove();
            break;
        case "lili":
            event.target.classList.toggle("qq");
            break;
        case "qq":
            event.target.classList.toggle("qq")
            break
    }

}






