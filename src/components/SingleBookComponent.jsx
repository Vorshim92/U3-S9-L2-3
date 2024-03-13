import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { allGenres } from "./CardComponent";

function GenerateCard({ asin, genre }) {
  const book = allGenres[genre].find((book) => book.asin === asin);
  console.log(book);
  return (
    <Container fluid className="mb-5">
      <Row className="justify-content-center">
        <h2 className="my-3 text-center">Ecco i nostri Libri!!</h2>
        <Col xs={2} key={book.asin}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={book.img} style={{ height: "400px" }} />
            <Card.Body>
              <Card.Title style={{ height: "100px" }}>{book.title}</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <small className="">{book.category}</small>
              <Button variant="primary">COMPRA</Button>
              <small className="">{book.price}€</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GenerateCard;