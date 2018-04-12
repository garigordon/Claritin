var resultAnswer = 0;
$(function(){
	$('#btnClick').click(function(){
		var val = [];
		var answ1 = 0,answ2 = 0,answ3 = 0,answ4 = 0,answ5 = 0;
		$(':radio:checked').each(function(i){
			val[i] = $(this).val();
			answ1 = val[0];
			answ2 = val[1];
			answ3 = val[2];
			answ4 = val[3];
			answ5 = val[4];
		});
		var arr = [answ1, answ2, answ3, answ4, answ5];
		var ks=[];
		arr.forEach(function (value) {
			ks[value] = (ks[value] || 0) + 1;
		});
		var arr2 =[];
		var arr3 =[];
		for(var i in arr) {
			if (  ks[ arr[i] ] > 2 ){
				arr3.push(arr[i]);
				ks[ arr[i] ] = 0;
				break;
			}else if ( ks[ arr[i] ] > 1 && ks[ arr[i] ] != 3 ){
				arr2.push(arr[i]);
				ks[ arr[i] ] = 0;
			}
		}
		if(arr2.length > 1 && arr3.length == 0) {
			for (var i = 0; i < arr2.length; i++) {
				if(arr2[i] < arr2[0]){
					arr2[0] = arr2[i];
				}
			}
			answerResult(arr2);
			resultAnswer = arr2;
		} else {
			if (arr3.length > 0) {
				answerResult(arr3);
				resultAnswer = arr3;
			} else {
				answerResult(arr2);
				resultAnswer = arr2;
			}
		}
		if (answ1 !== 0 && answ2 !== 0 && answ3 !== 0 && answ4 !== 0 && answ5 !== 0 && answ1 !== undefined && answ2 !== undefined && answ3 !== undefined && answ4 !== undefined && answ5 !== undefined) {
			var newFile = new FormData();
			var newResult = new FormData();

			newResult.append('first_name', first_name);
			newResult.append('last_name', last_name);
			newResult.append('email', email);
			newResult.append('phone', phone);
			newResult.append('age', age);
			newFile.append('first_name', first_name);
			newFile.append('last_name', last_name);
			newFile.append('email', email);
			newFile.append('phone', phone);
			newFile.append('age', age);
			newFile.append('ans_1', answ1);
			newFile.append('ans_2', answ2);
			newFile.append('ans_3', answ3);
			newFile.append('ans_4', answ4);
			newFile.append('ans_5', answ5);
			newFile.append('result', resultAnswer);
			newFile.append('language', "Fr");
			newFile.append('subscribe', localStorage.getItem('subscribe'));

			var xhr = new XMLHttpRequest();
			var xhresponse = new XMLHttpRequest();
			var xhrclosetable = new XMLHttpRequest();
			var xhrcreate = new XMLHttpRequest();
			xhresponse.open('post', 'http://13.59.224.151/api/numberofregistrations/remove');
			xhresponse.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhresponse.send(encodeURIComponent(email));

			xhr.open('post', 'http://13.59.224.151/api/fileupload/list', true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.onload = function (e) {
				newFile.append('day', JSON.parse(xhr.response).date);
				newResult.append('registration', JSON.parse(xhr.response).numberRegistrations + 1);
				if (JSON.parse(xhr.response).day === "Quiz") {
					xhrcreate.open('post', 'http://13.59.224.151/api/fileupload/create', true);
					xhrcreate.onload = function (e) {
						document.location = 'resultat';
						localStorage.setItem("checkAnswerTest", "MOSTLY");
					};
					xhrcreate.send(newFile);
					xhrclosetable.open('post', 'http://13.59.224.151/api/numberofregistrations/create', true);
					xhrclosetable.send(newResult);
				} else {
					document.location = "/fr";
				}
			};
			xhr.send(encodeURIComponent(email)); 
		}
	});
});

function answerResult(arr) {
	if (arr[0] == 1) {
		localStorage.setItem("number", "PRINCIPALEMENT DES 1 - ");
		localStorage.setItem("lastname", "ACHETEUSE EN PLEIN AIR");
		localStorage.setItem("imgRes", "img/Results1.jpg");
		localStorage.setItem("firstText", "Vous êtes extrêmement dynamique, surtout en ce qui a trait au magasinage! Rien ne vous empêche de vous rendre dans les quartiers les plus en vogue de la ville pour dénicher les meilleures aubaines et découvrir les nouveaux styles. ");
		localStorage.setItem("secondText", "Sortez en toute confiance avec Claritin");
		localStorage.setItem("threeText", "la solution sans somnolence lorsque vos symptômes d’allergie apparaissent.");
	} else if (arr[0] == 2) {
		localStorage.setItem("number", "PRINCIPALEMENT DES 2 - ");
		localStorage.setItem("lastname", "LA JARDINIÈRE");
		localStorage.setItem("imgRes", "img/Results2.jpg");
		localStorage.setItem("firstText", "Avez-vous un talent inné pour le jardinage? Nous le croyons! Votre passion pour les plantes fait que vous adorez le plein air plus que toutes les autres personnes de votre groupe. ");
		localStorage.setItem("secondText", "Si jouer dans la terre déclenche vos symptômes d’allergies, essayez Claritin");
		localStorage.setItem("threeText", " qui soulage rapidement les symptômes d’allergies extérieures et intérieures pendant 24 heures.");
	} else if (arr[0] == 3) {
		localStorage.setItem("number", "PRINCIPALEMENT DES 3 - ");
		localStorage.setItem("lastname", "JOUEUSE D’ÉQUIPE");
		localStorage.setItem("imgRes", "img/Results3.jpg");
		localStorage.setItem("firstText", "Enfilez vos chaussures, comme tout bon amateur de sport! Qu’il s’agisse d’une course matinale, d’une pratique de kickball en après-midi ou d’une séance de yoga en soirée, vous profitez toujours pleinement de votre journée d’activités en plein air. ");
		localStorage.setItem("secondText", "Lorsque les symptômes d’allergies tranforment votre journée d’activités en semaine de récupération, vous pouvez compter sur Claritin");
		localStorage.setItem("threeText", ", vous pouvez compter sur Claritin® pour soulager rapidement vos symptômes d’allergies pendant 24 heures.");
	} else if (arr[0] == 4) {
		localStorage.setItem("number", "PRINCIPALEMENT DES 4 - ");
		localStorage.setItem("lastname", "PROMENEUSE DE CHIEN");
		localStorage.setItem("imgRes", "img/Results4.jpg");
		localStorage.setItem("firstText", "Fido occupe la première place dans votre famille! Beau temps, mauvais temps, vous ne reculez devant rien pour lui donner ce que la vie a de plus beau à offrir. Mais, lorsque vos symptômes d’allergies apparaissent, il vous est difficile de partir à l’aventure avec lui. ");
		localStorage.setItem("secondText", "Consacrez plus de temps à jouer à « va chercher » en utilisant Claritin");
		localStorage.setItem("threeText", " pour un soulagement rapide et sans somnolence des allergies aux animaux, au pollen, à la poussière et aux moisissures.");
	}
}
