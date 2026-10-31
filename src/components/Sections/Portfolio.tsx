import {ExternalLinkIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import type {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const PortfolioCard: FC<{item: PortfolioItem}> = memo(({item: {url, title, description, image}}) => (
  <article className="w-full overflow-hidden rounded-xl bg-neutral-900 shadow-lg shadow-black/30 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
    <div className="group relative aspect-[16/10] overflow-hidden">
      <Image
        alt={title}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        src={image}
      />
    </div>
    <div className="flex h-full flex-col gap-y-3 p-5">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-neutral-300">{description}</p>
      <a
        className="inline-flex w-fit items-center gap-x-2 pt-1 text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
        href={url}
        rel="noreferrer"
        target="_blank">
        View project
        <ExternalLinkIcon aria-hidden="true" className="h-4 w-4" />
      </a>
    </div>
  </article>
));
