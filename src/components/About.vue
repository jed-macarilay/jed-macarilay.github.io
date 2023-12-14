<template>
  <v-container id="about">
    <div>
      <v-row class="d-flex flex-column flex-md-row align-center justify-center">
        <v-col
          sm="12"
          md="6"
        >
          <v-img
            src="../assets/Website Creator-bro.png"
            max-height="45vh"
          ></v-img>
        </v-col>

        <v-col
          sm="12"
          md="6"
        >
          <v-card
            class="px-md-5"
            elevation="0"
          >
            <v-card-title class="font-weight-bold text-h5">About me</v-card-title>
            <v-card-text class="text-h6 text-justify">
              <div class="text-h5 font-weight-bold">
                I am Self-taught Developer
              </div>
              I've been doing web development since 2018 and have been part of many projects in different industries such as outsourcing, banking, freelancing, and the food industry. My expertise spans both front-end and back-end development. For the front-end, I use Vue js. On the back-end, I work with PHP, Laravel, and MySQL, and I'm also knowledgeable in using CodeIgniter. Currently, I am expanding my skill set by learning React js, Node js, Tailwind, and MongoDB.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
  @media (min-width: 1920px) {
    .v-container {
      max-width: 1250px !important;
    }
  }
</style>
