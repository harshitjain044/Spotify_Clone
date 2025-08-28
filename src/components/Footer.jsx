export default function Footer() {
  return (
    <footer className="mt-10 text-sm text-gray-400">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">For the Record</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Communities</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">For Artists</a></li>
            <li><a href="#" className="hover:underline">Developers</a></li>
            <li><a href="#" className="hover:underline">Advertising</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
            <li><a href="#" className="hover:underline">Vendors</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Useful links</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Free Mobile App</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Safety & Privacy Center</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookies</a></li>
            <li><a href="#" className="hover:underline">About Ads</a></li>
            <li><a href="#" className="hover:underline">Accessibility</a></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-neutral-800 pt-4">
        <p className="text-xs">&copy; 2025 Spotify Clone</p>
        <button className="flex items-center gap-2 border border-gray-500 rounded-full px-3 py-1 text-xs hover:border-white">
          <span>🌐</span> English
        </button>
      </div>
    </footer>
  );
}
