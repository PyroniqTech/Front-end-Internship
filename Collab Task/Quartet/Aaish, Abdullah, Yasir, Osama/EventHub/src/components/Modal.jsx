
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleContentClick = (e) => {
    e.stopPropagation(); 
  };

  return (
    <div
      onClick={onClose} 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
    >
      <div
        onClick={handleContentClick}
        className="bg-white rounded-xl w-full max-w-lg p-6 sm:p-8 shadow-lg relative"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
