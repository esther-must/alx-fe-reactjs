function Home() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Welcome to Our Company</h1>
        <p>We are dedicated to delivering excellence in all our services.</p>
        <img src="./src/images/home.png" alt="Company Overview" style={imageStyle} />
      </div>
    );
}

const imageStyle = { width: "80%", maxWidth: "600px", marginTop: "20px", borderRadius: "10px" };

export default Home;