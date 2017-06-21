// function showContact() {
// 	var x = document.getElementById('contact-frame');
// 	x.style.display = 'block';
// }
// function hideContact() {
// 	var x = document.getElementById('contact-frame');
// 	x.style.display = 'none';
// }

function showContact() {
    var x = document.getElementById('contact-frame');
		var y = document.getElementById('cover-text');

    if (x.style.display === 'block') {
        x.style.display = 'none';
				y.style.display = 'block';
    } else {
        x.style.display = 'block';
				y.style.display = 'none';
    }
}
