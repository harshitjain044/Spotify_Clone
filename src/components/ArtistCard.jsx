export default function ArtistCard({ image, name }) {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={name} className="rounded-full w-36 h-36 object-cover mb-2" />
      <h3 className="text-sm font-semibold text-white">{name}</h3>
      <p className="text-xs text-gray-400">Artist</p>
    </div>
  );
}
