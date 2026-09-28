/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

function salvarUsuario(input) {
  if (!input) {
    throw new ReferenceError("É necessário enviar o input");
  }

  if (!input.name) {
    throw new ValidationError("Preencha o seu nome completo");
  }

  if (!input.username) {
    throw new ValidationError("Preencha seu apelido");
  }

  user.save(input);
}

try {
  salvarUsuario({});
} catch (error) {
  if (error instanceof ReferenceError) {
    throw error;
  }

  if (error instanceof ValidationError) {
    console.log(error.statusCode);
    return;
  }

  console.log("erro desconhecido");
  console.log(error.stack);
}
