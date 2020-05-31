<template>
  <div class="healthStatusApp">
    <div id="stats">
      <div id="left-info">
        <!-- slider -->
        <div id="slider-div">
          <div id="slider"></div>
        </div>
        <!-- text info -->
        <div id="text">
          <p>Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
        </div>
      </div>
      <!-- circle with mood -->
      <div id="mood">
        <div id="inner-circle"><p id="circle-mood">MOOD</p></div>
      </div>
    </div>
    <!-- info on the bottom with appointments -->
    <div id="upcoming-appointments"><p>HERE YOU CAN SEE YOUR UPCOMING APPOINTMENTS</p></div>
  </div>
</template>

<script>
export default {
  name: "healthStatusApp",
};
</script>

<style lang="scss" scoped>
.healthStatusApp {
  height: 60vh;
  background-color: lightblue;
}
#stats {
  height: 35vh;
  width: 98%;
  margin: 0 0 0 1%;
  background: #fab27a;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
#upcoming-appointments {
  height: 19vh;
  width: 80%;
  margin-left: 10%;
  border-radius: 25px;
  box-shadow: 0 5px 5px 0 #fff;
  margin-top: 1vh;
  background: violet;
  justify-content: center;
  padding: 50px 0 0 0;
}
#slider-div {
  width: 120px;
  height: 35px;
  border-radius: 15px;
  background: white;
  margin: 0 0 0 0;
}
#slider {
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background: yellowgreen;
  margin: 0 0 0 79px;
}
#text {
  height: 30vh;
  width: 25vh;
  text-align: center;
  color: #fff;
  margin: 40px 0 0 0;
}
#mood {
  height: 150px;
  width: 150px;
  background: yellow;
  border-radius: 150px;
  margin: 10vh 0 0 3vh;
}
#inner-circle {
  height: 130px;
  width: 130px;
  border-radius: 130px;
  margin: 10px 0 0 10px;
  background: #fab27a;
  text-align: center;
  padding: 50px 0 0 0;
}
#left-info{
  padding: 35px 0 0 10px;
}

</style>
