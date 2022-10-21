const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}
  
const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");


//Callbacks
/*function sequence(animation, callback) {
        animation.finished
        .then(callback);
};

sequence(alice1.animate(aliceTumbling, aliceTiming), () => {
        sequence(alice2.animate(aliceTumbling, aliceTiming), () => {
            sequence(alice3.animate(aliceTumbling, aliceTiming), () => {
                console.log('Finished!')
            })
        })
    })
*/




//Promise chain
/*function sequence() {
    alice1.animate(aliceTumbling, aliceTiming).finished
    .then(() => alice2.animate(aliceTumbling, aliceTiming).finished
    .then(() => alice3.animate(aliceTumbling, aliceTiming).finished
    .catch(() => console.error(`Error animating alice: ${error}`))));
}

sequence(); */

// Aysnc / Await
async function sequence() {
    try {
        await(alice1.animate(aliceTumbling, aliceTiming).finished);
        await(alice2.animate(aliceTumbling, aliceTiming).finished);
        await(alice3.animate(aliceTumbling, aliceTiming).finished);
    }
    catch(error) {
        console.error(`Error animating alices: ${error}`);
    }
}

sequence();










