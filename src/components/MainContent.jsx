import TrendingSongs from "../sections/TrendingSongs";
import PopularArtists from "../sections/PopularArtists";
import PopularAlbums from "../sections/PopularAlbums";
import PopularRadio from "../sections/PopularRadio";
import FeaturedCharts from "../sections/FeaturedCharts";
import Footer from "../components/Footer";

export default function MainContent() {
  return (
    <div className="flex-1 rounded-xl p-6 overflow-y-auto bg-neutral-950 text-white ">
      <TrendingSongs />
      <PopularArtists />
      <PopularAlbums />
      <PopularRadio />
      <FeaturedCharts />
      <Footer />
    </div>
  );
}
