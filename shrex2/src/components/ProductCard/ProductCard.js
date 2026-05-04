import './ProductCard.css';

function ProductCard({ product, addToCart, toggleWishlist, isWishlisted, openProduct }) {
  return (
    <div className="product-card" onClick={() => openProduct(product)}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="discount">{product.discount}% off</p>
      <p className="price">₹{product.price.toLocaleString()}</p>
      <button
        className="btn-cart"
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}>
        Add to Cart
      </button>
      <button
        className={`btn-fav ${isWishlisted ? 'active' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product);
        }}>
        {isWishlisted ? 'Added to Favourites' : 'Add to Favourites'}
      </button>
    </div>
  );
}

export default ProductCard;