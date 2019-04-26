/**
 * some local settings
 */
export default {

  install( Vue ) {
    Vue.mixin({
      created: function( ) {

        this.$localSettings = {

          /**
           * some common settings
           */
          applicationName: 'testing'
        }
      }
    })
  }
}
