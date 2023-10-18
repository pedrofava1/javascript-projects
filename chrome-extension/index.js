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
