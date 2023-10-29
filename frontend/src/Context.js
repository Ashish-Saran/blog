import React, { useState, useContext, createContext } from "react";
import { useQuery } from "@tanstack/react-query";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [cat, setCat] = useState("");

  const handleCatSelect = (e) => {
    setCat(e.target.value);
  };

  const fetchProjects = (pageNumber, cat) =>
    fetch(`//localhost:3005/posts?page=${pageNumber}&category=${cat}`).then(
      (res) => res.json()
    );

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ["articles", pageNumber, cat],
      queryFn: () => fetchProjects(pageNumber, cat),
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    });

  return (
    <AppContext.Provider
      value={{
        cat,
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
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
