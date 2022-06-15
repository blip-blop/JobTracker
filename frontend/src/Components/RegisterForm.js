import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { reset } from "../State/reducers/authSlice";
import { register } from "../State/reducers/userSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    zip: "",
    selectedCity: "",
    role: "",
  });

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

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    if (isError) {
      console.error(message);
    }

    if (isSuccess || user) {
      navigate("/profile");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
    } else {
      dispatch(
        register({
          firstName,
          lastName,
          phone,
          zip,
          selectedCity,
          email,
          password,
          role,
        })
      );
    }
  };

  return (
    <div className="register-form ">
      <h1>Sign Up</h1>
      <Form>
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
        <Form.Group as={Row} className="mb-2">
          <Form.Label as="legend" column sm={10}>
            Create account as
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Employee"
              name="role"
              value={"Employee"}
              id="formHorizontalRadios1"
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              label="Employer"
              name="role"
              value={"Employer"}
              id="formHorizontalRadios2"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group controlId="registerFormImage" className="mb-3">
          <Form.Label>Upload your profile picture</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="registerFormCV" className="mb-3">
          <Form.Label>Upload your resume (CV)</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Button onClick={onSubmit}>Create account</Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
