import './ProductDetail.css';

function ProductDetail({ product, addToCart, setPage }) {
  return (
    <div className="product-detail">

      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-detail-info">
        <button className="back-btn" onClick={() => setPage('home')}>
          ← Back to Home
        </button>

        <h1>{product.name}</h1>

        <p className="discount">{product.discount}% off</p>

        <h2 className="price">₹{product.price.toLocaleString()}</h2>

        <p className="mrp">
          MRP ₹{Math.round(product.price / (1 - product.discount / 100)).toLocaleString()}
        </p>

        <div className="btn-group">
          <button
            className="btn-addtocart"
            onClick={() => addToCart(product)}>
            Add to Cart
          </button>

          <button
            className="btn-buynow"
            onClick={() => {
              addToCart(product);
              setPage('cart');
            }}>
            Buy Now
          </button>
        </div>
      </div>

    </div>
  );
}

export default ProductDetail;