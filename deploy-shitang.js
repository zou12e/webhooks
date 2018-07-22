const http = require('http');
const createHandler = require('gitee-webhook-handler');
const handler = createHandler({ path: '/', secret: 'wechat' });
// 上面的 secret 保持和 GitHub 后台设置的一致

function runCmd (cmd, args, callback) {
    const spawn = require('child_process').spawn;
    const child = spawn(cmd, args);
    let resp = '';

    child.stdout.on('data', function (buffer) { resp += buffer.toString(); });
    child.stdout.on('end', function () { callback(resp); });
}

http.createServer(function (req, res) {
    handler(req, res, function (err) {
        console.log(err);
        res.statusCode = 404;
        res.end('no such location');
    });
}).listen(4001);

handler.on('error', function (err) {
    console.error('Error:', err.message);
});

// 当push代码时候执行
handler.on('Push Hook', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
    // 运行.sh脚本
    runCmd('sh', ['./deploy-shitang.sh', event.payload.repository.name], function (text) { console.log(text); });
});
