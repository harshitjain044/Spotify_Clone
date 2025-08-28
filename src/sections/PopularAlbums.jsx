/* eslint-disable @next/next/no-img-element */
import demoImage from '../assets/demoImage.jpg'

export default function PopularAlbums() {
  // const albums = [
  //   { id: 1, title: "After Hours", artist: "The Weeknd", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Weeknd_-_After_Hours.png/250px-The_Weeknd_-_After_Hours.png" },
  //   { id: 2, title: "Future Nostalgia", artist: "Dua Lipa", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png/250px-Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png" },
  //   { id: 3, title: "Hollywood's Bleeding", artist: "Post Malone", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Post_Malone_-_Hollywood%27s_Bleeding.png/250px-Post_Malone_-_Hollywood%27s_Bleeding.png" },
  //   { id: 4, title: "Justice", artist: "Justin Bieber", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Justin_Bieber_-_Justice.png/250px-Justin_Bieber_-_Justice.png" },
  //   { id: 5, title: "SOUR", artist: "Olivia Rodrigo", image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Olivia_Rodrigo_-_SOUR.png/250px-Olivia_Rodrigo_-_SOUR.png" },
  //   { id: 6, title: "Divide", artist: "Ed Sheeran", image: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png" },
  //   { id: 7, title: "Revival", artist: "Eminem", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Revival_Eminem_Cover.png/250px-Revival_Eminem_Cover.png" },
  //   { id: 8, title: "Scorpion", artist: "Drake", image: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg" },
  //   { id: 9, title: "1989 (Taylor's Version)", artist: "Taylor Swift", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png/250px-Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png" },
  //   { id: 10, title: "Un Verano Sin Ti", artist: "Bad Bunny", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png/250px-Bad_Bunny_-_Un_Verano_Sin_Ti.png" },
  //   { id: 11, title: "Planet Her", artist: "Doja Cat", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Doja_Cat_-_Planet_Her.png/250px-Doja_Cat_-_Planet_Her.png" },
  //   { id: 12, title: "Astroworld", artist: "Travis Scott", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Travis_Scott_-_Astroworld.png/250px-Travis_Scott_-_Astroworld.png" }
  // ];
  const albums = [
  { id: 1, title: "After Hours", artist: "The Weeknd", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Weeknd_-_After_Hours.png/250px-The_Weeknd_-_After_Hours.png" },
  { id: 2, title: "Future Nostalgia", artist: "Dua Lipa", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png/250px-Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png" },
  { id: 3, title: "Hollywood's Bleeding", artist: "Post Malone", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Post_Malone_-_Hollywood%27s_Bleeding.png/250px-Post_Malone_-_Hollywood%27s_Bleeding.png" },
  { id: 4, title: "Justice", artist: "Justin Bieber", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Justin_Bieber_-_Justice.png/250px-Justin_Bieber_-_Justice.png" },
  { id: 5, title: "SOUR", artist: "Olivia Rodrigo", image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Olivia_Rodrigo_-_SOUR.png/250px-Olivia_Rodrigo_-_SOUR.png" },
  { id: 6, title: "Divide", artist: "Ed Sheeran", image: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png" },
  { id: 7, title: "Revival", artist: "Eminem", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Revival_Eminem_Cover.png/250px-Revival_Eminem_Cover.png" },
  { id: 8, title: "Scorpion", artist: "Drake", image: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg" },
  { id: 9, title: "1989 (Taylor's Version)", artist: "Taylor Swift", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png/250px-Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png" },
  { id: 10, title: "Un Verano Sin Ti", artist: "Bad Bunny", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png/250px-Bad_Bunny_-_Un_Verano_Sin_Ti.png" },
  { id: 11, title: "Planet Her", artist: "Doja Cat", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Doja_Cat_-_Planet_Her.png/250px-Doja_Cat_-_Planet_Her.png" },
  { id: 12, title: "Astroworld", artist: "Travis Scott", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Travis_Scott_-_Astroworld.png/250px-Travis_Scott_-_Astroworld.png" },
  { id: 13, title: "DAMN.", artist: "Kendrick Lamar", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Kendrick_Lamar_-_Damn.png/250px-Kendrick_Lamar_-_Damn.png" },
  { id: 14, title: "Anti", artist: "Rihanna", image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Rihanna_-_Anti.png/250px-Rihanna_-_Anti.png" },
  { id: 15, title: "Folklore", artist: "Taylor Swift", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Taylor_Swift_-_Folklore.png/250px-Taylor_Swift_-_Folklore.png" },
  { id: 16, title: "Beerbongs & Bentleys", artist: "Post Malone", image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Beerbongs_%26_Bentleys.png/250px-Beerbongs_%26_Bentleys.png" },
  { id: 17, title: "Views", artist: "Drake", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Drake_-_Views_cover.jpg/250px-Drake_-_Views_cover.jpg" },
  { id: 18, title: "Starboy", artist: "The Weeknd", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/The_Weeknd_-_Starboy.png/250px-The_Weeknd_-_Starboy.png" },
  { id: 19, title: "Born to Die", artist: "Lana Del Rey", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Lana_Del_Rey_-_Born_to_Die.png/250px-Lana_Del_Rey_-_Born_to_Die.png" },
  { id: 20, title: "21", artist: "Adele", image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Adele_-_21.png/250px-Adele_-_21.png" }
];



  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-white mb-4">Popular Albums</h2>

      {/* Horizontal scroll */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide hide-scrollbar">
        {albums.map((album) => (
          <div
            key={album.id}
            className="min-w-[180px] bg-neutral-900 p-3 rounded-lg hover:bg-neutral-800 transition group cursor-pointer flex-shrink-0"
          >
            <div className="relative">
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-40 object-cover rounded-md"
              />
              {/* Play Button */}
              <button className="absolute bottom-2 right-2 bg-green-500 text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
                ▶
              </button>
            </div>
            <h3 className="mt-3 text-white font-semibold truncate">
              {album.title}
            </h3>
            <p className="text-gray-400 text-sm truncate">{album.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
