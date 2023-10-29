import React from 'react';
import DuaCard from './dua-card';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Mock data for Dua cards
const mockData = [
  {
    id: 1,
    name: 'Dua 1',
    arabic: 'الدعاء العربي 1',
    translation: 'Translation of Dua 1',
    transliteration: 'Transliteration of Dua 1',
    count: 10,
    time: 'Morning',
  },
  {
    id: 2,
    name: 'Dua 2',
    arabic: 'الدعاء العربي 2',
    translation: 'Translation of Dua 2',
    transliteration: 'Transliteration of Dua 2',
    count: 5,
    time: 'Evening',
  },
];

const DuaList = () => {
  return (
    <div className="dua-list">
     <Link to="/">Dua List</Link>
      <h1>List of Duas</h1>
      {mockData.map((dua) => (
        <DuaCard key={dua.id} dua={dua} />
      ))}
    </div>
  );
};

export default DuaList;
