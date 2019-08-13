'use strict';

$(document).ready(function(){

	//Mouse-over, Mouse -Out.

	let caja= $("#caja");
	/*caja.mouseover(function(){
		$(this).css("background","red");
	});
	caja.mouseout(function(){
		$(this).css("background","green");
	});*/

	//Hover
	function cambiarRojo(){
		$(this).css("background","red");
	};

	function cambiaVerde(){
		$(this).css("background","green");
	}

	caja.hover(cambiarRojo,cambiaVerde);

	//Click and blclick.

	caja.click(function(){
		$(this).css("background","blue")
				.css("color","white");
	});

	caja.dblclick(function(){
		$(this).css("background","pink")
				.css("color","yellow");
	});

	//focus y blur

	let nombre= $("#nombre");
	let datos= $("#datos");

	nombre.focus(function(){
		$(this).css("border"," 2px solid green");
	});

	$("#nombre").blur(function(){
		$(this).css("border"," 1px solid #ccc");
		
		datos.text($(this).val()).show();
	});

	//Mousedown  mouse up

	datos.mousedown(function (){
		$(this).css("border-color","grey");
	});

	datos.mouseup(function(){
		$(this).css("border-color","black");
	});

	//Mousemove

	$(document).mousemove(function(){
		
		$("#sigueme").css("left",event.clientX);
		$("#sigueme").css("top",event.clientY);
	})





});
