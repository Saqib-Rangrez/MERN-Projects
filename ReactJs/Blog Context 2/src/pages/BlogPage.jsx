import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog"
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}?blogId=${blogId}`;
        console.log(url);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log("Blog Id response",data);
            setBlog(data.blog);
            console.log("Blog Id",data.blog)
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error in fetching",error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(blogId){
            fetchRelatedBlogs();
        }
        
    }, [location.pathname]);

  return (
    <div className='flex flex-col justify-center items-center'>
        <Header/>

        <div className='w-11/12 max-w-[670px] mt-[5rem]  mx-auto flex gap-x-3 items-center'>
            <button className="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={() => navigation(-1)}>
                Back
            </button>
        </div>
        <div className='flex flex-col justify-center items-center w-11/12 max-w-[670px]'>
            {
                loading ? <p>Loading...</p>:
                blog ? (
                <div className='mt-4 mb-4'>
                    <BlogDetails post={blog} />

                    <div className='h-1 w-11/12 bg-black mt-6'></div>

                    <h2 className='font-bold text-2xl p-y-4 mt-6'>Related Blogs</h2>
                    <div className='mt-2 flex flex-col gap-y-4'>
                    {
                        relatedBlogs.map((post) => 
                            (
                                    <BlogDetails key={post.id} post={post}/>
                            )
                        )
                    }
                    </div>
                </div>) : 
                (<div><p>No Blog Found</p></div>)
            }
        </div>
    </div>
  )
}

export default BlogPage