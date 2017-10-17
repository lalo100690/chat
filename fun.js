
function inicializarChats(){
	// if (localStorage.getItem('pagina')) {


	// }else{
		chats = document.getElementsByClassName('chat');
		i=0;
		cargarChats();
	// }
	
}

function cargarChats(){
	if (i<chats.length){
		setTimeout(function(){
			chats[i].classList.remove('oculto');
			i++;
			cargarChats();
		},100)	
	}
}

function navegar(pagina){
	if (pagina == "chats") {
		document.getElementById('chats').classList.add('activo')
		document.getElementById('grupos').classList.remove('activo')
	}else {
		document.getElementById('chats').classList.remove('activo')
		document.getElementById('grupos').classList.add('activo')
	}
	document.querySelector('section').classList.add('salida');
	setTimeout(function(){
		window.location.assign(pagina + '.html');
	},600)
}

function verChat(id, pagina){
	localStorage.setItem('pagina',pagina);
	document.querySelector('.circulo').classList.add('grow-circulo')
	setTimeout(function(){
		window.location.assign('chat.html');
	},600)
}

function cargarChat(){
	setTimeout(function(){
		document.querySelector('.circulo').classList.remove('grow-circulo')
	},300)
}

function regresoDeChat(){
	document.querySelector('.circulo').classList.add('grow-circulo');
	document.querySelector('.circulo').style.background = 'white';
	pag = localStorage.getItem('pagina');
	setTimeout(function(){
		window.location.assign(pag+'.html');
	},600);
}

function mandarMsj(){
	msj = document.getElementById('msj');
	document.querySelector('article').innerHTML += "<div class='msj mio entradaMSJ'>"+msj.value+"</div>"
	msj.value = "";
	setTimeout(function(){
		document.querySelector('.entradaMSJ').classList.remove('entradaMSJ')
	},500)
	

}









