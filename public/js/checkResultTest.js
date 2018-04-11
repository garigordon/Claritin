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
		var ks = [];
		arr.forEach(function (value) {
			ks[value] = (ks[value] || 0) + 1;
		});
		var arr2 = [];
		var arr3 = [];
		for (var i in arr) {
			if (ks[arr[i]] > 2) {
				arr3.push(arr[i]);
				ks[arr[i]] = 0;
				break;
			} else if (ks[arr[i]] > 1 && ks[arr[i]] != 3) {
				arr2.push(arr[i]);
				ks[arr[i]] = 0;
			}
		}
		if (arr2.length > 1 && arr3.length == 0) {
			for (var i = 0; i < arr2.length; i++) {
				if (arr2[i] < arr2[0]) {
					arr2[0] = arr2[i];
				}
			}
			answerResult(arr2);
		} else {
			if (arr3.length > 0) {
				answerResult(arr3);
			} else {
				answerResult(arr2);
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
			newFile.append('language', "En");
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
						document.location = 'result';
						localStorage.setItem("checkAnswerTest", "MOSTLY");
					};
					xhrcreate.send(newFile);
					xhrclosetable.open('post', 'http://13.59.224.151/api/numberofregistrations/create', true);
					xhrclosetable.send(newResult);
				} else {
					document.location = "/en";
				}
			};
			xhr.send(encodeURIComponent(email));
		}
	});
});

function answerResult(arr) {
	if (arr[0] == 1) {
		localStorage.setItem("number", "MOSTLY 1's - ");
		localStorage.setItem("lastname", "OPEN-AIR SHOPPER");
		localStorage.setItem("imgRes", "img/Results1.jpg");
		localStorage.setItem("firstText", "You’re a mover and a shaker, especially when it comes to shopping! Nothing stops you from heading to the trendiest parts of town to find the best deals and the newest styles.");
		localStorage.setItem("secondText", "Head outdoors with confidence by using non-drowsy Claritin");
		localStorage.setItem("threeText", "when allergy symptoms strike.");
	} else if (arr[0] == 2){
		localStorage.setItem("number", "MOSTLY 2's - ");
		localStorage.setItem("lastname", "THE GARDENER");
		localStorage.setItem("imgRes", "img/Results2.jpg");
		localStorage.setItem("firstText", "Were you born with a green thumb? We think so! Your passion for plants makes you the outdoorsy one in your group.");
		localStorage.setItem("secondText", "Yet if being among the Earth triggers your allergy symptoms, try turning to Claritin");
		localStorage.setItem("threeText", "for fast 24-hour symptom relief from indoor and outdoor allergens.");
	} else if (arr[0] == 3) {
		localStorage.setItem("number", "MOSTLY 3's - ");
		localStorage.setItem("lastname", "TEAM PLAYER");
		localStorage.setItem("imgRes", "img/Results3.jpg");
		localStorage.setItem("firstText", "Lace up your shoes, sports fanatic! From morning run to afternoon kickball practice and evening yoga, you always get the most out of your outdoor game day.");
		localStorage.setItem("secondText", "When allergy symptoms turn game day into a tough day, turn to Claritin");
		localStorage.setItem("threeText", "for fast 24 hour allergy symptom relief.");
	} else if (arr[0] == 4) {
		localStorage.setItem("number", "MOSTLY 4's - ");
		localStorage.setItem("lastname", "CANINE WALKER");
		localStorage.setItem("imgRes", "img/Results4.jpg");
		localStorage.setItem("firstText", "Fido comes first in your family! Rain or shine, you stop at nothing to give your pup the best life has to offer. Yet when allergy symptoms strike, it’s hard to help Fido wag his tail.");
		localStorage.setItem("secondText", "Make more time for fetch using Claritin");
		localStorage.setItem("threeText", "for fast non-drowsy relief against pets, pollen, dust and mold.");
	}
}
