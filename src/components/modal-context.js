'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

const ModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  modalContent: null,
  setModalContent: () => {},
});

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = useCallback((content) => {
    setModalContent(content);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalContent(null);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalContent, setModalContent }}>
      {children}
      {isOpen && (
        <div className="modal-backdrop" onClick={closeModal} style={{position: 'fixed', top:0, left:0, right:0, bottom:0, background: 'rgba(0,0,0,0.5)', zIndex: 1000}}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{background: '#fff', margin: '10% auto', padding: 20, borderRadius: 8, maxWidth: 500, position: 'relative'}}>
            <button onClick={closeModal} style={{position: 'absolute', top: 10, right: 10}}>×</button>
            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}
