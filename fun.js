
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
	document.querySelector('.add').classList.remove('hide-add')
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
	document.querySelector('.add').classList.add('hide-add')
	setTimeout(function(){
		window.location.assign(pagina + '.html');
	},600)
}

function verChat(id, pagina){
	document.querySelector('.add').classList.add('hide-add')
	document.querySelector('.circulo').classList.add('grow-circulo')
	setTimeout(function(){
		window.location.assign('chat.html');
	},600)
}

function verContactos(){
	document.querySelector('.add').classList.add('hide-add')
	document.querySelector('.circulo').classList.add('grow-circulo')
	setTimeout(function(){
		window.location.assign('contactos.html');
	},600)
}

function cargarChat(){
	setTimeout(function(){
		document.querySelector('.circulo').classList.remove('grow-circulo')
	},300)
}

function cargarContactos(){
	setTimeout(function(){
		document.querySelector('.circulo').classList.remove('grow-circulo')
	},300)
}

function regresoDeChat(){
	document.querySelector('.circulo').classList.add('grow-circulo');
	document.querySelector('.circulo').style.background = 'white';
	setTimeout(function(){
		window.location.assign('index.html');
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









