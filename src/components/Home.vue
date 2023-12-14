<template>
  <v-container id="home">
    <v-row class="d-flex flex-column flex-md-row align-center justify-center">
      <v-col
        sm="12"
        md="6"
      >
        <v-img
          src="../assets/Developer activity-bro.png"
          max-height="45vh"
        ></v-img>
      </v-col>
      <v-col
        class="text-center text-md-left"
        sm="12"
        md="6"
      >
        <h1>Hi, I'm Jed!</h1>
        <p>I'm Full Stack Web Developer.</p>
      </v-col>
    </v-row>

    <div class="mb-10"></div>

    <v-row class="d-flex align-center justify-center">
      <v-col cols="auto">
        <v-btn
          href="https://www.linkedin.com/in/jedmark-macarilay-b75632236/"
          min-width="164"
          rel="noopener noreferrer"
          target="_blank"
          variant="text"
        >
          <v-icon
            icon="mdi-linkedin"
            size="large"
            start
          />

          LinkedIn
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn
          href="https://github.com/jed-macarilay"
          min-width="164"
          rel="noopener noreferrer"
          target="_blank"
          variant="text"
        >
          <v-icon
            icon="mdi-github"
            size="large"
            start
          />

          Github
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  @media (min-width: 1920px) {
    .v-container {
      max-width: 1000px !important;
    }
  }
</style>