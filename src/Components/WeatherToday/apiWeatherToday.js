const API_KEY = 'e62712f5a8506ba9f4d2050b7b6f7f49'

const fetchData = position => {
  const { latitude, longitude } = position.coords;
  fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => setWeatherDataToday(data));
}

const setWeatherDataToday = data =>{
  const codeIcon = data.weather[0].icon
  const urlIcon = `http://openweathermap.org/img/wn/${codeIcon}.png`
  document.getElementById('icon').innerHTML = `<img src=${urlIcon}></img>`
  
  const weatherData = {
    location: data.name + ", " + data.sys.country,
    description: data.weather[0].main,
    temperature: data.main.temp + " C°",
    date: getDate(),
  }

  Object.keys(weatherData).forEach( key => {
    document.getElementById(key).textContent = weatherData[key];
  });
}

const getDate = () => {
  let date = new Date();
  return `${date.toDateString()}`;
}

export const onLoad = () => {
  navigator.geolocation.getCurrentPosition(fetchData);
}