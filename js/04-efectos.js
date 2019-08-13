$(document).ready(function(){

	
	$("#mostrar").click(function(){
		$(this).hide();
		$("#caja").fadeIn('slow');
		$("#ocultar").show();

	});
	$("#ocultar").click(function(){
		$(this).hide();
		$("#caja").fadeOut('slow');
		$("#mostrar").show();

	});

	$("#todoenuno").click(function(){

		$("#caja").animate({
					marginLeft:'500px',
					height:'100px',
				},'slow')
					.animate({
						borderRadius:'900px',
						marginTop:'100px',

					},'slow')
					.animate({
						marginLeft:'0px',
						borderRadius:'0px',
						marginTop:'100px',
						
					},'slow');

	});


});
