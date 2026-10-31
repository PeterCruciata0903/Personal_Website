import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-y-6">
          {profileImageSrc && (
            <div className="relative h-40 w-40 overflow-hidden rounded-xl">
              <Image alt="about-me-image" className="object-cover" fill src={profileImageSrc} />
            </div>
          )}
          <div className="flex flex-col gap-y-3">
            <h2 className="text-2xl font-bold text-white">About me</h2>
            <p className="prose prose-sm leading-relaxed text-gray-300 sm:prose-base">{description}</p>
          </div>
        </div>
        <ul className="grid grid-cols-1 content-center gap-4 sm:grid-cols-2">
          {aboutItems.map(({label, text, Icon}, idx) => (
            <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4" key={idx}>
              {Icon && (
                <span className="bg-orange-400/15 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Icon aria-hidden="true" className="h-5 w-5 text-orange-300" />
                </span>
              )}
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wide text-neutral-400">{label}</span>
                <span className="text-sm font-medium leading-relaxed text-white">{text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
