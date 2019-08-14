var countDownDate = new Date("march 28, 2020 15:37:25").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();
    

  var distance = countDownDate - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  document.getElementById("demo").innerHTML = days + "<span>days </span>" + hours + "<span>hours</span> "
  + minutes + "<span>minutes</span> " + seconds + "<span>s </span>";
    

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "HAPPY BIRTHDAY TO ME";
  }
}, 1000);