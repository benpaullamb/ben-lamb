import classNames from 'classnames';
import { ParallaxBanner } from 'react-scroll-parallax';

export default function Banner({ image, title, subtitle, id, full = false }) {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            image,
            speed: -10,
          },
        ]}
        id={id}
        className={classNames('px-4 flex justify-center items-center bg-cover bg-center bg-no-repeat', {
          'h-full': full,
          'h-1/2': !full,
        })}>
        <div className="z-10 bg-gray-100/50 shadow-xl">
          <div className="p-4 backdrop-blur">
            <h1 className="text-gray-800 text-6xl md:text-9xl md:text-center font-extralight tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <span className="mt-2 block text-gray-800 text-xl md:text-2xl md:text-center">{subtitle}</span>
            )}
          </div>
        </div>
      </ParallaxBanner>
    </>
  );
}
