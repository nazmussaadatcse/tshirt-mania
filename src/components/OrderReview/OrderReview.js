import {useState} from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    // console.log('value is:', event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={message}
      />

      <h2>Review Message: {message}</h2>
    </div>
  );
};

export default App;
