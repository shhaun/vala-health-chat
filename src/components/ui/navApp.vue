<template>
  <div class="bottomNav">
     <v-btn depressed color="primary" dark to="/therapy">Therapy</v-btn>
     <v-btn depressed color="primary" dark to="/chat">Chat</v-btn>
     <v-btn depressed color="primary" dark to="/">Profile</v-btn>
     <v-btn depressed color="primary" dark to="/Buddy">Buddy</v-btn>
     <v-btn depressed color="primary" dark to="/About">About</v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bottomNav {
  width: 100%;
  background-color: rgb(56, 155, 189);
}</style>
