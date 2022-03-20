export default function Banner({ image, title, subtitle }) {
  return (
    <div
      style={{ backgroundImage: `url("${image}")` }}
      className="h-full px-4
        flex justify-center items-center 
        bg-cover bg-center bg-no-repeat
        shadow-[inset_0_-10rem_4rem_-4rem_white]">
      <div className="bg-gray-400/50">
        <div className="p-4 backdrop-blur">
          <h1 className="text-white text-6xl md:text-9xl md:text-center">{title}</h1>
          {subtitle && <span className="block text-white text-xl md:text-2xl md:text-center">{subtitle}</span>}
        </div>
      </div>
    </div>
  );
}
