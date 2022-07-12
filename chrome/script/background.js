

const images = ["0.jpg","1.jpg","2.jpg"];
const inBox = document.querySelector(".main_inbox");
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // createElement() 메서드는 tagName의 html 요소를 만들어 반환함.

bgImage.src = `images/${chosenImage}`; // bgImage.src는 `images/$(chosenImage)`;로 src를 설정함.

inBox.style.backgroundImage = `url('images/${chosenImage}')`; // inBox 배경에 적용될 수 있도록 변경해봄

/*document.body.appendChild(bgImage); //appendChild() (body 맨 뒤에 자식 요소로 추가됨)메서드에 bgImage를 생성했던 createElement("img") 태그를 추가하여 html에 생성되게함.*/


const r = Math.floor(Math.random()*256);
const g = Math.floor(Math.random()*256);
const b = Math.floor(Math.random()*256);
const rgbColor = `rgb(${r},${g},${b})`;

const ipadWrap = document.querySelector(".ipad_wrap");

function randomBg(){
    ipadWrap.style.backgroundColor = rgbColor;
}

randomBg();
