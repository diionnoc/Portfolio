import React from 'react';

/** Modal Context Object */
export const Modal = React.createContext();

/** Modal Context Provider */
export function ModalProvider({ children }) {
  const [images, setImages] = React.useState([]);
  const [selectedImage, setSelectedImage] = React.useState(null);

  /** Modal context for the app */
  const ctx = {
    images: images,
    setImages: setImages,
    selectedImage: selectedImage,
    setSelectedImage: setSelectedImage,
  }

  // Return the Modal.Provider and wrap it around the contents of App.js
  return (
    <Modal.Provider value={ctx}>{children}</Modal.Provider>
  )
}