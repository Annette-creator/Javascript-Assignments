$(document).ready(function(){
  // needed for show and hide on door clicks 
  $(".car_inside").hide(); //inside car hide
  $("#gear").hide();

  $("#car_door").click(function(){ // when clicked on car door the outside hides, inside shows
    $(".car_outside").hide();
    $(".car_inside").show();
  });

  $("#car_door_inside").click(function(){ // when clicked on car door the inside hides, outside shows
    $(".car_inside").hide();
    $("#gear").hide();
    $(".car_outside").show();
  });

  $("#gearstick").click(function(){ // show and hide gearstick when clicked on
    var gearClick = +$(this).data('clicksGear') || 0;
    if (gearClick % 2 == 1) {
      $("#gear").hide();
    }else{
      $("#gear").show();
    }
    $(this).data('clicksGear',gearClick+1);
  })

  // when clicked on the keyhole, it switch on and off (even/oneven)
  $("#keyhole").click(function(){  
    var click = +$(this).data('clicks') || 0;
    if (click % 2 == 1) {
      getData("stopCar"); // Stop the car
      $("#demo").hide(); // hide the timer
    }else{
      getData("startCar"); // Start the car

      //When car started the level of the fuel is going down.
      $("#demo").show();
      var image = document.getElementById("wijzer");
      var pos = 40;
      var id = setInterval(function(){
        if (pos == 138) {
          clearInterval(id);
        } else {
          pos++; 
          image.style.right = pos + "px"; 
          document.getElementById("wijzer").style.webkitTransform = "rotate(-40deg)";
        }
      });

      var fuel = 100;
      var timer = setInterval(function(){
        document.getElementById("demo").innerHTML = fuel + " Gas level";
        fuel -= 5; // fuel is -5 at the time
        if(fuel <= 0){ // when fuel is 0 
          clearInterval(timer);
          document.getElementById("demo").innerHTML = "Gas is empty";
        }
      }, 450);
    };

    $(this).data('clicks',click+1);
  });

  // this function fetch data from the facade.php
  function getData(action){ 
    $.ajax({
      url: 'runscript.php',
      type: 'post',
      data: {
        action: action, // get action form clientCode in facade.php
      },
      success: function(response) { 
        console.log(response); // returnt echo in clientCode
      }
    });
  }

  // On key down left and right arrow on keyboard the steeringwheel wil turn
  var angle = 0;
  $(document).keydown(function(e) { 
    var e = window.event ? window.event : e;
    if (e.keyCode == "39") {
      angle += 2;
    }
    else if (e.keyCode == "37") {
      angle -= 2;
    }
    $("#steer").css("transform","rotate("+angle+"deg)");
  });

  // when clicked on the steeringwheel the sound will play
  $("#steer").click(function(){
    var sound = document.getElementById("audio");
    sound.play();
  });

});