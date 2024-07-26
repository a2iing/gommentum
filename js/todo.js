const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todo";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // localStorage(toDos) 업데이트
    saveToDos(); // localStorage(toDos)에 저장
}

function paintToDo(newToDo) {
    const li = document.createElement("li"); // li > label + button
    li.id = newToDo.id;
    const label = document.createElement("label"); // label > input + span + span
    const input = document.createElement("input");
    const ckbox = document.createElement("span");
    const txt = document.createElement("span");
    const btn = document.createElement("button");
    btn.addEventListener("click", deleteToDo);
    li.appendChild(label);
    li.appendChild(btn);
    label.appendChild(input);
    input.setAttribute("type","checkbox");
    label.appendChild(ckbox);
    label.appendChild(txt);
    txt.innerText = newToDo.text;
    toDoList.appendChild(li);
}

function submitToDo(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(), // random한 고유id값을 얻기 위해 
    };
    toDos.push(newToDoObj); // todo array에 추가
    paintToDo(newToDoObj); // document에 출력
    saveToDos(); // local storage에 저장
}

toDoForm.addEventListener("submit", submitToDo);

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos !== null) { // 저장된 todo가 있다면
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}