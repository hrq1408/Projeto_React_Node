import './App.css';
import ListProduct from './components/ListProduct';
import ProductFormAdd from './components/ProductFormAdd';
import ProductFormEdit from './components/ProductEditForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Management App</h1>
      </header>
      <main className="App-main">
        <ListProduct />
        <ProductFormAdd />
        <ProductFormEdit />
      </main>
      <footer className="App-footer">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;