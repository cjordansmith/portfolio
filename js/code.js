// var granimInstance = new Granim({
//     element: '#logo-canvas',
//     direction: 'left-right',
//     opacity: [1, 1],
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#EB3349', '#F45C43'],
//                 ['#FF8008', '#FFC837'],
//                 ['#4CB8C4', '#3CD3AD'],
//                 ['#24C6DC', '#514A9D'],
//                 ['#FF512F', '#DD2476'],
//                 ['#DA22FF', '#9733EE']
//             ],
//             transitionSpeed: 2000
//         }
//     }
// });

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
