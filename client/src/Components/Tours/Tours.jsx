import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ExploreTours() {
  return (
    <><h2>Find your next adventure with these flight deals</h2><Container>
          <Row>
              <Col>
                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src=".../100px180/" alt="Card image cap" />
                      <Card.Body>
                          <Card.Title>Card title 1</Card.Title>
                          <Card.Text>Some quick example text for card 1.</Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
              <Col>
                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src=".../100px180/" alt="Card image cap" />
                      <Card.Body>
                          <Card.Title>Card title 2</Card.Title>
                          <Card.Text>Some quick example text for card 2.</Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
              <Col>
                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src=".../100px180/" alt="Card image cap" />
                      <Card.Body>
                          <Card.Title>Card title 3</Card.Title>
                          <Card.Text>Some quick example text for card 3.</Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      </Container></>
  );
}

export default ExploreTours;
