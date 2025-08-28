import Section from "../components/Section";
import ArtistCard from "../components/ArtistCard";
import artist1 from "../assets/artist1.jpg";
import demoImage from '../assets/demoImage.jpg'


export default function PopularArtists() {
const artists = [
  { name: "Pritam", image: "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca" },
  { name: "A.R. Rahman", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxNoh-HW__QZ0YOIfcwseT8kv58Y0b3qSFQ&s" },
  { name: "Arijit Singh", image: "https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1739172212.jpg" },
  { name: "Sachin-Jigar", image: "https://i.scdn.co/image/ab6761610000e5ebbb4064bef3a825344d5eb79e" },
  { name: "Vishal-Shekhar", image: "https://i.scdn.co/image/ab6761610000e5eb90b6c3d093f9b02aad628eaf" },
  { name: "Atif Aslam", image: "https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84" },
  { name: "Anirudh Ravichander", image: "https://preview.redd.it/the-downfall-of-anirudh-v0-nvifdqri8zpd1.jpeg?width=640&crop=smart&auto=webp&s=ff56172d811939622a98da5f92badabcf8476af9" },
  { name: "Udit Narayan", image: "https://i.scdn.co/image/ab6761610000e5eb8de0e6e7e55d7773931ab7f4" },
  { name: "Yo Yo Honey Singh", image: "https://i.scdn.co/image/ab6761610000e5ebbc7e4fffd515b47ff1ebbc1f" },
  { name: "Shankar-Ehsaan-Loy", image: "https://i.scdn.co/image/ab6761610000e5eb3db0499a689aa9b4a47ebba3" },
  { name: "Shreya Ghoshal", image: "https://i.scdn.co/image/ab6761610000e5eb59303d54ce789210e745e1a9" },
  { name: "Jasleen Royal", image: "https://i.scdn.co/image/ab6761610000e5eb852737800de564b2c0efe165" },
  { name: "Amit Trivedi", image: "https://i.scdn.co/image/ab6761610000e5eba37271f7a4862a6e99ce345f" },
  { name: "Sachet Tandon", image: "https://i.scdn.co/image/ab6761610000e5ebe34fad78221a2cb31da57946" },
  { name: "Alka Yagnik", image: "https://i.scdn.co/image/ab67616100005174935b2dd507212bd72a71d7f9" },
  { name: "Himesh Reshammiya", image: "https://i.scdn.co/image/ab6761610000e5eb2cfc402fa29cd2949023a8bf" },
  { name: "Anuv Jain", image: "https://i.scdn.co/image/ab6761610000e5eba837a6cb82dd949d5e1f9b53" },
  { name: "Shubh", image: "https://i.scdn.co/image/ab676161000051744490e20daec093c04ede38c6" },
  { name: "Badshah", image: "https://i.scdn.co/image/ab6761610000e5eb7b386b1320742bd6686854e7" }
];


  return (
    <Section title="Popular artists" link="#">
      {artists.map((a, i) => (
        <ArtistCard key={i} {...a} />
      ))}
    </Section>
  );
}
