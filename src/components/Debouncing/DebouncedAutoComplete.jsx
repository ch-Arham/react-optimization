import { useState, useEffect } from 'react';

const DebouncedAutocomplete = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setLoading(true);

      // Simulating an API request
      fetch(`https://api.example.com/search?q=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          setResults(data);
          setLoading(false);
        });
    }, 300);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      {loading ? <div>Loading...</div> : <ul>{results.map(result => <li key={result.id}>{result.name}</li>)}</ul>}
    </div>
  );
};

export default DebouncedAutocomplete;