var i = 0;
var numero = 0;
var imagen = 0;
var intervalo = 0;
var eliminar = 0;

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




$(function(){
  tituloBlanco(".main-titulo")

});
