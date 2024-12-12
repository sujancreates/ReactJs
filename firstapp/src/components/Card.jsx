import React from 'react';

const Card = ({ title, body }) => {
  return (
    <div className="w-72 p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{body}</p>
    </div>
  );
};

export default Card;
