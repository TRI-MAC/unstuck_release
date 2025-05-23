window.habitlab_content_script = true;

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./src/components/habitlab-netflix-stop-autoplay.deps.js":
/*!******************************************************!*\
  !*** ./src/components/habitlab-netflix-stop-autoplay.deps.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-item/habitlab-paper-item.deps.js */ "./src/bower_components/habitlab-paper-item/habitlab-paper-item.deps.js")
__webpack_require__(/*! components/habitlab-logo-v2.deps.js */ "./src/components/habitlab-logo-v2.deps.js")
__webpack_require__(/*! components/goal-progress-message.deps.js */ "./src/components/goal-progress-message.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-button/habitlab-paper-button.deps.js */ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-dialog/habitlab-paper-dialog.deps.js */ "./src/bower_components/habitlab-paper-dialog/habitlab-paper-dialog.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.deps.js */ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-progress/habitlab-paper-progress.deps.js */ "./src/bower_components/habitlab-paper-progress/habitlab-paper-progress.deps.js")
__webpack_require__(/*! components/call-to-action-button.deps.js */ "./src/components/call-to-action-button.deps.js")
__webpack_require__(/*! components/habitlab-time-selector-dialog.deps.js */ "./src/components/habitlab-time-selector-dialog.deps.js")
import_dom_modules(__webpack_require__(/*! components/habitlab-netflix-stop-autoplay.html */ "./src/components/habitlab-netflix-stop-autoplay.html"), 'components/habitlab-netflix-stop-autoplay.html')
__webpack_require__(/*! components/habitlab-netflix-stop-autoplay */ "./src/components/habitlab-netflix-stop-autoplay.js")


/***/ }),

/***/ "./src/components/habitlab-netflix-stop-autoplay.html":
/*!***************************************************!*\
  !*** ./src/components/habitlab-netflix-stop-autoplay.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/habitlab-paper-item/habitlab-paper-item.html> <link rel=import href=habitlab-logo-v2.html> <link rel=import href=goal-progress-message.html> <link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <link rel=import href=../bower_components/habitlab-paper-dialog/habitlab-paper-dialog.html> <link rel=import href=../bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.html> <link rel=import href=../bower_components/habitlab-paper-progress/habitlab-paper-progress.html> <link rel=import href=call-to-action-button.html> <link rel=import href=habitlab-time-selector-dialog.html> <habitlab-dom-module id=habitlab-netflix-stop-autoplay> <template> <habitlab-custom-style> <style is=habitlab-custom-style>:host{position:fixed;display:block;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:35000000;font-family:Verdana,Geneva,Tahoma,HelveticaNeue-Light,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;font-size:12px;--habitlab-paper-input-container-input:{font-size:28px;text-indent:20px};}.contentContainer{width:100% margin-top: 30px;align-self:center}.titleText{font-size:1.5em;text-align:center}#messagetext{font-size:1.3em;text-align:center}.whiteDiv{position:fixed;display:flex;flex-direction:column;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0);opacity:1;z-index:35000000}.okButton{cursor:pointer;padding:5px;background-color:#415d67;color:#fff;font-size:14px;box-shadow:2px 2px 2px #888}.closeTabButton{cursor:pointer;padding:5px;margin-top:10px;margin-bottom:10px;font-size:14px}.message-block{padding-top:10px;font-size:30px;align-self:center}#paperprogress{display:none;margin-bottom:10px}#title{padding-top:0;padding-bottom:0;margin:auto;margin-top:10px;margin-bottom:0;color:#fff;font-size:30px;font-family:Verdana,Geneva,Tahoma,HelveticaNeue-Light,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif}#time{padding-top:0;padding-bottom:0;color:#000;font-size:40px;font-family:\"Lucidia Grande\",HelveticaNeue-Light,sans-serif}#fact-box{background-color:rgba(149,203,238,.95);margin:auto;margin-top:50px;margin-right:350px;margin-left:350px;padding:2px}#link{font-size:12px;font-family:Verdana,Geneva,Tahoma,HelveticaNeue-Light,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif}#block_container{text-align:center}#min,#playings,#spent,#today,#watching{display:inline}</style> </habitlab-custom-style> <div class=whiteDiv> <template is=habitlab-dom-if if={{show_netflix_message}}> <netflix-articles class=message-block></netflix-articles> </template> <div id=fact-box> <center><p id=title> HabitLab has disabled autoplay. </p> </center> <div id=block_container style=margin:auto;margin-top:5px;margin-bottom:5px> <div id=today class=timer-text style=text-align:left;color:#415d67;font-size:20px>Today on</div> <div id=playings style=display:inline-block;margin-right:5px;margin-left:5px;color:#415d67> <div style=font-size:40px>{{playings}}</div> <div>playings</div> </div> <div id=spent class=timer-text style=color:#415d67;font-size:20px>you have spent</div> <div id=min style=display:inline-block;margin-right:5px;margin-left:5px;color:#415d67> <div style=font-size:40px>{{minutes}}</div> <div>mins</div> </div> <div id=watching class=timer-text style=text-align:left;color:#415d67;font-size:20px>watching.</div> </div> <div style=width:200px;height:48px;text-align:center;margin:auto;margin:auto;margin-bottom:15px;margin-top:15px;padding-top:10px;padding-bottom:18px;color:#415d67;background-color:rgba(255,255,255,.8);border-radius:8px;padding-left:9px;padding-right:9px;padding-bottom:2px;font-size:28px id=time_display></div> <center><habitlab-paper-button id=okbutton class=okButton on-click=buttonclicked>Continue Watching</habitlab-paper-button></center> <div style=display:flex;flex-direction:row;justify-content:space-between;align-items:center;align-content:center;height:35px;width:100%;margin:auto;margin-top:20px;margin-bottom:0 ;> <habitlab-logo-v2 style=padding-left:5px;padding-top:9px id=logo></habitlab-logo-v2> <center><call-to-action-button id=closetabbutton class=closeTabButton></call-to-action-button></center> <img style=width:33px;padding-left:72px;padding-right:5px;padding-top:15px src={{logo_url}}> </div> <p></p> </div> <p></p> </div> </template> <script src=habitlab-netflix-stop-autoplay.js></script> </habitlab-dom-module>";

/***/ }),

