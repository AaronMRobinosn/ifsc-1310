$(document).ready(function(){
    
    $('.gallery').cycle({
		fx:     'turnLeft',
    speed:   500,
    timeout: 3000,
    next:   '.gallery',
    pause:   1 // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
	
});