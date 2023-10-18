let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let deleteBtn = document.getElementById("delete-btn");

let leadsFromLocalStorage = localStorage.getItem("myLeads");
leadsFromLocalStorage = JSON.parse(leadsFromLocalStorage);
console.log(leadsFromLocalStorage);

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    renderLeads();
})

//-------------------------------------------------------------------------
/*false strings:
-0,
-"",
-null ->(como o desenvolvedor sinaliza que está vazio),
-undefined ->(como o js sinaliza que está vazio), 
-NaN (not a number)*/
//Boolean() -> testa se algo é true or false
//-------------------------------------------------------------------------

//JSON.parse() recebe uma string JSON e a transforma em um objeto JavaScript. (ARRAY)
//JSON.stringify() recebe um objeto JavaScript e o transforma em uma string JSON
/*myLeads = JSON.parse(myLeads); -> virou objeto
myLeads.push("inputEl.value");
myLeads = JSON.stringify(myLeads); -> virou string*/

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
}) 

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems +=`
            <li>
                <a target = '_blank' href ='${myLeads[i]}'> 
                    ${myLeads[i]}
                </a>
            </li> 
        `; 
    }  
    ulEl.innerHTML = listItems;
}
