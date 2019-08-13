$(document).ready(function(){
	

	//selector de id.
	$("#rojo").css("background","red")
						.css("color","white");

	$('#amarillo').css("background","yellow")
								.css("color","green");
	$('#verde').css("background", "green")
				.css("color","white");


	//Selectores de clase.

	let mi_clase=$('.zebra');

	//mi_clase.css("border","5px dashed black");

	$('.sin_borde').click(function(){
		console.log("click dado");
		$(this).addClass('zebra');

	});

	//Selectores de etiqueta.

	var parrafos=$('p').css("cursor","pointer");

	parrafos.click(function(){
		let este=$(this);
		if(!este.hasClass('grande')){
			$(this).addClass("grande");
		}else{
			$(this).removeClass("grande");
		}
		/*$(this).addClass("grande");*/
	});

	//Selectores de atributo.

	$('[title="google"]').css('background','#ccc');
	$('[title="marca"]').css('background','blue');

	//Otros.

	//$('p,a').addClass('margen-superior'); Seleccionar varias clases-
	let busqueda=$('#caja').find('.resaltado');

	console.log(busqueda);

});

//$ = jQuery.
//(evento)