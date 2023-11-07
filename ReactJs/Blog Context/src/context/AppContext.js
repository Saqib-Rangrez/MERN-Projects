import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";

// Step-1 Create Context
export const AppContext = createContext();

// Step-2 create provide function and take childrens
function AppContextProvider ({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // Data filling
    async function fetchBlogPosts (page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error) {
            alert("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function hadnlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }

    // Step-3 enclose all the values in an abject to pass it to childrens
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        hadnlePageChange
    };

    // Step-4 passing the data to children
    // Note : while passing value={data to pass}
    // first tagename will be the name used to create context
    // then use .Provider and in between write the childrens where we want to pass the context API'

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;