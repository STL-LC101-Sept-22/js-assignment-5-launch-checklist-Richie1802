// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // console.log(document.getElementById("missionTarget"))
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>diameter: ${diameter}$</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons} </li>
    </ol>
    <img src="${imageUrl}"/>`;
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
//    let intoNumber = Number(testInput);
console.log(testInput);
if (testInput === "" ){
           console.log(testInput);
            return "Empty";
         } else if (isNaN(testInput)  ){
            console.log(testInput);
            return "Not a Number";
        } else if (isNaN(testInput) === false ){
            console.log(testInput)
             return "Is a Number";
        };
    }
            
   


function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus"); 
    let list = document.getElementById('faultyItems');
    console.log(pilot,copilot,fuelLevel,cargoLevel);
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required");
    } else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Please enter valid input for each field");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
        } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
        }
    }
    
}




async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        return response.json()
    });
    
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
