import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const JobPreview = () => {
  const post = useSelector((state) => state.post.value);

  return (
    <div className="job-preview">
      <Card>
        <Card.Body>
          <Card.Title className="job-title ">{post.jobTitle}</Card.Title>
          <Card.Subtitle className="job-location h4">
            {post.jobLocation}
          </Card.Subtitle>
          <Card.Text className=" job-details ">{post.jobDescription}</Card.Text>
          <Button className="apply-button" variant="primary">
            View Details
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Posted in: {post.jobDate}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default JobPreview;
