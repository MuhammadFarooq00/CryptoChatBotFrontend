import React from 'react';
import { FaQuestionCircle, FaLightbulb, FaExclamationTriangle } from 'react-icons/fa';

function ImageLayout() {
  const cardData = [
    {
      title: 'Explore',
      description: 'Learn how to use ChatGPT platform for your needs',
      icon: <FaQuestionCircle />,
      image: 'https://example.com/explore.jpg', // Replace with your image URL
      text: '"Explain"',
      description2: 'Quantum computing in simple terms',
    },
    {
      title: 'Capabilities',
      description: 'How much capable ChatGPT to fullfill your needs',
      icon: <FaLightbulb />,
      image: 'https://example.com/capabilities.jpg', // Replace with your image URL
      text: '"Remember"',
      description2: 'Quantum computing in simple terms',
    },
    {
      title: 'Limitation',
      description: 'How much capable ChatGPT to fullfill your needs',
      icon: <FaExclamationTriangle />,
      image: 'https://example.com/limitation.jpg', // Replace with your image URL
      text: '"May"',
      description2: 'Occasionally generate incorrect information',
    },
    // Add more cards as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white rounded-full p-3">
              {card.icon}
            </div>
            <h2 className="text-xl font-bold ml-4">{card.title}</h2>
          </div>
          <p className="text-gray-700 mb-4">{card.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <img src={card.image} alt={card.title} className="w-full rounded-lg" />
              <p className="text-center mt-2">{card.text}</p>
              <p className="text-center text-gray-500">{card.description2}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <img src={card.image} alt={card.title} className="w-full rounded-lg" />
              <p className="text-center mt-2">{'How to'}</p>
              <p className="text-center text-gray-500">{'Make a search engine platform like Google'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageLayout;