// Script records how long between pointer down and pointer up (release)
// Then sends this info/message to background so that it can be logged in localstorage buffer
// And later sent to the database
let type_buffer = [];
let type_len = 0;
let type_start = 0;

document.addEventListener('keydown', (event) => {
  //console.log("Key down");
  // Prevent bouncing if key held down
  if (event.repeat) { return }
  type_start = new Date();
});

document.addEventListener('keyup', (event) => {
  //console.log("Key up");
  type_len = (new Date()) - type_start;
  if (type_len > 10000) {
    console.log("Not logging double keyboard press...")
    return; 
  }
  //console.log(type_len);
  // Send message to background to log type_len into localstorage buffer
  let message = {type: 'log_typing_rate', data: {type_start, type_len}};
  chrome.runtime.sendMessage(message);
  /* In case we want to have a buffer for the messages
  type_buffer.push({type_start, type_len});
  if (type_buffer.length > 10) {
    chrome.runtime.sendMessage(type_buffer);
    type_buffer = [];
  }
  */
  //chrome.runtime.sendMessage(message);
  //alert(click_len);
  // Reset vars
  type_start = 0;
  type_len = 0;
});
