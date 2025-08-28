/* eslint-disable @next/next/no-img-element */
export default function PopularRadio() {
  const radios = [
    {
      id: 1,
      title: "Drake Radio",
      description: "With Drake, Future, Travis Scott and more",
      image: "https://i.scdn.co/image/ab6761610000e5eb8f1f0e3d2e7a2d9c3a48c2f9",
    },
    {
      id: 2,
      title: "Billie Eilish Radio",
      description: "With Billie, Lana Del Rey, Olivia Rodrigo and more",
      image: "https://i.scdn.co/image/ab6761610000e5ebc7b65e1e3b0af9d4c7af3b0f",
    },
    {
      id: 3,
      title: "Arijit Singh Radio",
      description: "With Arijit, Pritam, Shreya Ghoshal and more",
      image: "https://i.scdn.co/image/ab6761610000e5ebb23e0f3c63a4c2ef7d3a0f77",
    },
    {
      id: 4,
      title: "Taylor Swift Radio",
      description: "With Taylor, Ed Sheeran, Selena Gomez and more",
      image: "https://i.scdn.co/image/ab6761610000e5eb3c84c6f1e3a5c1d9e2a1a9c3",
    },
    {
      id: 5,
      title: "Bad Bunny Radio",
      description: "With Bad Bunny, J Balvin, Maluma and more",
      image: "https://i.scdn.co/image/ab6761610000e5eb3a7c7c2b1e9a4c9c5a3f7e2d",
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-white mb-4">Popular Radio</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {radios.map((radio) => (
          <div
            key={radio.id}
            className="bg-neutral-900 p-3 rounded-lg hover:bg-neutral-800 transition group cursor-pointer"
          >
            <div className="relative">
              <img
                src={radio.image}
                alt={radio.title}
                className="w-full h-40 object-cover rounded-md"
              />
              {/* Play Button */}
              <button className="absolute bottom-2 right-2 bg-green-500 text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
                ▶
              </button>
            </div>
            <h3 className="mt-3 text-white font-semibold truncate">
              {radio.title}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {radio.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
