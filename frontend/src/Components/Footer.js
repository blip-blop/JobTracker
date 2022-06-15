import { Nav } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer">
      <Nav
        className="justify-content-center"
        bg="dark"
        variant="dark"
        activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">About us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Contact us</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Footer;
