import React, { useState, useEffect } from "react";

const ListProduct = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nome} - {product.descricao} - {product.preco}
            <button onClick={() => handleDelete(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProduct;
