export default function Banner({ image, title }) {
  return (
    <div
      style={{ backgroundImage: `url("${image}")` }}
      className="h-full px-4
        flex justify-center items-center 
        bg-cover bg-center bg-no-repeat
        shadow-[inset_0_-10rem_4rem_-4rem_white]">
      <div className="bg-gray-300/50">
        <h1 className="p-4 backdrop-blur text-white text-8xl md:text-9xl">{title}</h1>
      </div>
    </div>
  );
}
