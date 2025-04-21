const {
  polymer_ext,
  list_polymer_ext_tags_with_info
} = require('libs_frontend/polymer_utils')

const {
  get_enabled_interventions,
  enabledisable_interventions_based_on_difficulty,
} = require('libs_backend/intervention_utils')

const {
  once_available
} = require('libs_frontend/polymer_methods')

const {
  add_log_interventions,
} = require('libs_backend/log_utils')

const {
  send_feature_option,
} = require('libs_backend/logging_enabled_utils')

const {
  setvar_experiment
} = require('libs_backend/db_utils')

polymer_ext({
  is: 'difficulty-selector-7-hso',

  ignore_keydown: function(evt) {
    evt.preventDefault()
    //evt.stopPropagation()
    return false
  },

  selectedLocationchanged: async function(evt) {
    var install_location = evt.detail.name;
    //console.log(user_location);
    localStorage.setItem('install_location', install_location);
  },

  ready: async function(evt) {
    if (localStorage.install_location != null) {
      //await once_available('')

      this.ignoreselectedchanged = true
      await this.once_available('#locationradiogroup')
      this.$$('#locationradiogroup').selected = 2
      this.ignoreselectedchanged = false

   }
  }

}, {
  source: require('libs_frontend/polymer_methods'),
  methods: [
    'once_available'
  ]
});
