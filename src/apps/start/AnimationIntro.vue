<template>
<v-container grid-list-xs>
<v-layout id="list-demo">
    <v-flex xs12 sm4>
<v-toolbar dense>
  <v-toolbar-title>Animation with transition group</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn icon>
    <v-icon>more_vert</v-icon>
  </v-btn>
  <v-btn icon>
    <v-icon>expand_less</v-icon>
  </v-btn>
</v-toolbar>
<v-card>
  <v-card-title primary-title>
    <transition-group name="list" tag="div">
      <v-btn color="info"
             small 
             v-for="item in items" 
             v-bind:key="item" 
             class="list-item">
        {{ item }}
      </v-btn>
    </transition-group>
  </v-card-title>
  <v-card-actions>
    <v-btn v-on:click="add" color="success">Add</v-btn>
    <v-btn v-on:click="remove" color="red">Remove</v-btn>
  </v-card-actions>
</v-card>
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
export default {
  // the grid system has details:
  // https://vuetifyjs.com/en/framework/grid

  el: '#list-demo',

  data() {

    return {
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10
    };
  },

  methods: {

    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },

    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },

    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
  }
}
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
