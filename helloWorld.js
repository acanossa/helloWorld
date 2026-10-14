const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('<h1>Hello WOrld Node.js y Express</h1>');
});

app.listen(port, () => {
	console.log(`App ejecutandose en http://localhost:${port}`);
});
