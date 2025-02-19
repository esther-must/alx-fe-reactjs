import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";

function Navbar() {
    return (
      <nav style={{ backgroundColor: "#333", padding: "15px", textAlign: "center", color:"fff", display: "flex", justifyContent: "center" }}>
        <Link to="/" style={{ margin: "10px", color: "#fff", textDecoration: "none", fontSize: "18px" }}><FaHome /> Home</Link>
        <Link to="/about" style={{ margin: "10px", color: "#fff", textDecoration: "none", fontSize: "18px" }}><FaInfoCircle /> About</Link>
        <Link to="/services" style={{ margin: "10px", color: "#fff", textDecoration: "none", fontSize: "18px" }}><FaServicestack /> Services</Link>
        <Link to="/contact" style={{ margin: "10px", color: "#fff", textDecoration: "none", fontSize: "18px" }}><FaEnvelope /> Contact</Link>
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
