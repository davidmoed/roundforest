import React, { useState } from "react";
import { Row, Col, Card, Modal, Button } from "react-bootstrap";

import "../styles/product.scss";

const Product = ({ productData, reviews }) => {
  const { title, price, description, images } = productData;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const avgReview =
    reviews.length > 0
      ? `Rating: ${(
          reviews.reduce((sum, review) => sum + review.score, 0) /
          reviews.length
        ).toFixed(1)} (${reviews.length})`
      : "No ratings yet";

  const renderReviews = () => {
    return reviews.map((review) => {
      const { name, review: desc, score } = review;
      return (
        <Row key={name}>
          <h3>
            {name} - {score}
          </h3>
          <p>{desc}</p>
        </Row>
      );
    });
  };

  return (
    <>
      <Col className="productCol">
        <Card bg="primary" border="secondary" className="productCard">
          <Card.Img className="productImg" src={images[0]} alt={title} />
          <Card.Body className="productBody">
            <div className="productDescs">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </div>
            <Row className="productVals" lg={2}>
              <Card.Text>${price}</Card.Text>
              <Card.Text>{avgReview}</Card.Text>
            </Row>
            {reviews.length > 0 && (
              <p className="reviewsLink" onClick={handleShow}>
                See all reviews
              </p>
            )}
          </Card.Body>
        </Card>
      </Col>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        className="reviewsModal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {title} - ${price}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderReviews()}</Modal.Body>
        <Modal.Footer>
          <Button size="lg" variant="outline-primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Product;
