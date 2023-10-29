import React, { useState } from 'react';

const TextMeaningCapture = () => {
  const [textGroups, setTextGroups] = useState([{ text: '', meaning: '' }]);

  const addTextGroup = () => {
    setTextGroups([...textGroups, { text: '', meaning: '' }]);
  };

  const handleTextChange = (index, text) => {
    const updatedTextGroups = [...textGroups];
    updatedTextGroups[index].text = text;
    setTextGroups(updatedTextGroups);
  };

  const handleMeaningChange = (index, meaning) => {
    const updatedTextGroups = [...textGroups];
    updatedTextGroups[index].meaning = meaning;
    setTextGroups(updatedTextGroups);
  };

  return (
    <div>
      <h2>Text and Meaning Capture</h2>
      {textGroups.map((textGroup, index) => (
        <div key={index}>
          <label htmlFor={`text-${index}`}>Text:</label>
          <input
            type="text"
            id={`text-${index}`}
            value={textGroup.text}
            onChange={(e) => handleTextChange(index, e.target.value)}
          />
          <label htmlFor={`meaning-${index}`}>Meaning:</label>
          <input
            type="text"
            id={`meaning-${index}`}
            value={textGroup.meaning}
            onChange={(e) => handleMeaningChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={addTextGroup}>Add Text Group</button>
    </div>
  );
};

export default TextMeaningCapture;
