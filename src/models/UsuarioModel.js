const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    senha: {
      type: String,
      require: true,
    },
    link: [
      {
        tipo: {
          type: String,
          required: true,
        },
        nome: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const UsuarioModel = mongoose.model("Usuario", UsuarioSchema);

module.exports = UsuarioModel
