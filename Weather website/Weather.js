var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temperature = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var apik = "9869533f2b04049246f53ae3cc8fcc85"

function convertion(val) {
    return (val - 273).toFixed(3);  
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+ '&appid='+apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']  
            var temp = data['main']['temp']
            var windspeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameval}</span>`
            temperature.innerHTML = `Temperature: <span>${convertion(temp)}°C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`
            wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`
        })
        .catch(err => alert('You Entered Wrong City Name'))
});
