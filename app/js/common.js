var $ = require("jquery");

var bootstrap = require("bootstrap");


//@TODO: Checkbox

// function fun1 () {
// 	var chbox;
// 	chbox=document.getElementById('one');
// 	if (chbox.checked) {
// 		console.log('Выбран');
// 	}
// 	else {
// 		console.log('Не выбран');
// 	}
// }

//@TODO: Radio button

// function fun1() {
// 	let radi=document.getElementsByName('r1');
// 	for (let i=0; i < radi.length; i++){
// 		if (radi[i].checked) {
// 			console.log('checked ' +i+ ' element');
// 		}
// 	}
// }

//@TODO: Select

// function fun1() {
//     var sel = document.getElementById('mySelect').selectedIndex;
//     var options = document.getElementById('mySelect').options;
//     console.log('Выбрана опция ' +options[sel].text);
// }

//@TODO: Range

// function fun1() {
//     var rng = document.getElementById('r1');
//     var div = document.getElementById('test');
//     div.style.width = rng.value + 'px';
// }


document.getElementById('nav').onmouseover = function (event) {
    var target = event.target;
    if (target.className === 'menu-item'){
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
}