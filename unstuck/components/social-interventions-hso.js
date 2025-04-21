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
  is: 'social-interventions-hso',
  selectedNudgechanged: async function(evt) {
    // get value of menu
    // update value in
    var social_interventions = evt.detail.value;
    //console.log(nudge_time);
    localStorage.setItem('social_interventions', social_interventions);
  },


  ignore_keydown: function(evt) {
    //evt.preventDefault()
    //evt.stopPropagation()
    //return false
  },

  ready: async function(evt) {
    if (localStorage.social_interventions != null) {
      await this.once_available('#difficultyradiogroup')
      this.$$('#difficultyradiogroup').selected = localStorage.social_interventions
    }
  }

}, {
  source: require('libs_frontend/polymer_methods'),
  methods: [
    'once_available'
  ]
});