/***/ "./src/components/habitlab-netflix-stop-autoplay.js":
/*!*************************************************!*\
  !*** ./src/components/habitlab-netflix-stop-autoplay.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")
const moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js")

const {polymer_ext} = __webpack_require__(/*! libs_frontend/polymer_utils */ "./src/libs_frontend/polymer_utils.ls")
const {close_selected_tab} = __webpack_require__(/*! libs_frontend/tab_utils */ "./src/generated_libs/libs_frontend/tab_utils.js")

const {
  url_to_domain
} = __webpack_require__(/*! libs_common/domain_utils */ "./src/libs_common/domain_utils.ls")

const {
  get_minutes_spent_on_domain_today,
  get_visits_to_domain_today
} = __webpack_require__(/*! libs_common/time_spent_utils */ "./src/libs_common/time_spent_utils.ls")

const {
  log_action,
} = __webpack_require__(/*! libs_frontend/intervention_log_utils */ "./src/libs_frontend/intervention_log_utils.ls")

const {
  start_episode_tracker,
  get_num_episodes_watched
} = __webpack_require__(/*! libs_frontend/netflix_utils */ "./src/libs_frontend/netflix_utils.js")

Polymer({
  is: 'habitlab-netflix-stop-autoplay',

  properties: {
    btnTxt: {
      type: String, 
    },
    btnTxt2: {
      type: String, 
    },    
    minutes: {
      type: Number
    },
    titleText: {
      type: String, 
    },
    playings: {
      type: Number
    },
    intervention: {
      type: String
    },
    messageText: {
      type: String
    },
    randomizer: {
      type: Boolean,
      value: Math.floor(Math.random()*2) == 0,
    },
    exit_url:{
      type: String,
      value: chrome.runtime.getURL('interventions/netflix/stop_autoplay/exit.png')
    },
    logo_url:{
      type: String,
      value: chrome.runtime.getURL('interventions/netflix/stop_autoplay/logo.png')
    },
    alarm_image_url: {
      type: String,
      value: chrome.runtime.getURL('interventions/netflix/stop_autoplay/alarm_clock.png')
    },
    show_netflix_message: {
      type: Boolean,
      computed: 'compute_show_workpages_message(show_progress_message, randomizer)',
    },
    show_rss_message: {
      type: Boolean,
      computed: 'compute_show_rss_message(show_progress_message, randomizer)',
    },
    show_progress_message: {
      type: Boolean,
      value: false,
      //computed: 'compute_progress_message()',
    },
    show_workpages_message: {
      type: Boolean,
      computed: 'compute_show_workpages_message(show_progress_message, randomizer)',
    }
  },

  listeners: {
    'disable_intervention': 'disableIntervention',
    'show_button': 'showButton'
  },
  compute_show_rss_message: function(show_progress_message, randomizer) {
    return (!show_progress_message) && randomizer
  },
  compute_show_workpages_message: function(show_progress_message, randomizer) {
    return !show_progress_message && !randomizer
  },
  show_time_selector: function() {
    let dialog = document.createElement('habitlab-time-selector-dialog');
    document.body.appendChild(dialog)
    dialog.show()
  },
  //compute_show_progress_message: function() {
  //  return false
  //},
  buttonclicked: function() {
    console.log('ok button clicked in polymer during loading')
    log_action({'negative': 'Continuted to site.'})
    console.log('video should continue')
    document.querySelector('video').play()
    $(this).remove()
    // console.log('video should now continue to play')    
    // document.querySelector('video').play()
  },
  hideButton: function() {
    this.$.okbutton.hidden = true
    //this.$.closetabbutton.hidden = true
    this.$.okbutton.style.display = 'none';
    //this.$.closetabbutton.style.display = 'none';
  },
  showProgress: function() {
    this.$.paperprogress.style.display = 'block';
  },
  incrementProgress: function() {
    this.$.paperprogress.value += 1;
  },
  showButton: function() {
    this.$.okbutton.hidden = false
    //this.$.closetabbutton.hidden = false
    this.$.okbutton.style.display = 'inline-flex';
    this.$.closetabbutton.style.display = 'inline-flex';
  },
  ready: async function() {
    this.$.closetabbutton.text = this.btnTxt2
    //this.$.time_selector.value = moment().format('HH:mm')
    this.$.time_display.innerText = moment().format('hh:mm A')
    let domain = url_to_domain(window.location.href)
    /*
    var self = this
    get_minutes_spent_on_domain_today(domain).then(function(minutes) {
      self.minutes = minutes
      something_else(minutes).then(function(y) {

      })
    })
    */
    this.minutes = await get_minutes_spent_on_domain_today(domain)
    start_episode_tracker()
    this.playings = get_num_episodes_watched()
  },
  disableIntervention: function() {
    $(this).remove()
  },
  
  attributeChanged: function() {
    this.$.okbutton.textContent = this.btnTxt 
    this.$.closetabbutton.text = this.btnTxt2
    this.$.messagetext.textContent = this.messageText
    this.$.titletext.textContent = this.titleText
  }
});



