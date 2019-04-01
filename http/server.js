const express    = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('*', (req, res) => {
    console.log('GOT REQUEST', req.params, req.body);

    res.status(0).json({message: 'RESPONSE FROM HTTP SERVER'});
});

app.listen(8081, () => console.log('http server listening on port 8081'));