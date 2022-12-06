// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    console.log(document.getElemetById("missionTarget"))
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${Diameter}$</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons} </li>
    </ol>
    <img src="${imageUrl}"/>`
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    let testInput = document.querySelector("input[name=username]");
         let teamName = document.querySelector("input[name=team]");
         if (testInput.value === "" ){
            return "Empty";
         } else if (isNaN(testInput) === true ){
            return "Not a Number";
        } else if (isNaN(testInput) === false ){
            return "Is a Number";
        };
    }
            
   


function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus"); 
    let faultyItems = document.getElementById('faultyItems');

    if (validateInput(pilot.value) === "Is a Number"
    || validateInput(copilot.value) === "Is a Number"
    || validateInput(fuelLevel.value) === "Not a Number"
    || validateInput(cargoLevel.value) === "Not a Number") {
        alert("Invalid input!");
        
        else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        alert("Please enter numerical values for Fuel Level and Cargo Mass");
    } else if (validateInput(pilot)===`Is a Number`||validateInput(copilot)===`Is a Number`) {
        alert('Please do not enter numbers for name of pilot or co-pilot');
    } else {
        pilotStatus.innerHTML = `Pilot: ${pilot.value}`;
        copilotStatus.innerHTML = `Co-pilot: ${copilot.value}`
        if (fuelLevel.value < 10000){
            fuelStatus.innerHTML =  "Fuel level is too low for takeoff!";
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        } else if (cargoLevel.value > 10000){
            cargoStatus.innerHTML =  "Cargo weight is too high for takeoff!";
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        } else {
            launchStatus.innerHTML = "Shuttle ready for launch";
            launchStatus.style.color = "green";
        }
    };
}



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json).then( function(response");{
        return Response.json()
    };
    console.log(planetsReturned);
    return planetsReturned;
}

function pickPlanet(planets) {
    let idx = Math.floor(Math.random() * planets.length);
    return planets[idx];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
