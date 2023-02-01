import { React, useEffect, useState } from 'react';
import './DogPage.css';

const DogPage = () => {
  const [pictureArray, setPictureArray] = useState([]);
  const [index, setIndex] = useState(0);
  async function fetchData() {
    //re-fetch images if the array does not contain 8 images
    if (index >= 8) {
      console.log(pictureArray);
      return;
    }
    // initial the request
    const res = await fetch(`https://random.dog/woof.json`);
    const data = await res.json();
    //only accepting valid type picture
    if (
      data.url.toLowerCase().includes('jpg') ||
      data.url.toLowerCase().includes('jpeg') ||
      data.url.toLowerCase().includes('png') ||
      data.url.toLowerCase().includes('mp4') ||
      data.url.toLowerCase().includes('gif')
    ) {
      setIndex((prevIndex) => prevIndex + 1);
      setPictureArray((fetchedPicture) => [...fetchedPicture, data.url]);
    } else {
      setIndex((prevIndex) => prevIndex);
    }
  }

  const generateNewImages = () => {
    setPictureArray([]);
    setIndex(0);
  };

  useEffect(() => {
    fetchData();
  }, [index, pictureArray]);

  return (
    <div>
      <div className="title">Welcome to Dog collection</div>
      <div className="gridContainer">
        {pictureArray.map((image) => (
          <div>
            <div className="gridItem" key={image}>
              {image.endsWith('.mp4') ? (
                <video className="gridItem" src={image} controls />
              ) : (
                <img className="gridItem" src={image} alt="Image" />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="buttonContainer">
        <button
          className="fetchButton"
          type="button"
          onClick={() => {
            generateNewImages();
          }}
        >
          Fetch New Images
        </button>
      </div>
    </div>
  );
};

export default DogPage;
