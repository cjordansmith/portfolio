

var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#CFEAFD', '#9ED1F6'],
								['#6EB9EE', '#9ED1F6'],
								['#CFEAFD', '#CFEAFD'],
								['#9ED1F6', '#6EB9EE'],
								['#9ED1F6', '#CFEAFD']
            ],
						transitionSpeed: 2000

        }
    }
});

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
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
