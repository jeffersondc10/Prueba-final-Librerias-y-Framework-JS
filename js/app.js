var i = 0;
var numero = 0;
var imagen = 0;
var intervalo = 0;
var eliminar = 0;
var seg = 0;
var min = 2;
var tiempo = 0;

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


//----Función para rellenar las columnas con dulces aleatorios
function desplazamiento(){
	i=i+1
	var numero=0;
	var imagen=0;
	$(".elemento").draggable({disabled:true});
	if(i<8){
		for(var j=1;j<8;j++){
			if($(".col-"+j).children("img:nth-child("+i+")").html()==null){
				numero=Math.floor(Math.random()*4)+1;
				imagen="image/"+numero+".png";
				$(".col-"+j).prepend("<img src="+imagen+" class='elemento'/>").css("justify-content","flex-start")
			}}}
	if(i==8){
	clearInterval(intervalo);
	eliminar=setInterval(function(){
		eliminarhorver()
	},150);}
};

//---temporizador de dos minutos---
function timer(){
	if(seg!=0){
		seg=seg-1;}
	if(seg==0){
		if(min==0){
			//clearInterval(eliminar);
			//clearInterval(nuevosDulces);
			clearInterval(intervalo);
			//clearInterval(tiempo);
			$(".panel-tablero").hide("drop","slow",funcioncita);
			$(".time").hide();
      $(".panel-score").show();
    }
		seg=59;
		min=min-1;}
	$("#timer").html("0"+min+":"+seg);
};

function funcioncita(){
	$( ".panel-score" ).animate({width:'100%'},3000);
	$(".termino").css({"display":"block","text-align":"center"});
};



$(function(){
  tituloBlanco(".main-titulo")
  $(".btn-reinicio").on("click", function(){
    intervalo=setInterval(function(){
  		desplazamiento()
  	},600);
    tiempo = setInterval(function(){
      timer()
    },1000);
    $(this).text("Reiniciar")

  });
});
