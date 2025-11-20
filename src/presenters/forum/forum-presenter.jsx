import { useState, useEffect } from "react";

export const useForumPresenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("terbaru");
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(false);

  const filterOptions = [
    { value: "terbaru", label: "Filter" },
    { value: "terpopuler", label: "Filter" }
  ];

  useEffect(() => {
    console.log("Filter berubah:", filter);
    console.log("Search query:", searchQuery);
  }, [filter, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilter) => {
    console.log("Filter dipilih:", newFilter);
    setFilter(newFilter);
  };

  return {
    searchQuery,
    setSearchQuery,
    filter,
    filterOptions,
    discussions,
    loading,
    handleSearch,
    handleFilterChange,
  };
};