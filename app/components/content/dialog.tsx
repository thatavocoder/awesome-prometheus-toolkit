import React from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-overlay bg-opacity-50 cursor-default"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        tabIndex={-1}
        role="button"
      />
      <div
        className="bg-white w-max max-w-4/5 z-50 shadow-custom rounded-lg max-h-4/5 overflow-y-scroll overflow-x-hidden no-scrollbar"
        style={{ transitionDuration: '300ms' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
