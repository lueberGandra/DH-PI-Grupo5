const Sequelize = require("sequelize");
const config = require("../config/database");
const db = new Sequelize(config);
const { Artigo } = require("../models");

const controller = {
  add: async (req, res, next) => {
    console.log("Entr");
    res.json({
      title: "Página de registro de artigo",
      subtitle: "Preencha o formulário",
    });
  },

  create: async (req, res, next) => {
    const {
      titulo,
      subtitulo,
      descricao,
      conteudo,
      tipo,
      media_url,
      destaque_home,
      autor_id,
    } = req.body;
    const artigo = await Artigo.create({
      titulo,
      subtitulo,
      descricao,
      conteudo,
      tipo,
      media_url,
      destaque_home,
      autor_id,
    });

    if (artigo) {
      res.json({ artigo });
    } else {
      res.status(500).send("Ops, algo de errado");
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params;
    const artigo = await Artigo.destroy({
      where: {
        id,
      },
    });

    if (artigo) {
      res.json({ artigo });
    } else {
      res.status(500).send("Ops, algo de errado");
    }
  },

  update: async (req, res, next) => {
    const { id } = req.params;
    const {
      titulo,
      subtitulo,
      descricao,
      conteudo,
      tipo,
      media_url,
      destaque_home,
      autor_id,
    } = req.body;

    const artigo = await Usuario.update(
      {
        titulo,
        subtitulo,
        descricao,
        conteudo,
        tipo,
        media_url,
        destaque_home,
        autor_id,
      },
      {
        where: {
          id,
        },
      }
    );

    if (artigo) {
      res.json({ artigo });
    } else {
      res.status(500).send("Ops, algo de errado");
    }
  },

  show: async (req, res, next) => {
    const { id } = req.params;
    const artigo = await Artigo.findOne({
      where: {
        id,
      },
    });
    if (artigo)
      return req.query.edit === "edit"
        ? res.json("editArticle", {
            title: "Página de artigo",
            subtitle: `Confira o artigo de id ${id}`,
            artigo,
          })
        : res.json("artigos", {
            title: `Página de Visualização do artigo ${article.titulo} ${article.subtitulo}`,
            subtitle: `Confira a seguir o artigo #${id} | ${artigo.titulo} ${artigo.subtitulo}`,
            artigos: [artigo],
          });
  },

  showAll: async (req, res) => {
    const users = await Usuario.findAll();
    res.json("users", {
      title: "Usuários",
      subtitle: "Usuários do jornal",
      users,
    });
  },
};

module.exports = controller;
