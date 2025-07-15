const key = "73b65c9b84e5989cfd9fbe344bbc3a17"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
// https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=73b65c9b84e5989cfd9fbe344bbc3a17&units=metric


let searchInpt = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");


async function weatherApp(city){
    let response = await fetch(apiUrl + city +`&units=metric&appid=${key}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

        let data = await response.json()
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";




    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }else
        
    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }else

        
    if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "images/Drizzle.png"
    }else

        
    if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }else

        
    if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
        


    }
    

}

searchBtn.addEventListener("click", ()=>{
    let city = searchInpt.value;
weatherApp(city)
})
