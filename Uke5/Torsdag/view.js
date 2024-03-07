updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class='personContainer'>
    ${drawPeopleView()}    
    </div>
    <div class='inputContainer'>
    Name: <input onchange='setName(this.value)'/>
    Age: <input onchange='setAge(this.value)'/>
    Address: <input onchange='setAdress(this.value)'/>
    PhoneNr: <input onchange='setPhoneNr(this.value)'/>
    <button onclick=addPerson()>Add person</button>
    </div>
    <div>Search
    <input onchange='searchCriteria = this.value'/>
    <button onclick="findSearchedPerson()">Find Person</button>
    <div>${showFoundPerson()}</div>
    </div>
    `
}
function showFoundPerson(){
    let html = ''
    if(foundPeople.length >0){
        for(person of foundPeople){        
         html += `<div>
                        <div>${person.name}</div>
                        <div>${person.age}</div>
                        <br>
                    </div>` 
        }   
        return html;
    }
    return '';
}
function drawPeopleView(){
    let html = ''
    for(let i = 0; i<people.length; i++ ){
        html += `<div>
        <div>${people[i].name}</div>
        <div>${people[i].age}</div>
        <div>${people[i].address}</div>
        <div>${people[i].phoneNr}</div>
        <br>
    </div>`
    }   
    return html;
}