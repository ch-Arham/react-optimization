import { useState } from 'react';

const ThrottledButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (!isLoading) {
      setIsLoading(true);

      // Perform the desired action
      console.log('Button clicked');

      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Throttle interval of 1000ms
    }
  };

  return (
    <div className='flex justify-center'>
        <button onClick={handleClick} disabled={isLoading}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md ${isLoading && 'opacity-50'}`}
        >
        {isLoading ? (
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
        ) : (
            <span
                className="text-white font-semibold"
            >Click me</span>
        )}
        </button>
    </div>
  );
};

export default ThrottledButton;