import React, { useState } from "react";

const ProductFormAdd = ({ onProductAdded }) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const parsedPreco = parseFloat(preco);

    fetch("http://localhost:3001/produtos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, descricao, preco: parsedPreco }),
    })
      .then(response => response.json())
      .then((newProduct) => {
        onProductAdded(newProduct);
        setNome("");
        setDescricao("");
        setPreco("");
      })
      .catch((error) => {
        console.error("Erro ao adicionar produto:", error);
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
          onChange={(event) => setPreco(event.target.value)}
        />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default ProductFormAdd;
