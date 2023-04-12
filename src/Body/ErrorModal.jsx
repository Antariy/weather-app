import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ErrorModal({ showErrorModal, setShowErrorModal }) {
  
  const handleClose = () => setShowErrorModal(false);
  const handleShow = () => setShowErrorModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Erorr Modal
      </Button>

      <Modal show={showErrorModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> I like to move it, move it
        I like to move it, move it
        I like to move it, move it
        Ya like to move it! </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ErrorModal;