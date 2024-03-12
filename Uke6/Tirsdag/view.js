updateView()
function updateView(){
    document.getElementById('app').innerHTML = `
    <div>Velkommen til Bjarnes Verksted!</div>
    ${printCars()}
    `
}

function printCars(){
    let cars ='';
    getProblems()
    for(let i = 0; i<bilListe.length; i++){
        cars += `
        <div>${bilListe[i].name}</div>
        <div>${bilListe[i].farge}</div> 
        ${printProblems(i)}
        `
    }   
    return cars;
}

function printProblems(carIndex){
    let hrmrl = ''
    let car = bilListe[carIndex];
    console.log(car)
    console.log(carIndex)

    for(let i = 0; i<car.problem.length; i++){
        hrmrl += `
        <div>${getConnectedCarProblem(car.problem[i])}</div>
        `
    }
    return hrmrl;
}

function getConnectedCarProblem(index){
    return carProblems[index].problem;
}