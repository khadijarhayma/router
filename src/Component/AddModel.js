import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function AddModel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({
    name:"",
    image:"",
    year:"",
    rating:"",
  })

  return (
    <div>
    <div className="bouton">
      <Button variant="primary" onClick={handleShow}>
        add movie
      </Button>
      </div>

      <Modal show={show} onHide={handleClose} className="movie">
        <Modal.Header closeButton>
          <Modal.Title>add your movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="model">  
          <input placeholder="name" onChange={(e)=>setnewmovie({...newmovie,name:e.target.value})}/>
          <input placeholder="image" onChange={(e)=>setnewmovie({...newmovie,image:e.target.value})}/>
          <input placeholder="year" onChange={(e)=>setnewmovie({...newmovie,year:e.target.value})}/>
          <input placeholder="rating" onChange={(e)=>setnewmovie({...newmovie,rating:e.target.value})}/>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           new movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddModel;
