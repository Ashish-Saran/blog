import React, { useState, useContext, createContext } from "react";
import { useQuery } from "@tanstack/react-query";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const fetchProjects = (pageNumber = 0) =>
    fetch(`//localhost:3005/posts?page=${pageNumber}`).then((res) =>
      res.json()
    );

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ["articles", pageNumber],
      queryFn: () => fetchProjects(pageNumber),
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    });

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
        pageNumber,
        setPageNumber,
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
