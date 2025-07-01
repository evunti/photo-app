"use client";
import { useEffect, useState } from "react";
import { sanity } from "../lib/sanity";
import NextImage from "next/image";

type Photo = {
  _id: string;
  title: string;
  image: { asset: { url: string } };
  location?: string;
  date?: string;
  description?: string;
};

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == "photo"] | order(date desc){
        _id,
        title,
        image{asset->{url}},
        location,
        date,
        description
      }`
      )
      .then(setPhotos);
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-emerald-700 tracking-tight">
        Photo Gallery
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {photos.map((photo) => (
          <div
            key={photo._id}
            className="aspect-square bg-white/80 border border-emerald-100 rounded-xl overflow-hidden flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <NextImage
              src={photo.image.asset.url}
              alt={photo.title}
              width={220}
              height={220}
              className="object-cover w-full h-full"
            />
            <div className="p-2 text-center">
              <div className="font-semibold">{photo.title}</div>
              {photo.location && (
                <div className="text-xs text-gray-500">{photo.location}</div>
              )}
              {photo.date && (
                <div className="text-xs text-gray-400">{photo.date}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
