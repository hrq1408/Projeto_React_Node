import React from "react";

const ListProduct = ({ products, onEditClick, onDeleteProduct }) => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nome} - {product.descricao} - {product.preco}
            <button onClick={() => onEditClick(product)}>Editar</button>
            <button onClick={() => onDeleteProduct(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProduct;
