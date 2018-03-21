
function Validate() {
	var checkEmail = /^[A-Z0-9._%#^&*+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	var first_name = document.forms['myForm']['first_name'];
	var name_error = document.getElementById('name_error');
	first_name.addEventListener('keyup', nameVerify, true);

	var last_name = document.forms['myForm']['last_name'];
	var lastname_error = document.getElementById('lastname_error');
	last_name.addEventListener('keyup', lastVerify, true);

	var Email = document.forms['myForm']['Email'];
	var email_error = document.getElementById('email_error');
	Email.addEventListener('keyup', emailVerify, true);

	var phone = document.forms['myForm']['phone'];
	var phone_error = document.getElementById('phone_error');
	phone.addEventListener('keyup', phoneVerify, true);

	var age = document.forms['myForm']['age'];
	var age_error = document.getElementById('age_error');
	age.addEventListener('keyup', ageVerify, true);
	var checkbox_error = document.getElementById('checkbox_error');
	checkboxVerify()
	if (first_name.value === "") {
		first_name.style.border = "1px solid red";
		document.getElementById('username_div').style.color = "yellow";
		name_error.textContent = "First Name is required";
		first_name.focus();
	}
	if (last_name.value === "") {
		last_name.style.border = "1px solid red";
		document.getElementById('lastname_div').style.color = "yellow";
		lastname_error.textContent = "Last Name is required";
		last_name.focus();
	}
	if (checkEmail.test(Email.value) === false) {
		Email.style.border = "1px solid red";
		document.getElementById('email_div').style.color = "yellow";
		email_error.textContent = "Email is required";
		Email.focus();
	}
	if (phone.value === "") {
		phone.style.border = "1px solid red";
		document.getElementById('phone_div').style.color = "yellow";
		phone_error.textContent = "Phone is required";
		phone.focus();
	}
	if (age.value === "") { 
		age.style.border = "1px solid red";
		document.getElementById('age_div').style.color = "yellow";
		age_error.textContent = "Age is required";
		age.focus();
	}
	if (age.value !== "" && age.value < 18) {
		age.style.border = "1px solid red";
		document.getElementById('age_div').style.color = "yellow";
		age_error.textContent = "You must be 18 or older to participate.";
		age.focus();
	}
	var chbox;
	chbox = document.getElementById('Accept');

	if(!chbox.checked){
		age.style.border = "1px solid red";
		document.getElementById('checkbox_div').style.color = "yellow";
		checkbox_error.textContent = "That checkbox is required";
	}
	if(first_name.value !== "" && last_name.value !== "" && phone.value !== "" && age.value !== "" && age.value > 17 && checkEmail.test(Email.value) === true && chbox.checked){
		uploadFile();
	}
}
function nameVerify() {
	if (first_name.value !== "") {
		first_name.style.border = "1px solid green";
		document.getElementById('username_div').style.color = "green";
		name_error.textContent = "";
		return true; 
	}
}
function checkboxVerify() {
	var chbox;
	chbox = document.getElementById('Accept');
	if (chbox.checked) {
		document.getElementById('checkbox_div').style.color = "green";
		checkbox_error.textContent = "";
		return true;
	}
}
function lastVerify () {
	if (last_name.value !== "") {
		last_name.style.border = "1px solid green";
		document.getElementById('lastname_div').style.color = "green";
		lastname_error.textContent = "";
		return true;
	}
}
function phoneVerify () {
	if (phone.value !== "") {
		phone.style.border = "1px solid green";
		document.getElementById('phone_div').style.color = "green";
		phone_error.textContent = "";
		return true;
	}
}
function ageVerify () {
	if (age.value !== "" && age.value > 17) {
		age.style.border = "1px solid green";
		document.getElementById('age_div').style.color = "green";
		age_error.textContent = "";
		return true;
	}
}
function emailVerify () {
	var reg = /^[A-Z0-9._%#^&*+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	if (reg.test(Email.value) === false) {
		Email.style.border = "1px solid red";
		document.getElementById('email_div').style.color = "yellow";
		email_error.textContent = "Email is required";
	} else {
		Email.style.border = "1px solid green";
		document.getElementById('email_div').style.color = "green";
		email_error.textContent = "";
	}
	return true;
}

function uploadFile () {
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
	 
	axios({
		method: 'post',
		url: 'http://13.59.224.151/api/fileupload/list',
		data: email,
	}).then(function (response) {
		if (response.data.day === "Quiz") {
			document.location = "" + response.data.day + "";
		}else{
			localStorage.clear();
			Email.style.border = "1px solid red";
			document.getElementById('email_div').style.color = "yellow";
			email_error.textContent = "You have already played today. Please try again tomorrow.";
		}
	}).catch(function (error) {
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
