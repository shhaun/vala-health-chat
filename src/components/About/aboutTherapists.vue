<template>
  <div class="aboutTherapists">
    <div class="about-content">
      <h1>Therapists</h1>
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card
                    color="#385F73"
                    dark
            >
              <v-card-title class="headline">Best Therapists in UK
              </v-card-title>

              <v-card-subtitle>"One session and my Schizophrenia was gone"</v-card-subtitle>


              <v-card-actions>
                <v-btn text>SEE THIS ARTICLE</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col
                  v-for="(item, i) in items"
                  :key="i"
                  cols="12"
          >
            <v-card
                    :color="item.color"
                    dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                          class="headline"
                          v-text="item.title"
                  ></v-card-title>

                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                </div>

                <v-avatar
                        class="ma-3"
                        size="125"
                        tile
                >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#1F7087',
          title: 'Dr. Gupta',
          artist: 'Therapist',
        },
        {
          color: '#952175',
          title: '*insert doctor name*',
          artist: '*position*',
        },
      ],
    }),
  }
</script>

<style lang="scss" scoped>
  .about-content{
    background-color: rgb(78, 124, 184);
    color: rgb(255, 255, 255);
    border-radius: 25px;
    text-align: center;
    font-family: 'Cairo', sans-serif;
  }

</style>