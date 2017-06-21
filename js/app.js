//---------Iteración de color en el titulo----------//
function tituloBlanco(elemento){
  $(elemento).animate(
    {
      color: "#FFF"
    }, 2000, function(){
      tituloAmarillo(elemento)
    }
  )
}

function tituloAmarillo(elemento){
  $(elemento).animate(
    {
      color: "#DCFF0E"
    }, 2000, function(){
      tituloBlanco(elemento)
    }
  )
}

var imagenes = new Array(
  "image/1.png",
  "image/2.png",
  "image/3.png",
  "image/4.png",
  "image/1.png",
  "image/2.png",
  "image/3.png"
);



function rellenoImagen(){



  /***$(".col-1").append("<img src='image/1.png'>")
  $(".col-1").append("<img src='image/2.png'>")
  $(".col-1").append("<img src='image/3.png'>")
  $(".col-1").append("<img src='image/4.png'>")
  $(".col-2").append("<img src='image/1.png'>")
  $(".col-2").append("<img src='image/2.png'>")
  $(".col-2").append("<img src='image/3.png'>")
  $(".col-2").append("<img src='image/4.png'>")
  $(".col-3").append("<img src='image/1.png'>")
  $(".col-3").append("<img src='image/2.png'>")
  $(".col-3").append("<img src='image/3.png'>")
  $(".col-3").append("<img src='image/4.png'>")
  $(".col-4").append("<img src='image/1.png'>")
  $(".col-4").append("<img src='image/2.png'>")
  $(".col-4").append("<img src='image/3.png'>")
  $(".col-4").append("<img src='image/4.png'>")
  $(".col-5").append("<img src='image/1.png'>")
  $(".col-5").append("<img src='image/2.png'>")
  $(".col-5").append("<img src='image/3.png'>")
  $(".col-5").append("<img src='image/4.png'>")
  $(".col-6").append("<img src='image/1.png'>")
  $(".col-6").append("<img src='image/2.png'>")
  $(".col-6").append("<img src='image/3.png'>")
  $(".col-6").append("<img src='image/4.png'>")
  $(".col-7").append("<img src='image/1.png'>")
  $(".col-7").append("<img src='image/2.png'>")
  $(".col-7").append("<img src='image/3.png'>")
  $(".col-7").append("<img src='image/4.png'>")*/
}

function rellenoAleatorio(){
  rellenoImagen()
  colum1
}


$(function(){
  tituloBlanco(".main-titulo")

  $.each(imagenes, function(index, value){
    $(".col-1").append("<img src=' "+this+" '   class='elemento'>   ")
  })
});
