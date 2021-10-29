//console.log('1');
//Cues up a task to run after a certain amount of miliseconds
//setTimeout(() => { console.log('2')}, 500);  // async task in queued after 500 ms
//console.log('3');
//console.log('4');

//Callbacks are slightly outdated (causes callback hell because of nesting callbacks)
/*
function test(callback) {
    console.log(1);
    callback();
}

test(() => { console.log(2) });
*/

//Promise takes in a function - (this is how I resolve, this is how I reject)
//Await - while function is running, it waits for the function to complete before executing underneath code
async function test() {
    try {
        console.log(1);
        console.log(2);
        const resp = await test2();
        return 'The result was: ' + resp;
        const resp2 = await test2();
        console.log(3);
        console.log('The result was: ' + resp2);
    } catch { err } {
        console.error(err);
    }
}

function test2() {
    return new Promise((resolve, reject) => {
        let i = 0;
        while (i < 100000000) {
            i++;
        }
        let success = false;

        if (success) {
            return resolve("This was good.");
        } else {
            return reject('This was bad.');
        }
    });
}

test();

/*
p.then((result) => {
    console.log(1);
    return result;
}).then((resp) => {
    console.log(2);
    return ('The result was: ' + resp);
}).then((resp) => {
    console.log('1: ' + resp);
}).catch((err) => {
    console.error(err);
})*/