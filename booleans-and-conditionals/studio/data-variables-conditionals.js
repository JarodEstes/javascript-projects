// Initialize Variables below
let date = "Monday 2019 03-18";
let time = "10:05:34 A.M";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let  maximumMassLimit = 850000;
let fuelTempCelsius = -255;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = "true";


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear
if (astronautCount <= 7) {
    console.log("clear");
} if (astronautStatus == "ready") {
    console.log("clear");
} if (totalMassKg < maximumMassLimit) {
    console.log("clear");
} if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) {
    console.log("clear");
} if (fuelLevel = "100%"); {
    console.log("clear");
} if (weatherStatus = "clear") {
    console.log("clear")
}
// Verify shuttle launch can proceed based on above conditions
console.log(date);
console.log(time);
console.log(astronautCount);
console.log(crewMassKg);
console.log(fuelMassKg);
console.log(shuttleMassKg);
console.log(totalMassKg);
console.log(fuelTempCelsius);
console.log(weatherStatus);
console.log("Have a safe flight!");