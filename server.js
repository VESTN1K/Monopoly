'use strict';

const
    http = require('http'),
    url = require('url');

Object.defineProperty(global, 'app', {
    value: {
        fs: require('fs')
    }
});

class RequestParser {
    constructor(headers, url, res) {
        const c = this;
        Object.defineProperties(c, {

        });
    }
}

class GetParser extends RequestParser {
    constructor() {
        super();
    }
}

new http.Server((req, res) => {
    app.fs.writeFile('req.json', JSON.stringify({
        headers: req.headers,
        url: url.parse(req.url, true),
        method: req.method
    }), (er) => console.log);
    res.end("Hello world!");
}).listen(8080);