import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { clearState, loginUser } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginForm = () => {
  const { user, isSuccess } = useSelector((state) => state.user);
  const [data, setData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    dispatch(loginUser(data));
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(clearState());
    console.log("dispatched", data);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
    console.log(data);
  };

  return (
    <div className="login-form">
      <Form onSubmit={onSubmit}>
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
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={data.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button type="submit">Sign in</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
