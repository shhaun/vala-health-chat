<template>
  <v-container padless class="healthStatusApp">
    <div id="stats">
      <div id="left-info">
        <!-- slider -->
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <!-- text info -->
        <div id="text">
          <p>
            Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
            
          </p>
        </div>
      </div>
      <!-- circle with mood -->
      <div id="mood">
        <div id="inner-circle"><p id="circle-mood">MOOD</p></div>
      </div>
    </div>
    <!-- info on the bottom with appointments -->
    <div id="upcoming-appointments">
      <p>HERE YOU CAN SEE YOUR UPCOMING APPOINTMENTS</p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "healthStatusApp",
};
</script>

<style lang="scss" scoped>
.healthStatusApp {
  height: 80vh;
  width: 100%;
  background-color: rgb(69, 138, 161);
}
#stats {
  height: 35vh;
  width: 100%;
  margin: 0 0 0 1%;
  background: #9ed7f1;
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
  padding: 20px 0 0 0;
}
#slider-div {
  width: 120px;
  height: 35px;
  border-radius: 15px;
  background: white;
  margin: 0 0 0 0;
}
// #slider {
//   width: 35px;
//   height: 35px;
//   border-radius: 50%;
//   background: yellowgreen;
//   margin: 0 0 0 79px;
// }
#text {
  height: 30vh;
  width: 25vh;
  text-align: center;
  color: #fff;
  font-family: 'Cairo', sans-serif;
  flex-shrink: inherit;
}
#mood {
  height: 100px;
  width: 100px;
  background: yellow;
  border-radius: 100px;
  margin: 9vh 0 0 1vh;
}
#inner-circle {
  height: 90px;
  width: 90px;
  border-radius: 90px;
  margin: 10px 0 0 10px;
  background: #fab27a;
  text-align: center;
  padding: 50px 0 0 0;
}
#left-info {
  padding: 35px 0 0 10px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
