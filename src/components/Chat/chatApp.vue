<template>
  <div class="chatApp">
    <h1>
      Chat App
    </h1>
    <v-img src="https://picsum.photos/510/300?random" width="120px"></v-img>
    <h3>Doctors Name</h3>

<<<<<<< Updated upstream
    <h3>Some Options</h3>
    <h4>Text Chat</h4>
=======
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
        <div id="margin-div"></div>
    </div>
>>>>>>> Stashed changes
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.chatApp {
  height: 30vh;
  color: white;
  background-color: rgb(41, 156, 233);
}
#margin-div{
  height: 60px;
}
</style>
