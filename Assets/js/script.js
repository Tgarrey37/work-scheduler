var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
  });
});

function timeTracker() {
  var timeNow = moment().hour();
}

$(".time-block").each(function () {
  var blockTime = parseInt($(this).attr("id").split("hour")[1]);
});

if (blockTime < timeNow) {
  $(this).removeClass("future");
  $(this).removeClass("present");
  $(this).addClass("past");
} else if (blockTime === timeNow) {
  $(this).removeClass("past");
  $(this).removeclass("future");
  $(this).addClass("present");
} else {
  $(this).removeClass("past");
  $(this).removClass("future");
  $(this).addClass("present");
}
