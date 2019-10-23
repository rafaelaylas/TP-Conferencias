import { useEffect, useState } from 'react';

const userConferenceApi = url => {
  const [tvShows, setTvShows] = useState([]);
  useEffect(() => {
    window
      .fetch(url)
      .then(response => response.json())
      .then(data => setTvShows(data.data));
  }, []);
  return tvShows;
};



export default userConferenceApi;
