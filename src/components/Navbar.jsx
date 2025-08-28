import SpotifyLogo from "../assets/spotify.svg";
import HomeIcon from "../assets/home.svg";
import SearchIcon from "../assets/search.svg";
import BrowseIcon from "../assets/browse.svg";
import DownloadIcon from "../assets/download.svg";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-16 bg-black px-2">
      {/* Logo */}
      <div className="w-16 h-16 flex items-center justify-center">
        <img src={SpotifyLogo} alt="logo" className="w-10" />
      </div>

      {/* Search Section */}
      <div className="flex ml-[490px] items-center">
        <div className="h-12 w-12 p-3 bg-[#1f1f1f] rounded-full hover:bg-[#2a2a2a] cursor-pointer transition">
          <img src={HomeIcon} alt="home" />
        </div>

        <div className="relative ml-2">
          <input
            type="text"
            id="input_box"
            placeholder="What do you want to play?"
            className="w-[474px] h-12 bg-[#1f1f1f] text-white rounded-full pl-12 pr-28 focus:outline-none hover:bg-[#292929] transition"
          />
          <img
            src={SearchIcon}
            alt="search"
            className="absolute top-3 left-4 w-5 cursor-pointer search_icon"
            onClick={() => {
              document.getElementById("input_box").focus();
            }}
          />
          <div className="flex items-center absolute top-3 right-3">
            <div className="h-6 w-px bg-gray-500 mx-3"></div>
            <img
              src={BrowseIcon}
              alt="browse"
              className="w-6 cursor-pointer hover:scale-105 transition"
            />
          </div>
        </div>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-2 text-gray-400 font-bold">
        <button className="hover:text-white hover:scale-105">Premium</button>
        <button className="hover:text-white hover:scale-105">Support</button>
        <button className="hover:text-white hover:scale-105">Download</button>
        <div className="h-6 w-px bg-white mx-3"></div>
        <button className="flex items-center gap-2 px-4 py-1 hover:scale-105">
          <img src={DownloadIcon} alt="download" className="w-4" />
          <span className="text-sm font-bold">Install App</span>
        </button>
        <div className="flex items-center gap-2">
          <button className="px-4 py-1 hover:text-white">Sign up</button>
          <button className="bg-white text-black font-bold rounded-full px-6 py-2 hover:scale-105">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
