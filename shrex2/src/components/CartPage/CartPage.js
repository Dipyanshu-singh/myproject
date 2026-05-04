function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart ({cart.length} items)</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '1px solid #ddd',
              padding: '16px',
              marginBottom: '10px',
              borderRadius: '8px'
            }}>
              <span>{item.name}</span>
              <span>₹{item.price.toLocaleString()}</span>
              <button
                onClick={() => removeFromCart(index)}
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total.toLocaleString()}</h3>
          <button style={{
            backgroundColor: '#fb641b',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '4px'
          }}>Place Order</button>
        </>
      )}
    </div>
  );
}

export default CartPage;