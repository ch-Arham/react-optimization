import { useEffect, useState } from 'react';

const ThrottledScrollHandler = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      console.log('Scrolled');
    }, 200); // Throttle interval of 200ms

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <p className='fixed top-2'>Scroll Position: {scrollPosition}</p>
      <div>
        Scroll down to see the effect
      </div>
    </div>
  );
};


// Throttle function (IMPORTANT)
const throttle = (callback, delay) => {
  let lastExecuted = 0;
  let timeoutId;

  return function (...args) {
    const now = Date.now();
    const elapsed = now - lastExecuted;

    if (elapsed < delay) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastExecuted = now;
        callback(...args);
      }, delay - elapsed);
    } else {
      lastExecuted = now;
      callback(...args);
    }
  };
};

export default ThrottledScrollHandler;