/***/ }),

/***/ "./src/components/habitlab-time-selector-dialog.deps.js":
/*!*****************************************************!*\
  !*** ./src/components/habitlab-time-selector-dialog.deps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-item/habitlab-paper-item.deps.js */ "./src/bower_components/habitlab-paper-item/habitlab-paper-item.deps.js")
__webpack_require__(/*! components/goal-progress-message.deps.js */ "./src/components/goal-progress-message.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-button/habitlab-paper-button.deps.js */ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-dialog/habitlab-paper-dialog.deps.js */ "./src/bower_components/habitlab-paper-dialog/habitlab-paper-dialog.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.deps.js */ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-progress/habitlab-paper-progress.deps.js */ "./src/bower_components/habitlab-paper-progress/habitlab-paper-progress.deps.js")
__webpack_require__(/*! components/call-to-action-button.deps.js */ "./src/components/call-to-action-button.deps.js")
import_dom_modules(__webpack_require__(/*! components/habitlab-time-selector-dialog.html */ "./src/components/habitlab-time-selector-dialog.html"), 'components/habitlab-time-selector-dialog.html')
__webpack_require__(/*! components/habitlab-time-selector-dialog */ "./src/components/habitlab-time-selector-dialog.js")


/***/ }),

/***/ "./src/components/habitlab-time-selector-dialog.html":
/*!**************************************************!*\
  !*** ./src/components/habitlab-time-selector-dialog.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/habitlab-paper-item/habitlab-paper-item.html> <link rel=import href=goal-progress-message.html> <link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <link rel=import href=../bower_components/habitlab-paper-dialog/habitlab-paper-dialog.html> <link rel=import href=../bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.html> <link rel=import href=../bower_components/habitlab-paper-progress/habitlab-paper-progress.html> <link rel=import href=call-to-action-button.html> <habitlab-dom-module id=habitlab-time-selector-dialog> <template> <style></style> <habitlab-paper-dialog id=start-dialog class=habitlab-paper-time-picker-dialog modal on-iron-overlay-closed=dismiss_dialog> <habitlab-paper-time-picker id=start-picker time=\"9:00 AM\"></habitlab-paper-time-picker> <div class=buttons> <habitlab-paper-button dialog-dismiss>CANCEL</habitlab-paper-button> <habitlab-paper-button dialog-confirm>OK</habitlab-paper-button> </div> </habitlab-paper-dialog> </template> <script src=habitlab-time-selector-dialog.js></script> </habitlab-dom-module>";

/***/ }),

