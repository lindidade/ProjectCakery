function Footer() {
  const footerStyle = {
    backgroundColor: '#fff0f5',
    padding: '40px 20px',
    marginTop: '50px',
    textAlign: 'center',
    borderTop: '1px solid #ddd'
  };

  return (
    <footer style={footerStyle}>
      <h3>Contact Liney's Cakery</h3>
      <p>📍 Baker Street 15, Cookie City</p>
      <p>📞 +46 123 456 78</p>
      <p>📧 info@lineycakery.com</p>
      <hr style={{ width: '50px', margin: '20px auto' }} />
      <p>© 2026 Liney's Cakery - Handcrafted with love</p>
    </footer>
  );
}

export default Footer;