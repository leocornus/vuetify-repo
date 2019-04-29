<template>
<div>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card dark color="red">
        <v-card-text class="px-0">
          Hello Vuetify World!
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex v-for="i in 12 * 120" :key="`6${i}`" xs1>
      <v-card dark :color="`#${(i * 50).toString(16)}`"
        <v-card-text class="px-0">{{i}}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</div>
</template>

<script>
export default {
  name: 'VuetifyScratchPad',
  data () {
    return {};
  },

  methods: {
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
