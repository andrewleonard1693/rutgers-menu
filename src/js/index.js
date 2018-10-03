console.log('connected')


//handle logic for changing active buttons
$("#stopsButton").click(function(){
  removeAllActiveStates();
  $("#stopsButton").addClass("activeButton");
  console.log('hello')
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