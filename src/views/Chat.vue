<template>
  <div class="chatApp">
    <h1>Chat App</h1>
    <h3>Doctors Profile Image and audio/ video options</h3>

    <h3>Chat Messages</h3>
    <h4>Text Chat</h4>

    <router-link to="/chat"> <button>Chat</button></router-link>
     <router-link to="/chatHistory"> <button>Chat History</button></router-link>
  <router-view></router-view>
  </div>
  
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
