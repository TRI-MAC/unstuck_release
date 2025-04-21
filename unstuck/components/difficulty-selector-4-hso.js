const {
  polymer_ext,
  list_polymer_ext_tags_with_info
} = require('libs_frontend/polymer_utils')

const {
  once_available
} = require('libs_frontend/polymer_methods')

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
  is: 'difficulty-selector-4-hso',
  properties: {
    approved_array: {
      type: Array,
      value: ['facebook', 'instagram', 'youtube', 'yelp', 'reddit', 'amazon','twitter', 'slack','pinterest', 'netflix', 'spotify']
    }
  },
  selectedNudgechanged: async function(evt) {
    /*
    if (this.ignoreselectedchanged == true) {
      return
    }
    */

    let site = evt.target.value;
    let site_checked = evt.target.checked;

    if (site_checked){
      this.approved_array.push(site);
    } else {
      const index = this.approved_array.indexOf(site);
      if (index > -1) {
        this.approved_array.splice(index, 1);
      }
    }

    localStorage.setItem("approved_sites", JSON.stringify(this.approved_array));
  },

  ignore_keydown: function(evt) {
    evt.preventDefault()
    //evt.stopPropagation()
    return false
  },

  ready: async function(evt) {
    if (localStorage.approved_sites != null) {
      //console.log("Approved sites array from localstorage")
      //console.log(localStorage.approved_sites);
      this.ignoreselectedchanged = true
      this.approved_array = JSON.parse(localStorage.approved_sites);
      //console.log("Approved array set to localstorage approved sites")
      //console.log(this.approved_array)
      await once_available('#accepted_sites_boxes');
      // First, uncheck all boxes
      //this.$$('#accepted_sites_boxes').forEach(el => el.checked = false);
      // Second, check only boxes whose values are in array
      this.$$('#accepted_sites_boxes').selected = this.approved_array;
      //this.approved_array.forEach(function(i){
      //  this.$$('#accepted_sites_boxes').(i).checked = true;
      //});
      this.ignoreselectedchanged = false
    }
  // Eventually we would like to be able to change this list of sites so that they update with the intervention list
  //localStorage.setItem("approved_sites", JSON.stringify(this.approved_array));
  }

}, {
  source: require('libs_frontend/polymer_methods'),
  methods: [
    'once_available'
  ]
});
