// src/App.jsx

import  { useEffect, useState } from 'react';
import {getMotivationalQuote} from './quoteService.jsx'
import TaskList from './TaskList.jsx';

const App1 = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const data = await getMotivationalQuote();
        setQuote(data.quote); // Adjust if the response structure is different
        setAuthor(data.author || 'Unknown'); // Adjust if the response structure is different
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch quote');
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <>
      <div className="App">
      
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
        
        <div>
          <marquee>
          <p>"{quote}"</p>
          <p>- {author}</p>
          </marquee>
         
        </div>
      )}
    </div>
    <div>
    <TaskList />
    </div>
    </>
  
  );
};

export default App1;




