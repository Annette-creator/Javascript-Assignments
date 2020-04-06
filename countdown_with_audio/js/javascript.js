var x = document.getElementById("myAudio");
count = 60; 
var t, count;

function audioplay() {
    document.getElementById('timer').innerHTML = count;
}

function playAudio() {
    // starts playAudio
    audioplay();
    if (count === 0) {
        // time is up
    } else {
        count--;
        t = setTimeout(playAudio, 1000);

	    x.play(); 

		function CountDown(deadline){ //berekend hoeveel sec hij nog moet aftellen
			var total = Date.parse(deadline) - Date.parse(new Date()); //totaal tijd | Date.parse = funcie die tijd omzet naar miliseconden zodat je het verschil kan berekenen
			var seconds = Math.floor((total/1000) % 60); //berekend x aantal sec door milisceondes te delen na de minuten
			return{ //geeft dit weer
				"total": total, 
				"seconds": seconds
			};
		}

		function dataClock(id, deadline){//zoek id en vorige functie voor disp;ay
			var clock = document.getElementById(id); //haalt id op

			function removeSec(){
				var total = CountDown(deadline);

				if(total.total <= 0){ //wanneer er 0sec over zijn dan stopt hij met aftellen
					clearInterval(getsec);
				} 
			}

			removeSec(); 
			var getsec = setInterval(removeSec,1000);
		}

		var deadline = new Date(Date.parse(new Date()) + 60 * 1000);
		dataClock('countdown_audio', deadline);
    }
}

function pauseAudio() {
    // pauses playAudio
    x.pause();
    clearTimeout(t);
}

function toon_tekst() {
    var block = document.getElementById('info_block');
    if (block.style.display === 'block') {
        block.style.display = 'none';
    } else {
        block.style.display = 'block';
    }
}




