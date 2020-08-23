$btn = document.getElementById('btn-kick');
$btn_super = document.getElementById('btn-kick-super');

const character = {
	name: 'Picachu',
	defaultHP: 100,
	damageHP: 100,
	elHP: document.getElementById('health-character'),
	elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
	name: 'Charmander',
	defaultHP: 100,
	damageHP: 100,
	elHP: document.getElementById('health-enemy'),
	elProgressbar: document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click', function () {
	console.log('Kick');
	changeHP(random(20), character);
	changeHP(random(20), enemy);
})

$btn_super.addEventListener('click', function () {
	console.log('Super-Kick');
	changeHP(random(40), character);
	changeHP(random(40), enemy);
})

function init() {
	console.log('Start Game!');
	renderHP(character);
	renderHP(enemy);
	
}

function renderHP(person) {
	renderHPLife(person);
	renderProgressbarHP(person);
}

function changeHP(count, person) {
	if (person.damageHP < count) {
		person.damageHP = 0;
		alert('Бедный ' + person.name + ' проиграл бой!');
		$btn.disabled = true;
		$btn_super.disabled = true;
	} else {
	person.damageHP -= count;}
	renderHP(person);
}


function renderHPLife(person) {
	person.elHP.innerText = person.damageHP + '/' + person.defaultHP;

}

function renderProgressbarHP(person) {
	person.elProgressbar.style.width = person.damageHP + '%';
}

function random(num) {
	return Math.ceil(Math.random() * num);
}

init();