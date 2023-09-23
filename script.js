function getWeather(){
    let cityName = document.getElementById("cityName").value;
    let result = document.getElementById("result");
    axios.get(`https://api.weatherapi.com/v1/current.json?key=1e3673a8f9894aafbaf180649232309&q=${cityName}&aqi=yes`)
    .then(function (response) {
// handle success
    let weatherData = response.data;
console.log(weatherData);
result.innerHTML=`
 <div class="card text-center">
        <div class="card-header" id="city">
          ${weatherData.location.name} , ${weatherData.location.region} , ${weatherData.location.country}
        </div>
        <div class="card-body">
          <h5 class="card-title">Feels Like ${weatherData.current.feelslike_c}</h5>
          <p class="card-text">${weatherData.current.temp_c}&degC</p>
          ${weatherData.current.condition.text}
        </div>
        <div class="card-footer text-body-secondary">
          ${weatherData.location.localtime}
        </div>
      </div>
      `;

})
.catch(function (error) {
// handle error
console.log(error);
result.innerHTML=`Error <br> Unable to Find Location`;
})
  }