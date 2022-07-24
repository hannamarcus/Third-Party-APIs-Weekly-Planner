// Current date and time for header
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {

 // Use JQuery and event listener to save input on click
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".input").val();
        var time = $(this).parent().attr("id");

        console.log(text)

// Save time for local storage
        localStorage.setItem(time, text);
    })

// Loop over time-blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("timeAt")[1]);

// Background colors for timeblocks
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

// Local Storage Input 
    $("#timeAt9 .input").val(localStorage.getItem("timeAt9"));
    $("#timeAt10 .input").val(localStorage.getItem("timeAt10"));
    $("#timeAt11 .input").val(localStorage.getItem("timeAt11"));
    $("#timeAt12 .input").val(localStorage.getItem("timeAt12"));
    $("#timeAt13 .input").val(localStorage.getItem("timeAt13"));
    $("#timeAt14 .input").val(localStorage.getItem("timeAt14"));
    $("#timeAt15 .input").val(localStorage.getItem("timeAt15"));
    $("#timeAt16 .input").val(localStorage.getItem("timeAt16"));
    $("#timeAt17 .input").val(localStorage.getItem("timeAt17"));
    $("#timeAt18 .input").val(localStorage.getItem("timeAt18"));
    $("#timeAt19 .input").val(localStorage.getItem("timeAt19"));

    timeTracker();
});
