
function myFunction() {
	var email;
	email = document.getElementById("Email").value;
	alert(email)
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

	var first_name = $('#first_name').val();
	var last_name = $('#last_name').val();
	var email = $('#Email').val();
	var phone = $('#phone').val();
	var age = $('#age').val();
	
	localStorage.setItem("first_name", first_name);
	localStorage.setItem("last_name", last_name);
	localStorage.setItem("email", email);
	localStorage.setItem("phone", phone);
	localStorage.setItem("age", age);
	
	//document.location = './test.html';
	
	var opts = {
		url: 'http://localhost:3000/api/fileupload/list',
		data: email,
		type: 'POST',
		processData: true,
		dataType: 'json',
		success: function(data) {
			console.log("result")
			console.log(data);
			//document.location = './test.html';
		},
		complete: function(data) {
			//alert(data);
		},
		error: function(xhr, status, error) {
			console.log("check")
			const myInit = {
				method: 'get',
			};
			fetch('http://localhost:63342/my-test-project/public/fileAPITest.html?_ijt=tmsrsm1spbnc83shfko7hgeovs', myInit)
				.then((res) => res.json())
				.catch((err)=> console.log(err))

			//alert(xhr.responseText + '|\n' + status + '|\n' + error);

			//document.location = './test.html';
		},
	};
	jQuery.ajax(opts);
	
	// var newFile = new FormData();
	// newFile.append('first_name', first_name);
	// newFile.append('last_name', last_name);
	// newFile.append('email', email);
	// newFile.append('phone', phone);
	// newFile.append('age', age);
    //
	// var opts = {
	// 	url: 'http://localhost:3000/api/fileupload/create',
	// 	data:   newFile,
	// 	cache: false,
	// 	contentType: false,
	// 	processData: false,
	// 	type: 'POST',
	// 	success: function(data) {
	// 		document.location = './test.html';
	// 	},
	// 	error: function(err) {
	// 		document.location = './test.html';
	// 	}
	// };
	// jQuery.ajax(opts);
}

