$(document).ready(function(){
	
	reloadLinks();

	$('#add_button').click(function(){
		$('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');
		reloadLinks();
	});

	

	function reloadLinks(){
		$('a').each(function(index){
		let enlace=$(this).attr("href");
		$(this).text(enlace);
		});
	};


});