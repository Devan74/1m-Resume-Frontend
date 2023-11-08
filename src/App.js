import React, { useState, useEffect } from 'react';
import './App.css';
import Resume from './components/Resume';
import ColorPicker from './components/ColorPicker';
import { DragDropContext } from 'react-beautiful-dnd';

import { fetchData, updateSectionOrder, updateSectionColor } from './services/api';

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [selectedColor, setSelectedColor] = useState('white');

  useEffect(() => {
    fetchData().then((data) => setResumeData(data));
  }, []);

  const handleSectionOrderChange = (result) => {
    if (!result.destination) {
      return;
    }
  
    const sections = [...resumeData.sections];
    const [reorderedSection] = sections.splice(result.source.index, 1);
    sections.splice(result.destination.index, 0, reorderedSection);
  
    updateSectionOrder(sections);
  };

  const handleColorChange = (color) => {
    updateSectionColor(color);
    setSelectedColor(color);
  };

  return (
    <DragDropContext onDragEnd={handleSectionOrderChange}>
    <div className="App">
      <h1 className='resumep-head'>My Resume</h1>
      {resumeData && (
        <div>
          <ColorPicker selectedColor={selectedColor} onColorChange={handleColorChange} />
          <Resume data={resumeData} onSectionOrderChange={handleSectionOrderChange} selectedColor={selectedColor} />
        </div>
      )}
    </div>
    </DragDropContext>
  );
}

export default App;
