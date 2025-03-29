"use client";
import React from "react";

import CharacterCard from "@/components/CharacterCard";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import { useFetch } from "@/hooks/useFetch";
import { CharacterResponse } from "@/types";

export default function Home() {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const {
    data,
    error,
    loading,
    fetchData, 
  } = useFetch<CharacterResponse>("/character");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    if(searchValue) fetchData({name: searchValue});
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchData({ name: searchValue, page: String(page) });
  };

  return (
    <main className="px-8 py-4">
      <SearchInput
        onClick={handleSearch}
        onInputChange={onInputChange}
        handleKeyDown={handleKeyDown}
      />

      {loading && <Loading />}

      {error && <ErrorComponent message="Nothing found!" />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {!loading && data?.results.map(item => <CharacterCard key={item.id} {...item} />)}
      </div>

      {
        !loading && data && <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={Math.ceil(data.info.count / 20)}
        />
      }
    </main>
  );
}
