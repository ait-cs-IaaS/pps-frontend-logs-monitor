// GifColumn.js
import React from 'react';
import './GifColumn.css';

const GifColumn = ({ gifList, columnTitle }) => {
  return (
    <div className="gif-column">
      <h2>{columnTitle}</h2>
      <ul>
        {gifList.map((gif, index) => (
          <li key={gif.id || index} className="gif-entry">
            <img src={`./src/${gif.src}`} alt={`GIF ${index + 1}`} width="600" height="400" />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GifColumn;
