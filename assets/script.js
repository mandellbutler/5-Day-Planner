//=====================DEPENDENCIES
//current day & time
//create & place using moment.js
var currentDay = moment().format("dddd LL")
$("#currentDay").append(currentDay);

//Calcutated in Military time for comparison function
var currentTime = moment().format("HH")

var textInput = $(".description").text()
console.log(textInput)

var saveBtn = $(".saveBtn")
console.log(saveBtn)
//=====================STARTING DATA


//======================FUNCTIONS

//color changing based on time of the day via moment.js
function colorCode() {
    // loop over time blocks
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("block")[1]); //turns string into int for comparisons
        //conditionals
        if (timeBlock < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (timeBlock == currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
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

saveBtn.click(function () {
    console.log(this);
        

});

// WHEN I click the save button for that timeblock
    //the text for that event is saved in local storage


//=====================INITIALIZATION

//update description upon load



