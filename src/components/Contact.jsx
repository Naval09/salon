export function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-8">Book Appointment</h2>
      <form className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-2xl">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded"
          />
        </div>
        <textarea
          placeholder="Message"
          className="border p-3 rounded w-full mt-4 h-32"
        />
        <button className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 duration-300">
          Submit
        </button>
      </form>
    </section>
  );
}
