export function Gallery() {
  const imgs = [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    "https://images.unsplash.com/photo-1500835556837-99ac94a94552",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    "https://images.unsplash.com/photo-1522336572468-97b06e8ef143",
  ];

  return (
    <section id="gallery" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Gallery</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            className="rounded-xl shadow-lg object-cover h-64 w-full"
          />
        ))}
      </div>
    </section>
  );
}
