module.exports = (sequelize, DataType) => {
  const Article = sequelize.define(
    "Article",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: DataType.STRING,
        allowNull: false,
      },
      subtitulo: {
        type: DataType.STRING,
        allowNull: false,
      },
      descricao: {
        type: DataType.STRING,
        allowNull: false,
      },
      conteudo: {
        type: DataType.STRING,
        allowNull: false,
      },
      tipo: {
        type: DataType.STRING,
        allowNull: false,
      },
      media_url: {
        type: DataType.STRING,
        allowNull: false,
      },

      data_pub: {
        type: DataType.STRING,
        allowNull: false,
      },

      destaque_home: {
        type: DataType.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "articles",
      timestamps: false,
    }
  );
  return Article;
};
