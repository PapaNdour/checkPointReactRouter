import React, { useState } from 'react';

const Filtre = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = e => {
    setTitleFilter(e.target.value);
    onFilter({ title: e.target.value, rating: ratingFilter });
  };

  const handleRatingChange = e => {
    setRatingFilter(e.target.value);
    onFilter({ title: titleFilter, rating: e.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Filtrer par classement"
        value={ratingFilter}
        onChange={handleRatingChange}
      />
      <button>A jouter un film à la liste</button>
    </div>
  );
};

export default Filtre;