/***/ "./src/components/habitlab-time-selector-dialog.js":
/*!************************************************!*\
  !*** ./src/components/habitlab-time-selector-dialog.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Polymer({
  is: 'habitlab-time-selector-dialog',

  properties: {
  },

  show: function() {
    this.$$('#start-dialog').toggle()
    this.$$('#start-dialog').style.zIndex = 999999999999;
  }
});





/***/ }),

/***/ "./src/generated_libs/libs_frontend/db_utils.js":
/*!******************************************************!*\
  !*** ./src/generated_libs/libs_frontend/db_utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is generated from libs_common/function_signatures.ls
// Do not edit this file directly. To regenerate, run gulp
const {import_lib} = __webpack_require__(/*! libs_frontend/import_lib */ "./src/libs_frontend/import_lib.ls");
module.exports = import_lib('db_utils');


/***/ }),

/***/ "./src/libs_common/time_spent_utils.ls":
/*!*********************************************!*\
  !*** ./src/libs_common/time_spent_utils.ls ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var moment, prelude, ref$, getkey_dictdict, getdict_for_key_dictdict, getdict_for_key2_dictdict, getCollection, setkey_dict, getkey_dict, url_to_domain, get_days_since_epoch, get_session_id, gexport, gexport_module, get_seconds_spent_on_all_domains_today, get_seconds_spent_on_all_domains_days_before_today, get_seconds_spent_on_domain_all_days, get_seconds_spent_on_domain_days_before_today, get_seconds_spent_on_domain_today, get_minutes_spent_on_domain_today, get_seconds_spent_on_current_domain_today, get_visits_to_domain_today, get_visits_to_domain_days_before_today, get_visits_to_current_domain_today, get_new_session_id_for_domain, get_seconds_spent_on_current_domain_in_session, get_seconds_spent_on_domain_in_session, get_seconds_spent_on_current_domain_in_current_session, out$ =  true && exports || this;
moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
prelude = __webpack_require__(/*! prelude-ls */ "./node_modules/prelude-ls/lib/index.js");
ref$ = __webpack_require__(/*! libs_common/db_utils */ "./src/generated_libs/libs_frontend/db_utils.js"), getkey_dictdict = ref$.getkey_dictdict, getdict_for_key_dictdict = ref$.getdict_for_key_dictdict, getdict_for_key2_dictdict = ref$.getdict_for_key2_dictdict, getCollection = ref$.getCollection, setkey_dict = ref$.setkey_dict, getkey_dict = ref$.getkey_dict;
url_to_domain = __webpack_require__(/*! libs_common/domain_utils */ "./src/libs_common/domain_utils.ls").url_to_domain;
get_days_since_epoch = __webpack_require__(/*! libs_common/time_utils */ "./src/libs_common/time_utils.ls").get_days_since_epoch;
get_session_id = __webpack_require__(/*! libs_common/intervention_info */ "./src/libs_common/intervention_info.ls").get_session_id;
ref$ = __webpack_require__(/*! libs_common/gexport */ "./src/libs_common/gexport.ls"), gexport = ref$.gexport, gexport_module = ref$.gexport_module;
out$.get_seconds_spent_on_all_domains_today = get_seconds_spent_on_all_domains_today = async function(){
  return (await getdict_for_key2_dictdict('seconds_on_domain_per_day', get_days_since_epoch()));
};
out$.get_seconds_spent_on_all_domains_days_before_today = get_seconds_spent_on_all_domains_days_before_today = async function(days_ago){
  return (await getdict_for_key2_dictdict('seconds_on_domain_per_day', get_days_since_epoch() - days_ago));
};
out$.get_seconds_spent_on_domain_all_days = get_seconds_spent_on_domain_all_days = async function(domain){
  var results, today_day_num, output, k, v;
  results = (await getdict_for_key_dictdict('seconds_on_domain_per_day', domain));
  today_day_num = get_days_since_epoch();
  output = {};
  for (k in results) {
    v = results[k];
    output[today_day_num - k] = v;
  }
  return output;
};
out$.get_seconds_spent_on_domain_days_before_today = get_seconds_spent_on_domain_days_before_today = async function(domain, days_ago){
  var current_day, result;
  current_day = get_days_since_epoch();
  result = (await getkey_dictdict('seconds_on_domain_per_day', domain, current_day - days_ago));
  return result != null ? result : 0;
};
out$.get_seconds_spent_on_domain_today = get_seconds_spent_on_domain_today = async function(domain){
  var current_day, result;
  current_day = get_days_since_epoch();
  result = (await getkey_dictdict('seconds_on_domain_per_day', domain, current_day));
  return result != null ? result : 0;
};
out$.get_minutes_spent_on_domain_today = get_minutes_spent_on_domain_today = async function(domain){
  var current_day, result;
  current_day = get_days_since_epoch();
  result = (await getkey_dictdict('seconds_on_domain_per_day', domain, current_day));
  if (result != null) {
    return Math.floor(result / 60.0);
  }
  return 0;
};
/**
* Return seconds spent on current domain today
* @return {integer} seconds spent
*/
out$.get_seconds_spent_on_current_domain_today = get_seconds_spent_on_current_domain_today = async function(){
  var current_domain, result;
  current_domain = window.location.host;
  result = (await get_seconds_spent_on_domain_today(current_domain));
  return result != null ? result : 0;
};
/**
* Return visits to the given domain today
* @param {domain} the doain
* @return {integer} seconds spent
*/
out$.get_visits_to_domain_today = get_visits_to_domain_today = async function(domain){
  var current_day, result;
  current_day = get_days_since_epoch();
  result = (await getkey_dictdict('visits_to_domain_per_day', domain, current_day));
  return result != null ? result : 0;
};
out$.get_visits_to_domain_days_before_today = get_visits_to_domain_days_before_today = async function(domain, days_ago){
  var current_day, result;
  current_day = get_days_since_epoch();
  result = (await getkey_dictdict('visits_to_domain_per_day', domain, current_day - days_ago));
  return result != null ? result : 0;
};
/**
* Return visits to the given domain today
* @return {integer} seconds spent
*/
out$.get_visits_to_current_domain_today = get_visits_to_current_domain_today = async function(){
  var current_domain, result;
  current_domain = window.location.host;
  result = (await get_visits_to_domain_today(current_domain));
  return result != null ? result : 0;
};
/*
export get_new_session_id_for_domain = (domain) ->>
  collection = await getCollection('seconds_on_domain_per_session')
  all_session_ids_for_domain = await collection.where('key').equals(domain).toArray()
  all_session_ids_for_domain = all_session_ids_for_domain.map (.key2)
  if all_session_ids_for_domain.length == 0
    return 0
  return prelude.maximum(all_session_ids_for_domain) + 1 # this is the day, in epoch time, that the most recent intervention set occurred
*/
out$.get_new_session_id_for_domain = get_new_session_id_for_domain = async function(domain){
  var result;
  result = (await getkey_dict('domain_to_last_session_id', domain));
  if (result == null) {
    (await setkey_dict('domain_to_last_session_id', domain, 0));
    return 0;
  }
  (await setkey_dict('domain_to_last_session_id', domain, result + 1));
  return result + 1;
};
out$.get_seconds_spent_on_current_domain_in_session = get_seconds_spent_on_current_domain_in_session = async function(session_id){
  var current_domain, result;
  current_domain = window.location.host;
  result = (await get_seconds_spent_on_domain_in_session(current_domain, session_id));
  return result != null ? result : 0;
};
out$.get_seconds_spent_on_domain_in_session = get_seconds_spent_on_domain_in_session = async function(domain, session_id){
  var result;
  result = (await getkey_dictdict('seconds_on_domain_per_session', domain, session_id));
  return result != null ? result : 0;
};
/**
* Return seconds spent on current domain this session
* @return {integer} seconds spent
*/
out$.get_seconds_spent_on_current_domain_in_current_session = get_seconds_spent_on_current_domain_in_current_session = async function(){
  var session_id, current_domain, result;
  session_id = get_session_id();
  current_domain = window.location.host;
  result = (await get_seconds_spent_on_domain_in_session(current_domain, session_id));
  return result != null ? result : 0;
};
gexport_module('time_spent_utils', function(it){
  return eval(it);
});
//# sourceMappingURL=time_spent_utils.ls.map


