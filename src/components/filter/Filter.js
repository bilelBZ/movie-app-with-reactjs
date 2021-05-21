import React from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Filter = ({ title, handleChange,ratingChanged }) => {
 
  return (
    <Navbar bg="dark" variant="primary" className="d-flex justify-content-around" style={{marginBottom:'20px'}}>
      <Navbar.Brand href="#home" style={{ fontSize: "2rem", color: "#0394fc" }}>
       Aflemy
      </Navbar.Brand>

      <div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={handleChange}
            value={title}
          />
        </Form>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={30}
          activeColor="#ffd700"
          isHalf={true}
        />
      </div>
    </Navbar>
  );
};

export default Filter;
