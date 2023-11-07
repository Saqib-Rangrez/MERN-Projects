import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className={`flex flex-col gap-y-10 my-4 justify-center items-center ${loading ? "mt-0 mb-0" : "mt-[80px] mb-[80px]"}`}>
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">Loading...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="max-w-[670px] w-11/12 ">
            <BlogDetails post={post} />
          </div>
        ))
      )}
    </div>
  );
}
