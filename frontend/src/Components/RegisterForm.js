import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  signupUser,
  userSelector,
  clearState,
} from "../features/users/userSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    userSelector
  );
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    zip: "",
    selectedCity: "",
    role: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
    } else {
      dispatch(signupUser(data));
    }
  };

  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    zip,
    selectedCity,
    role,
  } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
    }
    if (isError) {
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  return (
    <div className="register-form ">
      <h1>Sign Up</h1>
      <Form onSubmit={onSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="registerFormFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              value={firstName}
              onChange={handleChange}
              required
              placeholder="Enter first name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="registerFormLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              value={lastName}
              onChange={handleChange}
              required
              placeholder="Enter last name"
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="registerFormEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerFormPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            required
            placeholder="Enter password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerFormConfirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            name="cPass"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Re-enter your password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerFormPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            name="phone"
            type="text"
            value={phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </Form.Group>
        <Form.Group controlId="registerFormCity">
          <Form.Label>City</Form.Label>
          <Form.Select
            name="selectedCity"
            value={selectedCity}
            onChange={handleChange}>
            <option>...</option>
            <option value="Tunis">Tunis</option>
            <option value="Ariana">Ariana</option>
            <option value="Ben Arous">Ben Arous</option>
            <option value="Manouba">Manouba</option>
            <option value="Bizert">Bizert</option>
            <option value="Nabeul">Nabeul</option>
            <option value="Beja">Beja</option>
            <option value="Jendouba">Jendouba</option>
            <option value="Zaghouan">Zaghouan</option>
            <option value="Siliana">Siliana</option>
            <option value="Le Kef">Le Kef</option>
            <option value="Sousse">Sousse</option>
            <option value="Monastir">Monastir</option>
            <option value="Mahdia">Mahdia</option>
            <option value="Kasserine">Kasserine</option>
            <option value="Sidi Bouzid">Sidi Bouzid</option>
            <option value="Kairouane">Kairouane</option>
            <option value="Gabes">Gabes</option>
            <option value="Sfax">Sfax</option>
            <option value="Gafsa">Gafsa</option>
            <option value="Medenine">Medenine</option>
            <option value="Touzeur">Touzeur</option>
            <option value="Kebili">Kebili</option>
            <option value="Tataouine">Tataouine</option>
          </Form.Select>
        </Form.Group>

        <Row>
          <Form.Group as={Col} controlId="registerFormZip">
            <Form.Label>Zip code</Form.Label>
            <Form.Control
              name="zip"
              type="text"
              value={zip}
              onChange={handleChange}
              required
              placeholder="Enter Zip code"
            />
          </Form.Group>
        </Row>

        <Form.Group controlId="registerFormRole">
          <Form.Label>Account Type</Form.Label>
          <Form.Select name="role" value={role} onChange={handleChange}>
            <option>...</option>
            <option value="Employer">Employer</option>
            <option value="Employee">Employee</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="registerFormImage" className="mb-3">
          <Form.Label>Upload your profile picture</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="registerFormCV" className="mb-3">
          <Form.Label>Upload your resume (CV)</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <div className="reg-button-container">
          <Button className="reg-button" type="submit">
            Create Account
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
