const conTents = document.querySelectorAll(".content_img_wrap");
const moDalCloseBt = document.querySelectorAll(".modal_close_bt");
const moDals = document.querySelectorAll(".modal_wrap");
let moDalArray = [];

console.log(conTents);

function modalOpen(num) {
    return function () {
        conTents[num].onclick = function () {
            moDals[num].style.display = "block";
            document.body.classList.add("stop-scroll");
            console.log(num);
        };

        moDalCloseBt[num].onclick = function () {
            moDals[num].style.display = "none";
            document.body.classList.remove("stop-scroll");
        };
    };
};

for (let i = 0; i < conTents.length; i++) {
    moDalArray[i] = modalOpen(i);
};

for (let j = 0; j < conTents.length; j++) {
    moDalArray[j]();
};