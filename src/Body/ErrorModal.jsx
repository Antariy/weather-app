import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ErrorModal({ showErrorModal, setShowErrorModal }) {
  
  const handleCloseErrorModal = () => setShowErrorModal(false);
  
  return (
    <>
        <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> I like to move it, move it
        I like to move it, move it
        I like to move it, move it
        Ya like to move it! </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseErrorModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseErrorModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ErrorModal;