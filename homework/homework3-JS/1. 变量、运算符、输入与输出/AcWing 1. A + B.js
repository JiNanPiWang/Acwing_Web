let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let [a, b] = buf.split(' ').map(Number);
    console.log(a + b);
});