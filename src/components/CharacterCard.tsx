import Image from "next/image";
import React from "react";

import { CharacterItem } from "@/types";

const CharacterCard: React.FC<CharacterItem> = ({
  image,
  name,
  status,
  species,
  location,
}) => (
  <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
    <Image 
      src={image} 
      alt={name} 
      className="w-full h-56 object-cover"
      width={1000}
      height={1000}
    />

    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800">
        {name}
      </h3>
      <p className="text-sm text-gray-500">
        {species}
      </p>
      <p className={`text-sm font-medium ${status === "Alive" ? "text-green-500" : status === "Dead" ? "text-red-500" : "text-yellow-500"}`}>
        {status}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Location: {location.name}
      </p>
    </div>
  </div>
);

export default CharacterCard;