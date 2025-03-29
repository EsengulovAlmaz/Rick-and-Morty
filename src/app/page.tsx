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
    fetchData, 
    data,
    error,
    loading,
  } = useFetch<CharacterItem[]>("/character");

  const onInputChange = (value: string) => {
    setSearchValue(value);
  };

  const onClick = () => fetchData({"name": searchValue});

  return (
    <div className="px-8">
      <SearchInput
        onInputChange={onInputChange}
        onClick={onClick}
      />

      {loading && <Loading />}

      {error && <ErrorComponent message="Nothing found!"/>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map(item => <CharacterCard key={item.id} {...item} />)}
      </div>
    </div>
  );
}
