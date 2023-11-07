import React, { useEffect, useState } from 'react';
import axios from "axios";
import Spinner from './Spinner';
import useGif from './useGif';

const Random = () => {

  const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='text-2xl underline uppercase font-bold mt-5'>A Random Gif</h1>

      {loading ? (<Spinner/>) : (<img src={gif} width={450} />)}

      <button className='bg-blue-600 shadow-sm mb-4 w-10/12 opacity-80 rounded-lg text-lg py-2' onClick={() => fetchData()}>
        Generate
      </button>
    </div>
  )
}

export default Random