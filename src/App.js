import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.nasa.gov/planetary/apod?api_key=C5M9QhOcD2rlY44oeqfLfmqNNbmdVQjoqv7wUSYI',
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setPhoto(res);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className='App'>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun
      </p>
      <h1>Photo of the day: {photo.date}</h1>
      <div className='nasa'></div>
      <h3>Title: {photo.title}</h3>
      <img width='500' src={photo.url} key={photo.url} alt={photo.url}></img>
      <h3>Explanation:</h3>
      <p>{photo.explanation}</p>
    </div>
  );
}

export default App;
