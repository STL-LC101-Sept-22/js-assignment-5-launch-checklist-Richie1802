// Write your JavaScript code here!

window.addEventListener("load", function(){
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        console.log("form submitted");
     event.preventDefault();
     let pilot = document.querySelector("input[name=pilotName]").value;
     let copilot = document.querySelector("input[name=copilotName]").value;
     let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
     let cargoLevel = document.querySelector("input[name=cargoMass]").value;
     let list = document.getElementById('faultyItems');
     console.log(pilot);
    formSubmission(document,pilot,copilot,fuelLevel,cargoLevel);
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse= myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
    //    console.log(listedPlanets);
   }).then(function () {
    //    console.log(listedPlanets);
   
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planetPicked = pickPlanet(listedPlanets);
       let name = planetPicked.name;
       let diameter = planetPicked.diameter;
       let star = planetPicked.star;
       let distance = planetPicked.distance;
       let imageUrl = planetPicked.image;
       let moons = planetPicked.moons;

       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    });

 

});
