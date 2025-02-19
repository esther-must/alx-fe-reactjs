import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center"}}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            style={{ display: "block", margin: "10px 0" }} 
        />
        <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            style={{ display: "block", margin: "10px 0" }} 
        />
        <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            style={{ display: "block", margin: "10px 0" }} 
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

const formStyle = { display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" };
const buttonStyle = { background: "#333", color: "#fff", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" };

export default Contact;
