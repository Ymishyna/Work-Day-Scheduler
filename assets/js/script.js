// GLOBAL VAR
var today = dayjs();
var hourArray = [];
var startHour = 9;
var calendarHours = 8;
var index = 0;



$('#currentDay').text(today.format('ddd MMM D h:mmA')); // display the current date and time on the paragraph with an id of "currentDay"

// wraping all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html. 
$(document).ready(function () {
  
  //console.log(startHour);
  calendar();
  var timeBlockEl = document.querySelector('.container-lg'); // reference the whole task (time and textarea)

  // bulding 9-hour calendar, 9 rows
   // for loop i=0 to 8, i++ 
      // create new row with an atribute recorded in html
      // end loop
  function calendar () {
    var startHour = 9;
    for (var i = startHour; i <= startHour + calendarHours; i++) {
    var clockHr = dayjs().hour(i); // clockHr = 9AM through 5 PM
    var formatedHour = clockHr.format('hA'); // convert to 12-hour AM/PM format
    hourArray.push(formatedHour); // add to the array
    var row = $('<div>').attr('id', 'hour-' + i).addClass('row time-block');
    var hourColumn = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(formatedHour);
    var descriptionColumn = $('<textarea>').attr('id', 'hour-' + i).addClass('col-8 col-md-10 description').attr('rows', '3');
    var saveBtnColumn = $('<button>').attr('id', 'hour-' + i).addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save');
    var saveIcon = $('<i>').attr('id', 'hour-' + i).addClass('fas fa-save').attr('aria-hidden', 'true');
    }

    saveBtnColumn.append(saveIcon);
    row.append(hourColumn, descriptionColumn, saveBtnColumn);
     $('.container-lg.px-5').append(row);
  }

   // add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 



function auditColor () {
  var currentHour = today.hours(); // current hour
  $('.row').attr('class', 'time-block') //adding class 'time-block' to each row
  $('.time-block').each(function (){
    var timeId = parseInt($(this).attr('id').split('hour-')[1]);
     if (timeId < currentHour) {
      $(this).addClass('past');
     }
     else if (timeId === calendarHours) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
     }
     else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
     }
    });
  }



});

  







  // add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 

  // get from local storage the recorded events

  // adding event listener for save btn. This code should use the id in the containing time-block as a key to save the user input in local storage.










  


  /* TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

   TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  
   TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  
   TODO: Add code to display the current date in the header of the page. */

  





//$('#currentDay').text(today.format('dddd hh:mm A'));



/*    <div id="hour-9" class="row time-block past">
        <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div> */