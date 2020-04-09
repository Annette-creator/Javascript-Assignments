<?php
    session_start();
    include('facade.php');

    // Action wordt gekoppeld aan de klik in js
    function clientCode(Car $facade){
        if(isset($_POST['action'])){ // als er een action is
            if($_POST['action'] == "startCar"){ // als action startCar is dan wordt functie startCar aangeroepen
                echo "Start car ||";
                $facade->startCar();
            }
            if($_POST['action'] == "stopCar"){  // als action stopCar is dan wordt functie stopCar aangeroepen
                echo "Stop car ||";
                $facade->stopCar();
            }
        }
    }

    if (isset($_SESSION['testing'])) {
		echo "Welcome ".$_SESSION['testing'].", you are logged in!";
	}
    // if(isset($_SESSION['fuellevel'])){ //if isset dan check op fuellevel
    //     if(){ // als start car dan moet ij sessie
    //         $_SESSION['fuellevel'] = ($_SESSION['fuellevel']) - 20;
        
    //         $facade = new Car();
    //         clientCode($facade, (($_SESSION['fuellevel'])));
    //     }else{
    //         //
    //         $facade = new Car();
    //         clientCode($facade, (($_SESSION['fuellevel'])));
    //     }

    // }else{
    //     // when clicked the fuel level is always 100
    // }

    $facade = new Car();
    clientCode($facade);
?>