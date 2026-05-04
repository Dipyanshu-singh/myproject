function Navbar({ cart, setPage, search, setSearch, wishlist }) {
  return (
    <nav style={{
      backgroundColor: '#2874f0',
      padding: '10px 16px',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: '10px'
    }}>
      <h2
        onClick={() => setPage('home')}
        style={{ color: 'white', margin: 0, cursor: 'pointer', fontSize: '20px' }}>
        Shrex
      </h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '8px',
          fontSize: '14px',
          width: '100%',
          borderRadius: '4px',
          border: 'none'
        }}
      />

      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => setPage('login')}
          style={{ padding: '8px 10px', fontWeight: 'bold', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
          Login
        </button>
        <button
          style={{ padding: '8px 10px', fontWeight: 'bold', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
          ❤️{wishlist.length}
        </button>
        <button
          onClick={() => setPage('cart')}
          style={{ padding: '8px 10px', fontWeight: 'bold', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
          🛒{cart.length}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;