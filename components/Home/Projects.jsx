import React, { useState } from "react";
import Image from "next/image";

import Modal from "../Ui/Modal";

import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdClose } from "react-icons/md";

import image1 from "../../public/altana-wolnostojąca.jpg";
import image2 from "../../public/sklep-z-drewna-klejonego.jpg";
import image3 from "../../public/taras-drewniany-zadaszony.jpg";
import image4 from "../../public/debowe-schody-giete.jpg";
import image5 from "../../public/zadaszony-garaz-wolnostojacy.jpg";
import image6 from "../../public/taras-drewniany-odkryty.jpg";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [images] = useState([image1, image2, image3, image4, image5, image6]);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setShowModal(true);
  };

  const handleNext = () => {
    setSelectedImage((selectedImage + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImage((selectedImage + images.length - 1) % images.length);
  };

  return (
    <section id="projects" className="projects section-padding">
      <h2 className="section-heading">nasze realizacje</h2>
      <div className="container container--p0">
        <div className="projects__container">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(index)}
              className="projects__image-box"
            >
              <Image src={image} alt={`Image ${index + 1}`} width="330" />
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <div className="modal__controls">
            <button
              className="modal__control-btn modal__control-btn--prev"
              onClick={handlePrev}
            >
              <MdOutlineNavigateBefore />
            </button>
            <button
              className="modal__control-btn modal__control-btn--next"
              onClick={handleNext}
            >
              <MdOutlineNavigateNext />
            </button>
            <button
              className="modal__control-btn modal__control-btn--close"
              onClick={() => setShowModal(false)}
            >
              <MdClose />
            </button>
          </div>
          <Image src={images[selectedImage]} />
        </Modal>
      )}
    </section>
  );
};

export default Projects;
