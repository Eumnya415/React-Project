import React, { useState } from 'react';
import axios from '../node_modules/axios/index';

const App = () => {
  const [data,setData] = useState(null);
  const onClick = async () => {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=822dc0d8a8294d50b70237bbe4bb4408');
      setData(response);
  };
  return (
    <div>
      <button onClick={onClick}>불러오기</button>
      <div>
      {data && <textarea value={JSON.stringify(data,null,2)} />}
      </div>
    </div>
  );
};

export default App;