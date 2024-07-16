import React, { useState } from "react";

const ProductFormAdd = ({ onProductAdded }) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch("http://localhost:3001/produtos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, descricao, preco }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        onProductAdded(data);
        setNome("");
        setDescricao("");
        setPreco(0);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError("Erro ao adicionar produto");
        setLoading(false);
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
      <button type="submit" disabled={loading}>
        {loading ? "Adicionando..." : "Adicionar"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default ProductFormAdd;
