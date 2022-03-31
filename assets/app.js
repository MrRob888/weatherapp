
var cityDisplay = document.getElementById("city-name")
var submitBtn = document.getElementById("submit")
// API key
const key = "82005d27a116c2880c8f0fcb866998a0";

// Kelvin measurement
const KELVIN = 273;

// button event to trigger search for weather

submitBtn.onclick = function getInput() {

    var city = document.getElementById("userInput").value;
     
    cityDisplay.innerHTML = city

    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;
    console.log(api)

    fetch(api)

    .then(response => response.json() 

    )
    .then (data => {

    // get the temp
    for (let i = 0; i < 6; i++) {
        document.getElementById("day" + (i+1) + "temp").innerHTML = Number(data.list[i].main.temp - KELVIN).toFixed(1) + " °C";
        }
    // get the humidty
    for (let i = 0; i < 6; i++) {
        document.getElementById("day" + (i+1) + "humidity").innerHTML = Number(data.list[i].main.humidity)  + " %";
        }
    // // Weather description
    for (let i = 0; i < 6; i++) {
        document.getElementById("day" + (i+1) + "description").innerHTML = (data.list[i].weather[0].description);
        }
        //Getting Weather Icons
        for(i = 0; i<6; i++){
            document.getElementById("img" + (i+1)).innerHTML = `<img src="assets/icons/${data.list[i].weather[0].icon}.png"/>`;
        }
        console.log(data)
    })
}

// Getting the day
    var d = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

    function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
    }

    for(i = 0; i<6; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }


// function renderList() {
  
//     for (var i = 0; i < searchHistory.length; i++) {

//         if(searchHistory[0] !== undefined){
//         console.log("here 0"); 
//         document.getElementById("loc1").innerHTML = searchHistory[0];   
//         }

//         if(searchHistory[1] !== undefined){
//         console.log(searchHistory[1]); 
//         document.getElementById("loc2").innerHTML = searchHistory[1];
//         }

//         if(searchHistory[2] !== undefined){
//         document.getElementById("loc3").innerHTML = searchHistory[2];   
//         }

//         if(searchHistory[3] !== undefined){
//         document.getElementById("loc4").innerHTML = searchHistory[3];
            
//         }

//         if(searchHistory[4] !== undefined){
//         document.getElementById("loc5").innerHTML = searchHistory[4];
//         }
//     }   
// }

// function setList(){
// localStorage.setItem("searchlocation", JSON.stringify(searchHistory));
// }

// function locationList (){
//     var storedlocation = JSON.parse(localStorage.getItem("searchLocation"));

//     if (storedlocation !== null) {
//         searchHistory = storedlocation
//     }else{
//         searchHistory = []
//     }
//     renderList();
// }
