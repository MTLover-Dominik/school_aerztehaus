import get_all_customers from "./apiFunctions/get_all_customers.js";

let button = document.getElementById("doSomething");
let textArea = document.getElementById("doSomethingText");
let customerList = document.getElementById("customerList");
let testCustomer = document.getElementById("testCustomer");

const message = "Willkommen zu meinem TypeScript-Projekt!";

button.addEventListener("click", ()=> {
    textArea.innerHTML = message;
})


// Funktion, die bei Klick auf den Button die API aufruft
document.getElementById('checkDatabaseBtn').addEventListener('click', async function() {
    await get_all_customers(customerList);
});

