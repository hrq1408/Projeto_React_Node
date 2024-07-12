import React, { useState, useEffect } from "react";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/produtos/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Erro na requisição fetch:", error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/produtos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error("Erro ao excluir produto:", error);
      });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setNome(product.nome);
    setDescricao(product.descricao);
    setPreco(product.preco);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3001/produtos/${editingProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, descricao, preco }),
    })
      .then((response) => response.json())
      .then((updatedProduct) => {
        setProducts(
          products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
        setEditingProduct(null);
      })
      .catch((error) => {
        console.error("Erro ao atualizar produto:", error);
      });
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nome} - {product.descricao} - {product.preco}
            <button onClick={() => handleEdit(product)}>Editar</button>
            <button onClick={() => handleDelete(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      {editingProduct && (
        <form onSubmit={handleUpdate}>
          <h2>Edit Product</h2>
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
          <button type="submit">Salvar</button>
          <button type="button" onClick={() => setEditingProduct(null)}>
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
};

export default ListProduct;
