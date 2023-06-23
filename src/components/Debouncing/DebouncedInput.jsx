import { useState, useEffect } from "react";

const DebouncedInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      // Perform the desired action, e.g., make API request
      console.log(`Fetching results for: ${searchTerm}`);
    }, 500);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-gray-800">Debounced Input</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className="mt-4 px-4 py-2 border-none outline-none rounded-md"
        placeholder="check console"
      />
    </div>
  );
};

export default DebouncedInput;