/***/ }),

/***/ "./src/libs_common/time_utils.ls":
/*!***************************************!*\
  !*** ./src/libs_common/time_utils.ls ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var moment, ref$, gexport, gexport_module, get_days_since_epoch, pad_to_two_digits, printable_time_spent_short, printable_time_spent, printable_time_spent_long, out$ =  true && exports || this;
moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
ref$ = __webpack_require__(/*! libs_common/gexport */ "./src/libs_common/gexport.ls"), gexport = ref$.gexport, gexport_module = ref$.gexport_module;
out$.get_days_since_epoch = get_days_since_epoch = function(){
  var start_of_epoch;
  start_of_epoch = moment().year(2016).month(0).date(1).hours(0).minutes(0).seconds(0).milliseconds(0);
  return moment().diff(start_of_epoch, 'days');
};
pad_to_two_digits = function(val){
  var output;
  output = val.toString();
  if (output.length === 1) {
    return '0' + output;
  }
  return output;
};
out$.printable_time_spent_short = printable_time_spent_short = function(seconds){
  var minutes;
  if (seconds < 0) {
    return '00:00';
  }
  minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;
  return minutes + ':' + pad_to_two_digits(seconds);
};
out$.printable_time_spent = printable_time_spent = function(seconds){
  if (seconds < 60) {
    return seconds + ' seconds';
  }
  return moment().add(seconds, 'seconds').fromNow(true);
};
/**
* Return time spent in hours, minutes, seconds format
* @param {Integer} seconds - seconds spent
* @return {String} 
*/
out$.printable_time_spent_long = printable_time_spent_long = function(seconds){
  var hours, remaining_seconds, minutes, output;
  if (seconds < 0) {
    return '0 seconds';
  }
  hours = Math.floor(seconds / 3600);
  remaining_seconds = seconds - hours * 3600;
  minutes = Math.floor(remaining_seconds / 60);
  remaining_seconds = remaining_seconds - minutes * 60;
  output = [];
  if (hours > 0) {
    if (hours === 1) {
      output.push('1 hour');
    } else {
      output.push(hours + ' hours');
    }
  }
  if (minutes > 0 || hours > 0) {
    if (minutes === 1) {
      output.push('1 minute');
    } else {
      output.push(minutes + ' minutes');
    }
  }
  if (remaining_seconds === 1) {
    output.push('1 second');
  } else if (remaining_seconds >= 0) {
    output.push(remaining_seconds + ' seconds');
  }
  return output.join(' ');
};
gexport_module('time_utils', function(it){
  return eval(it);
});
//# sourceMappingURL=time_utils.ls.map


