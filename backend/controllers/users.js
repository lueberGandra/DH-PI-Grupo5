const Sequelize = require("sequelize");
const config = require("../config/database");
const { Op } = Sequelize;
const db = new Sequelize(config);
const { Usuario } = require("../models");

const orderResults = (orderByParam = "id_ASC") => {
  const orderParam = orderByParam.split("_")[0];
  const orderDirection = orderByParam.split("_")[1];
  return [[orderParam, orderDirection]];
};

const controller = {
  add: async (req, res, next) => {
    res.render("addUser", {
      title: "Página de registro de usuário",
      subtitle: "Preencha o formulário",
    });
  },

  create: async (req, res, next) => {
    const { nome, sobrenome, usuario, senha, email, funcao_id } = req.body;
    // const id_funcao = email.indexOf('@anjos.com') > 0 ? 1 : 2
    const user = await Usuario.create({
      nome,
      sobrenome,
      usuario,
      senha,
      email,
      funcao_id,
    });

    if (user) {
      res.redirect("/users");
    } else {
      res.status(500).send("Ops, algo de errado");
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params;
    const user = await Usuario.destroy({ where: { id } });

    if (user) {
      res.redirect("/users");
    } else {
      res.status(500).send("Ops, algo de errado");
    }
  },

  update: async (req, res, next) => {
    const { id } = req.params;
    const { nome, sobrenome, usuario, senha, email, funcao_id } = req.body;
    //const id_funcao = email.indexOf('@anjos.com') > 0 ? 1 : 2
    const user = await Usuario.update(
      { nome, sobrenome, usuario, senha, email, funcao_id },
      { where: { id } }
    );

    if (user) {
      res.redirect("/users");
    } else {
      res.status(500).send("Ops, algo de errado");
    }
  },

  login: (req, res) =>
    res.json({
      title: "Login",
      subtitle: "Página de login",
      users: usersPlaceholder,
      id: null,
    }),

  recover: (req, res) =>
    res.json({
      title: "Recuperar senha",
      subtitle: "Recuperar senha",
      users: usersPlaceholder,
      id: req.params.id,
    }),

  showAll: async (req, res) => {
    const { orderBy, page = 1, limit = 10 } = await req.query;
    const order = orderResults(orderBy);
    const { count: total, row: users } = await Usuario.findAndCountAll({
      order,
      limit,
      offset: (page - 1) * limit,
    });
    res.json("users", {
      title: "Usuários",
      subtitle: "Usuários do jornal",
      users,
      total,
      page,
      pages: Math.ceil(total / limit),
      orderParam: order[0][1],
      orderDirection: order[0][1],
    });
  },

  show: async (req, res, next) => {
    const { id } = req.params;
    const user = await Usuario.findOne({ where: { id } });
    if (user) {
      return req.query.edit === "edit"
        ? res.json("editUSer", {
            title: "Página de usuário",
            subtitle: `Confira o usuário de id ${id}`,
            user,
          })
        : res.json("users", {
            title: `Página de Visualização do Usuário ${user.nome} ${user.sobrenome}`,
            subtitle: `Confira a seguir o usuário #${id} | ${user.nome} ${user.sobrenome}`,
            users: [user],
          });
    } else {
      res
        .status(500)
        .send(`Ops... houve algum erro ao buscar pelo usuário de id ${id}`);
    }
  },

  search: async (req, res, next) => {
    let { searchParam, searchValue } = req.body;
    if (!searchParam || !searchValue)
      searchParam = await req.params.searchParam;
    if (!searchValue) searchValue = await req.params.searchValue;

    const whereClause = {};
    whereClause[searchParam] = {
      [Op.like]: `%${searchValue}%`,
    };
    const { orderBy, page = 1, limit = 1 } = await req.query;
    const order = orderResults(orderBy);

    const { count: total, rows: users } = await Usuario.findAndCountAll({
      where: whereClause,
      order,
      limit,
      offset: (page - 1) * limit,
    });
    //.catch(err => res.status(400).send(`<main><h1>Ops, deu erro.</h1> <h2>`${err}`</h2></main>`))

    if (users) {
      res.json("users", {
        title: "Página de buscas de usuários",
        subtitle: "Confira os usuários encontrados",
        users,
        total,
        page,
        pages: Math.ceil(total / limit),
        orderParam: order[0][1],
        orderDirection: order[0][1],
      });
    } else {
      res.status(500).send("Ops, houve um erro");
    }
  },
};

module.exports = controller;
