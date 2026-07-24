import React from 'react';

const ScrollToTop = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button 
      className="scroll-to-top-btn" 
      onClick={handleScroll}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;