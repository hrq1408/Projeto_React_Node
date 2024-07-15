import React, { useState, useEffect } from "react";
import ListProduct from '../../components/ListProduct';
import ProductFormAdd from '../../components/ProductFormAdd';
import ProductFormEdit from '../../components/ProductEditForm';
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showList, setShowList] = useState(false);

  const fetchProducts = () => {
    fetch("http://localhost:3001/produtos/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erro na requisição fetch:", error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    fetchProducts(); // Atualiza produtos
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
    fetchProducts();
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="box">
      <h1>Olá,</h1>

      <ProductFormAdd onAddProduct={handleAddProduct} />

      <div className="field">
        <div className="control">
          <button onClick={toggleList} className="button is-dark" style={{ marginTop: '10px' }}>
            {showList ? "Hide List" : "Listar Lista"}
          </button>
        </div>
      </div>

      {showList && (
        <ListProduct
          products={products}
          onEditProduct={setEditingProduct}
          onDeleteProduct={handleDeleteProduct}
        />
      )}

      {editingProduct && (
        <ProductFormEdit
          product={editingProduct}
          onUpdateProduct={handleUpdateProduct}
        />
      )}
    </div>
  );
};

export default Home;
