<?php
    class Car{
        protected $keyhole; // starten of niet
        protected $battery; // Batterij vol of niet || lampjes/radio aan of uit
        protected $engine; // Motor start of niet 
        protected $gas; // gas is genoeg of niet

        public function __construct(){
            $this->keyhole = new Keyhole();
        }

        public function startCar(){
            $this->keyhole->turnKeyStart();
        }
        
        public function stopCar(){
            $this->keyhole->turnKeyStop();
        }
    }

    // function startFuel(Car $facade, $fuellevel){
    //     echo $facade->startCar($fuellevel);
    // }

    class Keyhole{
        function turnKeyStart(){
            echo(" Trying to start motor ||");
            $capacity = 100;
            if($capacity > 40){
                (new Battery)->fullBattery();
            }else{
                (new Battery)->chargeBattery();
            }
        }
        
        function turnKeyStop(){
            (new Engine)->stopEngine();  
        }
    }

    class Battery{
        function chargeBattery(){
            echo " Battery is empty ||";
            (new Engine)->stopEngine();  
        }
        function fullBattery(){
            echo " Battery is full ||";
            $checkGas = 100;
            if($checkGas > 30){
                (new Gas)->gasFull();
            }else{
                (new Gas)->gasEmpty();
            }
        }
    }

    class Gas{
        function gasFull(){
            echo " There is enough gas ||";
            (new Engine)->startEngine();
        }
        function gasEmpty(){
            echo " There is not enough gas ||";
            (new Engine)->stopEngine();   
        }
    }
    
    class Engine{
        function startEngine(){
            echo " The engine starts ||";
        }
        function stopEngine(){
            echo " The engine stops";
        }
    } 
?>