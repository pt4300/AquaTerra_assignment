import { React, useEffect, useState } from 'react';

const DogPage = () => {
  const [pictureArray, setPictureArray] = useState([]);

  const getPictureURL = async () => {
    return fetch('https://random.dog/woof.json').then((response) =>
      response
        .json()
        .then((json) => {
          if (!response.ok) {
            return Promise.reject(json);
          }
          return json;
        })
        .catch((error) => {
          console.log(error);
        })
    );
  };
  useEffect(() => {
    if (pictureArray.length < 8) {
      getPictureURL().then((data) => {
        let valid = data.url.includes('.jpg') || data.url.includes('.png') || data.url.includes('.gif');
        if (valid) {
          setPictureArray((fetchedPicture) => [...fetchedPicture, data.url]);
        }
      });
    }
  }, [pictureArray]);

  return (
    <div>
      hello
      {pictureArray.map((picture) => (
        <div>
          {console.log(pictureArray)}
          {picture}
          <img src={picture} alt={'/'} />
        </div>
      ))}
    </div>
  );
};

export default DogPage;
