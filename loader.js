var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var random = Math.floor((Math.random() * 2000)) + 2000; 
$(document).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
	}, random);
});
