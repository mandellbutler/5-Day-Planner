//=====================DEPENDENCIES
//current day & time
//create & place using moment.js
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

//Calcutated in Military time for comparison function
// var currentTime = moment().format("HH")
var currentTime = moment().hour()


var LocalStorageKey = "Schedule"
var schedule = {};

var saveBtn = $('.saveBtn') //assigns function to the save buttons
saveBtn.click(handleSave)

function handleSave() { 
    var row = $(this).siblings()
    var hour = $(row[0]).text()
    var text = $(row[1]).val()

    schedule[hour] = text
    SetSchedule();
}
GetSchedule();


function SetSchedule() {
    SetLocalStorage(LocalStorageKey, schedule)
}
function GetSchedule() {
    schedule = GetLocalStorage(LocalStorageKey) || {}
}
function SetLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
function GetLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

//======================FUNCTIONS

//color changing based on time of the day via moment.js
function colorCode() {
    // loop over time blocks
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("block")[1]); //turns string into int for comparisons

        var row = $(this).children()
        var hour = $(row[0]).text()
        var textarea = $(row[1])

        textarea.val(schedule[hour])

        if (timeBlock === currentTime) {
            textarea.addClass("present")
        } else if (timeBlock > currentTime) {
            textarea.addClass("future")
        } else {
            textarea.addClass("past")
        }
    })
}
colorCode();

//====================USER INTERACTIONS

// WHEN I open the planner
    //I am presented with a calendar
    //the current day is displayed at the top
    //the planner displays a schedule of event

// WHEN I click into a timeblock
    //I can enter an event





