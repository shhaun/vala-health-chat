<template>
  <div class="bottomNav">
     <v-btn depressed color="primary" width="75px" rounded small dark to="/therapy">Therapy</v-btn>
     <v-btn depressed color="primary" width="75px" rounded small dark to="/chat">Chat</v-btn>
     <v-btn depressed color="primary" width="75px" rounded small dark to="/">Profile</v-btn>
     <v-btn depressed color="primary" width="75px" rounded small dark to="/Buddy">Buddy</v-btn>
     <v-btn depressed color="primary" width="75px" rounded small dark to="/About">About</v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bottomNav {
  width: 100%;
  height: 75px;
  background-color: rgb(56, 155, 189);
}</style>
