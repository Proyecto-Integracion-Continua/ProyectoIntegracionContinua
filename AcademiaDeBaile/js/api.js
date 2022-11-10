
window.addEventListener("load", function() {
    connection();
});


function connection(){
    console.log("me conecte");
    fetch('https://localhost:49153/WeatherForecast')
    .then((response) => response.json())
    .then((data) => console.log(data));
}