const todoInput = document.getElementById("toDoInput");
const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoListUl")



let toDos = [];

const TODOKEY = "toDos";

function paintToDo(newToDoObj){

    

    const li = document.createElement("li");
    const span = document.createElement("span");
    const span2 = document.createElement("span");
    span.style.width = "50%";
    span.style.textAlign = "center";
    span2.style.width = "50%";
    span2.id = "spanId";
    li.id = newToDoObj.id;
    li.style.width = "100%";
    li.style.display = "flex";
    span.innerText = newToDoObj.text;
    const deleteBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    deleteBtn.id = "deleteBtn";
    checkBtn.id = "checkBtn";
    deleteBtn.innerText = "X";
    checkBtn.innerText = "✓";
    checkBtn.addEventListener("click", checktoDo);
    deleteBtn.addEventListener("click", deletetoDo);
    span2.appendChild(deleteBtn);
    span2.appendChild(checkBtn);
    li.appendChild(span);   //인풋 결과가 담김
    li.appendChild(span2);  //체크와 x버튼이 담김
    todoList.appendChild(li);
}

function deletetoDo(event){
    const parentLi = event.target.parentElement;
    const oldParentLi = parentLi.parentElement;    
    oldParentLi.remove();
    toDos = toDos.filter((toDos) => toDos.id !== parseInt(oldParentLi.id));
    saveToDos();
}


function checktoDo(event){
    const parentLi = event.target.parentElement;
    const oldParentLi = parentLi.parentElement;
    console.log(oldParentLi);
    const textValue = oldParentLi.querySelector("span");
    textValue.style.textDecoration = "line-through";
}




function saveToDos(){
    localStorage.setItem(TODOKEY, JSON.stringify(toDos));
}
//배열 상태를 String 형태로 바꿈


function writeInput(event){
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now(),
        class : Date.now(),
    };
    //현재 아이디는 정수형태    
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    //요기서 localStroge에 저장
    saveToDos();
}

todoForm.addEventListener("submit", writeInput);


const savedToDos = localStorage.getItem(TODOKEY);
if(savedToDos!== null){
    const parsedToDos = JSON.parse(savedToDos);
    //String 상태의 문자열을 Array 배열로 만들어준다.
    toDos = parsedToDos;
    //배열을 다시 toDos에 넣어준다.
    parsedToDos.forEach(paintToDo);
}
