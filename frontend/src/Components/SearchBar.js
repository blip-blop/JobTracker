import { Form, FormControl, Button } from "react-bootstrap";
const SearchBar = () => {
  return (
    <div>
      <div className="search-bar">
        <Form className="d-inline-flex">
          <FormControl
            type="search"
            placeholder="Job keywords"
            className="me-3"
            aria-label="Search"
          />
          <FormControl
            type="search"
            placeholder="Location"
            className="me-3"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    </div>
  );
};

export default SearchBar;
