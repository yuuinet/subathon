let last_time_left_s = 0;

function replace_time(json) {

        document.getElementById("time").innerHTML = `${json.hours_to_increase} horas`;
    if(json.minutes_to_increase > 0){
        document.getElementById("time").innerHTML += ` e ${json.minutes_to_increase} minutos.`;
    }
}

function replace_viewers(json) {
    document.getElementById("viewerCount").innerHTML = `${json.view_count} viewers`;
}

function conta_engracada(json) {
    replace_time(json);
    replace_viewers(json);
    document.getElementsByTagName("body")[0].style.display = "initial";
}

function hhmmss_to_secs(sstr) {
    let [hours, minutes, seconds] = sstr.split(':');
    let totalSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);
    return totalSeconds;
}

function secs_to_hhmmss(segundos) {


    let horas = Math.floor(segundos / 3600);
    segundos = segundos % 3600;

    let minutos = Math.floor(segundos / 60);
    segundos = segundos % 60;

    horas = String(horas).padStart(2, '0');
    minutos = String(minutos).padStart(2, '0');
    segundos = String(segundos).padStart(2, '0');


    let timer = `${horas}:${minutos}:${segundos}`;

    return timer;

}

function timer_restante(json) {
    let current_timer = document.getElementById('timer').textContent;
    let current_timer_secs = hhmmss_to_secs(current_timer);

    let segundos = Math.floor(json.time_left_ms / 1000);
    last_time_left_s = segundos;

    let novo_timer = secs_to_hhmmss(segundos);
    let novo_timer_secs = hhmmss_to_secs(novo_timer);

    console.debug(novo_timer_secs);
    console.debug(current_timer_secs);
    console.debug("asd");

    if((novo_timer_secs < current_timer_secs) ||
       (novo_timer_secs > (current_timer_secs + 50))){
        document.getElementById('timer').textContent = novo_timer;
    }
    else {
        document.getElementById('timer').textContent = secs_to_hhmmss(current_timer_secs - 1);
    }

    document.getElementById('timerWrapper').style.display = 'flex';
}


function recarregar() {
    const URL = "https://subathon.sekva.lol/";

    fetch(URL, {
        // mode: 'no-cors',
        method: "GET",
        headers: {
            "Accept": "application/json",
            "ngrok-skip-browser-warning": 8279
        },
    }).then( response => response.json()).then(json => {
        if(last_time_left_s == 0) {
            last_time_left_s =  Math.floor(json.time_left_ms / 1000);
            document.getElementById('timer').textContent = "000:00:00";
        }

        conta_engracada(json);
        timer_restante(json);
    });
}


function carregar_pagina() {
    recarregar();
    setInterval(recarregar, 1000)
}
