<template>
  <div class="day_item" v-for="item in dataWeather.dataWeather">
    <p class="day_item_time">{{ getDay(new Date(item.dt_txt).getDay()) }}</p>
    <img
      :src="'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'"
      alt="icon"
      class="day_item_IconUrl"
    />
    <p class="day_item_degrees">
      мин. {{ Math.round(item.main.temp_min - 273) }} &#8451;
    </p>
    <p class="day_item_degrees">
      макс. {{ Math.round(item.main.temp_max - 273) }} &#8451;
    </p>
  </div>
</template>

<script>
export default {
  props: {
    dataWeather: [],
  },
  methods: {
    getDay(d) {
      switch (d) {
        case new Date(Date.now()).getDay():
          return "Сегодня";
        case 0:
          return "ВС";
        case 1:
          return "ПН";
        case 2:
          return "ВТ";
        case 3:
          return "СР";
        case 4:
          return "ЧТ";
        case 5:
          return "ПТ";
        case 6:
          return "СБ";
      }
    },
  },
};
</script>

<style scoped>
.day_item {
  padding: 12px;
}
.day_item_time {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #6d7784;
}
.day_item_degrees {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #4f5864;
  margin: 0;
}
</style>
