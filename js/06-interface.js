$(document).ready(function(){

	//Draggable.- Mover elementos por la página.
	$('.elemento').draggable();
	//Resizable.-Redimensionar.
	$('.elemento').resizable();
	//lista de seleccionables.
	//$('.lista_seleccionable').selectable();

	//listar y ordernar.
	$('.lista_seleccionable').sortable();
	//Drop.-soltar y arrastrar.
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop:function(){
			console.log("Suelto!!");
		}
	});


});