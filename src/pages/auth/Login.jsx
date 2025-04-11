import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });

    // Login User & Admin
    if (email === "user@gmail.com" && password === "user123") {
      localStorage.setItem("user", true); // Simpan status login
      navigate("/home");
    } else if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("admin", true); // Simpan status login
      navigate("/dashboard");
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "400px", padding: "2rem", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
        <h2 className="text-center mb-2" ><b>NBA Insider</b></h2>
        <h3 className="text-center">Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Masukkan email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Masukkan password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </Form.Group>
          <div className="w-100 d-flex justify-content-center mt-5">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
