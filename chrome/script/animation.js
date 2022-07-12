//todo 시작
const todoApp = document.querySelector(".todo_wrap");
const todoCloseBt = document.querySelector(".todo_wrap .close");
const todoAppBox = document.querySelector("#todo_app");
const APPHIDDEN = "apphidden"

function todoHidden (){
    todoApp.classList.add(APPHIDDEN);
}

function todoStart (){
    todoApp.classList.remove(APPHIDDEN);
}

todoCloseBt.addEventListener("click", todoHidden);
todoAppBox.addEventListener("click", todoStart);
//todo 끝

// id 시작
const idApp = document.querySelector(".id_wrap");
const idCloseBt = document.querySelector(".id_wrap .close");
const idAppBox = document.querySelector("#id_app");

function idHidden (){
    idApp.classList.add(APPHIDDEN);
}

function idStart (){
    idApp.classList.remove(APPHIDDEN);
}

idCloseBt.addEventListener("click", idHidden);
idAppBox.addEventListener("click", idStart);
// id 끝

// quote 시작
const quoteApp = document.querySelector(".quote_wrap");
const quoteCloseBt = document.querySelector(".quote_wrap .close");
const quoteAppBox = document.querySelector("#quote_app");

function quoteHidden (){
    quoteApp.classList.add(APPHIDDEN);
}

function quoteStart (){
    quoteApp.classList.remove(APPHIDDEN);
}

quoteCloseBt.addEventListener("click", quoteHidden);
quoteAppBox.addEventListener("click", quoteStart);
// quote 끝

// weather 시작
const weatherApp = document.querySelector(".weather_wrap");
const weatherCloseBt = document.querySelector(".weather_wrap .close");
const weatherAppBox = document.querySelector("#weather_app");

function weatherHidden (){
    weatherApp.classList.add(APPHIDDEN);
}

function weatherStart (){
    weatherApp.classList.remove(APPHIDDEN);
}

weatherCloseBt.addEventListener("click", weatherHidden);
weatherAppBox.addEventListener("click", weatherStart);
// weather 끝

// drag 이벤트 연습
var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function( event ) {

}, false);

document.addEventListener("dragstart", function( event ) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
    console.log('drag 확인');
}, false);

document.addEventListener("dragend", function( event ) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function( event ) {
    // highlight potential drop target when the draggable element enters it
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "purple";
    }

}, false);

document.addEventListener("dragleave", function( event ) {
    // reset background of potential drop target when the draggable element leaves it
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
        console.log('drop 확인');
    }
  
}, false);
