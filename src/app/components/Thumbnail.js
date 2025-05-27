"use client";

import { useState } from "react";
import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [imageError, setImageError] = useState(false);

  const imagePath = result.backdrop_path || result.poster_path;
  
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      {imagePath && !imageError ? (
        <Image
          src={`${BASE_URL}${imagePath}`}
          alt={result.title || result.original_name}
          width={1920}
          height={1080}
          className="object-cover w-full h-auto"
          onError={() => setImageError(true)}
          priority={false}
          unoptimized={true}
        />
      ) : (
        <div className="bg-gray-700 w-full h-[200px] flex items-center justify-center">
          <p className="text-white">{result.title || result.original_name}</p>
        </div>
      )}

      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <HandThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";
export default Thumbnail;
