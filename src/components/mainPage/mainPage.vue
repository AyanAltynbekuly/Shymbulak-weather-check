<template>
    <div class="weather-cards">
      <div class="weather-card current-temperature">
        <div class="card-header">
          <h2>Current Temperature</h2>
        </div>
        <div class="card-body">
          <div class="temperature">{{ currentTemperature }}</div>
          <div class="location">{{ currentLocation }}</div>
        </div>
      </div>
  
      <div class="weather-card daily-weather">
        <div class="card-header">
          <h2>Daily Weather</h2>
        </div>
        <div class="card-body">
          <div class="weather-list">
            <div v-for="(weather, index) in dailyWeather" :key="index" class="weather-item">
              <div class="date">{{ weather.date }}</div>
              <div class="icon">
                <img :src="getWeatherIconUrl(weather.icon)" :alt="weather.description" />
              </div>
              <div class="temperature">{{ weather.temperature }}</div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="weather-card weekly-forecast">
        <div class="card-header">
          <h2>Weekly Forecast</h2>
        </div>
        <div class="card-body">
          <div class="weather-list">
            <div v-for="(weather, index) in weeklyForecast" :key="index" class="weather-item">
              <div class="date">{{ weather.date }}</div>
              <div class="icon">
                <img :src="getWeatherIconUrl(weather.icon)" :alt="weather.description" />
              </div>
              <div class="temperature">{{ weather.temperature }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        currentTemperature: null,
        currentLocation: null,
        dailyWeather: [],
        weeklyForecast: []
      }
    },
  
    mounted() {
      // Fetch current weather data
      fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=8f6066cc2f4903e7c6ad130efd41ea7b')
        .then(response => response.json())
        .then(data => {
          this.currentTemperature = data.main.temp;
          this.currentLocation = `${data.name}, ${data.sys.country}`;
        });
  
      // Fetch daily weather data
      fetch('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&appid=8f6066cc2f4903e7c6ad130efd41ea7b')
        .then(response => response.json())
        .then(data => {
          const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
  
          this.dailyWeather = dailyData.map(item => ({
            date: this.formatDate(item.dt_txt),
            icon: item.weather[0].icon,
            description: item.weather[0].description,
            temperature: item.main.temp
          }));
        });
  
      // Fetch weekly forecast data
      fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=London,uk&units=metric&cnt=7&appid=8f6066cc2f4903e7c6ad130efd41ea7b')
        .then(response => response.json())
        .then(data => {
          this.weeklyForecast = data.list.map(item => ({
            date: this.formatDate(item.dt),
            icon: item.weather[0].icon,
            description: item.weather[0].description,
            temperature: item.temp.day
          }));
        });
    },
}
</script>
  
<style scoped>
.weather-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px); /* Set the height based on your header and sidebar height */
}
</style>