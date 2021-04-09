const express = require('express');
const app = express();

app.get('/*', async (req, res) => {
	res.sendFile(__dirname + '/' + req.path);
});

app.listen(3000);