import React, { useState, useEffect } from "react";
import ListProduct from '../../components/ListProduct';
import ProductFormAdd from '../../components/ProductFormAdd';
import ProductEditForm from '../../components/ProductEditForm';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showList, setShowList] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
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
  };

  const handleProductAdded = (product) => {
    setProducts([...products, product]);
    setMessage("Produto adicionado com sucesso!");
    setTimeout(() => setMessage(""), 3000); // Limpa a mensagem após 3 segundos
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
    setMessage("Produto atualizado com sucesso!");
    setTimeout(() => setMessage(""), 3000); // Limpa a mensagem após 3 segundos
  };

  const handleDeleteProduct = (deletedProductId) => {
    fetch(`http://localhost:3001/produtos/${deletedProductId}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedProducts = products.filter(
          (product) => product.id !== deletedProductId
        );
        setProducts(updatedProducts);
        setMessage("Produto excluído com sucesso!");
        setTimeout(() => setMessage(""), 3000); // Limpa a mensagem após 3 segundos
      })
      .catch((error) => {
        console.error("Erro ao excluir produto:", error);
      });
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="box">
      <h1>Gestão de Produtos</h1>

      {editingProduct ? (
        <ProductEditForm
          product={editingProduct}
          onUpdateProduct={handleUpdateProduct}
        />
      ) : (
        <ProductFormAdd onProductAdded={handleProductAdded} />
      )}

      <button onClick={toggleList} className="button is-dark" style={{ marginTop: '10px' }}>
        {showList ? "Hide List" : "Show List"}
      </button>

      {message && <p>{message}</p>}

      {showList && (
        <ListProduct
          products={products}
          onEditClick={handleEditClick}
          onDeleteProduct={handleDeleteProduct}
        />
      )}
    </div>
  );
};

export default Home;
