<template>
<<<<<<< Updated upstream
  <div class="aboutPage">
    <div class="banner"> 
      <v-img  src="https://media.mnn.com/assets/images/2018/08/CollectionOfCloudsAgainstABlueSky.jpg.653x0_q80_crop-smart.jpg" height="100%"></v-img>
    </div> 
    <div class="aboutPageNav">
      <router-link to="/about">
        <button
          depressed
          color="primary"
          width="75px"
          rounded
          small
          dark
          to="/about"
        >
          About Developers
        </button></router-link
      >
=======
  <div class="aboutTherapists">

    <div class="about-content">
      <div id="button-1">
>>>>>>> Stashed changes
      <router-link to="/aboutTherapists">
        <button>Therapists</button></router-link>
    </div>
    
    <div id="button-2">
      <router-link to="/aboutVala"> <button> Vala</button></router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
.about-content{
  background-color: rgb(78, 124, 184);
  color: rgb(255, 255, 255);
  height: 70px;
  margin: 10px;
  font-size: 20px;
  border-radius: 25px;
  justify-content: center;
  display: flex;
  font-family: 'Cairo', sans-serif;
}
#button-1{
  width: 50%;
  text-align: right;
  padding-right: 10px;
  border-right: 1px  solid #fff;
  padding-top: 15px;
}
#button-2{
  width: 50%;
  text-align: left;
  padding-left: 10px;
  padding-top: 15px;
}
a {
  text-decoration: none !important;
}
</style>
