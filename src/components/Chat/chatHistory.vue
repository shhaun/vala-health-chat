<template>
    <div class="chatHistory">
        <v-card
    class="mx-auto"
    max-width="400"
    tile
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Chat History</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Doctor One</v-list-item-title>
        <v-list-item-subtitle>Do a v-for to get Call History here</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.chatHistory {
    height: 300px;
    color: white;
    background-color: black;
}
</style>