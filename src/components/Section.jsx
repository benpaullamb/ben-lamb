import classNames from 'classnames';

export default function Section({ light = true, className, children }) {
  return (
    <div
      className={classNames(
        'px-8 py-12',
        {
          'bg-white': light,
          'bg-primary-200': !light,
        },
        className
      )}>
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
