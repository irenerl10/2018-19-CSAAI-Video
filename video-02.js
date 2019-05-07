window.onload = function (){ //cargando pestaña//
  //el 5 es el numero de videos que voy a reproducir si pongo 4 solo 4 si pongo
  //3 solo tres.. ect..
   var src = Math.floor(Math.random() * 5) + 1;
   document.getElementById("video1").src = "videos/" + src + ".mp4";
}

function play() {
  console.log('entra en play');
   for (var i = 1; i < 7; i++) {
     //en el html incorporo la funcion onclick que al pulsar el boton
     //music on/off donde tengo en la id esta funcion(play).
      var video = document.getElementById("video" + i);
      //a esta variable le sumo i que en este caso es el numero de los videos
      //que tengo qe se llaman asi
      if (video.paused) {
        video.play();
        cambiar(video);
        console.log(video.currentTime = 2);
         video1.onmouseover = () => {
           video1.muted=false;
           video2.muted = true;
           video5.muted = true;
           video4.muted = true;
           video6.muted = true;
        }

        video2.onmouseover = () => {
          video1.muted=true;
          video2.muted = false;
          video5.muted = true;
          video4.muted = true;
          video6.muted = true;
        }
        video3.onmouseover = () => {
          video1.muted=true;
          video2.muted = true;
          video3.muted = false;
          video5.muted = true;
          video4.muted = true;
          video6.muted = true;
        }

      video4.onmouseover = () => {
        video1.muted=true;
        video2.muted = true;
        video3.muted = true;
        video5.muted = true;
        video4.muted = false;
        video6.muted = true;
      }

      video5.onmouseover = () => {
        video1.muted=true;
        video2.muted = true;
        video3.muted = true;
        video4.muted = true;
        video5.muted = false;
        video6.muted = true;
      }

     video6.onmouseover = () => {
       video1.muted=true;
       video2.muted = true;
       video3.muted = true;
       video4.muted = true;
       video5.muted = true;
       video6.muted = false;
     }

      } else {
         video.pause();
      }
   }
}

function cambiar(video){
  console.log('entra en cambiar');
   var principal1 = document.getElementById("video1");
   var principal2 = document.getElementById("video2");
   //me creo la variable principal donde llamo a video 1 que es donde se van a reproducir
   //los videos que pinche
   principal1.src = video.src;
   principal2.src = video.src;
   //igualo el origen de video1(que es la variable princial) con el video que pinche
   //(que es la variable video, puede ser cualquiera de los que esta abajo, porque
   // todo empiezan por video)
   principal1.currentTime = video1.currentTime; /*tiempo del video*/
   principal2.currentTime = video2.currentTime;
   if (!video.paused) { //si no esta pausado el video continua reproduciondose//
     //es aqui donde si no pongo pausa el video se sigue reproduciendo en bucle
     //lo pongo en el condicional en su sentencia
      principal1.play();
      principal2.play();
   }
}
setInterval(mostrarTiempo, 1000); /*muestra el cronometro y cuenta los seg*/

function mostrarTiempo () {
  //principal es el video que se reproduce
   var principal = document.getElementById("video1");
   //es mi reloj
   var div = document.getElementById("reloj");
    //t es el tiempo de reproduccion del video principal
   var t = Math.floor(principal.currentTime);
   //me creo variables universales con h min y seg
   var horas = "00",
       minutos = "00",
       segundos = "00";
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
   //div es mi reloj
   div.innerHTML = horas + ":" + minutos + ":" + segundos;
   //la funcion innerHTML me permite mostrar texto en java, en la function anterior
   //establecemos las horas los minutos y los segundos y con el innerHTML
   //lo mostramos en formato texto
   //innerHTML function predefinida que coge nuestras etiquetas y las rellena de los datos que le damos//
}
