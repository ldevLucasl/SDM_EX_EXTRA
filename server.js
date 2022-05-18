const express = require("express");

let app = express();

app.get("/", function (req, res) {
  return res.status(200).send("recebi requisição GET na rota /");
});

app.get(`/produtos`, function (req, res) {
  return res.status(200).send("recebi requisição GET na rota produtos");
});

app.get("/filmes/:id?", function (req, res) {
  const user_id = req.params.id;

  if (!user_id) {
    return res.status(400).send("parâmetros inválidos");
  }

  return res
    .status(200)
    .send(`recebi requisição GET na rota filmes com o id ${user_id}`);
});

app.post("/musica/:id?/:autor?/:genero?", function (req, res) {
  const music_id = req.params.id;
  const music_autor = req.params.autor;
  const music_genero = req.params.genero;

  const music_info = {
    id: music_id,
    autor: music_autor,
    genero: music_genero,
  };

  if (!music_id || !music_autor || !music_genero) {
    return res.status(400).send("parâmetros inválidos");
  } else {
    return res.status(200).json(music_info);
  }
});

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000 ...");
});
