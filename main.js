// tady je místo pro náš program



/* meno, priezvisko, vek */

function dotaznik(params) {
 let meno = prompt ("Aké je tvoje krstné meno?")
 let priezvisko = prompt ("Aké je tvoje priezvisko?")
 let rok_narodenia = Number(prompt ("Aký je rok tvojho narodenia?")) 
 let vystup = document.querySelector (".vystup")
 vystup.innerHTML += meno + " " + priezvisko + " " + (2022 - rok_narodenia)
 
}




/* farba */

function zmena_farby(params) {
   let farba = prompt ("Zadaj obľúbenú farbu v angličtine")
   let vystup = document.querySelector (".vystup")
    vystup.style.color = farba
 
}


