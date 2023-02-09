import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, setShowModal }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.querySelector("#overlays")) : null;
};

const Backdrop = ({setShowModal}) => {
  return <div className="backdrop">
    <button style={{marginTop:"180px"}} onClick={() => setShowModal(false)} >close</button>
  </div>;
};

const ModalOverlay = ({ children }) => {
  return <div className="modal-overlay">{children}</div>;
};

const Modal = ({ children , setShowModal}) => {
  return (
    <>
      <Portal setShowModal={setShowModal}>
        <Backdrop setShowModal={setShowModal} />
      </Portal>
      <Portal>
        <ModalOverlay>{children}</ModalOverlay>
      </Portal>
    </>
  );
};

export default Modal;
