import React, { useEffect, useState } from 'react';
import axios from "axios";
import Spinner from './Spinner';
import useGif from './useGif';

const Tag = () => {
  const [tag, setTag] = useState('');
  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='w-1/2 min-h-[450px] mb-4 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      
      <h1 className='text-2xl underline uppercase font-bold mt-5'>Random Gif</h1>

      {loading ? (<Spinner/>) : (<img src={gif} width={450} />)}

      <input className='w-10/12 shadow-sm mb-4  rounded-lg text-lg py-2 text-center'
      placeholder='Enter tag' 
      onChange={(event) => setTag(event.target.value)} value={tag} onKeyDown={(event) => {
        if(event.key === "Enter"){
          if(event.target.value !== ''){
            fetchData(tag);
          }
        }
      }}
      />

      <button className='bg-green-500 shadow-sm mb-4 w-10/12 opacity-80 rounded-lg text-lg py-2' onClick={() => fetchData(tag)} >
        Generate
      </button>
    </div>
  )
}

export default Tag