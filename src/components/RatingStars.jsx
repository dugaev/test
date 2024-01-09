import React, { useState } from "react";

const RatingStars = () => {
  const [rating, setRating] = useState(0);
  const [votes, setVotes] = useState(0);


  const handleRating = (value) => {
    setRating(value);
    setVotes((prevVotes) => prevVotes + 1); 
  };

  return (
    <div className="flex flex-col mt-9 mb-6">
      <h2 className="text-blue-400 uppercase">Пункт видачі</h2>
      <div className="flex items-center mt-2 px-2">
        <input type="checkbox" id="gupCheckbox" className="mr-2" />
        <label htmlFor="gupCheckbox">Відділення GUP</label>
      </div>
      <div className="mt-4 flex flex-col justify-center text-center">
        <h3 className="font-bold">Оцініть цю категорію</h3>
        <div className="flex items-center mt-2 justify-center">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              role="button"
              onClick={() => handleRating(index + 1)}
              style={{ cursor: "pointer" }}
            >
              {index < rating ? "⭐" : "☆"}
            </span>
          ))}
        </div>
        <div className="flex items-center mt-1 justify-center">
          <span className="text-sm text-gray-400">Всього голосів:</span>
          <span className="text-sm ml-1 text-gray-400">{votes}</span>
        </div>
      </div>
    </div>
  );
};

export default RatingStars;
