(function(){
  var hso_server_url, stress_level_before, stuck_level_before, motivation_level_before, stress_change, creativity_change, session_intervention_count, to_send, polymer_ext, load_css_file, ref$, add_log_feedback, add_log_interventions, add_log_habitlab_disabled, add_log_habitlab_enabled, swal_cached, get_swal, screenshot_utils_cached, get_screenshot_utils, get_active_tab_url, get_active_tab_id, list_currently_loaded_interventions, list_currently_loaded_interventions_for_tabid, get_active_tab_info, get_all_tabs_info, get_all_tabs_urls, disable_interventions_in_active_tab, open_debug_page_for_tab_id, url_to_domain, set_intervention_disabled, list_enabled_interventions_for_location, set_intervention_disabled_permanently, get_enabled_interventions, set_intervention_enabled, get_nonpositive_goals_and_interventions, list_available_interventions_for_location, get_interventions, is_it_outside_work_hours, get_seconds_spent_on_all_domains_today, is_habitlab_enabled, disable_habitlab, enable_habitlab, list_sites_for_which_goals_are_enabled, list_goals_for_site, set_goal_enabled, set_goal_disabled, add_enable_custom_goal_reduce_time_on_domain, localstorage_getjson, localstorage_setjson, localstorage_getbool, localstorage_setbool, localstorage_setstring, localstorage_getstring, post_json, get_json, get_json_using_post, put_json, get_user_id, once_available;
  hso_server_url = '';
  stress_level_before = 0;
  stuck_level_before = 0;
  motivation_level_before = 0;
  stress_change = 0;
  creativity_change = 0;
  session_intervention_count = 0;
  to_send = {};
  polymer_ext = require('libs_frontend/polymer_utils').polymer_ext;
  load_css_file = require('libs_common/content_script_utils').load_css_file;
  ref$ = require('libs_backend/log_utils'), add_log_feedback = ref$.add_log_feedback, add_log_interventions = ref$.add_log_interventions, add_log_habitlab_disabled = ref$.add_log_habitlab_disabled, add_log_habitlab_enabled = ref$.add_log_habitlab_enabled;
  swal_cached = null;
  get_swal = async function(){
    if (swal_cached != null) {
      return swal_cached;
    }
    swal_cached = (await SystemJS['import']('sweetalert2'));
    return swal_cached;
  };
  screenshot_utils_cached = null;
  get_screenshot_utils = async function(){
    if (screenshot_utils_cached != null) {
      return screenshot_utils_cached;
    }
    screenshot_utils_cached = (await SystemJS['import']('libs_common/screenshot_utils'));
    return screenshot_utils_cached;
  };
  ref$ = require('libs_backend/background_common'), get_active_tab_url = ref$.get_active_tab_url, get_active_tab_id = ref$.get_active_tab_id, list_currently_loaded_interventions = ref$.list_currently_loaded_interventions, list_currently_loaded_interventions_for_tabid = ref$.list_currently_loaded_interventions_for_tabid, get_active_tab_info = ref$.get_active_tab_info, get_all_tabs_info = ref$.get_all_tabs_info, get_all_tabs_urls = ref$.get_all_tabs_urls, disable_interventions_in_active_tab = ref$.disable_interventions_in_active_tab, open_debug_page_for_tab_id = ref$.open_debug_page_for_tab_id;
  open_debug_page_for_tab_id = require('libs_backend/debug_console_utils').open_debug_page_for_tab_id;
  url_to_domain = require('libs_common/domain_utils').url_to_domain;
  ref$ = require('libs_backend/intervention_utils'), set_intervention_disabled = ref$.set_intervention_disabled, list_enabled_interventions_for_location = ref$.list_enabled_interventions_for_location, set_intervention_disabled_permanently = ref$.set_intervention_disabled_permanently, get_enabled_interventions = ref$.get_enabled_interventions, set_intervention_enabled = ref$.set_intervention_enabled, get_nonpositive_goals_and_interventions = ref$.get_nonpositive_goals_and_interventions, list_available_interventions_for_location = ref$.list_available_interventions_for_location, get_interventions = ref$.get_interventions, is_it_outside_work_hours = ref$.is_it_outside_work_hours;
  get_seconds_spent_on_all_domains_today = require('libs_common/time_spent_utils').get_seconds_spent_on_all_domains_today;
  ref$ = require('libs_common/disable_habitlab_utils'), is_habitlab_enabled = ref$.is_habitlab_enabled, disable_habitlab = ref$.disable_habitlab, enable_habitlab = ref$.enable_habitlab;
  ref$ = require('libs_backend/goal_utils'), list_sites_for_which_goals_are_enabled = ref$.list_sites_for_which_goals_are_enabled, list_goals_for_site = ref$.list_goals_for_site, set_goal_enabled = ref$.set_goal_enabled, set_goal_disabled = ref$.set_goal_disabled, add_enable_custom_goal_reduce_time_on_domain = ref$.add_enable_custom_goal_reduce_time_on_domain;
  ref$ = require('libs_common/localstorage_utils'), localstorage_getjson = ref$.localstorage_getjson, localstorage_setjson = ref$.localstorage_setjson, localstorage_getbool = ref$.localstorage_getbool, localstorage_setbool = ref$.localstorage_setbool, localstorage_setstring = ref$.localstorage_setstring, localstorage_getstring = ref$.localstorage_getstring;
  ref$ = require('libs_backend/ajax_utils'), post_json = ref$.post_json, get_json = ref$.get_json, get_json_using_post = ref$.get_json_using_post, put_json = ref$.put_json;
  get_user_id = require('libs_backend/background_common').get_user_id;
  once_available = require('libs_frontend/frontend_libs').once_available;
  polymer_ext({
    is: 'popup-view',
    properties: {
      enabledInterventions: {
        type: Array
      },
      feedbackText: {
        type: String,
        notify: true
      },
      graphOptions: {
        type: Array
      },
      shownGraphs: {
        type: Array
      },
      graphNamesToOptions: {
        type: Object
      },
      blacklist: {
        type: Object
      },
      sites: {
        type: Array
      },
      html_for_shown_graphs: {
        type: String,
        computed: 'compute_html_for_shown_graphs(shownGraphs, blacklist, sites)'
      },
      selected_tab_idx: {
        type: Number,
        value: 0
      },
      selected_graph_tab: {
        type: Number,
        value: 0
      },
      goals_and_interventions: {
        type: Array,
        value: []
      },
      intervention_name_to_info: {
        type: Object,
        value: {}
      },
      is_habitlab_disabled: {
        type: Boolean,
        value: true
      },
      stress_intervention_active: {
        type: Boolean
      },
      stress_intervention_display: {
        type: Boolean
      },
      ask_intervention_done: {
        type: Boolean
      },
      intervention_stress_before: {
        type: Boolean
      },
      intervention_stress_after: {
        type: Boolean
      },
      stress_intervention_data: {
        type: String,
        value: null
      },
      stress_intervention_end: {
        type: String,
        value: null
      },
      stress_intervention_loading: {
        type: Boolean
      },
      intervention_list: {
        type: Array,
        value: [
          {
            "InterventionID": "init-1",
            "active": true,
            "duration": "5",
            "keywords": "learning,planning,social",
            "language": "english",
            "name": "Find a Documentary",
            "technique": "Problem Solving Therapy",
            "text": "Search for a documentary about a topic you have been wanting to learn more about, and schedule to watch it with a friend!",
            "type": "control",
            "url": "https://imdb.com"
          }, {
            "InterventionID": "init-2",
            "active": true,
            "duration": "5",
            "name": "Find Recipe",
            "technique": "Act of Kindness",
            "text": "Find a new recipe that you want to try out!",
            "url": "https://allrecipes.com",
            "type": "control",
            "keywords": "control, writing"
          }, {
            "InterventionID": "init-3",
            "active": true,
            "duration": "5",
            "name": "Nat Geo",
            "technique": "Best Future Self",
            "text": "Browse Natural Geographic and read an article that sparks your interest!",
            "url": "https://www.nationalgeographic.com/",
            "type": "control",
            "keywords": "learning"
          }
        ]
      }
    },
    get_intervention_description: function(intervention_name, intervention_name_to_info){
      return intervention_name_to_info[intervention_name].description;
    },
    noValidInterventions: function(){
      return deepEq$(this.goals_and_interventions.length, 0, '===');
    },
    temp_disable_button_clicked: async function(evt){
      var self, intervention, prev_enabled_interventions, tab_info, url, enabledInterventions, res$, i$, len$, x;
      self = this;
      intervention = evt.target.intervention;
      prev_enabled_interventions = (await get_enabled_interventions());
      tab_info = (await get_active_tab_info());
      url = tab_info.url;
      enabledInterventions = (await list_currently_loaded_interventions_for_tabid(tab_info.id));
      res$ = [];
      for (i$ = 0, len$ = enabledInterventions.length; i$ < len$; ++i$) {
        x = enabledInterventions[i$];
        if (x !== intervention) {
          res$.push(x);
        }
      }
      enabledInterventions = res$;
      self.enabledInterventions = enabledInterventions;
      (await disable_interventions_in_active_tab());
      this.fire('disable_intervention');
      return add_log_interventions({
        type: 'intervention_set_temporarily_disabled',
        page: 'popup-view',
        subpage: 'popup-view-active-intervention-tab',
        category: 'intervention_enabledisable',
        now_enabled: false,
        is_permanent: false,
        manual: true,
        url: window.location.href,
        tab_url: url,
        intervention_name: intervention,
        prev_enabled_interventions: prev_enabled_interventions
      });
    },
    perm_disable_button_clicked: async function(evt){
      var self, intervention, prev_enabled_interventions, tab_info, url, enabledInterventions, res$, i$, len$, x;
      self = this;
      intervention = evt.target.intervention;
      prev_enabled_interventions = (await get_enabled_interventions());
      (await set_intervention_disabled_permanently(intervention));
      tab_info = (await get_active_tab_info());
      url = tab_info.url;
      enabledInterventions = (await list_currently_loaded_interventions_for_tabid(tab_info.id));
      res$ = [];
      for (i$ = 0, len$ = enabledInterventions.length; i$ < len$; ++i$) {
        x = enabledInterventions[i$];
        if (x !== intervention) {
          res$.push(x);
        }
      }
      enabledInterventions = res$;
      self.enabledInterventions = enabledInterventions;
      (await disable_interventions_in_active_tab());
      this.fire('disable_intervention');
      return add_log_interventions({
        type: 'intervention_set_permanently_disabled',
        page: 'popup-view',
        subpage: 'popup-view-active-intervention-tab',
        category: 'intervention_enabledisable',
        now_enabled: false,
        is_permanent: false,
        manual: true,
        url: window.location.href,
        tab_url: url,
        intervention_name: intervention,
        prev_enabled_interventions: prev_enabled_interventions
      });
    },
    is_not_in_blacklist: function(graph, blacklist, graphNamesToOptions){
      graph = graphNamesToOptions[graph];
      return blacklist[graph] === false;
    },
    checkbox_checked_handler: function(evt){
      var self, graph;
      self = this;
      graph = evt.target.graph;
      self.blacklist[self.graphNamesToOptions[graph]] = !evt.target.checked;
      self.blacklist = JSON.parse(JSON.stringify(self.blacklist));
      return localstorage_setjson('popup_view_graph_blacklist', self.blacklist);
    },
    sortableupdated: function(evt){
      var self, shownGraphs, this$ = this;
      self = this;
      shownGraphs = this.$$('#graphlist_sortable').innerText.split('\n').map(function(it){
        return it.trim();
      }).filter(function(x){
        return x !== '';
      });
      return this.shownGraphs = shownGraphs.map(function(graph_name){
        return self.graphNamesToOptions[graph_name];
      });
    },
    compute_html_for_shown_graphs: function(shownGraphs, blacklist, sites){
      var self, html, i$, len$, x, j$, len1$, site;
      self = this;
      shownGraphs = shownGraphs.filter(function(x){
        return !self.blacklist[x];
      });
      html = "<div class=\"card-content\">";
      for (i$ = 0, len$ = shownGraphs.length; i$ < len$; ++i$) {
        x = shownGraphs[i$];
        if (x === 'site-goal-view') {
          for (j$ = 0, len1$ = sites.length; j$ < len1$; ++j$) {
            site = sites[j$];
            html += "<" + x + " site=\"" + site + "\"></" + x + "><br>";
          }
        } else {
          html += "<" + x + "></" + x + "><br>";
        }
      }
      html += "</div>";
      return html;
    },
    isEmpty: function(enabledInterventions){
      return enabledInterventions != null && enabledInterventions.length === 0;
    },
    outside_work_hours: function(){
      return is_it_outside_work_hours();
    },
    disable_habitlab_changed: async function(evt){
      var tab_info, loaded_interventions;
      if (evt.target.checked) {
        this.is_habitlab_disabled = true;
        disable_habitlab();
        tab_info = (await get_active_tab_info());
        loaded_interventions = (await list_currently_loaded_interventions_for_tabid(tab_info.id));
        return add_log_habitlab_disabled({
          page: 'popup-view',
          reason: 'disable_button_slider_toggle',
          tab_info: tab_info,
          url: tab_info != null ? tab_info.url : void 8,
          loaded_interventions: loaded_interventions,
          loaded_intervention: loaded_interventions[0]
        });
      } else {
        this.is_habitlab_disabled = false;
        enable_habitlab();
        tab_info = (await get_active_tab_info());
        loaded_interventions = (await list_currently_loaded_interventions_for_tabid(tab_info.id));
        return add_log_habitlab_enabled({
          page: 'popup-view',
          reason: 'disable_button_slider_toggle',
          tab_info: tab_info,
          url: tab_info != null ? tab_info.url : void 8,
          loaded_interventions: loaded_interventions
        });
      }
    },
    enable_habitlab_button_clicked: async function(){
      var tab_info, loaded_interventions;
      this.is_habitlab_disabled = false;
      enable_habitlab();
      tab_info = (await get_active_tab_info());
      loaded_interventions = (await list_currently_loaded_interventions_for_tabid(tab_info.id));
      return add_log_habitlab_enabled({
        page: 'popup-view',
        reason: 'enable_habitlab_big_button_clicked',
        tab_info: tab_info,
        loaded_interventions: loaded_interventions
      });
    },
    goal_enable_button_changed: async function(evt){
      var goal;
      goal = evt.target.goal;
      if (evt.target.checked) {
        if (goal.name != null) {
          (await set_goal_enabled(goal.name));
        } else {
          (await add_enable_custom_goal_reduce_time_on_domain(goal.domain));
        }
        return (await this.set_goals_and_interventions());
      } else {
        (await set_goal_disabled(goal.name));
        return (await this.set_goals_and_interventions());
      }
    },
    set_goals_and_interventions: async function(){
      var sites_promise, enabledInterventions_promise, intervention_name_to_info_promise, all_goals_and_interventions_promise, url_promise, ref$, sites, enabledInterventions, intervention_name_to_info, all_goals_and_interventions, url, domain, filtered_goals_and_interventions;
      sites_promise = list_sites_for_which_goals_are_enabled();
      enabledInterventions_promise = list_currently_loaded_interventions();
      intervention_name_to_info_promise = get_interventions();
      all_goals_and_interventions_promise = get_nonpositive_goals_and_interventions();
      url_promise = get_active_tab_url();
      ref$ = (await Promise.all([sites_promise, enabledInterventions_promise, intervention_name_to_info_promise, all_goals_and_interventions_promise, url_promise])), sites = ref$[0], enabledInterventions = ref$[1], intervention_name_to_info = ref$[2], all_goals_and_interventions = ref$[3], url = ref$[4];
      this.sites = sites;
      this.enabledInterventions = enabledInterventions;
      this.intervention_name_to_info = intervention_name_to_info;
      domain = url_to_domain(url);
      filtered_goals_and_interventions = all_goals_and_interventions.filter(function(obj){
        return obj.goal.domain === domain;
      });
      if (filtered_goals_and_interventions.length === 0) {
        filtered_goals_and_interventions = [{
          enabled: false,
          goal: {
            domain: domain,
            description: "Spend less time on " + domain
          }
        }];
      }
      return this.goals_and_interventions = filtered_goals_and_interventions;
    },
    get_power_icon_src: function(){
      return chrome.extension.getURL('icons/power_button.svg');
    },
    get_thumbs_icon_src: function(){
      return chrome.extension.getURL('icons/thumbs_i');
    },
    debug_button_clicked: async function(){
      var tab_id;
      tab_id = (await get_active_tab_id());
      return (await open_debug_page_for_tab_id(tab_id));
    },
    submit_feedback_clicked: async function(){
      var screenshot_utils, screenshot, data, feedback_form;
      screenshot_utils = (await get_screenshot_utils());
      screenshot = (await screenshot_utils.get_screenshot_as_base64());
      data = (await screenshot_utils.get_data_for_feedback());
      feedback_form = document.createElement('feedback-form');
      document.body.appendChild(feedback_form);
      feedback_form.screenshot = screenshot;
      feedback_form.other = data;
      return feedback_form.open();
    },
    help_icon_clicked: async function(){
      var swal;
      (await load_css_file('bower_components/sweetalert2/dist/sweetalert2.css'));
      swal = (await get_swal());
      return swal({
        title: 'How Unstuck Works',
        html: 'Unstuck will help improve your creativity by showing you a small activity called an <b>"intervention"</b>.\n<br><br>\nAnswer the Check In questions to select the best intervention for you. Once done, answer the Check Out question and provide feedback to keep improving the interventions. ',
        allowOutsideClick: true,
        allowEscapeKey: true,
        confirmButtonColor: "#024961"
      });
    },
    productivity_help_clicked: async function(){
      var swal;
      (await load_css_file('bower_components/sweetalert2/dist/sweetalert2.css'));
      swal = (await get_swal());
      return swal({
        title: 'How Productivity Interventions Work',
        html: 'HSO can help you be more productive with productivity interventions.\n<br><br>\nOnce you visit a target site with productivity interventions enabled, the extension will choose a random intervention to help reduce your time on that site.\n<br><br>\nTo enable specific sites and interventions, go into the Settings page.',
        allowOutsideClick: true,
        allowEscapeKey: true
      });
    },
    ask_for_option: async function(){
      var swal;
      (await load_css_file('bower_components/sweetalert2/dist/sweetalert2.css'));
      swal = (await get_swal());
      return swal({
        text: "Please select an option for all questions.",
        allowOutsideClick: true,
        allowEscapeKey: true,
        confirmButtonColor: '#024961'
      });
    },
    cancel_message: async function(){
      var swal;
      (await load_css_file('bower_components/sweetalert2/dist/sweetalert2.css'));
      swal = (await get_swal());
      if ((await swal({
        text: "Are you sure you want to exit the intervention?",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showCancelButton: true,
        reverseButtons: false,
        confirmButtonText: 'Exit',
        cancelButtonText: 'Go Back',
        confirmButtonColor: 'Gray',
        cancelButtonColor: '#024961'
      }))) {
        return this.cancel_stress_intervention();
      }
    },
    skip_message: async function(){
      var confirmSkip, swal;
      (await load_css_file('bower_components/sweetalert2/dist/sweetalert2.css'));
      confirmSkip = false;
      swal = (await get_swal());
      if ((await swal({
        title: "Are you sure you want to skip this intervention?",
        text: "You will exit the whole intervention process.",
        allowOutsideClick: true,
        allowEscapeKey: true,
        showCancelButton: true,
        confirmButtonText: 'Skip Intervention',
        cancelButtonText: 'Go Back',
        confirmButtonColor: 'Gray',
        cancelButtonColor: '#024961'
      }))) {
        return this.skipped_intervention();
      }
    },
    skip_intervention: async function(){
      var curr_time, seconds_until_skip, data_tosend, skipped_data_entry, current_intervention, interventions_skipped_total;
      curr_time = new Date();
      seconds_until_skip = (curr_time - this.last_intervention_start) / 1000;
      data_tosend = localstorage_getjson("intervention_data_tosend");
      skipped_data_entry = data_tosend;
      skipped_data_entry["seconds_until_skipped"] = seconds_until_skip;
      skipped_data_entry["date_skipped"] = curr_time;
      skipped_data_entry["intervention_skipped"] = 1;
      skipped_data_entry["interventions_skipped_list"] = data_tosend["interventions_skipped_list"];
      skipped_data_entry["skipped_intervention"] = current_intervention;
      skipped_data_entry["creative_after"] = -0.2;
      post_json("/results/postInterventionResult", skipped_data_entry);
      current_intervention = localstorage_getjson("selected_intervention_data");
      data_tosend["has_skipped_interventions"] = 1;
      data_tosend["interventions_skipped_list"].push(current_intervention);
      interventions_skipped_total = localstorage_getjson("interventions_skipped_total");
      data_tosend["interventions_skipped_total"] += 1;
      data_tosend["nudge_active"] = localstorage_getstring("nudge_active");
      localstorage_setjson("intervention_data_tosend", data_tosend);
      this.last_intervention_start = new Date();
      return this.get_stress_intervention();
    },
    submit_clicked: async function(){
      this.record_submit_feedback();
      this.send_intervention_data();
      return this.submit_message();
    },
    submit_message: async function(){
      var swal, getAnotherIntervention, to_send;
      (await load_css_file('bower_components/sweetalert2/dist/sweetalert2.css'));
      swal = (await get_swal());
      getAnotherIntervention = (await swal({
        title: "You are done!",
        text: "Do you want to do another intervention?",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        confirmButtonColor: '#024961',
        cancelButtonColor: 'Gray',
        reverseButtons: true
      }).then(function(result){
        if (deepEq$(result, true, '===')) {
          return true;
        }
      })['catch'](function(dismiss){
        return false;
      }));
      localstorage_setstring("got_another", getAnotherIntervention);
      to_send = localstorage_getjson("intervention_data_tosend");
      to_send["got_another"] = getAnotherIntervention.toString();
      (await localstorage_setjson("intervention_data_tosend", to_send));
      if (getAnotherIntervention === true) {
        return this.get_another();
      } else if (getAnotherIntervention === false) {
        return this.end_and_close_intervention();
      }
    },
    did_not_do_message: async function(){
      var swal;
      (await load_css_file('bower_components/sweetalert2/dist/sweetalert2.css'));
      swal = (await get_swal());
      if ((await swal({
        title: "Are you sure you don't want to finish this intervention?",
        text: "It should only take a couple of minutes.",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonText: 'Stop Intervention',
        cancelButtonText: 'Go Back',
        confirmButtonColor: 'Gray',
        cancelButtonColor: '#024961'
      }))) {
        return this.did_not_do_intervention();
      }
    },
    get_another: async function(){
      var nudge_active, to_send, nudge_set_time, nudge_seconds_since, curr_tab_info, tabs_info, active_tab_info;
      this.stress_intervention_active = true;
      this.stress_intervention_display = false;
      this.ask_intervention_done = false;
      this.intervention_stress_before = true;
      this.intervention_stress_after = false;
      this.intervention_end = false;
      this.$$('#feedback_textarea').value = "";
      localstorage_setstring("current_panel", "stress_before");
      localstorage_setstring("panel_timer", new Date().getTime());
      localstorage_setbool('intervention_timed_out', false);
      nudge_active = localstorage_getbool('icon_nudge_active');
      localstorage_setstring('icon_nudge_active', 'false');
      to_send = localstorage_getjson("intervention_data_tosend");
      nudge_set_time = localstorage_getstring("nudge_set_time");
      nudge_seconds_since = Math.abs(new Date().getTime() - nudge_set_time) / 1000;
      to_send["userid"] = (await get_user_id());
      to_send["nudge_seconds_since"] = nudge_seconds_since;
      to_send["nudge_set_time"] = nudge_set_time;
      to_send["date"] = new Date();
      to_send["nudge_active"] = nudge_active;
      to_send["intervention_cancelled"] = null;
      to_send["intervention_skipped"] = null;
      to_send["intervention_completed"] = null;
      to_send["from_previous_intervention"] = true;
      to_send["interventions_skipped_list"] = [];
      to_send["interventions_skipped_total"] = 0;
      to_send["written_feedback"] = null;
      to_send["seconds_to_complete"] = null;
      to_send["seconds_until_skipped"] = null;
      to_send["intervention_selected"] = null;
      to_send["intervention_input_text"] = null;
      to_send["intervention_info_type"] = null;
      to_send["intervention_info_id"] = null;
      to_send["intervention_info"] = null;
      to_send["intervention_clicked_done"] = null;
      to_send["has_skipped_interventions"] = null;
      to_send["date_skipped"] = null;
      to_send["creative_after"] = null;
      to_send["click_rate_buffer"] = (await localstorage_getjson("click_rate_buffer"));
      to_send["scroll_rate_buffer"] = (await localstorage_getjson("scroll_rate_buffer"));
      to_send["typing_rate_buffer"] = (await localstorage_getjson("typing_rate_buffer"));
      curr_tab_info = (await get_active_tab_info());
      tabs_info = (await get_all_tabs_info());
      to_send["window_width"] = curr_tab_info["width"];
      to_send["window_height"] = curr_tab_info["height"];
      chrome.storage.local.get('lastActiveTab', function(result){
        return to_send["curr_url"] = result.lastActiveTab;
      });
      to_send["tabs_urls"] = (await get_all_tabs_urls());
      to_send["num_tabs"] = tabs_info["length"];
      active_tab_info = (await get_active_tab_info());
      to_send["incognito"] = active_tab_info["incognito"];
      to_send["pinned"] = active_tab_info["pinned"];
      return localstorage_setjson("intervention_data_tosend", to_send);
    },
    show_rl_panel: async function(){
      this.stress_intervention_active = true;
      this.rl_info_panel = true;
      this.stress_intervention_display = false;
      this.ask_intervention_done = false;
      this.intervention_stress_before = false;
      this.intervention_stress_after = false;
      return this.intervention_end = false;
    },
    start_stress_intervention: async function(){
      var nudge_active, to_send, nudge_set_time, nudge_seconds_since, curr_tab_info, tabs_info, active_tab_info;
      this.stress_intervention_active = true;
      this.rl_info_panel = false;
      this.stress_intervention_display = false;
      this.ask_intervention_done = false;
      this.intervention_stress_before = true;
      this.intervention_stress_after = false;
      this.intervention_end = false;
      localstorage_setstring("current_panel", "stress_before");
      localstorage_setstring("panel_timer", new Date().getTime());
      localstorage_setbool('intervention_timed_out', false);
      nudge_active = localstorage_getbool('icon_nudge_active');
      if (nudge_active) {
        once_available("home_panel", this.set_nudge_message());
      }
      to_send = localstorage_getjson("intervention_data_tosend");
      nudge_set_time = localstorage_getstring("nudge_set_time");
      nudge_seconds_since = "null";
      if (nudge_set_time !== "null") {
        nudge_seconds_since = Math.abs(new Date().getTime() - nudge_set_time) / 1000;
        localstorage_setstring("nudge_seconds_since", nudge_seconds_since);
      }
      to_send["from_previous_intervention"] = false;
      to_send["userid"] = (await get_user_id());
      to_send["nudge_seconds_since"] = nudge_seconds_since;
      to_send["nudge_set_time"] = nudge_set_time;
      to_send["date"] = new Date();
      to_send["nudge_active"] = nudge_active;
      to_send["interventions_skipped_list"] = [];
      to_send["interventions_skipped_total"] = 0;
      to_send["creative_after"] = null;
      to_send["click_rate_buffer"] = (await localstorage_getjson("click_rate_buffer"));
      to_send["scroll_rate_buffer"] = (await localstorage_getjson("scroll_rate_buffer"));
      to_send["typing_rate_buffer"] = (await localstorage_getjson("typing_rate_buffer"));
      curr_tab_info = (await get_active_tab_info());
      tabs_info = (await get_all_tabs_info());
      to_send["window_width"] = curr_tab_info["width"];
      to_send["window_height"] = curr_tab_info["height"];
      chrome.storage.local.get('lastActiveTab', function(result){
        return to_send["curr_url"] = result.lastActiveTab;
      });
      to_send["tabs_urls"] = (await get_all_tabs_urls());
      to_send["num_tabs"] = tabs_info["length"];
      active_tab_info = (await get_active_tab_info());
      to_send["incognito"] = active_tab_info["incognito"];
      to_send["pinned"] = active_tab_info["pinned"];
      return localstorage_setjson("intervention_data_tosend", to_send);
    },
    display_continue_button: async function(){
      return this.$$('#continue_button').css({
        'display': 'center'
      });
    },
    set_nudge_message: async function(){
      this.$$('#home_panel_message').css({
        'margin-top': ' 0',
        'margin-bottom': '1%',
        'font-size': '18px'
      });
      this.$$('#home_panel_message').innerHTML = "Seems like you've been browsing for a while.<br>Take a moment to get Unstuck.";
      return this.$$('#skipNudge_button').css({
        'display': 'center'
      });
    },
    remove_nudge_message: async function(){
      this.$$('#skipNudge_button').css({
        'display': 'none'
      });
      return this.$$('#home_panel_message').innerHTML = "Take a moment to get Unstuck";
    },
    returnto_stress_before: async function(){
      this.stress_intervention_active = true;
      this.stress_intervention_display = false;
      this.ask_intervention_done = false;
      this.intervention_stress_before = true;
      this.intervention_stress_after = false;
      this.intervention_end = false;
      localstorage_setstring("current_panel", "stress_before");
      localstorage_setstring("panel_timer", new Date().getTime());
      return localstorage_setbool('intervention_timed_out', false);
    },
    returnto_stress_after: async function(){
      this.stress_intervention_active = true;
      this.stress_intervention_display = false;
      this.ask_intervention_done = false;
      this.intervention_stress_before = false;
      this.intervention_stress_after = true;
      this.intervention_end = false;
      localstorage_setstring("current_panel", "stress_after");
      localstorage_setstring("panel_timer", new Date().getTime());
      return localstorage_setbool('intervention_timed_out', false);
    },
    get_stress_intervention: async function(){
      var userid, intervention_data_tosend, request_params_json, curr_int_num, data_received, to_send;
      this.stress_intervention_active = true;
      this.stress_intervention_display = false;
      this.ask_intervention_done = false;
      this.intervention_stress_before = false;
      this.intervention_stress_after = false;
      this.intervention_end = false;
      this.stress_intervention_loading = true;
      localstorage_setstring("current_panel", "intervention_loading");
      localstorage_setstring("panel_timer", new Date().getTime());
      localstorage_setbool('intervention_timed_out', false);
      userid = (await get_user_id());
      intervention_data_tosend = localstorage_getjson("intervention_data_tosend");
      request_params_json = {};
      request_params_json["userid"] = intervention_data_tosend["userid"];
      request_params_json["date"] = intervention_data_tosend["date"];
      request_params_json["curr_url"] = intervention_data_tosend["curr_url"];
      request_params_json["incognito"] = intervention_data_tosend["incognito"];
      request_params_json["num_tabs"] = intervention_data_tosend["num_tabs"];
      request_params_json["tabs_urls"] = intervention_data_tosend["tabs_urls"];
      request_params_json["nudge_active"] = intervention_data_tosend["nudge_active"];
      request_params_json["nudge_seconds_since"] = intervention_data_tosend["nudge_seconds_since"];
      request_params_json["stress_before"] = intervention_data_tosend["stress_before"];
      request_params_json["focus_level_before"] = intervention_data_tosend["focus_level_before"];
      request_params_json["motivation_level_before"] = intervention_data_tosend["motivation_level_before"];
      request_params_json["stuck_level_before"] = intervention_data_tosend["stuck_level_before"];
      request_params_json["task_before"] = intervention_data_tosend["task_before"];
      request_params_json["click_rate_buffer"] = intervention_data_tosend["click_rate_buffer"];
      request_params_json["scroll_rate_buffer"] = intervention_data_tosend["scroll_rate_buffer"];
      request_params_json["typing_rate_buffer"] = intervention_data_tosend["typing_rate_buffer"];
      curr_int_num = (await localstorage_getstring("intervention_count"));
      data_received = {};
      /* # Code for selecting first few interventions: 
      if curr_int_num < 3
        intervention_list = this.intervention_list
        await sleep (2000)
        console.log("sending initial intervention")
        this.intervention_data_received = intervention_list[curr_int_num]
        console.log(this.intervention_data_received)
        localstorage_setstring("intervention_count", (parseInt(curr_int_num) + 1).toString())
        data_received["curr_url_category"] = ""
        data_received["tabs_urls_category"] = ""
      else 
      */
      data_received = (await JSON.parse((await get_json_using_post("/interventions/getRandom", request_params_json))));
      this.intervention_data_received = data_received["intervention"];
      localstorage_setjson("selected_intervention_data", this.intervention_data_received);
      to_send = localstorage_getjson("intervention_data_tosend");
      if (data_received["curr_url_category"]) {
        to_send["curr_url_category"] = data_received["curr_url_category"];
      }
      if (data_received["tabs_urls_category"]) {
        to_send["tabs_urls_category"] = data_received["tabs_urls_category"];
      }
      to_send["intervention_info"] = this.intervention_data_received;
      to_send["intervention_info_type"] = this.intervention_data_received["type"];
      to_send["intervention_info_id"] = this.intervention_data_received["InterventionID"];
      localstorage_setjson("intervention_data_tosend", to_send);
      if (this.intervention_data_received.type === 'control') {
        return this.click_intervention_link();
      } else {
        return this.show_stress_intervention();
      }
    },
    get_intervention_local_random: async function(){
      var intervention_list, list_size, intervention_num;
      intervention_list = this.intervention_list;
      list_size = intervention_list.length;
      intervention_num = (await localstorage_getstring("intervention_count"));
      return intervention_list[intervention_num];
    },
    show_stress_intervention: async function(){
      this.stress_intervention_active = true;
      this.stress_intervention_display = true;
      this.ask_intervention_done = false;
      this.intervention_stress_before = false;
      this.intervention_stress_after = false;
      this.intervention_end = false;
      this.stress_intervention_loading = false;
      this.icons = {
        'default': 'meta_cog.png',
        control: 'meta_cog.png',
        DIY: 'meta_cog.png',
        cognitive_behavioral: 'cog_behavioral.png',
        meta_cognitive: 'meta_cog.png',
        positive_psychology: 'positive_psych.png',
        productivity: 'Productivity.png',
        somatic: 'somatic.png',
        flexibility: 'flexibility.svg',
        somatic_regulation: 'somatic_regulation.svg',
        mental_regulation: 'mental_regulation.svg',
        exploration: 'exploration.svg',
        self_mindset: 'self_mindset.svg',
        connection: 'connection.svg'
      };
      this.int_type_text = {
        DIY: 'Do It Yourself',
        control: 'Stress Intervention',
        cognitive_behavioral: 'Cognitive Behavioral',
        meta_cognitive: 'Meta-Cognitive',
        positive_psychology: 'Positive Psychology',
        productivity: 'Productivity',
        somatic: 'Somatic',
        flexibility: 'Flexibility',
        somatic_regulation: 'Body Regulation',
        mental_regulation: 'Mind Regulation',
        exploration: 'Exploration',
        self_mindset: 'Self/Mindset',
        connection: 'Connection'
      };
      localstorage_setstring("current_panel", "intervention_display");
      localstorage_setstring("panel_timer", new Date().getTime());
      localstorage_setbool('intervention_timed_out', false);
      return once_available("intervention_panel", this.update_intervention_panel());
    },
    update_intervention_panel: async function(){
      var data, short_url;
      data = (await localstorage_getjson("selected_intervention_data"));
      this.$$('#intervention_text').innerText = data.text;
      if (!deepEq$(typeof data.duration, "undefined", '===')) {
        this.$$('#intervention_duration').innerHTML = "Approx. Time: " + data.duration + " mins";
      }
      if (!deepEq$(typeof data.name, "undefined", '===')) {
        this.$$('#intervention_subtitle').innerHTML = data.name;
        this.$$('#intervention_subtitle').style.display = "block";
      } else {
        this.$$('#intervention_subtitle').innerHTML = "Intervention";
      }
      this.$$('#intervention_title').innerHTML = "<b>" + this.int_type_text[data.type];
      if (!deepEq$(data.url.trim(), "", '===')) {
        short_url = data.url.replace(/^(https:\/\/www.|https:\/\/|www.)/, "").match(/.*(.com|.org)/g)[0];
        this.$$('#intervention_button_hover').innerHTML = "Will show <br>" + short_url;
      } else if (data.url.trim() === "") {
        this.$$('#intervention_button_text').innerHTML = "Try It Out";
        this.$$('#intervention_button_hover').style.display = "none";
      }
      this.$$('#intervention_icon').src = "./icons/Unstuck_icons/" + this.icons[data.type];
      return this.$$('#intervention_button_hover').style.display = "none";
    },
    record_metrics_before: async function(){
      var to_send, stress_level_before, stuck_level_before, motivation_level_before, focus_level_before, task_before;
      this.last_intervention_start = new Date();
      to_send = localstorage_getjson("intervention_data_tosend");
      if (deepEq$(this.$$("input[name=stress_level]:checked"), null, '===') || deepEq$(this.$$("input[name=stuck_level]:checked"), null, '===') || deepEq$(this.$$("input[name=motivation_level]:checked"), null, '===') || deepEq$(this.$$("input[name=focus_level]:checked"), null, '===')) {
        this.ask_for_option();
        return;
      }
      stress_level_before = parseInt(this.$$("input[name=stress_level]:checked").value);
      stuck_level_before = parseInt(this.$$("input[name=stuck_level]:checked").value);
      motivation_level_before = parseInt(this.$$("input[name=motivation_level]:checked").value);
      focus_level_before = parseInt(this.$$("input[name=focus_level]:checked").value);
      task_before = document.getElementById("task_before").value;
      to_send["stress_before"] = stress_level_before;
      to_send["stuck_level_before"] = stuck_level_before;
      to_send["motivation_level_before"] = motivation_level_before;
      to_send["focus_level_before"] = focus_level_before;
      to_send["task_before"] = task_before;
      localstorage_setjson("intervention_data_tosend", to_send);
      return this.get_stress_intervention();
    },
    record_metrics_after: async function(){
      var to_send, creativity_change, inputs, i$, len$, input;
      if (deepEq$(this.$$("input[name=creative_level_after]:checked"), null, '===')) {
        this.ask_for_option();
        return;
      }
      to_send = localstorage_getjson("intervention_data_tosend");
      creativity_change = parseInt(this.$$("input[name=creative_level_after]:checked").value);
      to_send["creative_after"] = creativity_change;
      localstorage_setjson("intervention_data_tosend", to_send);
      inputs = this.$$('#unstuck_change_meter').querySelectorAll('input[type=radio]');
      for (i$ = 0, len$ = inputs.length; i$ < len$; ++i$) {
        input = inputs[i$];
        input.checked = false;
      }
      return this.show_final_panel();
    },
    click_intervention_link: async function(){
      var to_send, data, url, short_url;
      this.ask_intervention_done = true;
      this.stress_intervention_display = false;
      this.intervention_stress_before = false;
      this.intervention_stress_after = false;
      this.intervention_end = false;
      this.stress_intervention_loading = false;
      localstorage_setstring("current_panel", "ask_intervention_done");
      localstorage_setstring("panel_timer", new Date().getTime());
      localstorage_setbool('intervention_timed_out', false);
      to_send = localstorage_getjson("intervention_data_tosend");
      data = (await localstorage_getjson("selected_intervention_data"));
      to_send["intervention_selected"] = data["InterventionID"];
      localstorage_setstring("intervention_count", (parseInt((await localstorage_getstring("intervention_count"))) + 1).toString());
      localstorage_setjson("selected_intervention_data", this.intervention_data_received);
      localstorage_setjson("intervention_data_tosend", to_send);
      once_available("confirmation_panel", this.update_confirmation_panel());
      this.last_intervention_start = null;
      this.intervention_timer = new Date();
      url = (await this.intervention_data_received.url);
      short_url = url.trim();
      if (!deepEq$(short_url, "", '===')) {
        document.getElementById("intervention_iframe").src = url;
        document.getElementById("intervention_iframe").style.display = "flex";
        document.getElementById("confirmation_panel_content").style.paddingTop = "2%";
        this.$$('#intervention_source').innerHTML = "Source: " + short_url;
        return this.$$('#intervention_source').style.display = "inline-block";
      } else {
        document.getElementById("intervention_iframe").style.display = "none";
        document.getElementById("confirmation_panel_content").style.paddingTop = "15%";
        return this.$$('#intervention_source').style.display = "none";
      }
    },
    update_submit_panel: function(){
      this.$$('#submit_title').innerHTML = "Skipped";
      return this.$$('#submit_text').innerHTML = "Want to take a few seconds to tell us why you skipped the intervention?";
    },
    skipped_intervention: function(){
      var to_send;
      this.stress_intervention_display = true;
      this.ask_intervention_done = false;
      this.intervention_stress_before = false;
      this.intervention_stress_after = false;
      this.intervention_end = false;
      to_send = localstorage_getjson("intervention_data_tosend");
      this.reset_selected_intervention();
      this.reset_panels();
      localstorage_setbool('intervention_timed_out', false);
      localstorage_setbool('intervention_dismissed', true);
      to_send["intervention_completed"] = 0;
      to_send["intervention_cancelled"] = 0;
      to_send["intevention_skipped"] = 1;
      localstorage_setjson("intervention_data_tosend", to_send);
      return this.get_stress_intervention();
    },
    reset_selected_intervention: function(){
      return localstorage_setstring("selected_intervention_data", "{}");
    },
    reset_panels: function(){
      var inputs, i$, len$, input, results$ = [];
      this.$$('#feedback_textarea').value = "";
      this.$$('#intervention_textarea').value = "";
      inputs = this.$$('#unstuck_change_meter').querySelectorAll('input[type=radio]');
      for (i$ = 0, len$ = inputs.length; i$ < len$; ++i$) {
        input = inputs[i$];
        results$.push(input.checked = false);
      }
      return results$;
    },
    did_not_do_intervention: function(){
      var iframe, to_send;
      iframe = document.getElementById("intervention_iframe");
      if (iframe) {
        iframe.src = '';
      }
      this.stress_intervention_active = true;
      this.stress_intervention_display = false;
      this.ask_intervention_done = false;
      this.intervention_stress_before = false;
      this.intervention_stress_after = true;
      this.intervention_end = false;
      to_send = localstorage_getjson("intervention_data_tosend");
      localstorage_setstring("current_panel", "intervention_end");
      localstorage_setstring("panel_timer", new Date().getTime());
      localstorage_setbool('intervention_timed_out', false);
      localstorage_setbool('intervention_dismissed', true);
      to_send["intervention_completed"] = 0;
      to_send["intervention_cancelled"] = 1;
      to_send["creative_after"] = -0.5;
      to_send["intervention_clicked_done"] = 0;
      to_send["intervention_did_not_do"] = 1;
      to_send["intervention_cancelled_stage"] = "ask_intervention_done";
      return localstorage_setjson("intervention_data_tosend", to_send);
    },
    update_confirmation_panel: async function(){
      var data;
      data = (await localstorage_getjson("selected_intervention_data"));
      this.$$('#confirmation_text').innerHTML = data.text;
      if (data.name !== "Control") {
        this.$$('#confirmation_title').innerHTML = data.name;
      } else {
        this.$$('#confirmation_title').innerHTML = "Stress Intervention";
        this.$$('#confirmation_title').style.marginBottom = "2%";
        this.$$('#intervention_done_message').style.display = "none";
        this.$$('#confirmation_panel_content').style.paddingTop = "15%";
      }
      if (data.keywords.includes("writing")) {
        this.$$('#intervention_done_message').style.marginTop = "15%";
        this.$$('#intervention_textarea').style.display = "block";
        return this.$$(confirmation_panel_content + "").style.paddingTop = "5%";
      } else {
        return this.$$('#intervention_textarea').style.display = "none";
      }
    },
    show_userid: async function(){
      var userid;
      userid = (await get_user_id());
      return this.$$('#userid_label').innerHTML = userid;
    },
    show_tickets: async function(){
      var ticket_count;
      ticket_count = (await localstorage_getjson("ticket_count"));
      return this.$$('#raffle_tickets_label').innerHTML = "Raffle tickets: " + ticket_count;
    },
    intervention_confirmation: async function(){
      var intervention;
      intervention = (await localstorage_getjson("selected_intervention_data"));
      return once_available('confirmation_panel', this.update_confirmation_panel());
    },
    confirm_intervention_done: async function(){
      var iframe, to_send, timer_done, timer_diff;
      iframe = document.getElementById("intervention_iframe");
      if (iframe) {
        iframe.src = '';
      }
      this.stress_intervention_active = true;
      this.stress_intervention_display = false;
      this.ask_intervention_done = false;
      this.intervention_stress_before = false;
      this.intervention_stress_after = true;
      this.intervention_end = false;
      localstorage_setstring("current_panel", "stress_after");
      localstorage_setstring("panel_timer", new Date().getTime());
      localstorage_setbool('intervention_timed_out', false);
      to_send = localstorage_getjson("intervention_data_tosend");
      timer_done = new Date();
      timer_diff = Math.abs(this.intervention_timer - timer_done) / 1000;
      to_send["intervention_input_text"] = this.$$('#intervention_textarea').value;
      to_send["seconds_to_complete"] = timer_diff;
      return localstorage_setjson("intervention_data_tosend", to_send);
    },
    show_final_panel: async function(){
      var to_send;
      this.stress_intervention_display = false;
      this.ask_intervention_done = false;
      this.intervention_stress_before = false;
      this.intervention_stress_after = false;
      this.intervention_end = true;
      to_send = localstorage_getjson("intervention_data_tosend");
      localstorage_setstring("current_panel", "intervention_end");
      localstorage_setstring("panel_timer", new Date().getTime());
      localStorage.setItem("last_survey_notif_time", new Date());
      localstorage_setbool('intervention_timed_out', false);
      to_send["intervention_completed"] = 1;
      to_send["intervention_clicked_done"] = 1;
      to_send["intervention_cancelled"] = 0;
      return localstorage_setjson("intervention_data_tosend", to_send);
    },
    end_stress_intervention: async function(){
      this.stress_intervention_active = false;
      this.stress_intervention_display = false;
      this.ask_intervention_done = false;
      this.intervention_stress_before = false;
      this.intervention_stress_after = false;
      this.intervention_end = false;
      localstorage_setstring("current_panel", "home");
      localstorage_setstring("panel_timer", new Date().getTime());
      localstorage_setbool('intervention_timed_out', false);
      localstorage_setstring('icon_nudge_active', 'false');
      this.last_intervention_start = new Date();
      return localstorage_setjson("intervention_data_tosend", {});
    },
    end_and_close_intervention: async function(){
      this.record_submit_feedback();
      this.send_intervention_data();
      this.stress_intervention_active = false;
      this.stress_intervention_display = false;
      this.ask_intervention_done = false;
      this.intervention_stress_before = false;
      this.intervention_stress_after = false;
      this.intervention_end = false;
      localstorage_setstring("current_panel", "home");
      localstorage_setstring("panel_timer", new Date().getTime());
      localstorage_setbool('intervention_timed_out', false);
      localstorage_setstring('icon_nudge_active', 'false');
      this.last_intervention_start = new Date();
      this.close_popup();
      return localstorage_setjson("intervention_data_tosend", {});
    },
    skip_nudge: async function(){
      this.remove_nudge_message();
      localstorage_setstring('icon_nudge_active', 'false');
      return this.close_popup();
    },
    get_feedback_text: async function(){
      var to_send;
      to_send = localstorage_getjson("intervention_data_tosend");
      to_send["written_feedback"] = this.$$('#feedback_textarea').value;
      return localstorage_setjson("intervention_data_tosend", to_send);
    },
    record_submit_feedback: async function(){
      var to_send;
      once_available("feedback_textarea", this.get_feedback_text());
      to_send = localstorage_getjson("intervention_data_tosend");
      to_send["written_feedback"] = this.$$('#feedback_textarea').value;
      return (await localstorage_setjson("intervention_data_tosend", to_send));
    },
    ask_another_intervention: async function(){
      var to_send;
      to_send = localstorage_getjson("intervention_data_tosend");
      to_send["requested_another"] = 1;
      localstorage_setjson("intervention_data_tosend", to_send);
      this.send_intervention_data();
      return this.get_stress_intervention();
    },
    send_intervention_data: async function(){
      (await post_json("/results/postInterventionResult", localstorage_getjson("intervention_data_tosend")));
    },
    send_intervention_data_and_remove: async function(){
      (await post_json("/results/postInterventionResult", localstorage_getjson("intervention_data_tosend")));
      localstorage_setjson("intervention_data_tosend", {});
    },
    confirm_cancel: async function(){
      return this.cancel_message();
    },
    return_to_home: async function(){
      this.stress_intervention_active = false;
      this.stress_intervention_display = false;
      this.ask_intervention_done = false;
      this.intervention_stress_before = false;
      this.intervention_stress_after = false;
      this.intervention_end = false;
      localstorage_setstring("current_panel", "home");
      return localstorage_setstring("panel_timer", "");
    },
    cancel_stress_intervention: async function(){
      var iframe, stress_level_before, stress_change, to_send;
      iframe = document.getElementById("intervention_iframe");
      if (iframe) {
        iframe.src = '';
      }
      this.stress_intervention_active = false;
      this.stress_intervention_display = false;
      this.ask_intervention_done = false;
      this.intervention_stress_before = false;
      this.intervention_stress_after = false;
      this.intervention_end = false;
      stress_level_before = 0;
      stress_change = null;
      to_send = localstorage_getjson("intervention_data_tosend");
      to_send["intervention_completed"] = 0;
      to_send["intervention_cancelled"] = 1;
      to_send["creative_after"] = -0.5;
      to_send["got_another"] = false;
      to_send["intervention_cancelled_stage"] = (await localstorage_getstring("current_panel"));
      localstorage_setjson("intervention_data_tosend", to_send);
      localstorage_setstring("current_panel", "home");
      localstorage_setstring("panel_timer", "");
      return this.send_intervention_data_and_remove();
    },
    check_for_survey: async function(){
      var userid, survey_data;
      userid = (await get_user_id());
      survey_data = "{}";
      if (!deepEq$(Object.keys(survey_data).length, 0, '===')) {
        localstorage_setjson("survey_data", survey_data);
        localstorage_setbool("icon_notif_active", true);
        return once_available("survey_button", this.enable_survey_button());
      }
    },
    enable_survey_button: async function(){
      var survey_data, button;
      survey_data = (await localstorage_getjson("survey_data"));
      button = document.getElementById("survey_button");
      button.innerHTML = survey_data.button_text;
      button.style.display = "flex";
      button.style.position = "static";
      return button.disabled = false;
    },
    disable_survey_button: async function(){
      var button;
      localstorage_setjson("survey_data", {});
      button = document.getElementById("survey_button");
      button.style.display = "none";
      button.style.position = "relative";
      button.disabled = true;
      return localStorage.setItem("icon_notif_active", "false");
    },
    survey_button_clicked: async function(){
      var survey_data, userid;
      localStorage.setItem("notif_survey_button_clicked", "true");
      survey_data = localstorage_getjson("survey_data");
      userid = (await get_user_id());
      chrome.tabs.create({
        url: survey_data.url
      });
      return this.disable_survey_button();
    },
    close_popup: function(){
      return window.close();
    },
    results_button_clicked: function(){
      return chrome.tabs.create({
        url: 'options.html#overview'
      });
    },
    settings_button_clicked: function(){
      return chrome.tabs.update({
        active: true,
        url: 'options.html#settings'
      });
    },
    onboarding_button_clicked: function(){
      return chrome.tabs.create({
        url: 'options.html#onboarding'
      });
    },
    ready: async function(){
      var self, have_enabled_custom_interventions, panel, survey_data;
      self = this;
      is_habitlab_enabled().then(function(is_enabled){
        return self.is_habitlab_disabled = !is_enabled;
      });
      (await this.set_goals_and_interventions());
      have_enabled_custom_interventions = self.enabledInterventions.map(function(it){
        return self.intervention_name_to_info[it];
      }).filter(function(it){
        return it != null ? it.custom : void 8;
      }).length > 0;
      if (self.enabledInterventions.length > 0 && (localstorage_getbool('enable_debug_terminal') || have_enabled_custom_interventions)) {
        self.S('#debugButton').show();
      }
      if (self.enabledInterventions.length === 0) {
        self.selected_tab_idx = 1;
      }
      localstorage_setbool('popup_view_has_been_opened', true);
      if (localstorage_getjson("stress_active") === false) {
        this.stress_enabled = false;
      } else {
        this.stress_enabled = true;
      }
      if (localstorage_getjson("productivity_active") === false) {
        this.productivity_enabled = false;
      } else {
        this.productivity_enabled = true;
      }
      panel = localstorage_getstring("current_panel");
      if (deepEq$(typeof panel, 'undefined', '===') || deepEq$(panel, null, '===')) {
        localstorage_setstring("current_panel", "home");
        panel = "home";
      }
      if (localstorage_getbool('intervention_timed_out')) {
        localstorage_setbool('intervention_timed_out', false);
        panel = "home";
      }
      if (deepEq$(localstorage_getjson("intervention_data_tosend"), null, '===')) {
        localstorage_setjson("intervention_data_tosend", {});
      }
      if (deepEq$(panel, "home", '===')) {
        this.stress_intervention_active = false;
        if ((await localstorage_getbool('icon_nudge_active'))) {
          once_available("home_panel", this.set_nudge_message());
        }
      } else if (deepEq$(panel, "stress_before", '===')) {
        this.stress_intervention_active = true;
        this.intervention_stress_before = true;
      } else if (deepEq$(panel, "stress_after", '===')) {
        this.stress_intervention_active = true;
        this.intervention_stress_after = true;
      } else if (deepEq$(panel, "intervention_loading", '===')) {
        this.stress_intervention_active = true;
        this.stress_intervention_loading = true;
        this.show_stress_intervention();
      } else if (deepEq$(panel, "intervention_display", '===')) {
        this.stress_intervention_active = true;
        this.stress_intervention_display = true;
        this.show_stress_intervention();
      } else if (deepEq$(panel, "ask_intervention_done", '===')) {
        this.stress_intervention_active = true;
        this.ask_intervention_done = true;
        this.intervention_confirmation();
      } else if (deepEq$(panel, "intervention_end", '===')) {
        this.stress_intervention_active = true;
        this.intervention_end = true;
      }
      survey_data = (await localstorage_getjson("survey_data"));
      if (deepEq$(typeof survey_data, 'undefined', '===') || deepEq$(survey_data, null, '===')) {
        localstorage_setjson("survey_data", {});
      } else if (!deepEq$(Object.keys(survey_data).length, 0, '===')) {
        localstorage_setbool('icon_notif_active', true);
        once_available("survey_button", this.enable_survey_button());
      }
      once_available("userid_label", this.show_userid());
      return setTimeout(async function(){
        require('../bower_components/iron-icon/iron-icon.deps');
        require('../bower_components/iron-icons/iron-icons.deps');
        require('components/graph-donut-top-sites.deps');
        require('components/intervention-view-single-compact.deps');
        require('components/feedback-form.deps');
        (await get_screenshot_utils());
        return (await get_swal());
      }, 1);
    }
  }, {
    source: require('libs_frontend/polymer_methods'),
    methods: ['S']
  });
  function deepEq$(x, y, type){
    var toString = {}.toString, hasOwnProperty = {}.hasOwnProperty,
        has = function (obj, key) { return hasOwnProperty.call(obj, key); };
    var first = true;
    return eq(x, y, []);
    function eq(a, b, stack) {
      var className, length, size, result, alength, blength, r, key, ref, sizeB;
      if (a == null || b == null) { return a === b; }
      if (a.__placeholder__ || b.__placeholder__) { return true; }
      if (a === b) { return a !== 0 || 1 / a == 1 / b; }
      className = toString.call(a);
      if (toString.call(b) != className) { return false; }
      switch (className) {
        case '[object String]': return a == String(b);
        case '[object Number]':
          return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
        case '[object Date]':
        case '[object Boolean]':
          return +a == +b;
        case '[object RegExp]':
          return a.source == b.source &&
                 a.global == b.global &&
                 a.multiline == b.multiline &&
                 a.ignoreCase == b.ignoreCase;
      }
      if (typeof a != 'object' || typeof b != 'object') { return false; }
      length = stack.length;
      while (length--) { if (stack[length] == a) { return true; } }
      stack.push(a);
      size = 0;
      result = true;
      if (className == '[object Array]') {
        alength = a.length;
        blength = b.length;
        if (first) {
          switch (type) {
          case '===': result = alength === blength; break;
          case '<==': result = alength <= blength; break;
          case '<<=': result = alength < blength; break;
          }
          size = alength;
          first = false;
        } else {
          result = alength === blength;
          size = alength;
        }
        if (result) {
          while (size--) {
            if (!(result = size in a == size in b && eq(a[size], b[size], stack))){ break; }
          }
        }
      } else {
        if ('constructor' in a != 'constructor' in b || a.constructor != b.constructor) {
          return false;
        }
        for (key in a) {
          if (has(a, key)) {
            size++;
            if (!(result = has(b, key) && eq(a[key], b[key], stack))) { break; }
          }
        }
        if (result) {
          sizeB = 0;
          for (key in b) {
            if (has(b, key)) { ++sizeB; }
          }
          if (first) {
            if (type === '<<=') {
              result = size < sizeB;
            } else if (type === '<==') {
              result = size <= sizeB
            } else {
              result = size === sizeB;
            }
          } else {
            first = false;
            result = size === sizeB;
          }
        }
      }
      stack.pop();
      return result;
    }
  }
}).call(this);
