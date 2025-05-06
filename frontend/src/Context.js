import React, { useState, useContext, createContext } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [cat, setCat] = useState("");

  const handleCatSelect = (e) => {
    setCat(e.target.value);
    setPageNumber(0);
  };

  const fetchPosts = ({pageParam = 0}) =>
    fetch(
      `http://localhost:3005/posts?page=${pageParam}&category=${cat}`
    ).then((res) => res.json());

    const {
      data,
      isLoading,
      isFetching,
      isFetchingNextPage,
      fetchNextPage,
      hasNextPage,
    } = useInfiniteQuery(
      ["articles", cat], 
      fetchPosts,
      {
        getNextPageParam: (lastPage, pages) => {
          if(lastPage.page < lastPage.totalPages) return lastPage.page + 1;
          return false;
        },
        
        refetchOnWindowFocus: false,
        cacheTime: 1000 * 60 * 60 * 24,
      }
    );

    const allPosts = data?.pages?.flatMap((page) => page.posts) || []; 

  return (
    <AppContext.Provider
      value={{
        cat,
        isLoading,
        fetchNextPage,
        hasNextPage,
        allPosts,
        isFetching,
        pageNumber,
        setPageNumber,
        handleCatSelect,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
