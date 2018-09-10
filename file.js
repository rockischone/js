<script> 
function clickme(){
var elem = document.getElementsByTagName('p');
elem.addEventListener('click', showalert);
}
function showalert(){
alert('you clicked me!');
}
addEventListener('load', clickme);
</script>