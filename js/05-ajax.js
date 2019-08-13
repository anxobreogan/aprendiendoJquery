$(document).ready(function(){

	//Load

	//$('#datos').load('https://reqres.in/');

	// GEt

	$.get('https://reqres.in/api/users?',{page:3},function(response){
		response.data.forEach(function(element,index){
			$("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
		})
	});

	

	$("#formulario").submit(function(e){
		e.preventDefault();
		let usuario={
		"name":$('input[name="name"]').val(),
		"web":$('input[name="web"]').val()
	};
	
	/*$.post($(this).attr('action'),usuario, function(response){
		console.log(response);
		});
	$("#datos").append(usuario.name);*/
//Mejor metodología AJAX.
	$.ajax({
		type:'POST',
		url:$(this).attr("action"),
		data:usuario,
		beforeSend:function(){
			console.log("Sendding....")
		},
		success:function(response){
			console.log(response);
		},
		error: function(){
			console.log("Error");
		},
		timeout: 1000,
	});

	return false;
	});


});