button = document.getElementById("doSomething");
textArea = document.getElementById("doSomethingText");

const message = "Willkommen zu meinem TypeScript-Projekt!";

button.addEventListener("click", ()=> {
    textArea.innerHTML = message;
})
