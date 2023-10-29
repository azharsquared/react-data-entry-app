import React, { useState } from 'react';
import TextMeaningCapture from './TextMeaningCapture';

const DuaCapture = () => {
  const [duaInfo, setDuaInfo] = useState({
    name: '',
    arabic: '',
    translation: '',
    transliteration: '',
    count: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDuaInfo({
      ...duaInfo,
      [name]: value,
    });
  };

  const saveDua = () => {
    console.log('saveDua');
  };

  return (
    <div>
    <div>
      <h2>Dua Capture</h2>
      <form>
        <div>
          <label htmlFor="name">Dua Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={duaInfo.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="arabic">Dua in Arabic:</label>
          <textarea
            type="text"
            id="arabic"
            name="arabic"
            value={duaInfo.arabic}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="translation">Dua Translation:</label>
          <textarea
            type="text"
            id="translation"
            name="translation"
            value={duaInfo.translation}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="transliteration">Dua Transliteration:</label>
          <textarea
            type="text"
            id="transliteration"
            name="transliteration"
            value={duaInfo.transliteration}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="count">Dua Count:</label>
          <input
            type="number"
            id="count"
            name="count"
            value={duaInfo.count}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
    <div>
        <TextMeaningCapture/>
    </div>
    <button onClick={saveDua}>Save</button>
    </div>
  );
};

export default DuaCapture;
