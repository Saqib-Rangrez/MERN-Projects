import React, { useContext, useEffect } from 'react'
import "./App.css";
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';


export const App = () => {

  const {fetchBlogPosts} = useContext(AppContext);
  
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
      <div className="flex flex-col items-center justify-center ">
        <Header />
        <Blogs />
        <Pagination />
      </div>
  )
}

export default App