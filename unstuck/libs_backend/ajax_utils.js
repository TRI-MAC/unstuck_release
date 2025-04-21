/*
$.ajax {
  type: 'POST'
  url: 'https://habitlab.herokuapp.com/add_install'
  dataType: 'json'
  contentType: 'application/json'
  data: JSON.stringify(install_data)
}
*/


// Select either staging or macdev
var unstuck_server_url = 'https://ldad31f131.execute-api.us-east-1.amazonaws.com/prod';
var unstuck_server_api_key = 'T6xCnpXzJB4i7KEe75OJO4ZPMD6hgxHL2WJ1wngG'; //prod key

//var unstuck_server_url = 'https://b3mu8xjlq0.execute-api.us-east-1.amazonaws.com/staging';
//var unstuck_server_api_key = 'bmK1tngfcP4YCHOKQT6PfajJPzPT9hDm2Qn6WFRk'; //staging key

//var unstuck_server_url = 'https://9ti4a14evc.execute-api.us-east-1.amazonaws.com/mac-dev';
//var unstuck_server_api_key = 'yIix53CeIP3VugNdV8YnXaHFTA0f3Ylx8ve63eKd'; //mac-dev key

function post_json(path, data) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', unstuck_server_url + path)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader("x-api-key", unstuck_server_api_key)
    // if (api_key) {
    //   xhr.setRequestHeader('x-api-key', api_key)
    // } else {
    //   console.error('Fatal Error: API key is missing.');
    //   process.exit(1); // Exit the process with an error code
    // }
    xhr.onload = function() {
      if (xhr.status == 200) {
        resolve(JSON.parse(xhr.responseText))
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

function put_json(path, data) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('PUT', unstuck_server_url + path)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader("x-api-key", unstuck_server_api_key)
    // if (api_key) {
    //   xhr.setRequestHeader('x-api-key', api_key)
    // } else {
    //   console.error('Fatal Error: API key is missing.');
    //   process.exit(1); // Exit the process with an error code
    // }
    xhr.onload = function() {
      if (xhr.status == 200) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject('error in put_json: ' + xhr.status)
      }
    }
    xhr.onerror = function() {
      reject(xhr)
    }
    xhr.send(JSON.stringify(data))
  })
}

function get_json(path, params) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', unstuck_server_url + path +"?"+params, true)
    xhr.setRequestHeader("x-api-key", unstuck_server_api_key)
    // if (api_key) {
    //   xhr.setRequestHeader('x-api-key', api_key)
    // } else {
    //   console.error('Fatal Error: API key is missing.');
    //   process.exit(1); // Exit the process with an error code
    // }
    xhr.onload = function() {
      if (xhr.status == 200) {
        resolve(xhr.responseText)
      } else {
        reject('error in get_json: ' + xhr.status)
      }
    }
    xhr.onerror = function() {
      reject(xhr)
    }
    xhr.send(null)
  })
}

function get_json_using_post(path, params_json) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest()

    xhr.open('POST', unstuck_server_url + path, true)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("x-api-key", unstuck_server_api_key)
    // if (api_key) {
    //   xhr.setRequestHeader('x-api-key', api_key)
    // } else {
    //   console.error('Fatal Error: API key is missing.');
    //   process.exit(1); // Exit the process with an error code
    // }
    xhr.onload = function() {
      if (xhr.status == 200) {
        resolve(xhr.responseText)
      } else {
        reject('error in get_json_using_post: ' + xhr.status)
      }
    }
    xhr.onerror = function() {
      reject(xhr)
    }
    xhr.send(JSON.stringify(params_json))
  })
}


module.exports = {
  post_json,
  get_json,
  get_json_using_post,
  put_json
}
