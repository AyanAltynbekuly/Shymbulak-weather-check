<template>
    <div>
        <div class="container">
            <h1>Погода</h1>
            <Today 
                :today="this.dataWeatherToday ? this.dataWeatherToday : '' "
                :todayHourly="this.dataWeatherHourly ? this.dataWeatherHourly : '' "
            />
            <DaysItems
                :dataWeather="this.dataWeather ? this.dataWeather : '' "
            />
        </div>
    </div>
</template>

<script>
import { getWeather } from '../API/weatherApi.js'
import Today from './ContentItems/Today.vue'
import DaysItems from './ContentItems/DaysItems.vue';

export default {
    data() {
        return {
            dataWeather: [],
            dataWeatherToday: {},
            dataWeatherHourly: []
        };
    },
    mounted() {
        getWeather().then((data) => {
            this.dataWeatherToday = data.list[0];
            this.dataWeatherHourly = data.list.slice(0, 8);
            let date = '';
            for (let i = 0; i < data.list.length; i++) {
                if (date === '') {
                    date = new Date(data.list[i].dt_txt).getDate()
                    this.dataWeather.push(data.list[i])
                } else if (date !==  new Date(data.list[i].dt_txt).getDate()) {
                    date = new Date(data.list[i].dt_txt).getDate()
                    this.dataWeather.push(data.list[i])
                }
            }
        })
    },
    components: { Today, DaysItems }
}

</script>

<style scoped>

</style>