const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // localStorage에 toDos배열 변수에 값들을 모두 저장함. 이 때 JSON.stringify(toDos)를 적용하면 모든 값은 문자로 저장됨 만약 JSON.PARSE(toDos)로 적용한다면 javascript가 이해할 수 있는 array로 만들 수 있음

}

function deleteToDo(event){
    const li = event.target.parentElement; // deleteToDo 실행되는 함수의 target은 paintTodo함수의 button임 그의 부모를 불러옴으로써 어떤 부모의 자식인 버튼이 클릭됐는지 알 수 있음.
    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; //.text를 사용함으로 써 입력된 인풋에 입력된 값 중text를 보여주게 함
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // submit할 때 newTodo로 toDoInput.value 값이 저장될 수 있게 설정함.
    toDoInput.value =""; //summit할 때 toDoInput.value는 ""; 아무것도 없는 값으로 만들어서 다시 쓸 수 있게 설정.
    const newTodoObject = { // 객체로 text:newTodo, id: Date.now()를 설정함. 
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObject); // toDos배열에 newTodo를 푸쉬함.
    paintTodo(newTodoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); //해당 addEventListener() 이벤트를 위 handleToDoSubmit 함수에 첫번째 인자값으로 전달함

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // parsedToDos에 저장된 배열을 toDos배열에 복원되게 해줌.
    parsedToDos.forEach(paintTodo); // forEach()는 paparsedToDos배열의 각 item에 대해 paintTodo 함수를 실행해줌.
}


