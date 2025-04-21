const {
  polymer_ext,
  list_polymer_ext_tags_with_info
} = require('libs_frontend/polymer_utils')

const {
  get_enabled_interventions,
  enabledisable_interventions_based_on_difficulty,
} = require('libs_backend/intervention_utils')

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
  is: 'nighttime-onboarding-hso',

  ignore_keydown: function(evt) {
    evt.preventDefault()
    //evt.stopPropagation()
    return false
  },

  selectedNighttimechanged: async function(evt) {
    var night_time = evt.detail.value;
    localStorage.setItem('night_time', night_time);
  },

  ready: async function(evt) {
    if (localStorage.night_time != null) {
      this.ignoreselectedchanged = true
      await this.once_available('#nighttimeradiogroup')
      // Default value is 8
      this.$$('#nighttimeradiogroup').selected = 8
      this.ignoreselectedchanged = false
    }
  }

}, {
  source: require('libs_frontend/polymer_methods'),
  methods: [
    'once_available'
  ]
});
