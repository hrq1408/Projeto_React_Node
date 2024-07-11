import React, {useState} from "react";

const ProductFormAdd = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/produtos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({nome, descricao, preco}),
    }).then(() => {
      setNome("");
      setDescricao("");
      setPreco(0);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </label>
      <label>
        Descrição:
        <input
          type="text"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />
      </label>
      <label>
        Preço:
        <input
          type="number"
          value={preco}
          onChange={(event) => setPreco(parseFloat(event.target.value))}
        />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
}
export default ProductFormAdd;