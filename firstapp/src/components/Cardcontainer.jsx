import React, { useEffect, useState } from 'react';

const CardContainer = ({ theme }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchCards = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setCards(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load cards');
        setLoading(false);
      }
    };

    fetchCards();
  }, []); // Empty dependency array to run only on mount

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {cards.map(card => (
        <div
          key={card.id}
          className={`p-4 rounded-lg shadow-lg transition-all ${
            theme === 'dark' 
              ? 'bg-gray-800 text-gray-100' 
              : 'bg-white text-gray-900'
          }`}
        >
          <h2 className="font-semibold text-xl upercase">{card.title}</h2>
          <p>{card.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
