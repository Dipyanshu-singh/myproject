import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';
import CartPage from './components/CartPage/CartPage';
import LoginPage from './components/LoginPage/LoginPage';
import ProductDetail from './components/ProductDetail/ProductDetail';
import products from './data/products';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('home');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.find(item => item.id === product.id);
    if (exists) {
      setWishlist(prev => prev.filter(item => item.id !== product.id));
    } else {
      setWishlist(prev => [...prev, product]);
    }
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setPage('detail');
  };

  let filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === 'low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sort === 'high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="app">
      <Navbar
        cart={cart}
        setPage={setPage}
        search={search}
        setSearch={setSearch}
        wishlist={wishlist}
      />

      {page === 'home' && (
        <div>
          <div style={{ padding: '10px 20px' }}>
            <select
              onChange={(e) => setSort(e.target.value)}
              style={{ padding: '8px', fontSize: '14px' }}>
              <option value="">Sort by</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                isWishlisted={wishlist.some(item => item.id === product.id)}
                openProduct={openProduct}
              />
            ))}
          </div>
        </div>
      )}

      {page === 'cart' && (
        <CartPage cart={cart} removeFromCart={removeFromCart} />
      )}

      {page === 'login' && (
        <LoginPage setPage={setPage} />
      )}

      {page === 'detail' && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          addToCart={addToCart}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default App;