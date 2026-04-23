function Navbar() {
  return (
    <nav style={{ padding: '20px', background: '#fff0f5', display: 'flex', justifyContent: 'space-between' }}>
      <h2 style={{ margin: 0 }}>Liney's Cakery</h2>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0 }}>
        <li>Home</li>
        <li>Cakes</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar; 