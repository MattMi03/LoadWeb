<template>
  <div id="pmain_window" style="display: block">
    <div class="window1">
      <h1>welcome, a123456</h1>
      <p><span class="timer">{{ time }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: null
    };
  },
  mounted() {
    this.getData();
    setInterval(() => {
      this.getData();
    }, 1000); 
  },
  methods: {
    getData() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = this.padZero(currentDate.getMonth() + 1); 
      const currentDay = this.padZero(currentDate.getDate());
      const currentHour = this.padZero(currentDate.getHours());
      const currentMinute = this.padZero(currentDate.getMinutes());
      const currentSecond = this.padZero(currentDate.getSeconds());
      this.time = `${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinute}:${currentSecond}`;
    },
    padZero(num) {
      return num < 10 ? `0${num}` : num;
    }
  }
};

</script>

<style scoped>
#pmain_window {
  text-align: center;
}

#pmain_window h1 {
  font-size: 3rem;
  height: fit-content;
  position: center;
}

#pmain_window .timer {
  font-size: 3rem;
  height: fit-content;
  position: center;
}
</style>