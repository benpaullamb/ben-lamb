import classNames from 'classnames';
import SkillGroup from './SkillGroup';

export default function SkillSet({ name, skillGroups, reverse = false }) {
  return (
    <div className="lg:grid grid-cols-[1fr,1fr]">
      <div
        className={classNames('p-8 flex justify-center items-center', {
          'lg:hidden': !reverse,
        })}>
        <h2 className="text-4xl lg:text-7xl text-gray-800">{name}</h2>
      </div>

      <div
        className={classNames('lg:grid grid-cols-[auto,auto]', {
          'pl-8 lg:pl-0': !reverse,
          'pr-8 lg:pr-0': reverse,
        })}>
        {skillGroups.map((group) => (
          <SkillGroup {...group} key={group.name} />
        ))}
      </div>

      <div
        className={classNames('hidden justify-center items-center', {
          'lg:flex': !reverse,
        })}>
        <h2 className="text-7xl text-gray-800">{name}</h2>
      </div>
    </div>
  );
}
