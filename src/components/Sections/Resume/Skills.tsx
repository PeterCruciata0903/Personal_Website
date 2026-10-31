import {FC, memo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<{skillGroup: SkillGroupType}> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-400 font-bold text-white">
            {name[0]}
          </span>
          <h3 className="font-bold text-neutral-800">{name}</h3>
        </div>
        <span className="text-xs font-medium text-neutral-500">{skills.length} skills</span>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </ul>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill: {name}}) => (
  <li className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1.5 text-sm font-medium text-neutral-700 transition-colors hover:border-orange-300 hover:bg-orange-100">
    {name}
  </li>
));

Skill.displayName = 'Skill';
