import './Coursel.css'
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function Coursel() {
  const [adults, setAdults] = useState(1); // Initial number of adults
  const [children, setChildren] = useState(0); // Initial number of children
  const [infants, setInfants] = useState(0); // Initial number of infants

  const handleAdultsChange = (value) => {
    if (value >= 0) {
      setAdults(value);
    }
  };

  const handleChildrenChange = (value) => {
    if (value >= 0) {
      setChildren(value);
    }
  };

  const handleInfantsChange = (value) => {
    if (value >= 0) {
      setInfants(value);
    }
  };

  const handleSearch = () => {
    // Perform search logic here
    console.log('Performing search...');
    console.log('From Where:', document.getElementById('fromWhere').value);
    console.log('Where To:', document.getElementById('whereTo').value);
    console.log('Departure:', document.getElementById('departure').value);
    console.log('Return:', document.getElementById('return').value);
    console.log('Adults:', adults);
    console.log('Children:', children);
    console.log('Infants:', infants);
  };

  const guestPopover = (
    <Popover id="guest-popover" className="guest-popover">
      <div className="guest-item">
        <span className="guest-label">Adults:</span>
        <Button variant="outline-secondary" onClick={() => handleAdultsChange(adults - 1)}>-</Button>
        <span>{adults}</span>
        <Button variant="outline-secondary" onClick={() => handleAdultsChange(adults + 1)}>+</Button>
      </div>
      <div className="guest-item">
        <span className="guest-label">Children:</span>
        <Button variant="outline-secondary" onClick={() => handleChildrenChange(children - 1)}>-</Button>
        <span>{children}</span>
        <Button variant="outline-secondary" onClick={() => handleChildrenChange(children + 1)}>+</Button>
      </div>
      <div className="guest-item">
        <span className="guest-label">Infants:</span>
        <Button variant="outline-secondary" onClick={() => handleInfantsChange(infants - 1)}>-</Button>
        <span>{infants}</span>
        <Button variant="outline-secondary" onClick={() => handleInfantsChange(infants + 1)}>+</Button>
      </div>
    </Popover>
  );

  return (
    <div className="container"> 
    <h1 id='coursel-h1'>
        It's More than <br/>
        Just a trip
    </h1>
      <Container>
        <Form>
          <div className="horizontal-form">
          <Form.Label className="form-label">From Where</Form.Label>
            <Form.Control id="fromWhere" className="horizontal-form-item" type="text" placeholder="From Where" />
            <Form.Label className="form-label">Where To</Form.Label>
            <Form.Control id="whereTo" className="horizontal-form-item" type="text" placeholder="Where To" />
            <Form.Label className="form-label">Departure Date</Form.Label>
            <Form.Control id="departure" className="horizontal-form-item" type="date" />
            <Form.Label className="form-label">Return Date</Form.Label>
            <Form.Control id="return" className="horizontal-form-item" type="date" />
            <div className="horizontal-form-item">
              <OverlayTrigger trigger="click" placement="bottom" overlay={guestPopover} rootClose>
                <Button className="guest-button">Guests</Button>
              </OverlayTrigger>
            </div>
            <Button className="horizontal-form-item" variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Coursel;
