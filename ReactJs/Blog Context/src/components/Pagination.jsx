import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const {page, hadnlePageChange, totalPages} = useContext(AppContext);

  return (
    
    <div className="fixed bottom-0 bg-white py-2 border-t-2 border-t-gray-300 w-full">
        <div className='flex items-center gap-x-3 w-11/12 max-w-[670px] mx-auto'>
        <div className='flex gap-x-2'>
            {   page > 1 &&
                <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => hadnlePageChange(page-1)}>Previous</button>
            }

            {
                page < totalPages &&
                <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => hadnlePageChange(page+1)}>Next</button>
            }
            </div>

            <p className='text-sm font-semibold ml-auto'>
                page {page} of {totalPages}
            </p>
        </div>
    </div>
  )
}

export default Pagination