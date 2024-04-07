const dataLowercase ="azertyuiopqsdfghjklmwxcvbn";
const dataUppercase =dataLowercase.toUpperCase();
const datanumbers = "0123456789";
const dataSymbols = "$^*ùm!:;,&é\"'(-è_ç)?ù%£$."
const rangeValue = document.getElementById("password-length"); // récupère la valeur de range
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
    let data = [];
    let password = "";

    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...datanumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if(data.length ===0){// Au cas ou si aucun bouton n'est sélectionné donc 
        alert('Veuillez sélectionner des critères')
        return; // repart de zéro et ne continue pas la boucle, l'arrête directement 
    }


    for (i = 0; i < rangeValue.value; i++) {// Boucle for : tant que la valeur (i) est inférieur à range value (résultat du curseur), la boucle continue à s'effectuer 
    password += data[Math.floor(Math.random()*data.length)];// permet de sélectionner une donnée parmi l'ensemble des donnée 
    
    }

    passwordOutput.value = password;

    passwordOutput.select();
    document.execCommand("copy");

}

generateButton.addEventListener("click", generatePassword);
