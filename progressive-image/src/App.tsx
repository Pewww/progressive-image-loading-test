import React from 'react';
import './App.css';
import ImageComp from './components/ImageComp';
import images from './constants/images';

function App() {
  return (
    <div className="App">
      {images.map((src, idx) => (
        <ImageComp
          key={src}
          src={src}
          alt={`테스트용 이미지 - ${idx + 1}`}
          // isProgressive
        />
      ))}
    </div>
  );
}

export default App;
