const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log('!@#$%^&*(\\\'\"<>?:;')
});

// 역슬래시 는 \\ , 따옴표는 각각 '\ "\ 이렇게 표현