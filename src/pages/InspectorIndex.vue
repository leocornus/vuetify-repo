<template>
<div>
<v-container fluid grid-list-md>
  <v-layout wrap>
    <v-flex xs12>
      <v-text-field
         v-model="message"
         append-icon="search"
         prepend-icon="help"
         box
         clear-icon="close"
         clearable
         label="What are you looking for?"
         type="text"
         @click:clear="clearMessage"
         @click:append="search"
      ></v-text-field>
    </v-flex>
  </v-layout>
</v-container>
</div>
</template>

<script>
export default {
  name: 'VuetifyScratchPad',
  data () {
    return {
      message: '',
    };
  },

  methods: {
      clearMessage () {
          this.message = ''
      },

      search () {
      }
  },
  created() {

    this.message = this.$localSettings.applicationName;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
