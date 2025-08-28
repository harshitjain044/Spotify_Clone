export default function SongCard({ image, title, subtitle }) {
  return (
    <div className="bg-neutral-900 rounded-md p-2 hover:bg-neutral-800 transition">
      <img src={image} alt={title} className="rounded-md mb-2" />
      <h3 className="text-sm font-semibold text-white truncate">{title}</h3>
      <p className="text-xs text-gray-400 truncate">{subtitle}</p>
    </div>
  );
}
