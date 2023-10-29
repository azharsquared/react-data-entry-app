import React from 'react';

const DuaCard = ({ dua }) => {
  return (
    <div className="dua-card" style={{border:'2px solid '}}>
      <h3>{dua.name}</h3>
      <p><strong>Dua in Arabic:</strong> {dua.arabic}</p>
      <p><strong>Dua Translation:</strong> {dua.translation}</p>
      <p><strong>Dua Transliteration:</strong> {dua.transliteration}</p>
      <p><strong>Dua Count:</strong> {dua.count}</p>
      <p><strong>Dua Time:</strong> {dua.time}</p>
    </div>
  );
};

export default DuaCard;
