/**
 * some local settings
 */
let settings = {

    /**
     * some common settings
     */
    applicationName: 'testing again!'
};

try {
    const local = require('./local');
    settings = Object.assign(settings, local);
} catch (e) {
    // file not exist.
    //console.dir(e);
    console.log("Could not find src/settings/local.js! Consider create one!");
}

export default {

  install( Vue ) {
    Vue.mixin({
      created: function( ) {

        this.$localSettings = settings;
      }
    })
  }
}
