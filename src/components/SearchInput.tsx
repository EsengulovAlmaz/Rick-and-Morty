import React from "react";

import { SearchIcon } from "@/assets/icons";

interface Props {
  onInputChange: (value: string) => void
  onClick: () => void
}

const SearchInput: React.FC<Props> = ({
  onInputChange,
  onClick,
}) => (
  <div className="flex items-center justify-center m-7">
    <div className="flex items-center border-[1px] w-1/3 rounded-2xl">
      <input
        className="w-full border-none outline-0 pl-4 py-2 text-lg"
        placeholder="Enter character name"
        onChange={e => onInputChange(e.target.value)}
      />

      <button 
        className="cursor-pointer p-1"
        onClick={onClick}
      >
        <SearchIcon size={30} />
      </button>
    </div>
  </div>
);

export default SearchInput;