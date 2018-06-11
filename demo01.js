function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() =>
            resolve('hhelo'), 3000);
    })
}

async function test() {
    const v = await takeLongTime();
}

test();