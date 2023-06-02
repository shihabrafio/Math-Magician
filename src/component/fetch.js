import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const category = 'life';
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const key = 'JHzAAtqBCo/fC6qrSuPJZw==A8HADyQ1G1Oe8gTe';
    const fetch = async () => {
      try {
        setload(true);
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': key,
          },
        });
        if (!response.ok) {
          throw new Error('Failed Request');
        }
        const fetchedData = await response.json();
        setdata(fetchedData);
        setload(false);
      } catch (error) {
        seterror(true);
        setload(false);
      }
    };

    fetch();
  }, []);

  if (error) return <div className="error">Something went wrong!</div>;

  if (load) return <div className="loading">Loading...</div>;

  return (
    <ul className="quotes">
      {data.map((item) => (
        <li key={1}>
          {item.quote}
          <br />
          <b><i>{item.author}</i></b>
        </li>
      ))}
    </ul>
  );
};

export default FetchData;
