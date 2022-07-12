const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");
const loginBox = document.querySelector(".login_box");

const link= document.querySelector('a');

const HIDDEN_CLASSNAME = "hidden"; // 반복되는 문자열을 변수로 지정해두면 편함
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); //preventDefault는 이벤트의 기본 행동을 발생되지 않도록 막는다. // 여기서는 subbit 할 때 브라우저가 다시 시작되는 것을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME); // class 추가 다시 숨기기 위해
    loginBox.classList.add(HIDDEN_CLASSNAME); // submit 시 로그인 박스 숨기기
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // .setItem("key", 변수(저장할 값)); localStorage를 활용하여 유저 네임 값 저장하기
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); // class 삭제
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginBox.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); //loginForm(#login_form)에 서밋이라는 이벤트를 사용해서 onLoginSubmit함수를 받아옴
} else {
    //sow the greetings
    paintGreetings(savedUsername);
    loginBox.classList.add(HIDDEN_CLASSNAME); // submit 시 로그인 박스 숨기기
}