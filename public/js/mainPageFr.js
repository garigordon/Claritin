localStorage.clear();

var ALLOWABLEAGE = 18;
var LENGTHPHONENUMBER = 10;
var first_name = document.forms['myForm']['first_name'];
var name_error = document.getElementById('name_error');
var last_name = document.forms['myForm']['last_name'];
var lastname_error = document.getElementById('lastname_error');
var Email = document.forms['myForm']['Email'];
var email_error = document.getElementById('email_error');
var phone = document.forms['myForm']['phone'];
var phone_error = document.getElementById('phone_error');
var age = document.forms['myForm']['age'];
var age_error = document.getElementById('age_error');
var checkbox_error = document.getElementById('checkbox_error');
var chbox = document.getElementById('Accept');
var checkEmail = /^[A-Z0-9._%#^&*+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

function Validate() {
	checkingForCharactersInTheField();
	checkFields();
}

function checkingForCharactersInTheField () {
	first_name.addEventListener('keyup', nameVerify, true);
	last_name.addEventListener('keyup', lastVerify, true);
	Email.addEventListener('keyup', emailVerify, true);
	phone.addEventListener('keyup', phoneVerify, true);
	age.addEventListener('keyup', ageVerify, true);

	var nameFields = [first_name, last_name, phone, age];
	var nameFieldsError = [name_error, lastname_error, phone_error, age_error];
	var textFields = ["Le prénom est requis", "Nom de famille est requis", "Numéro de téléphone non valide.", "L'âge est requis."];
	var divText = ['username_div', 'lastname_div', 'phone_div', 'age_div'];
	for (var i = 0; i < nameFields.length; i++) {
		if (nameFields[i].value === "") {
			nameFields[i].style.border = "1px solid red";
			document.getElementById(divText[i]).style.color = "yellow";
			nameFieldsError[i].textContent = textFields[i];
		}
	}

	if (checkEmail.test(Email.value) === false) {
		Email.style.border = "1px solid red";
		document.getElementById('email_div').style.color = "yellow";
		email_error.textContent = "Adresse électronique non valide.";
	}
	if (phone.value !== "" && phone.value.length < LENGTHPHONENUMBER) {
		phone.style.border = "1px solid red";
		document.getElementById('phone_div').style.color = "yellow";
		phone_error.textContent = "Le numéro de téléphone doit avoir 10 chiffres.";
	}
	if (age.value !== "" && age.value < ALLOWABLEAGE) {
		age.style.border = "1px solid red";
		document.getElementById('age_div').style.color = "yellow";
		age_error.textContent = "Vous devez avoir atteint l'âge de la majorité pour participer.";
	}
	if (!chbox.checked){
		document.getElementById('checkbox_div').style.color = "yellow";
		checkbox_error.textContent = "Cette case à cocher est obligatoire";
	} else {
		document.getElementById('checkbox_div').style.color = "green";
		checkbox_error.textContent = "";
	}
}

function nameVerify () {
	if (first_name.value !== "") {
		first_name.style.border = "1px solid green";
		document.getElementById('username_div').style.color = "green";
		name_error.textContent = "";
		return true;
	}
}

function phoneVerify () {
	if (phone.value.length === LENGTHPHONENUMBER) {
		phone.style.border = "1px solid green";
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

function ageVerify () {
	if (age.value !== "" && age.value >= ALLOWABLEAGE) {
		age.style.border = "1px solid green";
		document.getElementById('age_div').style.color = "green";
		age_error.textContent = "";
		return true;
	}
}

function emailVerify () {
	if (checkEmail.test(Email.value) === false) {
		Email.style.border = "1px solid red";
		document.getElementById('email_div').style.color = "yellow";
		email_error.textContent = "Adresse électronique non valide.";
	} else {
		Email.style.border = "1px solid green";
		document.getElementById('email_div').style.color = "green";
		email_error.textContent = "";
	}
	return true;
}

function checkFields () {
	var response = grecaptcha.getResponse();
	if (response.length === 0) {
	} else {
		if (first_name.value !== "" && last_name.value !== "" && phone.value !== "" && phone_error.textContent !== "Numéro de téléphone non valide." && phone.value.length === LENGTHPHONENUMBER && age.value !== "" && age.value >= ALLOWABLEAGE && checkEmail.test(Email.value) === true && chbox.checked) {
			uploadFile();
		}
	}
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
	var chbox = document.getElementById('Yes');
	if (chbox.checked) {
		localStorage.setItem("subscribe", "Yes");
	} else {
		localStorage.setItem("subscribe", "No");
	}

	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://13.59.224.151/api/fileupload/list', true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.responseType = 'text';
	xhr.onload = function (e) {
		if (JSON.parse(xhr.response).day === "Quiz") {
			document.location = "concours";
		} else {
			localStorage.clear();
			Email.style.border = "1px solid red";
			document.getElementById('email_div').style.color = "yellow";
			email_error.textContent = "Vous avez déjà joué aujourd'hui. Veuillez réessayer demain.";
		}
	};
	xhr.send(encodeURIComponent(email));
}
