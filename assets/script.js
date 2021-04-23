//=====================DEPENDENCIES

//current day & time
//create & place using moment.js
var currentDay = moment().format("dddd LL")
$("#currentDay").append(currentDay);

//Calcutated in Military time for comparison function
var currentTime = moment().format("HH")
console.log(currentTime)


//save buttons

//ability to scroll

//input area

//local storage

//color changing based on time of the day


//=====================STARTING DATA

//CONTAINER

//color coded time blocks
    //is the current time < > or = to each of the time slots?

// hours presented from 8-5pM

//======================FUNCTIONS

function colorCode() {
    if (currentTime > 8) {
        $("#textArea8").addClass("past");
    } else if (currentTime >= 8 && currentTime < 9) {
    $('#textArea8').addClass('present');
    } else if (currentTime < 9) {
    $('#textArea8').addClass('future');
    }
    if (currentTime > 9) {
        $("#textArea8").addClass("past");
    } else if (currentTime >= 9 && currentTime < 10) {
    $('#textArea8').addClass('present');
    } else if (currentTime < 9) {
    $('#textArea8').addClass('future');
    }
} colorCode()
console.log(colorCode)

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







