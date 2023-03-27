function validaForm(){
	
	var nome = document.crieseurank.txtnome.value;
	var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

	if (!expRegNome.test(nome)){
		alert("Preencha o campo Nome corretamente.");
		document.crieseurank.txtnome.focus();
		return false;
	}

	var email = document.crieseurank.txtemail.value;
	var expRegEmail = new RegExp("^[A-z0-9.]+[@]{1}[A-z0-9]+[.]{1}[A-z.]+$");
	
	if (!expRegEmail.test(email)){
		alert("Preencha o campo E-mail corretamente.");
		document.crieseurank.txtemail.focus();
		return false;
	}
		
	var fone = document.crieseurank.txttelefone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	
	if (!expRegFone.test(fone)){
		alert("Preencha o campo Telefone corretamente.");
		document.crieseurank.txttelefone.focus();
		return false;
	}

	if (document.crieseurank.txtdate.value==""){
		alert("Preencha o campo Data.");
		document.crieseurank.txtdate.focus();
		return false;
	}
	if (document.crieseurank.txtgenero.value==""){
		alert("Preencha o campo Gênero.");
		return false;
	}
	
	var skin1 = document.crieseurank.vandal1.value;
	var skin2 = document.crieseurank.vandal2.value;
	var skin3 = document.crieseurank.vandal3.value;
	var skins = [skin1, skin2, skin3];
	var expRegSkin = new RegExp("^[A-z0-9]{3,}$");
	
	for (var i=0; i<3; i++){
		if(!expRegSkin.test(skins[i])){
			alert("Preencha o campo Vandal " + (i+1) + "° corretamente.");
			return false;
		}
	}
	
	return true;
}
function ativar(){
	var checkbox = document.getElementById("fa")
	if(checkbox.checked){
 		document.getElementById("envia").disabled = false;
 	} else{
    document.getElementById("envia").disabled = true;
    }
}

$(document).ready(function() {
	$("header").load("/ProjetoTrilhaWeb/pages/site/general/cabecalho.html");
	$("nav").load("/ProjetoTrilhaWeb/pages/site/general/menu.html");
	$("footer").load("/ProjetoTrilhaWeb/pages/site/general/rodape.html");
});

