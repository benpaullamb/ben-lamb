export default function Banner({ image, title, subtitle }) {
  return (
    <div
      style={{ backgroundImage: `url("${image}")` }}
      className="h-full px-4
        flex justify-center items-center 
        bg-cover bg-center bg-no-repeat
        shadow-[inset_0_-10rem_4rem_-4rem_white]">
      <div className="bg-gray-100/50 shadow-xl">
        <div className="p-4 backdrop-blur">
          <h1 className="mb-2 text-gray-800 font-extralight text-6xl md:text-9xl md:text-center tracking-tight">
            {title}
          </h1>
          {subtitle && <span className="block text-gray-800 text-xl md:text-2xl md:text-center">{subtitle}</span>}
        </div>
      </div>
    </div>
  );
}
