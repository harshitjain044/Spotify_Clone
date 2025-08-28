export default function RadioCard({ image, title, description }) {
  return (
    <div className="bg-neutral-900 rounded-md p-3 hover:bg-neutral-800 transition">
      <img src={image} alt={title} className="rounded-md mb-2" />
      <p className="text-xs text-green-400 font-semibold">RADIO</p>
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <p className="text-xs text-gray-400 truncate">{description}</p>
    </div>
  );
}
