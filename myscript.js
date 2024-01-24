var timeInSecs;
var ticker;

function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000); 

    var myArray = [
        "Space Paranoids",
        "Port Royal",
        "Twilight Town",
        "Olympus Coliseum",
        "Halloween Town",
        "Land of Dragons",
        "TWTNW",
        "Beast's Castle",
        "Agrabah",
        "Pride Lands",
        "Hollow Bastion",
        "Disney Castle",
        "STT",
    ];
      
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    document.getElementById("text").innerHTML = randomItem;
}

function tick( ) {
    var secs = timeInSecs;
    if (secs > 0) {
        timeInSecs--; 
    }
    else {
        clearInterval(ticker);
        startTimer(document.getElementById('time-options').value * 60); // minutes in seconds
    }

    var days= Math.floor(secs/86400); 
    secs %= 86400;
    var hours= Math.floor(secs/3600);
    secs %= 3600;
    var mins = Math.floor(secs/60);
    secs %= 60;
    // var pretty = ( (days < 10 ) ? "0" : "" ) + days + ":" + ( (hours < 10 ) ? "0" : "" ) + hours + ":" + ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;
    var pretty = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

    document.getElementById("countdown").innerHTML = pretty;
}

// startTimer(5*60); // minutes in seconds

//Credits to Philip M from codingforum