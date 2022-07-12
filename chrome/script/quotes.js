// 배열 변수에 {} object를 여러 개 생성함
const quotes = [
    {
        quote: "사람들은 시간이 사물을 변화시킨다고 하지만, 사실 당신 스스로 그것들을 변화시켜야 한다.",
        author: "앤디 워홀",
    },
    {
        quote: "목적없는 공부는 기억에 해가 될 뿐이며, 머리속에 들어온 어떤 것도 간직하지 못한다.",
        author: "레오나르도 다빈치",
    },
    {
        quote: "인생의 비극이란 사람들이 삶을 사는 동안 내면에서 잃어가는 것들이다.",
        author: "알버트 아인슈타인",
    },
    {
        quote: "저는 미래가 어떻게 전개될지는 모르지만, 누가 그 미래를 결정하는지는 압니다.",
        author: "오프라 윈프리",
    },
    {
        quote: "오직 한 가지 성공이 있을 뿐이다. 바로 자기 자신만의 방식으로 삶을 살아갈 수 있느냐이다.",
        author: "크리스토퍼 몰리",
    },
    {
        quote: "나는 연습에서든 실전에서든 이기기 위해 농구를 한다. 그 어떤 것도 승리를 향한 나의 경쟁적 열정에 방해가 되도록 하지 않을 것이다",
        author: "마이클 조던",
    },
    {
        quote: "독서가 정신에 미치는 효과는 운동이 신체에 미치는 효과와 같다.",
        author: "리처드 스틸",
    },
    {
        quote: "나는 삶을 변화시키는 아이디어를 항상 책에서 얻었다.",
        author: "벨 훅스",
    },
    {
        quote: "나는 중요한 슛을 놓친 결과에 절대 개의치 않는다. 그 결과에 대해 생각하면 언제나 부정적인 결과만 생각하게 된다.",
        author: "마이클 조던",
    },
    {
        quote: "만약 누군가를 당신의 편으로 만들고 싶다면, 먼저 당신이 그의 진정한 친구임을 확신시켜라.",
        author: "에이브러햄 링컨",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // Math.floor로 주어진 수 이하의 가장 큰 정수를의 quotes배열의 길이(10)개 만큼 생성함.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;