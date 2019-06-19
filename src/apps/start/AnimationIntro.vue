<template>
<div id="list-demo">
<v-card>
  <v-card-title primary-title>
    <div>
      <h3 class="headline mb-0">Animation with Transition Group</h3>
      <transition-group name="list" tag="p">
        <v-btn color="info"
               small 
               v-for="item in items" 
               v-bind:key="item" 
               class="list-item">
          {{ item }}
        </v-btn>
      </transition-group>
    </div>
  </v-card-title>
  <v-card-actions>
    <v-btn v-on:click="add" color="success">Add</v-btn>
    <v-btn v-on:click="remove" color="red">Remove</v-btn>
  </v-card-actions>
</v-card>
</div>
</template>

<script>
export default {
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
