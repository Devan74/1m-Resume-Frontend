import React from 'react';

function ColorPicker({ selectedColor, onColorChange }) {
  return (
    <div className="color-picker">
      <label>Select Background Color:</label>
      <select value={selectedColor} onChange={(e) => onColorChange(e.target.value)}>
        <option value="white">White</option>
        <option value="lightgrey">Light Grey</option>
        <option value="lightblue">Light Blue</option>
      </select>
    </div>
  );
}

export default ColorPicker;
