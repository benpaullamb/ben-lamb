import tokyoImage from '../assets/tokyo-unsplash.jpg';
import NavBar from '../components/NavBar';

// Photo by <a href="https://unsplash.com/@yory?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ryo Yoshitake</a> on
// <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

export default function Home(props) {
  return (
    <>
      <div
        style={{ backgroundImage: `url("${tokyoImage}")` }}
        className="h-full px-4 md:px-0 
      flex justify-center items-center 
      bg-cover bg-center bg-no-repeat bg-fixed 
      shadow-[inset_0_-10rem_4rem_-4rem_white]">
        <NavBar />

        <div className="bg-gray-100/50">
          <h1 className="p-4 backdrop-blur text-white text-8xl md:text-9xl">Ben Lamb</h1>
        </div>
      </div>

      <div className="px-8 py-16 container mx-auto">Content will go here</div>
    </>
  );
}
