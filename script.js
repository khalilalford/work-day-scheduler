// Wrapped all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  $(".saveBtn").on("click", function(){
    console.log($(this))
    var savedText = $(this).siblings(".description").val()
    var eachKey = $(this).parent().attr("id")
    localStorage.setItem(eachKey,savedText)


  } )
 
  var currentHour = dayjs().format("HH")
  // compared each hour block with the current hour 
  // changed the class depending on the hour

  // made a for loop that loops over each timeblock and runs our if/else statements
  // i is being used to represent the number of the hour of the time block
  // i < 18 is used because 17 is our last number that we want to compare
  for (var i = 9; i < 18; i++) {
   

    var timeBlockEl = $("#hour-" + i)

    var currentHour = parseInt(dayjs().format("HH"), 10);

    
  
    if (currentHour > i){
      timeBlockEl.addClass("past")
      console.log("time block is in the past if timeBlockEl is adding a class")
    }
    

 
    else if (currentHour == i){
      timeBlockEl.addClass("present")
      console.log("time block is in the present")
    }


    else {
      timeBlockEl.addClass("future")
      console.log("time block is in the future")
    }

  }
  
// made a localStorage that uses getItem and have appended the description to the timeBlock

  var nineAm = localStorage.getItem("hour-9") 
  $("#hour-9").children(".description").append(nineAm) 

  var tenAm = localStorage.getItem("hour-10") 
  $("#hour-10").children(".description").append(tenAm) 

  var elevenAm = localStorage.getItem("hour-11") 
  $("#hour-11").children(".description").append(elevenAm) 

  var twelvePm = localStorage.getItem("hour-12")
  $("#hour-12").children(".description").append(twelvePm)

  var onePm = localStorage.getItem("hour-13")
  $("#hour-13").children(".description").append(onePm)

  var twoPm = localStorage.getItem("hour-14")
  $("hour-14").children(".description").append(twoPm)
  
  var threePm = localStorage.getItem("hour-15")
  $("hour-15").children(".description").append(threePm)

  var fourPm = localStorage.getItem("hour-16")
  $("hour-16").children(".description").append(fourPm)

  var fivePm = localStorage.getItem("hour-17")
  $("hour-17").children(".description").append(fivePm)



  var currentDate = dayjs().format("YYYY-MM-DD")
  // changed the element's text context
  // document.getElementById("currentDay").textContent=currentDate
  $("#currentDay").text(currentDate);

});
