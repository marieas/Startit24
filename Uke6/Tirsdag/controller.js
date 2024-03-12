function getProblems(){
//bilListe array: liste over bilene - legge id i problemfelt
 for(let i= 0; i<bilListe.length; i++){
    bilListe[i].problem.push(getRandomProblemIndex());
 }
 console.table(bilListe)
 /*for(i in bilListe){
    // let randomIndex = getRandomProblemIndex();
    bilListe[i].problem.push(getRandomProblemIndex());
 }
 for(bil of bilListe){
    // let randomIndex = getRandomProblemIndex();
    bil.problem.push(getRandomProblemIndex());
 }*/
}

function getRandomProblemIndex(){
    return Math.floor(Math.random()* carProblems.length);
}


/*Get Car funksjon: trekker en tilfeldig bil som skal inn på verkstedet */ 


/*Assign mechanic funksjon: Hvilken mekaniker skal ta hvilket problem*/ 


/*Fix Car funksjon: få mekanikerne til å fikse bilen og siifra at den er fiksa */ 

// Calcutate pris