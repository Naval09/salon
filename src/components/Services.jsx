import nailImg from "../assets/nail-extension.jpg";
import skin from "../assets/skin.jpg";
import hair from "../assets/hair-styles.jpg";
import academy from "../assets/academy.jpg";

export default function Services() {
  const items = [
    {
      title: "Ladies Salon",
      img: "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg",
    },
    {
      title: "Bridal & Party Makeup",
      img: "https://images.pexels.com/photos/1200637/pexels-photo-1200637.jpeg",
    },
    {
      title: "Skin Treatments",
      img: skin,
    },
    {
      title: "Hair Services",
      img: hair,
    },
    {
      title: "Academy",
      img: academy,
    },
    {
      title: "Nail Extensions",
      img: nailImg,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {items.map((srv, i) => (
          <div
            key={i}
            className="p-6 bg-white shadow-lg rounded-2xl text-center"
          >
            <img
              src={srv.img}
              className="h-40 w-full object-cover rounded-xl mb-4 shadow"
            />
            <h3 className="text-xl font-semibold">{srv.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
