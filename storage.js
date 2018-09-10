function initiate(){
	var button = document.getElementById('save');
	button.addEventListener('click', newitem);
	show();
}
function newitem(){
	var keyword = document.getElementById('keyword').value;
	var value = document.getElementById('text').value;
	
	localStorage.setItem(keyword, value);
	document.getElementById('keyword').value = '';
	console.log(value);
	document.getElementById('text').value = '';
	show();
}
function show(){
	var databox = document.getElementById('databox');
	databox.innerHTML = '';
	for(var f = 0 ; f < localStorage.length; f++){
	var keyword = localStorage.key(f);
	var value = localStorage.getItem(keyword);
	databox.innerHTML += '<div>' + keyword + ' - ' + value + '</div>';
}
}
//addEventListener('load', initiate);
initiate();

function nenad(){
	if(document.getElementsByClassName('novi-element').length<5){
		var noviElement = document.createElement("DIV");
		noviElement.setAttribute('class','novi-element');
		noviElement.innerHTML="Duvaj ga majmune";
		document.getElementById("databox").appendChild(noviElement);
	}else{
		console.log('Ima vise od 5 elementa');
	}
}
/*localStorage.setItem('cane','aaa');
console.log(localStorage.getItem('cane'));*/