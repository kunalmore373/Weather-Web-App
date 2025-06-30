const apikey = "51771144ea8edae8437d6e372ce2e46a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector (".search input") ;
const searchBtn = document.querySelector ( ".search button ") ;
const weatherImg = document.querySelector ( ".weather-img img ") ;

async function checkWeather(city) {
    const response = await fetch ( apiurl + city + `&appid=${apikey}`)
    var data = await response.json() ;
    console.log ( data);
    if (response.status === 404) {
        alert("City not found. Please try again.");
        return;
    }


    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";
    
    if ( data.weather[0].main == "Clouds"){
        weatherImg.src = "images/clouds.png" ;
    }
    else if ( data.weather[0].main == "Clear"){
        weatherImg.src = "images/clear.png" ;
    }
    else if ( data.weather[0].main == "Mist"){
        weatherImg.src = "images/mist.png" ;
    }
    else if ( data.weather[0].main == "Drizzle"){
        weatherImg.src = "images/drizzle.png" ;
    }
    else if ( data.weather[0].main == "Rain"){
        weatherImg.src = "images/rain.png" ;
    }
    else if ( data.weather[0].main == "Snow"){
        weatherImg.src = "images/snow.png" ;
    }
    
}

searchBtn.addEventListener("click" ,()=>{
    checkWeather(searchBox.value) ;
} ) 