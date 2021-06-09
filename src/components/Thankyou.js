import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Thankyou() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div class="jumbotron text-center">
      <h1 class="display-3">Gracias por tu compra!</h1>
      <i style={{ color: "green" }} class="fas fa-check-circle  fa-5x"></i>
      <p class="lead">
        <strong>Por favor revisa tu email</strong> para hacer el seguimiento de
        tu paquete
      </p>
      <hr />
      <p>
        Algun problema?{" "}
        <Button variant="primary" onClick={handleShow}>
          Contactanos!
        </Button>
      </p>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Envia tu consulta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripcion del problema </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enviar consulta
          </Button>
        </Modal.Footer>
      </Modal>

      <p class="lead">
        <a class="btn btn-primary btn-sm" href="/CoderHouse" role="button">
          Retornar a pagina principal
        </a>
      </p>
    </div>
  );
}

export default Thankyou;
