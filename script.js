
const contentNameInput = document.getElementById("userName"); //contenuto input name
const removeButton = document.getElementById("remove"); //bottone "remove"
const saveButton = document.getElementById("save"); //bottone "save"
const savedNameDisplay = document.getElementById("savedName"); //spazio che contiene il nome salvato

// Creo una funzione che aggiorna il nome salvato
//Prende l'elemento dal localStorage
//SE il nome è stato salvato, mostrerà il nome salvato ALTRIMENTI svuota l'elemento
function aggiornaSavedNAme() {
    const savedName = localStorage.getItem("Nome");
    if (savedName) {
        savedNameDisplay.innerText = "Nome salvato: " + savedName;
    } else {
        savedNameDisplay.innerText = "";
    }
}


aggiornaSavedNAme();

//Prendo il bottone "save", do un evento al click e prevengo il suo comportamento di default del form
//prendo il valore dell'input, rimuovendo gli spazi
//SE l'input viene compilato, salva nome +alert+funzione aggiornaSavedName
//ALTRIMENTI se l'input è vuoto, mostra solo alert

saveButton.addEventListener('click', function (event) {
    event.preventDefault();
    const content = contentNameInput.value.trim();
    if (content) {
        localStorage.setItem("Nome", content);
        aggiornaSavedNAme();
        alert("Nome salvato!");
    } else {
        alert("Inserisci un nome!");
    }
});

//col bottone "remove" si rimuove l'elemento salvato
//funzione aggiornaSavedNAme
//alert

removeButton.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.removeItem("Nome");
    aggiornaSavedNAme();
    alert("Nome rimosso!");
});