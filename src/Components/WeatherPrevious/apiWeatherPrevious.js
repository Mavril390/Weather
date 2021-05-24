import {validateDate} from './validateDate'

const API_KEY = 'e62712f5a8506ba9f4d2050b7b6f7f49'

const fetchData = position => {
  const { latitude, longitude } = position.coords;
  fetch(`https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => setWeatherDataPrevius(data));
}

const setWeatherDataPrevius = data =>{
    for(let i = 0; i < 8; i++){

        var dateP = `dateP${[i]}`
        var descriptionP = `descriptionP${[i]}`
        var tempMin = `tempMin${[i]}`
        var tempMax = `tempMax${[i]}`

        const datePre = () => {
            let d = new Date();
            if(validateDate((d.getDate() + i), d.getMonth(), 2021)){
                return `${(d.getDate() + i + 1)+ "-" +d.getMonth()}`;
            }
            else{
                return ([i] - 6) + "-" + (d.getMonth() + 1)
            }
        }
        
        const weatherData = {
            [dateP]: datePre(),
            [descriptionP]: data.daily[i].weather[0].main,
            [tempMin]: "Min: " + data.daily[i].temp.min + " C°",
            [tempMax]: "Max: " + data.daily[i].temp.max + " C°",
        }

        document.getElementById(`weatherP${[i]}`).innerHTML = 
        `<div class="weather__card">
            <div class="datep" id="dateP${[i]}"></div>
            <div class="weather__IconDes">
                <div id="iconP${[i]}"></div>
                <div id="descriptionP${[i]}"></div>
            </div>
            <div class="temp" id="tempMin${[i]}"></div>
            <div class="temp" id="tempMax${[i]}"></div>
        </div>`

        const codeIcon = data.daily[i].weather[0].icon
        const urlIcon = `http://openweathermap.org/img/wn/${codeIcon}.png`
        document.getElementById(`iconP${[i]}`).innerHTML = `<img src=${urlIcon}></img>`

        Object.keys(weatherData).forEach( key => {
            document.getElementById(key).textContent = weatherData[key];
        });
    }
}

export const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}