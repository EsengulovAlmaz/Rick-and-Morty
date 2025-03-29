"use client";
import React from "react";

import CharacterCard from "@/components/CharacterCard";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import SearchInput from "@/components/SearchInput";
import { useFetch } from "@/hooks/useFetch";
import { CharacterItem } from "@/types";

export default function Home() {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const {
    data,
    error,
    loading,
    fetchData, 
  } = useFetch<CharacterItem[]>("/character");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClickSearch = () => {
    if(searchValue) fetchData({name: searchValue});
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  return (
    <main className="px-8 py-4">
      <SearchInput
        onClick={onClickSearch}
        onInputChange={onInputChange}
        handleKeyDown={handleKeyDown}
      />

      {loading && <Loading />}

      {error && <ErrorComponent message="Nothing found!" />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {!loading && data?.map(item => <CharacterCard key={item.id} {...item} />)}
      </div>
    </main>
  );
}
