var day = new Date();
var days = day.getDate();
var month = day.getMonth() + 1;
var $lox1 = document.getElementById('lox1');
var $lox2 = document.getElementById('lox2');
if (month === 4 && days >= 16) {
	$lox1.innerHTML = $lox1.innerHTML;
	$lox1.classList.add("header-menu__list--fr");
} else if (month === 5 && days <= 25) {
	$lox1.innerHTML = $lox1.innerHTML;
	$lox1.classList.add("header-menu__list--fr");
} else {
	$lox1.innerHTML = $lox2.innerHTML;
	$lox1.classList.add("header-menu__list--right");
}
