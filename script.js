document.addEventListener("DOMContentLoaded", () => {

    const fattoBottone = document.getElementById("fattoBottone");
    const aggiungiBottone = document.getElementById("aggiungiBottone");
    const input = document.getElementById("input");
    const quadroNumeri = document.getElementById("quadroNumeri");
    const inputContainer = document.getElementById("inputContainer");
    const funzioniContainer = document.getElementById("funzioniContainer");

    // Bottoni che appargono dopo che l'utente ha finito di scrivere i suoi numeri
    const sommaBtn = document.getElementById("sommaBtn");
    const sottrazioneBtn = document.getElementById("sottrazioneBtn");
    const maggioreBtn = document.getElementById("maggioreBtn");
    const minoreBtn = document.getElementById("minoreBtn");
    const pariBtn = document.getElementById("pariBtn");
    const dispariBtn = document.getElementById("dispariBtn");
    const refreshBtn = document.getElementById("refreshBtn");

    // Array che serve per salvare i numeri inseriti
    let numeri = [];

    // Funzione che aggiunge un numero al quadrato e all'array
    function aggiungiNumero() {
        const valoreInput = parseInt(input.value); // parseInt serve a convertire le stringhe in numeri interi

        if (!isNaN(valoreInput)) { // isNaN controlla se il valore NON è un numero
            numeri.push(valoreInput); // Se è valido, lo aggiungo all'array

            const aggiungiNumQuad = document.createElement("div");
            aggiungiNumQuad.textContent = valoreInput;
            quadroNumeri.appendChild(aggiungiNumQuad); // Aggiungo il numero al quadrato
            input.value = ""; // Svuoto l'input
        }
    }

    // Aggiungo il numero quando si clicca su "Aggiungi"
    aggiungiBottone.addEventListener("click", aggiungiNumero);

    // Aggiungo il numero anche premendo "Enter"
    input.addEventListener("keydown", (invio) => {
        if (invio.key === "Enter") {
            aggiungiNumero();
        }
    });

    // Quando si clicca su "Fatto", nascondo l'input e mostro le funzioni
    fattoBottone.addEventListener("click", () => {
        inputContainer.style.display = "none"; // Nascondo il contenitore dell'input
        quadroNumeri.style.margin = "0 auto"; // Centro il quadrato
        funzioniContainer.style.display = "flex"; // Mostro il contenitore delle funzioni
    });

    sommaBtn.addEventListener("click", () => {
    const somma = numeri.reduce((a, b) => a + b, 0);
    document.getElementById("sommaRisultato").textContent = somma;
    });

    sottrazioneBtn.addEventListener("click", () => {
    const sottrazione = numeri.reduce((a, b) => a - b);
    document.getElementById("sottrazioneRisultato").textContent = sottrazione;
    });

    maggioreBtn.addEventListener("click", () => {
    const max = Math.max(...numeri);    /* Math.max serve per il singolo numero e non legge gli Array, ma mettendo ...array legge ogni singolo numero all'interno dell'array */ 
    document.getElementById("maggioreRisultato").textContent = max;
    });

    minoreBtn.addEventListener("click", () => {
    const min = Math.min(...numeri);
    document.getElementById("minoreRisultato").textContent = min;
    });

    pariBtn.addEventListener("click", () => {
    const pari = numeri.filter(n => n % 2 === 0);
    document.getElementById("pariRisultato").textContent = pari.join(", ");
    });

    dispariBtn.addEventListener("click", () => {
    const dispari = numeri.filter(n => n % 2 !== 0);
    document.getElementById("dispariRisultato").textContent = dispari.join(", ");
    });


    refreshBtn.addEventListener("click", () => {
        numeri = []; // Svuoto l'array
        quadroNumeri.innerHTML = ""; // Svuoto il quadrato
        inputContainer.style.display = "block"; // Mostro di nuovo l'input
        funzioniContainer.style.display = "none"; // Nascondo le funzioni

        // Ripristino i testi sotto i bottoni
        document.querySelectorAll(".risultato").forEach(div => {
            div.textContent = div.id.split("Risultato")[0] + ":";
        });
    });
});
