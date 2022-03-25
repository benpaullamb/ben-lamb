import classNames from 'classnames';

export default function Section({ className, children, dark = false }) {
  return (
    <div
      className={classNames(className, 'p-10', {
        'bg-blue-100': dark,
      })}>
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
