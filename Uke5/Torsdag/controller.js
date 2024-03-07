function setName(inputValue){
    inputName = inputValue;
}
function setAge(inputValue){
    inputAge = inputValue;
}
function setAdress(inputValue){
    inputAddress = inputValue;
}
function setPhoneNr(inputValue){
    inputPhoneNr = inputValue;
}

function addPerson(){
    inputPerson = {
        name: inputName,
        age: inputAge,
        address: inputAddress,
        phoneNr: inputPhoneNr
    }
    people.push(inputPerson);
    updateView();
}

function findSearchedPerson(){
    foundPeople = [];
    for(person of people){       
       // person første runde i løkke er bjarne
       // første runde console.log(person.name) //= 'bjarne'
       console.log(searchCriteria)
       if(person.name.includes(searchCriteria)){
            foundPeople.push(person);
            console.log('found person' + person.name)
       }
        
    }
    updateView();
    /*for(index in people){
        // index =0 første runde i løkken
         console.log(index) //= 0 
     }*/
}