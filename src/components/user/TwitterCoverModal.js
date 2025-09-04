import React, { useState, useRef, useEffect } from "react";

const CoverImageModal = ({ src, onClose, isClosing }) => {
  const coverModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        coverModalRef.current &&
        !coverModalRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div
      className={`fixed z-[9999] inset-0 flex items-center justify-center transition-opacity duration-300 ease-out ${isClosing ? 'opacity-0' : 'opacity-100'
        }`}
    >
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-out ${isClosing ? 'opacity-0' : 'opacity-80'
          }`}
        onClick={onClose}
      />

      <div
        className={`relative z-50 max-w-6xl mx-auto p-4 w-full transition-all duration-300 ease-out transform ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}
      >
        <div ref={coverModalRef}>
          <img
            src={src}
            alt="Cover Image"
            className={`mx-auto rounded-lg max-h-[80vh] max-w-full object-contain shadow-2xl transition-all duration-300 ease-out transform ${isClosing ? 'scale-90' : 'scale-100'
              }`}
            style={{ minHeight: '300px' }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

const TwitterCoverModal = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    // Wait for animation to complete before removing modal
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 1000);
  };

  return (
    <div>
      <div
        className="relative cursor-pointer lg:h-96 md:h-80 md:overflow-hidden"
        onClick={openModal}
      >
        <img
          src={image}
          alt="Cover Image"
          className="w-screen md:h-auto object-cover"
        />
      </div>

      {isOpen && <CoverImageModal src={image} onClose={closeModal} isClosing={isClosing} />}
    </div>
  );
};

export default TwitterCoverModal;
