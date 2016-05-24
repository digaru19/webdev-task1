// The timer updates only the required fields, and does not update all the components of the timer, at the interval of one second.


var timer = function() {  // Main timer function
	
	// Checks for the special cases in the timer
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
		console.log("Timer Over !!")  // Print a message to the console
		document.getElementById('whole').style.visibility = 'hidden'; // Hide the timer div 
		document.body.style.backgroundImage = "url('outerspace.jpg')"; // Change the background image
		clearInterval(myTimer);      // Stop the 'timer'
	    setTimeout(message, 2000);	 // Display a message after 2 seconds of background change
	}
	else  // If all the above conditions fail, then decrement timer by 1 second
		document.getElementById('seconds').innerHTML -= 1;    // Decrement seconds by 1
	
};

var myTimer = setInterval(timer,1000);   // Start timer function , calls at intervals of one second

message = function() {      // Display end message, after timer is over
	document.body.innerHTML = "<br/><br/><br/><br/> <center><h1> Welcome to Outer Space !! </center></h1>";
}