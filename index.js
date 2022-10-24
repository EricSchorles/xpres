const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;
app.get("/ola", function (req, res) {
	res.send("ola");
});

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname.concat("/src") + "/index.html"));
	//__dirname : It will resolve to your project folder.
});

app.get("/react", function (req, res) {
	res.send({
		title: "Titulo de algo que pode ser muito foda",
		problema: "Falta de escopo e design",
		objetivo: "desenvolver network no mercado de trabalho",
	});
});

app.listen(port, () => {
	console.log(port, "local");
});
