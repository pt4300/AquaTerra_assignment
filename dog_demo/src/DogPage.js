import { React, useEffect, useState } from 'react';

const DogPage = () => {
  const [pictureArray, setPictureArray] = useState([]);

  const fetchData = async (input) => {
    let fetchedPicture = [];
    for (let i = 0; i < input; i++) {
      getPictureURL().then((data) => {
        setPictureArray((fetchedPicture) => [...fetchedPicture, data.url]);
      });
    }
    console.log(pictureArray);
  };
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
    fetchData(8);
  }, []);

  return (
    <div>
      hello
      {pictureArray.map((picture) => (
        <div>{picture}</div>
      ))}
    </div>
  );
};

export default DogPage;
