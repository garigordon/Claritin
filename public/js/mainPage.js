var now = new Date();
console.log( "Day: " + now.getDate())
function myFunction() {
	var email;
	email = document.getElementById("Email").value;
	var reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	if (reg.test(Email.value) === false) {
		document.getElementById("demo").style.color = "red";
		document.getElementById("demo").innerHTML ="EMail is not correct";
		return false;
	} else {
		uploadFile();
	}
	return true;
}

function uploadFile() {
	var first_name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;
	var email = document.getElementById('Email').value;
	var phone = document.getElementById('phone').value;
	var age = document.getElementById('age').value;

	localStorage.setItem("first_name", first_name);
	localStorage.setItem("last_name", last_name);
	localStorage.setItem("email", email);
	localStorage.setItem("phone", phone);
	localStorage.setItem("age", age);

	//document.location = './test.html';
	axios({
		method: 'post',
		url: 'http://localhost:3000/api/fileupload/list',
		data: email,
	})
	.then(function (response) {
		console.log(response.data.collections);
		if(response.data.collections < 1){
			document.location = './test.html';
		}else{
			alert("already")
		}
	})
	.catch(function (error) {
		alert('fsdfdsf');
		console.log(error);
	});

}

//
// function myFunction() {
// 	var email;
// 	email = document.getElementById("Email").value;
// 	alert(email)
// 	var reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
// 	if (reg.test(Email.value) === false) {
// 		document.getElementById("demo").style.color = "red";
// 		document.getElementById("demo").innerHTML ="EMail is not correct";
// 		return false;
// 	} else {
// 		uploadFile();
// 	}
// 	return true;
// }
//
// function uploadFile() {
// 	console.log('FILE')
//
// 	var first_name = $('#first_name').val();
// 	var last_name = $('#last_name').val();
// 	var email = $('#Email').val();
// 	var phone = $('#phone').val();
// 	var age = $('#age').val();
//	
// 	localStorage.setItem("first_name", first_name);
// 	localStorage.setItem("last_name", last_name);
// 	localStorage.setItem("email", email);
// 	localStorage.setItem("phone", phone);
// 	localStorage.setItem("age", age);
//	
// 	//document.location = './test.html';
//	
// 	var opts = {
// 		url: 'http://localhost:3000/api/fileupload/list',
// 		data: email,
// 		type: 'POST',
// 		dataType: 'json',
// 		success: function(data) {
// 			console.log("result")
// 			// console.log(data);
// 			// console.log(data.msg);
// 			//document.location = './test.html';
// 		},
// 		complete: function(data, res) {
// 			//console.log(data);
// 			//console.log(data.collections);
// 			alert(JSON.stringify(data));
// 		},
// 		error: function(data) {
// 			//alert(JSON.stringify(data))
// 			// console.log(data);
// 			//alert(xhr.responseText + '|\n' + status + '|\n' + error);
//
// 			//document.location = './test.html';
// 		},
// 	};
// 	jQuery.ajax(opts);
//
// 	// fetch("http://localhost:3000/api/fileupload/list",
// 	// 	{mode: 'cors',
// 	// 	headers:{
// 	// 	'Access-Control-Allow-Origin':'*'},
// 	// 		method: "POST",
// 	// 		body: email
// 	// 	})
// 	// 	.then(function(res){ return res.json(); })
// 	// 	.then(function(data){ alert( JSON.stringify( data ) ) })
// 	// 	.catch(function(err){ console.log(err) })
//	
// 	// var newFile = new FormData();
// 	// newFile.append('first_name', first_name);
// 	// newFile.append('last_name', last_name);
// 	// newFile.append('email', email);
// 	// newFile.append('phone', phone);
// 	// newFile.append('age', age);
//     //
// 	// var opts = {
// 	// 	url: 'http://localhost:3000/api/fileupload/create',
// 	// 	data:   newFile,
// 	// 	cache: false,
// 	// 	contentType: false,
// 	// 	processData: false,
// 	// 	type: 'POST',
// 	// 	success: function(data) {
// 	// 		document.location = './test.html';
// 	// 	},
// 	// 	error: function(err) {
// 	// 		document.location = './test.html';
// 	// 	}
// 	// };
// 	// jQuery.ajax(opts);
// }
//
