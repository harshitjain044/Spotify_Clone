import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import BottomBar from "./components/BottomBar";
import "./App.css"

export default function App() {
  return (
    // <div className="bg-black  text-white vh-10 gap-2 flex flex-col ">
    //   <Navbar />
    //   <div className="flex  flex-1 gap-2 px-2">
    //     <Sidebar />
    //     <MainContent />
    //   </div>
    //   <BottomBar />
    // </div>
    <div className="bg-black text-white gap-2 h-screen flex flex-col">
      <div className="h-16">
        <Navbar />
        </div>
      <div className="flex flex-1 gap-2 px-2 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <div className="h-15">
        <BottomBar />
      </div>
    </div>
  );
}
