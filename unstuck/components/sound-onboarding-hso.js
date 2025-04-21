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
  is: 'sound-onboarding-hso',
  selectedNudgechanged: async function(evt) {
    // get value of menu
    // update value in
    var sound_nudge = evt.detail.value;
    if (sound_nudge == "true"){
      //console.log("Playing sound");
      //var notifSound = new Audio('icons/HSO_icons/HSO_notif_sound.wav');
      //notifSound.play();
    }
    localStorage.setItem('sound_nudge', sound_nudge);
  },


  ignore_keydown: function(evt) {
    //evt.preventDefault()
    //evt.stopPropagation()
    //return false
  },

  ready: async function(evt) {
    if (localStorage.sound_nudge != null) {
      await this.once_available('#soundradiogroup')
      this.$$('#soundradiogroup').selected = localStorage.sound_nudge
    }
  }

}, {
  source: require('libs_frontend/polymer_methods'),
  methods: [
    'once_available'
  ]
});
