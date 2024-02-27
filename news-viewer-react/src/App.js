import React from 'react';
import axios from '../node_modules/axios/index';

const App = () => {
  const [data,setData] = useState(null);
  const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      setData(response);
    });
  return (
    <div>
      <button onClick={onClick}>불러오기</button>
    </div>
  );
};

export default App;