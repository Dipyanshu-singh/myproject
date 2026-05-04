function LoginPage({ setPage }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
      backgroundColor: '#f1f3f6'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        width: '350px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#2874f0' }}>Login to Shrex</h2>

        <input
          type="text"
          placeholder="Email or Phone"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />

        <button
          onClick={() => setPage('home')}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#fb641b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
          Login
        </button>

        <p style={{
          textAlign: 'center',
          marginTop: '16px',
          color: '#2874f0',
          cursor: 'pointer'
        }}>
          New to Shrex? Create account
        </p>
      </div>
    </div>
  );
}

export default LoginPage;