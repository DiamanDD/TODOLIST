"use strict";
function upp() {
    // считываем поле ввода
   let data=document.querySelector(".pole") .value;
   // если поле не пустое
    if(data!="") {
        // создаем элемент списка
        let upp = document.createElement("li")
        // добавляем ему класс
        upp.className = "lili"
        // добавлем кнопку для закрытия
        let chk = document.createElement("div")
        chk.className = "x"
        // добавляем в элемент текст из поля
        upp.innerHTML = data;
        // добавляем в конец кнопку закрытия
        upp.append(chk)
        // Добавляем в тег Ul наш элемент
        document.querySelector(".spis").append(upp)

    }
}

// зачеркивание
function del() {
// если кликнули на крестик, удаляем родителя
   if(event.target.className=="x"){
      event.target.parentNode.remove()
   }
   // если кликнули на элемент списка с классом lili, то добавляем ему класс с зачеркиванием
   else if(event.target.className=="lili"){
       event.target.classList.toggle("qq")
   }
   // если li имеет класс с зачеркивание то удаляем этот класс
    else if(event.target.className=="lili qq"){
       event.target.classList.toggle("qq")
   }
}
this.onclick=del

document.querySelector(".upps").addEventListener("click",upp)


