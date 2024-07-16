import React, { useState } from "react";

const ProductEditForm = ({ product, onUpdateProduct }) => {
  const [nome, setNome] = useState(product.nome || "");
  const [descricao, setDescricao] = useState(product.descricao || "");
  const [preco, setPreco] = useState(product.preco || 0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/produtos/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, descricao, preco }),
      });

      if (!response.ok) {
        throw new Error(`Erro ao editar produto: ${response.status}`);
      }

      onUpdateProduct({ id: product.id, nome, descricao, preco });
    } catch (error) {
      console.error("Erro ao editar produto:", error);
    }
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
      <button type="submit">Editar</button>
    </form>
  );
};

export default ProductEditForm;
