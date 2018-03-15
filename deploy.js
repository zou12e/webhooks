const http = require('http');
const createHandler = require('github-webhook-handler');
const handler = createHandler({ path: '/', secret: 'wobuzhidao' });
// 上面的 secret 保持和 GitHub 后台设置的一致

function runCmd (cmd, args, callback) {
    const spawn = require('child_process').spawn;
    const child = spawn(cmd, args);
    let resp = '';

    child.stdout.on('data', function (buffer) { resp += buffer.toString(); });
    child.stdout.on('end', function () { callback(resp); });
}

http.createServer(function (req, res) {
    console.log('start:9527');
    handler(req, res, function (err) {
        res.statusCode = 404;
        res.end('Hello Word!!');
    });
}).listen(9527);

handler.on('error', function (err) {
    console.error('Error:', err.message);
});

// 当push代码时候执行
handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
    // 运行.sh脚本
    runCmd('sh', ['./deploy.sh', event.payload.repository.name], function (text) { console.log(text); });
});
