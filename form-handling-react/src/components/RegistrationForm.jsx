import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      {errors.username && <p>{errors.username}</p>}
      
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      {errors.email && <p>{errors.email}</p>}
      
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      {errors.password && <p>{errors.password}</p>}
      
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
