import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const LoginForm = () => {
  const [data, setData] = useState({ email: "" });
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  return (
    <div className="login-form">
      <Form>
        <h1>Sign In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />{" "}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
