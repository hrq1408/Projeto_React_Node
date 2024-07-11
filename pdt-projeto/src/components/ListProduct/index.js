import React, {useState, useEffect} from "react";

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/produtos/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/api/produtos/${id}`, {
      method: "DELETE",
    }).then(() => {
      setProducts(products.filter((product) => product.id !== id));
    });
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
      {products.map(product => (
          <li key={product.id}>
            {product.nome} - {product.descricao} - R$ {product.preco.toFixed(2)}
            <button onClick={() => handleDelete(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListProduct;