import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

const firebaseConfig = {
    databaseURL:'https://leads-tracker-app-b62d5-default-rtdb.europe-west1.firebasedatabase.app/'
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, 'leads')

console.log(app)
console.log(database)


const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
let listItems = ''

onValue(referenceInDB, (snapshot) => {
    console.log(snapshot.val())
})

function render(leads){
    
    listItems = ''

    for(let i = 0; i < leads.length; i++){
        
        listItems += 
        `<li>
            <a target='_blank' href=${leads[i]}>
                ${leads[i]}
            </a>
        </li>`
    }

    ulEl.innerHTML = listItems
}



inputBtn.addEventListener('click', () => {
    if(inputEl.value == ''){
        alert('enter a url')
    }
        //console.log(inputEl.value)

        push(referenceInDB, inputEl.value)
        inputEl.value = ''
})





deleteBtn.addEventListener('dblclick', () => {})


