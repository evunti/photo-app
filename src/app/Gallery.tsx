import Image from "next/image";

// Placeholder images for now. Replace with Sanity images later.
const placeholderImages = [
  "/next.svg",
  "/vercel.svg",
  "/globe.svg",
  "/file.svg",
  "/window.svg",
];

export default function Gallery() {
  return (
    <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-emerald-700 tracking-tight">
        Photo Gallery
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {placeholderImages.map((src, idx) => (
          <div
            key={idx}
            className="aspect-square bg-white/80 border border-emerald-100 rounded-xl overflow-hidden flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Image
              src={src}
              alt={`Photo ${idx + 1}`}
              width={220}
              height={220}
              className="object-contain scale-90 hover:scale-100 transition-transform duration-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
