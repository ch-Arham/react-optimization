import { useState } from 'react';

const ThrottledAutocomplete = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Throttle interval of 300ms (adjust to your needs)
    throttle(() => {
      setLoading(true);

      // Simulating an API request
      fetch(`https://api.example.com/search?q=${value}`)
        .then(response => response.json())
        .then(data => {
          setResults(data);
          setLoading(false);
        });
    }, 300);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      {loading ? <div>Loading...</div> : <ul>{results.map(result => <li key={result.id}>{result.name}</li>)}</ul>}
    </div>
  );
};

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

export default ThrottledAutocomplete;