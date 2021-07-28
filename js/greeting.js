const input = document.querySelector("#header #loginForm #inputId")
const inputForm = document.querySelector("#header #loginForm #inputForm");

const USERNAME = "userName";

function saveInStorage(event){
    event.preventDefault();
    localStorage.setItem(USERNAME, input.value);
    input.classList.add("hidden");
    paintGreeting();
}

function paintGreeting(){
    const userName = localStorage.getItem(USERNAME);
    const h2 = document.createElement("h3");
    h2.innerText = `${userName}님 안녕하세요!`;
    inputForm.appendChild(h2);
}


const savedName = localStorage.getItem(USERNAME);
if(savedName!=null){
    input.classList.add("hidden");
    paintGreeting();
}



inputForm.addEventListener("submit", saveInStorage);