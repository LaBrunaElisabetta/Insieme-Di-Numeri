document.addEventListener("DOMContentLoaded", () => {

const fattoBottone = document.getElementById("fattoBottone");
const aggiungiBottone = document.getElementById("aggiungiBottone");
const input = document.getElementById("input");
const quadroNumeri = document.getElementById("quadroNumeri");

let numeri = [] /* Array che serve per salvare i numeri */ 


function aggiungiNumero () {
    const valoreInput = parseInt(input.value); /* parsetInt serve a convertire le stringhe in numeri interi */

    if(!isNaN(valoreInput)) { /* isNaN serve per controllare se il valore non è un numero */
        numeri.push(valoreInput); /* se è un numero valido push nell'array */

        const aggiungiNumQuad = document.createElement("div");
        
        aggiungiNumQuad.textContent = valoreInput;
        quadroNumeri.appendChild(aggiungiNumQuad); /* aggiungo il nuovo div nel quadrato */
        input.value = "";
    }
}

aggiungiBottone.addEventListener("click", aggiungiNumero);

input.addEventListener("keydown", (invio) => {
    if(invio.key === "Enter") {
        aggiungiNumero()
    }
})

})
