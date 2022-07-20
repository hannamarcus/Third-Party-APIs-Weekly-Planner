// Current date and time for header

var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {

    // click event listener for save button
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

    // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    // Current time 
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Local storage
    $("#timeAt9 .description").val(localStorage.getItem("timeAt9"));
    $("#timeAt10 .description").val(localStorage.getItem("timeAt10"));
    $("#timeAt11 .description").val(localStorage.getItem("timeAt11"));
    $("#timeAt12 .description").val(localStorage.getItem("timeAt12"));
    $("#timeAt1 .description").val(localStorage.getItem("timeAt1"));
    $("#timeAt2 .description").val(localStorage.getItem("timeAt2"));
    $("#timeAt3 .description").val(localStorage.getItem("timeAt3"));
    $("#timeAt4 .description").val(localStorage.getItem("timeAt4"));
    $("#timeAt5 .description").val(localStorage.getItem("timeAt5"));

    timeTracker();
});

//test comment