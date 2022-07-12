const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date(); // 초기 Date(); 값 
    /* 아이패드 모양과 동일하게 하기 위해 해당 값은 주석 처리함.
    const hours = String(date.getHours()).padStart(2,"0"); // String(date.getHors()) 스트링으로 감싸서 글자로 표시한 후 padStart(2,"0")으로 앞에 0이 붙게 설정함.
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    */
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const koreaDate = date.getDate();
    const day = date.getDay();
    const mounth = date.getMonth()+1;
    const week = ["일", "월", "화", "수", "목", "금", "토"]
    let AMPM = "오전";
    if (hours >= 12){
        hours = hours - 12;
        AMPM = "오후";
    }
    else if (date.getHours() == 12){
        hours = 12;
    }
    else {
        AMPM = "오전";
    }
    clock.innerHTML = `${AMPM}${hours}:${minutes} ${mounth}월 ${koreaDate}일 ${week[day]}요일`;
}



getClock();
setInterval(getClock, 1000);
