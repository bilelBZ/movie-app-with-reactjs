import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({handleAdd}) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [rate, setRate] = useState(0)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
      e.preventDefault();
      const newMovie = {
          id:Math.random(),
          title,
          posterUrl:url,
          rate
      }
      if (title && url && rate){
          handleAdd(newMovie)
          setRate()
          setTitle('')
          setUrl("")
          handleClose()
      }
      else alert("Missing fields")
  }
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              onChange={e => setTitle(e.target.value)}
            />

            <label htmlFor="image">Image</label>
            <input
              type="url"
              name="image"
              id="image"
              className="form-control"
              onChange={e => setUrl(e.target.value)}

            />
            <label htmlFor="rate">Rate</label>
            <input
              type="number"
              name="rate"
              id="rate"
              className="form-control"
              onChange={e => setRate(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AddMovie;
