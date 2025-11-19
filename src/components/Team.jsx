export function Team() {
  const members = [
    {
      name: "Aisha",
      role: "Hair Stylist",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      name: "Riya",
      role: "Makeup Artist",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    },
    {
      name: "Sana",
      role: "Skin Specialist",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {members.map((m, i) => (
          <div key={i} className="text-center">
            <img
              src={m.img}
              className="w-56 h-56 mx-auto rounded-full object-cover shadow-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-gray-600">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
