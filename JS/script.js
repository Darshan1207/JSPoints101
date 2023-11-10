// Source : https://sentry.io/answers/difference-between-let-and-var-in-javascript/
function varScoping() {
    var x = 1;

    if (true) {
        var x = 2;
        console.log('varScoping: if -');
        console.log(x); // will print 2
    }
    console.log('---endif ---');

    console.log(x); // will print 2
}

function letScoping() {
    let x = 1;

    if (true) {
        let x = 2;
        console.log('---letScoping: if ---');
        console.log(x); // will print 2
    }
    console.log('---endif ---');

    console.log(x); // will print 1
}

varScoping();
letScoping();