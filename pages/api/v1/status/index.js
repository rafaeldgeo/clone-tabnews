function status(resquest, reponse) {
  reponse.status(200).json({ chave: "são acima da média" });
}

export default status;
