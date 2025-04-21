//import { get_user_id() } from '/libs_backend/background_common.js';
//var unstuck_server_url = 'https://hjrb5wjckf.execute-api.us-east-1.amazonaws.com/dev';

//var unstuck_server_url = 'https://9ti4a14evc.execute-api.us-east-1.amazonaws.com/mac-dev';
var unstuck_server_url = 'https://b3mu8xjlq0.execute-api.us-east-1.amazonaws.com/staging';

//var unstuck_server_api_key = '38nf1RlPHY4UyqQ7QrrJI5aAkKXDLbvx1cJp4v1o';
var unstuck_server_api_key = 'bmK1tngfcP4YCHOKQT6PfajJPzPT9hDm2Qn6WFRk';

var stress_level = 0;
var stuck_level = 0;
var motivation_level = 0;

function post_json(path, data) {
    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest()
      xhr.open('POST', unstuck_server_url + path)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.setRequestHeader('x-api-key', unstuck_server_api_key)
      xhr.onload = function() {
        if (xhr.status == 200) {
          resolve(xhr.responseText)
        } else {
          reject('error in post_json: ' + xhr.status)
        }
      }
      xhr.onerror = function() {
        reject(xhr)
      }
      xhr.send(JSON.stringify(data))
    })
  }


document.getElementById("submit_button_id").addEventListener("click", async function(){

    const requiredFields = ['stress_level', 'stuck_level', 'motivation_level', 'focus_level'];

    for (const id of requiredFields) {
      //console.log(id)
      const input = document.querySelector('input[name = \"' + id +'\"]:checked');
      //console.log(input)
      if (!input || input.value.trim() === '') {
        //console.log(input.value)
        alert(`Please complete all the questions.`);
        return; // stop submission
      }
    }
    //console.log("Clicked!");
    window.focus();
    var tosend = {};
    tosend["date"] = new Date();
    tosend["userid"] = await window.localStorage.getItem('userid');
    tosend["stress_level"] = document.querySelector('input[name = "stress_level"]:checked').value;
    tosend["creative_level"] = document.querySelector('input[name = "stuck_level"]:checked').value;
    tosend["motivation_level"] = document.querySelector('input[name = "motivation_level"]:checked').value;
    tosend["focus_level"] = document.querySelector('input[name = "focus_level"]:checked').value;
    tosend["result_type"] = "notification_questions";
    tosend["notif_survey_button_clicked"] = await window.localStorage.getItem("notif_survey_button_clicked");
    tosend["notif_loops_count"] = await window.localStorage.getItem("notif_loops_count");
    tosend["last_survey_notif_time"] = await window.localStorage.getItem("last_survey_notif_time");
    tosend["curr_notifs_start_time"] = await window.localStorage.getItem("curr_notifs_start_time");
    //console.log(tosend);
    //console.log(JSON.stringify(tosend));
    var submit_message = "Thank you. Your response has been submitted. This tab will close.";
    localStorage.setItem("survey_loop_active", "false");
    localStorage.setItem("icon_notif_active", "false");
    localStorage.setItem("notif_loops_count", "0")
    localStorage.setItem("survey_data", "{}");
    localStorage.setItem("notif_survey_button_clicked", "false");
    post_json("/results/postInterventionResult", tosend).then(alert(submit_message)).then(window.close());
    //alert(submit_message);
    // Once alert is done, close window
    window.close();
 });
