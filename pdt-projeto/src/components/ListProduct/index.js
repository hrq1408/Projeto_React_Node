import React from "react";

const ListProduct = ({ products, onEditProduct, onDeleteProduct }) => {
  console.log("Produtos recebidos em ListProduct:", products); 
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>Nome: {product.nome}</span>
            <span>Descrição: {product.descricao}</span>
            <span>Preço: {Number(product.preco).toFixed(2)}</span>
            <button onClick={() => onEditProduct(product)}>Editar</button>
            <button onClick={() => onDeleteProduct(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProduct;
