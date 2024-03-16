$(document).ready(function(){
    updateClock(); // Call the function immediately to avoid delay
  
    setInterval(updateClock, 1000);
  });
  
  function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var period = hours >= 12 ? "PM" : "AM";
  
    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set it to 12
  
    // Add leading zeros to minutes and seconds if needed
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);
    $("#period").html(period);
  }
  