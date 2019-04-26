function main(){
   var src = Math.floor(Math.random() * 5) + 1;
   document.getElementById("video1").src = "videos/" + src + ".mp4";
  setInterval(mostrarTiempo, 1000); /*muestra el cronometro y cuenta los seg*/

  function mostrarTiempo () {
     var principal = document.getElementById("video1");
     var div = document.getElementById("reloj");
     var t = Math.floor(principal.currentTime);
     var horas = "00",
         minutos = "00",
         segundos = "00"
     if (t >= 10) {
        if (t >= 60) {
           m = 0;
           while (t >= 60) {
              t -= 60;
              m++;
           }
           if (t >= 10) {
              segundos = t;
           } else {
              segundos = "0" + t;
           }
           if (m >= 10) {
              if (m >= 60) {
                 h = 0;
                 while (m >= 60){
                    m -= 60;
                    h++;
                 }
                 if (m >= 10) {
                    minutos = m;
                 } else {
                    minutos = "0" + m;
                 }
                 if (h < 10) {
                    horas = "0" + h;
                 } else {
                    horas = h;
                 }
              } else{
                 minutos = m;
              }
           } else {
              minutos = "0" + m;
           }
        } else {
           segundos = t;
        }
     } else {
        segundos = "0" + t;
     }
     div.innerHTML = horas + ":" + minutos + ":" + segundos;
     //innerHTML function predefinida que coge nuestras etiquetas y las rellena de los datos que le damos//
  }
  function onoff() {
   for (var i = 1; i < 7; i++) {
      var video = document.getElementById("video" + i);
      if (video.paused) {
         video.play();
      } else {
         video.pause();
      }
   }
}

function cambiar(video){
   var principal = document.getElementById("video1");
   principal.src = video.src;
   principal.currentTime = video.currentTime; /*tiempo del video*/
   if (!video.paused) { //si no esta pausado el video continua reproduciondose//
      principal.play();
   }
 }
}
