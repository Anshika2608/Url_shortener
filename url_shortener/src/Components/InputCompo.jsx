import React,{useState} from 'react'
import axios from "axios"
function InputComponent() {
    const [url,setUrl]=useState("");
    const handleSubmit = async () => {
      try {
        console.log("Submitting URL:", { url }); 
        const response = await axios.post("https://url-shortener-yj9n.onrender.com/submitUrl", { url });
    
        console.log(response.data);
      } catch (error) {
        console.error("Error submitting URL:", error);
      }
    };
  return (
    <>
       <div className='flex flex-col  w-[34rem] rounded-lg border-2 border-black  bg-neutral-200  justify-center items-center h-72 gap-6'>
        <div className='flex gap-4 flex-col'>
        <h2 className='text-2xl font-semibold self-start '>Enter URL:</h2>
        <input type="text" value={url} name="url" placeholder="Type here..." onChange={e=>setUrl(e.target.value)} className='border-2 border-black rounded-lg w-96 h-12 p-2'/>
        </div>
        <button className='h-10 w-40 rounded-lg bg-green-500 text-white text-xl font-semibold' onClick={handleSubmit}>
            Submit
        </button>
       </div>
    </>
  )
}

export default InputComponent