var i = 0;
var pastedDays = document.getElementById("pastedDays");
var leftDays = document.getElementById("leftDays");
var leftPercentage = document.getElementById("leftPercentage");
var pastedPercentage = document.getElementById("pastedPercentage");

function get_days() {
    const request = new XMLHttpRequest()
    request.open('GET', 'https://meiaumapi.lexpdev.xyz/api/days')
    request.onload = function () {
        console.log(JSON.parse(this.responseText))
        var json = JSON.parse(this.responseText)
        timeSpent = json.time_spent;
        timeLeft = json.time_left;
        totalTime = timeSpent + timeLeft

        percentageSpent = (timeSpent / totalTime) * 100
        percentageLeft = (timeLeft / totalTime) * 100
        
        leftPercentage.innerHTML = Math.round(percentageLeft)
        pastedPercentage.innerHTML = Math.round(percentageSpent)
        pastedDays.innerHTML = timeSpent
        leftDays.innerHTML = timeLeft

        console.log(timeSpent)
        console.log(timeLeft)
        console.log(totalTime)
    }
    request.onerror = function () {
        console.log('erro ao executar a requisição')
    }

    request.send()
}

function move() {
  if (i == 0) {
    get_days()
    i = 1;
    var elem = document.getElementById("progbar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= percentageSpent) {
        clearInterval(id);
        i = 0;
      } else {
        width = Math.round(percentageSpent);
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}