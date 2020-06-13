import React from 'react';
import './App.css';
import ImageComp from './components/ImageComp';

const images = [...new Array(20)];

function App() {
  return (
    <div className="App">
      {images.map((_, idx) => (
        <ImageComp
          key={idx}
          src="https://wallpaperaccess.com/full/817028.jpg"
          alt="테스트용 이미지"
          isProgressive
        />
      ))}
    </div>
  );
}

export default App;
