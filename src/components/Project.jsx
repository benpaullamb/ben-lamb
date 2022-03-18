import classNames from 'classnames';

export default function Project({ title, description, image, reversed = false, className }) {
  const pic = (
    <a href="https://github.com/benpaullamb/amazon-extension-2.0" target="_blank" rel="noreferrer">
      <img className="w-full rounded-lg md:w-96" src={image} alt={`Screenshot of my ${title} project`} />
    </a>
  );

  const info = (
    <div className="py-4 md:p-8">
      <h3 className="mb-2 text-2xl">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );

  return (
    <>
      <div
        className={classNames(
          'hidden md:grid',
          {
            'grid-cols-[auto_1fr]': !reversed,
            'grid-cols-[1fr_auto]': reversed,
          },
          className
        )}>
        {reversed && info}
        {pic}
        {!reversed && info}
      </div>

      <div className={classNames('md:hidden', className)}>
        {pic}
        {info}
      </div>
    </>
  );
}
