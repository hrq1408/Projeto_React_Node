import React, { useState, useEffect } from "react";
import ListProduct from '../../components/ListProduct';
import ProductFormAdd from '../../components/ProductFormAdd';
import ProductEditForm from '../../components/ProductEditForm';
import './home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showList, setShowList] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
        setErrorMessage("Erro ao buscar produtos");
      });
  };

  const handleProductAdded = (newProduct) => {
    setProducts([...products, newProduct]);
    setSuccessMessage("Produto adicionado com sucesso!");
    setTimeout(() => setSuccessMessage(''), 3000); 
  };

  const handleProductUpdated = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    console.log("Produtos updatedProducts:", updatedProducts); 
    setProducts(updatedProducts);
    setEditingProduct(null); 
    setSuccessMessage("Produto atualizado com sucesso!");
    setTimeout(() => setSuccessMessage(''), 3000); 

    console.log("Produtos updatedProducts:", updatedProducts); 

  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/produtos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
        setSuccessMessage("Produto excluído com sucesso!");
        setTimeout(() => setSuccessMessage(''), 3000); 
      })
      .catch((error) => {
        console.error("Erro ao excluir produto:", error);
        setErrorMessage("Erro ao excluir produto");
        setTimeout(() => setErrorMessage(''), 3000); 
      });
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="box">
      <h1>Gerenciamento de Produtos</h1>

      <ProductFormAdd onProductAdded={handleProductAdded} />

      {editingProduct && (
        <ProductEditForm 
          product={editingProduct} 
          onUpdateProduct={handleProductUpdated} 
        />
      )}

      <div className="field">
        <div className="control">
          <button onClick={toggleList} className="button">
            {showList ? "Ocultar Lista" : "Listar Produtos"}
          </button>
        </div>
      </div>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {showList && (
        <ListProduct 
          products={products} 
          onEditProduct={setEditingProduct} 
          onDeleteProduct={handleDelete} 
        />
      )}
    </div>
  );
};

export default Home;
