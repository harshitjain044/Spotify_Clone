export default function BottomBar() {
  return (
    <div className=" bottom-0 left-0 right-0 flex items-center justify-between px-6 py-3 bg-gradient-to-r from-[#b02897] to-[#509af4] h-15">
      {/* Left Text Section */}
      <div className="text-white">
        <h4 className="font-bold text-lg">Preview of Spotify</h4>
        <p className="text-sm opacity-90">
          Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
        </p>
      </div>

      {/* Button */}
      <button className="bg-white text-black font-bold rounded-full px-6 py-2 hover:scale-105 transition">
        Sign up free
      </button>
    </div>
  );
}
