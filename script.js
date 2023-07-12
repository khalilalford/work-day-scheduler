// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // jquery selectors that select all the elements thst have the saveBtn class
  $(".saveBtn").on("click", function(){
    console.log($(this))
    var savedText = $(this).siblings(".description").val()
    var eachKey = $(this).parent().attr("id")
    localStorage.setItem(eachKey,savedText)

    // when any save function is clicked run this function
    // select the text area that is next to this save button
    // create a variable that takes the value of the text area
    // save the text input to localStorage
  } )
    //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //we need to know the current hour
  var currentHour = dayjs().format("HH")
  // compare each hour block with the current hour 
  // change the class depending on the hour

  // if past

  // else if present

  // else future

  // for loop that loops over each timeblock and runs our if/else statements
  for (var i = 9; i < 18; i++) {
    // inside the for loop - select the one time block we are focussing on 

    var timeBlockEl = $("#hour-" + i)

    var currentHour = parseInt(dayjs().format("HH"), 10);

    
    // if the current hour is greater than the time block - then the time block is in the past
    if (currentHour > i){
      timeBlockEl.addClass("past")
      console.log("time block is in the past if timeBlockEl is adding a class")
    }
    

    // if the current hour is equals to the time block - then add present class
    else if (currentHour == i){
      timeBlockEl.addClass("present")
      console.log("time block is in the present")
    }

    // if the current hour is less than the time block - then add future class to the div
    else {
      timeBlockEl.addClass("future")
      console.log("time block is in the future")
    }

  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // one option:for loop -- go through each hour block -- fetch data?
  // manually do something nine times -- get item from local storage - create a var to use localStorage
  // highlight the key of what you wantt like a P.O box
  // retrieve things
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
