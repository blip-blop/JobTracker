import { Alert } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";

const BrowseAllJobs = () => {
  return (
    <div className="browse-all-jobs">
      <Alert variant="light">
        If you want to see more{" "}
        <LinkContainer to="/find-jobs">
          <Alert.Link href="#">view all jobs</Alert.Link>
        </LinkContainer>
      </Alert>
    </div>
  );
};

export default BrowseAllJobs;
