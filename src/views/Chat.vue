<template>
  <div class="chatApp">
    <h1>Chat App</h1>
    <router-link to="/chat"> <button>Chat</button></router-link>
     <router-link to="/chatHistory"> <button>Chat History</button></router-link>
  <router-view></router-view>
  </div>
  
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