/***/ }),

/***/ "./src/libs_frontend/netflix_utils.js":
/*!********************************************!*\
  !*** ./src/libs_frontend/netflix_utils.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var num_episodes = 0
var prev_episode = ''
var running_episode_tracker = null

/**
 * If there's no running episode tracker, start one to track the number of episodes watched
 */
function start_episode_tracker() {
  if (running_episode_tracker != null) {
    return
  }
  function check_if_new_episode() {
    if (!window.location.pathname.includes('/watch/')) {
      return
    }
    var current_episode = window.location.pathname.replace('/watch/', '')
    if (prev_episode != current_episode) {
      num_episodes++
      prev_episode = current_episode
    }
  }
  check_if_new_episode()
  running_episode_tracker = setInterval(check_if_new_episode, 1000)
  /*
  var idnumber = (window.location.href).parseInt('/watch/','')
  numepisodes=
  return idnumber
  */
}

/**
 * Stop running episode tracker
 */
function stop_episode_tracker() {
  clearInterval(running_episode_tracker)
}

/**
 * Return the number of episodes watched (must call start_episode_tracker first)
 * @return {int} number of episodes wathced 
 */
function get_num_episodes_watched() {
  return num_episodes
}

module.exports = {
  start_episode_tracker,
  stop_episode_tracker,
  get_num_episodes_watched
}


/***/ })

}]);