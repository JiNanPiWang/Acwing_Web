let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let [a, b, c, d] = buf.split('\n').map(Number);
    console.log('DIFERENCA = ' + (a * b - c * d));
});