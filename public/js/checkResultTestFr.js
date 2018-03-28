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
		for(var value of arr){
			ks[value] = (ks[value]||0)+1;
		}
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
		if(arr2.length > 1 && arr3.length == 0){
			for (var i = 0; i < arr2.length; i++) {
				if(arr2[i] < arr2[0]){
					arr2[0] = arr2[i];
				}
			}
			if(arr2[0] == 1){
				localStorage.setItem("number", "MOSTLY 1's - ");
				localStorage.setItem("lastname", "OPEN-AIR SHOPPER");
				localStorage.setItem("imgRes", "img/Results1.jpg");
				localStorage.setItem("firstText", "Vous êtes extrêmement dynamique, surtout en ce qui a trait au magasinage! Rien ne vous empêche de vous rendre dans les quartiers les plus en vogue de la ville pour dénicher les meilleures aubaines et découvrir les nouveaux styles. ");
				localStorage.setItem("secondText", "Sortez en toute confiance avec Claritin");
				localStorage.setItem("threeText", "et obteniez un soulagement efficace et sans somnolence de vos pires symptômes.");
			}else if(arr2[0] == 2){
				localStorage.setItem("number", "MOSTLY 2's - ");
				localStorage.setItem("lastname", "THE GARDENER");
				localStorage.setItem("imgRes", "img/Results2.jpg");
				localStorage.setItem("firstText", "Avez-vous un talent inné pour le jardinage? Nous le croyons! Votre passion pour les plantes fait que vous adorez le plein air plus que toutes les autres personnes de votre groupe. ");
				localStorage.setItem("secondText", "Si jouer dans la terre déclenche vos symptômes d’allergies, essayez Claritin");
				localStorage.setItem("threeText", ", la seule solution qui offre un soulagement contre plus de 200 allergènes pendant 24 heures.");
			} else if (arr2[0] == 3) {
				localStorage.setItem("number", "MOSTLY 3's - ");
				localStorage.setItem("lastname", "TEAM PLAYER");
				localStorage.setItem("imgRes", "img/Results3.jpg");
				localStorage.setItem("firstText", "Enfilez vos chaussures, comme tout bon amateur de sport! Qu’il s’agisse d’une course matinale, d’une pratique de kickball en après-midi ou d’une séance de yoga en soirée, vous profitez toujours pleinement de votre journée d’activités en plein air. ");
				localStorage.setItem("secondText", "Lorsque les symptômes d’allergies tranforment votre journée d’activités en semaine de récupération, vous pouvez compter sur Claritin");
				localStorage.setItem("threeText", ", la solution sans somnolence à prise orale la plus recommandée par les médecins pour soulager les allergies.");
			} else if (arr2[0] == 4) {
				localStorage.setItem("number", "MOSTLY 4's - ");
				localStorage.setItem("lastname", "CANINE WALKER");
				localStorage.setItem("imgRes", "img/Results4.jpg");
				localStorage.setItem("firstText", "Fido occupe la première place dans votre famille! Beau temps, mauvais temps, vous ne reculez devant rien pour lui donner ce que la vie a de plus beau à offrir. Mais, lorsque vos symptômes d’allergies apparaissent, il vous est difficile de partir à l’aventure avec lui. ");
				localStorage.setItem("secondText", "Consacrez plus de temps à jouer à « va chercher » en utilisant Claritin");
				localStorage.setItem("threeText", "pour un soulagement puissant et sans somnolence des allergies aux animaux, au, pollen, à la poussière et aux moisissures.");
			}
		}else {
			if (arr3.length > 0) {
				if (arr3[0] == 1) {
					localStorage.setItem("number", "MOSTLY 1's - ");
					localStorage.setItem("lastname", "OPEN-AIR SHOPPER");
					localStorage.setItem("imgRes", "img/Results1.jpg");
					localStorage.setItem("firstText", "Vous êtes extrêmement dynamique, surtout en ce qui a trait au magasinage! Rien ne vous empêche de vous rendre dans les quartiers les plus en vogue de la ville pour dénicher les meilleures aubaines et découvrir les nouveaux styles. ");
					localStorage.setItem("secondText", "Sortez en toute confiance avec Claritin");
					localStorage.setItem("threeText", "et obteniez un soulagement efficace et sans somnolence de vos pires symptômes.");
				} else if (arr3[0] == 2) {
					localStorage.setItem("number", "MOSTLY 2's - ");
					localStorage.setItem("lastname", "THE GARDENER");
					localStorage.setItem("imgRes", "img/Results2.jpg");
					localStorage.setItem("firstText", "Avez-vous un talent inné pour le jardinage? Nous le croyons! Votre passion pour les plantes fait que vous adorez le plein air plus que toutes les autres personnes de votre groupe. ");
					localStorage.setItem("secondText", "Si jouer dans la terre déclenche vos symptômes d’allergies, essayez Claritin");
					localStorage.setItem("threeText", ", la seule solution qui offre un soulagement contre plus de 200 allergènes pendant 24 heures.");
				} else if (arr3[0] == 3) {
					localStorage.setItem("number", "MOSTLY 3's - ");
					localStorage.setItem("lastname", "TEAM PLAYER");
					localStorage.setItem("imgRes", "img/Results3.jpg");
					localStorage.setItem("firstText", "Enfilez vos chaussures, comme tout bon amateur de sport! Qu’il s’agisse d’une course matinale, d’une pratique de kickball en après-midi ou d’une séance de yoga en soirée, vous profitez toujours pleinement de votre journée d’activités en plein air. ");
					localStorage.setItem("secondText", "Lorsque les symptômes d’allergies tranforment votre journée d’activités en semaine de récupération, vous pouvez compter sur Claritin");
					localStorage.setItem("threeText", ", la solution sans somnolence à prise orale la plus recommandée par les médecins pour soulager les allergies.");
				} else if (arr3[0] == 4) {
					localStorage.setItem("number", "MOSTLY 4's - ");
					localStorage.setItem("lastname", "CANINE WALKER");
					localStorage.setItem("imgRes", "img/Results4.jpg");
					localStorage.setItem("firstText", "Fido occupe la première place dans votre famille! Beau temps, mauvais temps, vous ne reculez devant rien pour lui donner ce que la vie a de plus beau à offrir. Mais, lorsque vos symptômes d’allergies apparaissent, il vous est difficile de partir à l’aventure avec lui. ");
					localStorage.setItem("secondText", "Consacrez plus de temps à jouer à « va chercher » en utilisant Claritin");
					localStorage.setItem("threeText", "pour un soulagement puissant et sans somnolence des allergies aux animaux, au, pollen, à la poussière et aux moisissures.");
				}
			} else {
				if (arr2[0] == 1) {
					localStorage.setItem("number", "MOSTLY 1's - ");
					localStorage.setItem("lastname", "OPEN-AIR SHOPPER");
					localStorage.setItem("imgRes", "img/Results1.jpg");
					localStorage.setItem("firstText", "Vous êtes extrêmement dynamique, surtout en ce qui a trait au magasinage! Rien ne vous empêche de vous rendre dans les quartiers les plus en vogue de la ville pour dénicher les meilleures aubaines et découvrir les nouveaux styles. ");
					localStorage.setItem("secondText", "Sortez en toute confiance avec Claritin");
					localStorage.setItem("threeText", "et obteniez un soulagement efficace et sans somnolence de vos pires symptômes.");
				} else if (arr2[0] == 2) {
					localStorage.setItem("number", "MOSTLY 2's - ");
					localStorage.setItem("lastname", "THE GARDENER");
					localStorage.setItem("imgRes", "img/Results2.jpg");
					localStorage.setItem("firstText", "Avez-vous un talent inné pour le jardinage? Nous le croyons! Votre passion pour les plantes fait que vous adorez le plein air plus que toutes les autres personnes de votre groupe. ");
					localStorage.setItem("secondText", "Si jouer dans la terre déclenche vos symptômes d’allergies, essayez Claritin");
					localStorage.setItem("threeText", ", la seule solution qui offre un soulagement contre plus de 200 allergènes pendant 24 heures.");
				} else if (arr2[0] == 3) {
					localStorage.setItem("number", "MOSTLY 3's - ");
					localStorage.setItem("lastname", "TEAM PLAYER");
					localStorage.setItem("imgRes", "img/Results3.jpg");
					localStorage.setItem("firstText", "Enfilez vos chaussures, comme tout bon amateur de sport! Qu’il s’agisse d’une course matinale, d’une pratique de kickball en après-midi ou d’une séance de yoga en soirée, vous profitez toujours pleinement de votre journée d’activités en plein air. ");
					localStorage.setItem("secondText", "Lorsque les symptômes d’allergies tranforment votre journée d’activités en semaine de récupération, vous pouvez compter sur Claritin");
					localStorage.setItem("threeText", ", la solution sans somnolence à prise orale la plus recommandée par les médecins pour soulager les allergies.");
				} else if (arr2[0] == 4) {
					localStorage.setItem("number", "MOSTLY 4's - ");
					localStorage.setItem("lastname", "CANINE WALKER");
					localStorage.setItem("imgRes", "img/Results4.jpg");
					localStorage.setItem("firstText", "Fido occupe la première place dans votre famille! Beau temps, mauvais temps, vous ne reculez devant rien pour lui donner ce que la vie a de plus beau à offrir. Mais, lorsque vos symptômes d’allergies apparaissent, il vous est difficile de partir à l’aventure avec lui. ");
					localStorage.setItem("secondText", "Consacrez plus de temps à jouer à « va chercher » en utilisant Claritin");
					localStorage.setItem("threeText", "pour un soulagement puissant et sans somnolence des allergies aux animaux, au, pollen, à la poussière et aux moisissures.");
				}
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
			newFile.append('language', "Fr");
			newFile.append('subscribe', localStorage.getItem('subscribe'));
			axios({
				method: 'post',
				url: 'http://13.59.224.151/api/numberofregistrations/remove',
				data: email,
			});
			axios({
				method: 'post',
				url: 'http://13.59.224.151/api/fileupload/list',
				data: email,
			}).then(function (response) {
				newFile.append('day', response.data.date);
				newResult.append('quantity', response.data.numberRegistrations + 1);
				if (response.data.day === "Quiz") {
					axios({
						method: 'post',
						url: 'http://13.59.224.151/api/fileupload/create',
						data: newFile,
					}).then(function () {
						document.location = 'resultat';
						localStorage.setItem("checkAnswerTest", "MOSTLY");
					}).catch(function () {
						document.location = 'resultat';
						localStorage.setItem("checkAnswerTest", "MOSTLY");
					});
					axios({
						method: 'post',
						url: 'http://13.59.224.151/api/numberofregistrations/create',
						data: newResult,
					});
				} else {
					document.location = "/";
				}
			}).catch(function (error) {
				console.log(error);
			});
		}
	});
});
