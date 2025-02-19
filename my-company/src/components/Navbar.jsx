import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";

function Navbar() {
    return (
      <nav style={{ background: "#333", padding: "15px", textAlign: "center" }}>
        <Link to="/" style={linkStyle}><FaHome /> Home</Link>
        <Link to="/about" style={linkStyle}><FaInfoCircle /> About</Link>
        <Link to="/services" style={linkStyle}><FaServicestack /> Services</Link>
        <Link to="/contact" style={linkStyle}><FaEnvelope /> Contact</Link>
      </nav>
    );
}
  
const linkStyle = {
    margin: "0 15px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
};

export default Navbar;
