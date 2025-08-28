import PlusIcon from "../assets/plus.svg";
import GlobeIcon from "../assets/globe.svg";

export default function Sidebar() {
  return (
    <div className="bg-[#121212] w-[22%] rounded-lg flex flex-col p-3 text-white">
      {/* Header */}
      <div className="flex justify-between items-center px-2 py-3">
        <h1 className="font-bold text-[15px]">Your Library</h1>
        <img src={PlusIcon} alt="Add" className="w-5 h-5 cursor-pointer" />
      </div>

      {/* Create Playlist Box */}
      <div className="bg-[#1f1f1f] rounded-lg p-4 mt-2">
        <h2 className="font-bold text-[15px]">Create your first playlist</h2>
        <p className="text-sm text-gray-400 mt-1">It’s easy, we’ll help you</p>
        <button className="mt-4 bg-white text-black text-sm font-bold px-4 py-2 rounded-full hover:scale-105 transition">
          Create playlist
        </button>
      </div>

      {/* Podcasts Box */}
      <div className="bg-[#1f1f1f] rounded-lg p-4 mt-3">
        <h2 className="font-bold text-[15px]">Let’s find some podcasts to follow</h2>
        <p className="text-sm text-gray-400 mt-1">
          We’ll keep you updated on new episodes
        </p>
        <button className="mt-4 bg-white text-black text-sm font-bold px-4 py-2 rounded-full hover:scale-105 transition">
          Browse podcasts
        </button>
      </div>

      {/* Footer Links */}
      <div className="mt-auto text-[11px] text-gray-400 leading-5 px-2">
        <div className="flex flex-wrap gap-x-3">
          <a href="#" className="hover:underline">Legal</a>
          <a href="#" className="hover:underline">Safety & Privacy Center</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookies</a>
          <a href="#" className="hover:underline">About Ads</a>
          <a href="#" className="hover:underline">Accessibility</a>
        </div>
        <a href="#" className="hover:underline block mt-2">Cookies</a>
      </div>

      {/* Language Button */}
      <button className="flex items-center gap-2 border border-gray-400 text-sm px-3 py-1.5 rounded-full mt-4 hover:scale-105 transition w-fit">
        <img src={GlobeIcon} alt="globe" className="w-4 h-4" />
        English
      </button>
    </div>
  );
}
