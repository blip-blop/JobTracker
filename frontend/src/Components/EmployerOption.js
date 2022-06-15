import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const EmployerOption = () => {
  return (
    <div className="employer-option">
      <Card>
        <Card.Body className="emp-card-text">
          <Card.Title>If you're here to hire:</Card.Title>
          <LinkContainer to="/post-jobs">
            <Card.Link>Post a Job</Card.Link>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EmployerOption;
