
var timer = function() {
	
	    if (document.getElementById('seconds').innerHTML === '0') {
		if( Number(document.getElementById('minutes').innerHTML) > 0) {   
		    // Decrement number of minutes by 1
			document.getElementById('minutes').innerHTML -= 1;
			document.getElementById('seconds').innerHTML = '59';
			return; 
		}
		if( Number(document.getElementById('minutes').innerHTML) === 0 && Number(document.getElementById('hours').innerHTML) > 0) {			
		    // Decrement number of hours by 1
			document.getElementById('minutes').innerHTML = '59';
			document.getElementById('seconds').innerHTML = '59';
			document.getElementById('hours').innerHTML -= 1;
			return;			
		}
        if( Number(document.getElementById('hours').innerHTML) === 0 && Number(document.getElementById('days').innerHTML) > 0) {    	
     		// Decrement number of days by 1
			document.getElementById('hours').innerHTML = '23';
			document.getElementById('seconds').innerHTML = '59';
			document.getElementById('minutes').innerHTML = '59';
			document.getElementById('days').innerHTML -= 1;
			return;			
		}		
		
		// Countdown over
		console.log("Timer Over !!")  
		document.getElementById('whole').style.visibility = 'hidden';
		document.body.style.backgroundImage = "url('outerspace.jpg')";
		clearInterval(myTimer);    // Stop the 'timer'
	    setTimeout(message, 2000);	 // Display a message
	}
	else
		document.getElementById('seconds').innerHTML -= 1;    // Decrement seconds by 1
	
};

var myTimer = setInterval(timer,1000);   // Start timer function , calls at intervals of one second

message = function() {      // Display end message, after timer is over
	document.body.innerHTML = "<br/><br/><br/><br/> <center><h1> Welcome to Outer Space !! </center></h1>";
}