import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { post } from "../State/reducers/postReducers";
import { postJob } from "../features/posts/postsSlice";

const JobPostForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    jobTitle: "",
    jobLocation: "",
    jobDescription: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  return (
    <div className="job-post-form-container">
      <Form className="job-post-form">
        <h1 className="job-post-form-title">Post A Job Offer</h1>
        <Form.Group as={Row} className="mb-3" controlId="jobPostFormTitle">
          <Form.Label column sm={2}>
            Job Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              name="jobTitle"
              type="text"
              value={data.jobTitle}
              onChange={handleChange}
              placeholder="Enter job title"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="registerFormCity">
          <Form.Label column sm={2}>
            City
          </Form.Label>
          <Col sm={10}>
            <Form.Select
              name="jobLocation"
              value={data.jobLocation}
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
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Job Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              name="jobDescription"
              value={data.jobDescription}
              onChange={handleChange}
              as="textarea"
              rows={3}
              placeholder="Enter job details"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              onClick={() => {
                var today = new Date();
                var date =
                  today.getFullYear() +
                  "-" +
                  (today.getMonth() + 1) +
                  "-" +
                  today.getDate();
                var time = today.getHours() + ":" + today.getMinutes();
                var dateTime = date + " " + time;
                const dataa = {
                  jobTitle: data.jobTitle,
                  jobLocation: data.jobLocation,
                  jobDescription: data.jobDescription,
                  jobDate: dateTime,
                };
                dispatch(postJob(dataa));
              }}>
              Post Job Offer
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default JobPostForm;
