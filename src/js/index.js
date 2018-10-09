console.log('connected')

const ipcRenderer = require('electron').ipcRenderer;
//handle quit button
$("#quitButton").click(function(){
  console.log("quit button clicked")
  ipcRenderer.send("quit-app");
})

//handle logic for changing active buttons
$("#stopsButton").click(function(){
  removeAllActiveStates();
  $("#stopsButton").addClass("activeButton");
})
$("#routesButton").click(function(){
  removeAllActiveStates();
  $("#routesButton").addClass("activeButton");
})
$("#allButton").click(function(){
  removeAllActiveStates();
  $("#allButton").addClass("activeButton");
})

function removeAllActiveStates(){
  $("#stopsButton").removeClass("activeButton")
  $("#routesButton").removeClass("activeButton")
  $("#allButton").removeClass("activeButton")
}