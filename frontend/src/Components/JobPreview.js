import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const JobPreview = () => {
  const { jobTitle, jobDescription, jobLocation, jobDate } = useSelector(
    (state) => state.post
  );

  return (
    <div className="job-preview">
      <Card>
        <Card.Body>
          <Card.Title className="job-title ">{jobTitle}</Card.Title>
          <Card.Subtitle className="job-location h4">
            {jobLocation}
          </Card.Subtitle>
          <Card.Text className=" job-details ">{jobDescription}</Card.Text>
          <Button className="apply-button" variant="primary">
            View Details
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">Posted in: {jobDate}</Card.Footer>
      </Card>
    </div>
  );
};

export default JobPreview;
