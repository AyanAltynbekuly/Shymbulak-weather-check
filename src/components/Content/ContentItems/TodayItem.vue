<template>
    <div class="todayItem" v-for="hourly in todayHourly.todayHourly">
        <p class="todayItem_time">{{new Date(hourly.dt_txt).getHours()}}</p>
        <img :src="'http://openweathermap.org/img/w/' + hourly.weather[0].icon + '.png'" alt="icon" class="weatherIconUrl">
        <p class="todayItem_degrees">{{Math.round(hourly.main.temp - 273)}} &#8451;</p>
    </div>
</template>

<script>

export default {
    props: {
        todayHourly: []
    }
}
</script>

<style scoped>
.todayItem {
    padding: 12px;
}
.todayItem_time {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #6D7784;
}
.todayItem_degrees {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #4F5864;
    margin: 0;
}
</style>