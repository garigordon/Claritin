var now = new Date();
console.log( "Day: " + now.getDate());

function Validate() {
	var checkEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	var first_name = document.forms['myForm']['first_name'];
	var name_error = document.getElementById('name_error');
	first_name.addEventListener('blur', nameVerify, true);
	
	var last_name = document.forms['myForm']['last_name'];
	var lastname_error = document.getElementById('lastname_error');
	last_name.addEventListener('blur', lastVerify, true);
	
	var Email = document.forms['myForm']['Email'];
	var email_error = document.getElementById('email_error');
	Email.addEventListener('blur', emailVerify, true);

	var phone = document.forms['myForm']['phone'];
	var phone_error = document.getElementById('phone_error');
	phone.addEventListener('blur', phoneVerify, true);
	
	var age = document.forms['myForm']['age'];
	var age_error = document.getElementById('age_error');
	age.addEventListener('blur', ageVerify, true);

	if (first_name.value == "") {
		first_name.style.border = "1px solid red";
		document.getElementById('username_div').style.color = "red";
		name_error.textContent = "Username is required";
		first_name.focus();
		return false;
	}
	
	if (last_name.value == "") {
		last_name.style.border = "1px solid red";
		document.getElementById('lastname_div').style.color = "red";
		lastname_error.textContent = "Lastname is required";
		last_name.focus();
		return false;
	}
	if (checkEmail.test(Email.value) === false) {
		Email.style.border = "1px solid red";
		document.getElementById('email_div').style.color = "red";
		email_error.textContent = "Email is required";
		Email.focus();
		return false;
	}
	if (phone.value == "") {
		phone.style.border = "1px solid red";
		document.getElementById('phone_div').style.color = "red";
		phone_error.textContent = "phone is required";
		phone.focus();
		return false;
	}
	if (age.value == "") { 
		age.style.border = "1px solid red";
		document.getElementById('age_div').style.color = "red";
		age_error.textContent = "age is required";
		age.focus();
		return false;
	}
	
	var chbox;
	chbox = document.getElementById('Accept');
	if(first_name.value != "" && last_name.value != "" && phone.value != "" && age.value != "" && checkEmail.test(Email.value) === true && chbox.checked){
		uploadFile();
	}
}
function nameVerify() {
	if (first_name.value != "") {
		first_name.style.border = "1px solid green";
		document.getElementById('username_div').style.color = "green";
		name_error.textContent = "";
		return true; 
	}
}
function lastVerify() {
	if (last_name.value != "") {
		last_name.style.border = "1px solid green";
		document.getElementById('lastname_div').style.color = "green";
		lastname_error.textContent = "";
		return true;
	}
}
function phoneVerify() {
	if (phone.value != "") {
		phone.style.border = "1px solid green";
		document.getElementById('phone_div').style.color = "green";
		phone_error.textContent = "";
		return true;
	}
}
function ageVerify() {
	if (age.value != "") {
		age.style.border = "1px solid green";
		document.getElementById('age_div').style.color = "green";
		age_error.textContent = "";
		return true;
	}
}
function emailVerify() {
	var reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	if (reg.test(Email.value) === false) {
		Email.style.border = "1px solid red";
		document.getElementById('email_div').style.color = "red";
		Email.textContent = "Email is not correct";
	} else {
		Email.style.border = "1px solid green";
		document.getElementById('email_div').style.color = "green";
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
		url: 'http://13.59.224.151/api/fileupload/list',
		data: email,
	})
	.then(function (response) {
		console.log(response.data.collections);
		if(response.data.collections < 1) {
			document.location = 'secondPage';
		} else {
			Email.style.border = "1px solid red";
			document.getElementById('email_div').style.color = "red";
			email_error.textContent = "This email has already been used today";
		}
	})
	.catch(function (error) {
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
