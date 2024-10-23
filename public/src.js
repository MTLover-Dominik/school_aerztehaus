import get_allCustomers from "./apiFunctions/get_allCustomers.js";
import get_allArticles from "./apiFunctions/get_allArticles.js";

let showAllCustomers = document.getElementById("showAllCustomers");
let customerList = document.getElementById("customerList");
let showAllArticles = document.getElementById("showAllArticles");
let articleList = document.getElementById("articleList");

// Funktion, die bei Klick auf den Button die API aufruft
showAllCustomers.addEventListener('click', async function() {
    await get_allCustomers(customerList);
});

showAllArticles.addEventListener('click', async function() {
   await get_allArticles(articleList);
});
