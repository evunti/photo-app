"use client";
import { useEffect, useState } from "react";
import { sanity } from "../lib/sanity";
import NextImage from "next/image";

type Photo = {
  _id: string;
  title: string;
  imageUrl: string;
  location?: string;
  date?: string;
};

const [photos, setPhotos] = useState<Photo[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchPhotos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await sanity.fetch(
        `*[_type == "photo"] | order(_createdAt desc) {
          _id,
          title,
          "imageUrl": image.asset->url,
          location,
          date
        }`
      );
      setPhotos(data);
    } catch (err) {
      setError("Failed to load photos.");
    } finally {
      setLoading(false);
    }
  };
  fetchPhotos();
}, []);

return (
  <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-2xl shadow-lg p-8">
    <h2 className="text-3xl font-bold mb-8 text-center text-emerald-700 tracking-tight">
      Photo Gallery
    </h2>
    {loading && (
      <div className="text-center text-gray-500">Loading photos...</div>
    )}
    {error && <div className="text-center text-red-500">{error}</div>}
    {!loading && !error && (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {photos.length === 0 && (
          <div className="col-span-full text-center text-gray-400">
            No photos found.
          </div>
        )}
        {photos.map((photo) => (
          <div
            key={photo._id}
            className="aspect-square bg-white/80 border border-emerald-100 rounded-xl overflow-hidden flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <NextImage
              src={photo.imageUrl || "/file.svg"}
              alt={photo.title || "Photo"}
              width={220}
              height={220}
              className="object-cover w-full h-full"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/file.svg";
              }}
            />
            <div className="p-2 text-center">
              <div className="font-semibold">{photo.title || "Untitled"}</div>
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
    )}
  </section>
);
// ...existing code...
// Ensure the function is properly closed
