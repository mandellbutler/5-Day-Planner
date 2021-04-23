//=====================DEPENDENCIES

//current day & time
//create & place using moment.js
var currentDay = moment().format("dddd LL")
$("#currentDay").append(currentDay);

//Calcutated in Military time for comparison function
var currentTime = moment().format("HH:mm")
$("currentTime").append("#currentTime")

var timeBlockDiv = $("time-block")

//save buttons

//ability to scroll

//input area

//local storage

//color changing based on time of the day

//=====================STARTING DATA

//CONTAINER

//color coded time blocks
    //is the current time < > or = to each of the time slots?

// hours presented from 8-5pm
var schedule = [
    {
        hours: 8,
        input: "",
        button: "",
    }
]

//======================FUNCTIONS

//render schedule
function renderSchedule() {
    timeBlockDiv.empty();
    //cycle through the hours on the schedule
    schedule.forEach(function(schedule) {
    //make a div for hour
    var hourDiv = $('<div id="hours" class="hour col-sm-10 col-md-1">');
    hourDiv.text = "8AM"
    //add input
    var textArea = $('<textarea class="textarea future desciption col-sm-10 col-md-10" id="8amTask" type="text">')
    //add button
    var saveBtn = $('<button class="saveBtn col-sm-10 col-md-1" type="button"><i class="far fa-save">') 
    //place it in the time-block
    timeBlockDiv.append(hourDiv, textArea, saveBtn);
    })
    console.log("rendering schedule for you homie:")
}
//====================USER INTERACTIONS

// WHEN I open the planner
    //I am presented with a calendar
    //the current day is displayed at the top
    //the planner displays a schedule of events


// WHEN I scroll down
    //I am presented with timeblocks for standard business hours
    //timeblocks are color coded for past, present, or future


// WHEN I click into a timeblock
    //I can enter an event


// WHEN I click the save button for that timeblock
    //the text for that event is saved in local storage


//=====================INITIALIZATION
renderSchedule();







