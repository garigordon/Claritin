var imageCount = 1;
var total = 6;

function photo(x) {
	var image = document.getElementById('image');
	imageCount = imageCount + x;
	
	if(imageCount > total){
		imageCount = 1;
	}
	
	if(imageCount < 1){
		imageCount = total;
	}	
	
	image.src = "Images/img"+ imageCount +".jpg";
	clearInterval(time);
	
	time =  window.setInterval(function photoA() { 		
		var image = document.getElementById('image');
		imageCount = imageCount + 1;
		if(imageCount > total){
			imageCount = 1;
		}
		if(imageCount < 1){
			imageCount = total;
		}	
		image.src = "Images/img"+ imageCount +".jpg";
	},4000);
}
 
var time = window.setInterval(function photoA() {    // just addign the sunction to the variable so you can target it.
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){
		imageCount = 1;
	}
	if(imageCount < 1){
		imageCount = total;
	}	
	image.src = "Images/img"+ imageCount +".jpg";
	},4000);

