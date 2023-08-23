import React, { useEffect, useRef } from 'react';

function CustomScrollContainer({ children }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let removed = false;
    let scrollY = 0;

    const handleScrollReset = () => {
      scrollY = container.scrollTop;
    };

    const handleMouseWheel = (e) => {
      e.preventDefault();
      scrollY += 0.5 * e.deltaY; // Adjust the speed factor as needed
      if (scrollY < 0) {
        scrollY = 0;
      } else {
        const limitY = container.scrollHeight - container.clientHeight;
        if (scrollY > limitY) {
          scrollY = limitY;
        }
      }
      container.scrollTop = scrollY;
    };

    container.addEventListener('mouseup', handleScrollReset, false);
    container.addEventListener('mousedown', handleScrollReset, false);
    container.addEventListener('mousewheel', handleMouseWheel, false);

    return () => {
      if (removed) {
        return;
      }
      container.removeEventListener('mouseup', handleScrollReset, false);
      container.removeEventListener('mousedown', handleScrollReset, false);
      container.removeEventListener('mousewheel', handleMouseWheel, false);
      removed = true;
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        width: '100%',
        height: '100vh', // Set the desired height for your scroll container
        overflow: 'auto',
      }}
    >
      {children}
    </div>
  );
}

export default CustomScrollContainer;
