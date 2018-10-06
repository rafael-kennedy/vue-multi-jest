const solidServer = require('solid-server');

module.exports = function startSolidTestServer({port}) {
    return new Promise((resolve) => {
        const app = solidServer.createServer({
            key: '../../../localhost.key',
            cert: '../../../localhost.cert',
            root: './',
            serverUri: `https://localhost:${port}`,
            webid: true
        }).listen(port, () => {
            console.log(`listening on port ${port}`);
            resolve(app)
        });
    });
};

