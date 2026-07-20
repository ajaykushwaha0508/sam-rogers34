import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const JoinMovementModalContext = createContext(null);

/**
 * Mounted once in Layout, so any button on any page can open the modal
 * without threading props through every intermediate component.
 */
export function JoinMovementModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openJoinModal = useCallback(() => setIsOpen(true), []);
  const closeJoinModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, openJoinModal, closeJoinModal }), [isOpen, openJoinModal, closeJoinModal]);

  return <JoinMovementModalContext.Provider value={value}>{children}</JoinMovementModalContext.Provider>;
}

/**
 * import { useJoinMovementModal } from '../../context/JoinMovementModalContext';
 * const { openJoinModal } = useJoinMovementModal();
 * <button onClick={openJoinModal}>Join the Movement</button>
 */
export function useJoinMovementModal() {
  const ctx = useContext(JoinMovementModalContext);
  if (!ctx) {
    throw new Error('useJoinMovementModal must be used within JoinMovementModalProvider');
  }
  return ctx;
}
