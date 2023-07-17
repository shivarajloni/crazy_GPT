import React, { useState } from 'react'
import axios from "axios";
const App = () => {
  const [prompt, setprompt] = useState("")
  const [response, setResponse] = useState(null);

  const handleClick = async () => {
    await axios.post("http://localhost:8080/chat", { prompt })
              .then(res => {
                setResponse(res.data);
    })
    .catch((err) => console.log(err));
  };

  return (
    <div className='container'>
      <div className='box'>
        <div className='searchBox'>
          <input type="text" placeholder='Ask anhting to AI...' onChange={(e) => setprompt(e.target.value)} value={prompt} />
          <button onClick={handleClick}>Ask AI</button>
        </div>
        {response && (
          <div className='contentBox'>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App