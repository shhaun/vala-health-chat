<template>
  <div class="chatApp">
    <div id="chatBanner">
      <v-row class="videoCall" justify="center">
        <v-img
          width="120px"
          src="https://image-cdn.essentiallysports.com/wp-content/uploads/20200331162635/pewdiepie.png"
        ></v-img>

        <v-img
          width="120px"
          src="https://static01.nyt.com/images/2019/11/17/arts/17tom-hanks2-promo/17tom-hanks2-videoSixteenByNineJumbo1600.jpg"
        ></v-img>
      </v-row>
      <v-row class="settingsBar">
        <v-col>
          <v-btn dark small>
            Chat
          </v-btn>
        </v-col>
        <v-col>
          <v-btn dark small>
            Camera On
          </v-btn>
        </v-col>
        <v-col>
          <v-btn dark small>
            Settings
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div id="chatMessages">
        <div class="doctor">
          <h3>Doctors Name</h3>
          <h4>Date & Time</h4>
          <p>Message</p>
        </div>
        <div class="client">
          <h3>Client Name</h3>
          <h4>Date & Time</h4>
          <p>Message</p>
        </div>
        <div class="doctor">
          <h3>Doctors Name</h3>
          <h4>Date & Time</h4>
          <p>Message</p>
        </div>
        <div class="client">
          <h3>Client Name</h3>
          <h4>Date & Time</h4>
          <p>Message</p>
        </div>  
    
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.chatBanner {
  position: fixed;
}
.chatApp {
  height: 100%;
  color: white;
  background-color: rgb(134, 189, 226);
}

.settingsBar {
  background-color: rgb(63, 143, 235);
}
.videoCall {
  background-color: blue;
  height: 35vh;
}

.doctor {
  background-color: rgb(78, 124, 184);
  color: rgb(255, 255, 255);
  height: 70px;
  margin: 10px;
  padding: 0 0 0 15px;
  border-radius: 25px;
  text-align: left;
}
.client {
  background-color: black;
  height: 70px;
  margin: 10px;
  padding: 0 0 0 15px;
  border-radius: 25px;
  text-align: left;
}
</style>
