import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";
import ExportForm from "./ExportForm";
import { useSelector } from "react-redux";

function SideBar({ handleClose }) {

  const show = useSelector((state) => state.showSideBar);
  const [selectedData, setSelectedData] = useState(null);
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search Weather</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm
          closeSideBar={handleClose}
          selectedData={selectedData}
          setSelectedData={setSelectedData}
        />
        <ExportForm />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SideBar;
