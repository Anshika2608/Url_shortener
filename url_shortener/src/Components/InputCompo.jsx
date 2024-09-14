import React, { useState } from 'react';
import axios from 'axios';

function InputComponent() {
  const [url, setUrl] = useState('');
  const [urlId, setUrlId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setUrlId(''); // Clear previous URL ID
    try {
      const response = await axios.post('https://url-shortener-yj9n.onrender.com/submitUrl', { url });
      setUrlId(response.data.urlId);
    } catch (error) {
      console.error('Error submitting URL:', error);
      // Optionally, you can set a message for errors here
    }
    setLoading(false); // Ensure loading state is reset after request completes
    setUrl(''); // Clear the input field
  };

  return (
    <div className='flex flex-col w-72 sm:w-[34rem] rounded-lg border-2 bg-neutral-300 justify-center items-center h-60 sm:h-72 gap-4'>
      <div className='flex gap-4 flex-col'>
        <h2 className='text-2xl font-semibold self-start'>Enter URL</h2>
        <input
          type='text'
          value={url}
          name='url'
          placeholder='Type here...'
          onChange={e => setUrl(e.target.value)}
          className='border-2 border-black rounded-lg w-60 sm:w-96 h-12 p-2'
        />
      </div>
      <div className='text-md text-green-800'>
        {loading ? 'URL ID: Loading...' : urlId ? `URL ID: ${urlId}` : ''}
      </div>
      <button
        className='h-10 w-40 rounded-lg bg-slate-900 text-white text-xl font-semibold'
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default InputComponent;
