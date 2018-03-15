const http = require('http');
const secret = "wobuzhidao"

function runCmd(cmd, args, callback) {
    const spawn = require('child_process').spawn;
    const child = spawn(cmd, args);
    let resp = '';
    child.stdout.on('data', function (buffer) { resp += buffer.toString(); });
    child.stdout.on('end', function () { callback(resp); });
}

http.createServer(function (req, res) {
   
    if (req.headers['x-gitlab-event'] === 'Push Hook' && req.headers['x-gitlab-token'] === secret){
        runCmd('sh', ['./deploy.sh'], function (text) { console.log(text); });
        res.end('ok');
    } else {
        res.end('hello word!');
    }
}).listen(9527);


// 当push代码时候执行

   

