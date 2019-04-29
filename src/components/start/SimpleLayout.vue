<template>
<v-app>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Toolbar Grid Footer</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon><v-icon>search</v-icon></v-btn>
    <v-btn icon><v-icon>apps</v-icon></v-btn>
  </v-toolbar>

  <v-content>
    <router-view/>
  </v-content>

  <v-footer height="auto" color="indigo" app>
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        py-3
        text-xs-center white--text
        xs12
      >
        &copy;2019 — <strong>Leocornus LTD.</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</v-app>
</template>
<script>
export default {
}
</script>
