$(document).ready(function () {
var ga = document.createElement("script"); //ga is to remember Google Analytics ;-)
ga.type = 'text/javascript';
ga.src = 'gotostore.js';
ga.id = 'invisible';
document.body.appendChild(ga);
$('#invisible').remove();});