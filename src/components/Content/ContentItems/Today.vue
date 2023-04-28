<template>
    <div class="today">
        <div class="todayNow">
            <p class="today_text">Сейчас</p>
            <div class="todayNow_main">
                <img :src="weatherIconUrl" alt="icon" class="weatherIconUrl">
                <div class="today_data">
                    <p>{{weatherData}}</p>
                    <h1 class="today_data_degrees">{{temp}} &#8451;</h1>
                    <div class="today_wind_humidity">
                        <p class="today_wind">{{ wind }} м/с</p>
                        <p class="today_humidity">{{ humidity }} см</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="today_hourly">
            <p class="today_hourly_text">Погода в течение дня</p>
            <div class="today_hourly_item">
                <TodayItem
                    :todayHourly={todayHourly}
                />
            </div>
        </div>
    </div>
</template>

<script>
import TodayItem from './TodayItem.vue';

export default {
    props: {
        today: {},
        todayHourly: []
    },
    data() {
        return {
            hourly: {}
        };
    },
    computed: {
        weatherData() {
            if (this.today.weather) {
                return this.today.weather[0].main;
            }
            else {
                return "Loading...";
            }
        },
        weatherIconUrl() {
            if (this.today.weather) {
                return `http://openweathermap.org/img/w/${this.today.weather[0].icon}.png`;
            }
            else {
                return "Loading...";
            }
        },
        temp() {
            if (this.today.main) {
                return Math.round(this.today.main.temp - 273);
            }
            else {
                return "Loading...";
            }
        },
        wind() {
            if (this.today.wind) {
                return this.today.wind.speed;
            }
            else {
                return "Loading...";
            }
        },
        humidity() {
            if (this.today.main) {
                return this.today.main.humidity ;
            }
            else {
                return "Loading...";
            }
        }
    },
    mounted() {},
    components: { TodayItem }
}
</script>

<style scoped>
.today {
    display: flex;
    justify-content: space-between;
    margin: 60px 0 30px;
}
.today_text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    margin: 0;
}
.todayNow {
    width: 48%;
    background: #75B6F2;
    box-shadow: 0px 8.88889px 10.6667px rgba(117, 182, 242, 0.15);
    border-radius: 16px;
    padding: 16px 20px;
}
.todayNow_main {
    display: flex;
    align-items: center;
}
.weatherIconUrl {
    width: 140px;
    height: 140px;
}

.today_data {
    margin: 0 30px 20px;
    width: 100%;
}

.today_data > p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin: 0;
}

.today_data_degrees {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    color: #FFFFFF;
}

.today_data_degrees::after {
    content: '';
    display: block;
    height: 1px;
    background: #FFFFFF;
    opacity: 0.3;
}

.today_wind_humidity {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    display: flex;
    align-items: center;
    color: #FFFFFF;
}
.today_wind, .today_humidity {
    display: flex;
    margin: 0;
    margin-right: 45px;
}
.today_wind::before {
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    background: url() center / contain no-repeat;
    margin-right: 8px;
}

.today_humidity::before {
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    background: url() center / contain no-repeat;
    margin-right: 8px;
}

.today_hourly {
    margin-left: 12px;
    padding: 16px;
    width: 48%;
    border: 1px solid #DAE9F4;
    border-radius: 16px;
}

.today_hourly_text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #4F5864;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E1E7EE;
    padding-bottom: 16px;
    margin: 0;
}

.today_hourly_text::before {
    content: '';
    display: block;
    background: url() center / contain no-repeat;
    width: 14px;
    height: 14px;
    margin-right: 8px;
}

.today_hourly_item {
    display: flex;
    justify-content: space-between;
}

@media screen and (max-width: 1250px) {
    .today {
        flex-direction: column;
        align-items: center;
        margin: 60px 0 30px;
    }
    .todayNow {
        width: 90%;
    }

    .today_hourly {
        margin: 24px 0;
        width: 90%;
        overflow-x: auto;
    }
}



</style>