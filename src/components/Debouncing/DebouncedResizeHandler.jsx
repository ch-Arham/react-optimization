import { useEffect } from 'react';

const DebouncedResizeHandler = () => {
  useEffect(() => {
    let debounceTimeout;

    const handleResize = () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        console.log('Window resized');
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(debounceTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>Resize the window</div>;
};

export default DebouncedResizeHandler