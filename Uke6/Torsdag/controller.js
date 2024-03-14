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

function SendCarToWorkshop(){
    GetCar()
}
//PAUSE TIL 13.42
/*Get Car funksjon: tar ut en og en bil som skal inn på verkstedet 
- printe ut hvilken bil som skal fikses, hvilken mekaniker som får bilen
i oppgave, 
*/ 
function GetCar(){
    statusMessage = ''
    chosenCar = bilListe[0]
    bilListe.splice(0,1)
    getSpecialistMechanic()
    fixCar()
    updateView();
}

function getSpecialistMechanic(){
    //vite hvilket problem man skal løse
    let problemId = chosenCar.problem[0]
    //finne mekaniker som har spesialisert samme problemområde
    chosenMechanic = mechanics.find(mechanic => mechanic.goodAtFixingProblemID == problemId)
}

function fixCar(){
    //fikse bilen
    chosenCar.problem.splice(0,1);
    //vise noe om at bilen er fikset
    statusMessage = `${chosenCar.name} has been fixed`
}

/*Fix Car funksjon: få mekanikerne til å fikse bilen og siifra at den er fiksa */ 
