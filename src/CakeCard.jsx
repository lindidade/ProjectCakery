function CakeCard({ name, price, description, image }) {
  
  
  const handleClick = () => {
   
    const section = document.getElementById('about-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    width: '250px',
    textAlign: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden' 
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '4px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  };

  return (
    <div style={cardStyle}>
      <img 
        src={image} 
        alt={name} 
        style={imageStyle} 
        onClick={handleClick}
        // Enkel hover-effekt med JavaScript
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>Price: {price} SEK</strong></p>
    </div>
  );
}

export default CakeCard;