function startForm(){
	$('#view1').css('display', 'none');
	$('#view2').css('display', 'block');
}

function configForm(){
	$('#view1').css('display', 'none');
	$('#view3').css('display', 'block');
}

function goHome(){
	$('#view1').css('display', 'block');
	$('#view2').css('display', 'none');
	$('#view3').css('display', 'none');

	//reset fields
	$('#nome').val('');
	$('#email').val('');
	$('#telefone').val('');
	$('#accepted-terms').css('display','none');
	$('#error').css('visibility','hidden');
	$('#data-from').val('');
	$('#data-to').val('');

}

function acceptTerms(){
	var accepted = $('#accepted-terms').css('display');
	if(accepted === 'none')
		$('#accepted-terms').css('display','inline-block');
	else
		$('#accepted-terms').css('display','none');
}

function sendForm(){

	var nome = $('#nome').val();
	var email = $('#email').val();
	var telefone = $('#telefone').val();

	var accepted = $('#accepted-terms').css('display');

	if(nome === '' || email === '' || telefone === '' || accepted === 'none'){
		//TODO
	}else{
		

		goHome();
	}

}


function sendConfig(){

	var dataFrom = $('#data-from').val();
	var dataTo = $('#data-to').val();


	if(dataFrom === '' || dataTo === ''){
		//TODO
	}else{
		$('#error').css('visibility','visible');
		//goHome();
	}

}