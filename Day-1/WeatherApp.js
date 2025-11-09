const APIkey = "fc5ff601f7ed46e49e86d0d343c05a65";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=" ;

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

    async function checkWeather(city) {
    const response = await fetch(APIurl + city + `&appid=${APIkey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = "block" ;
        document.querySelector('.weather').style.display = "none";
    }else{
    
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +  "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".weather").style.display = "block"

        // Insert weather images acc to weather

        if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "" 

        }
        else if (data.weather[0].main == "Clear"){
        weatherIcon.src= ""
        }
        else if (data.weather[0].main == "Rain"){
        weatherIcon.src= ""
        }
        else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src= ""
        }
        else if (data.weather[0].main == "Mist"){
        weatherIcon.src= ""
        }
        else if (data.weather[0].main == "Snow"){
        weatherIcon.src= ""
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
        }
    }
    
searchBtn.addEventListener('click', () =>{
    checkWeather(searchBox.value);
})




