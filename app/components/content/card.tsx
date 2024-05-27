import Image from 'next/image';
import React from 'react';
import { Exporter, RulesDetails } from './classes';
import { ymlToJson } from './utils';
import ViewButton from './view-button';

interface CardProps {
  exporter: Exporter;
  rulesDetailsYml: string;
  isImage: boolean;
  serviceName: string;
}

const Card = ({
  exporter,
  rulesDetailsYml,
  isImage,
  serviceName,
}: CardProps) => {
  const rulesDetails: RulesDetails = ymlToJson(rulesDetailsYml);

  const ungroupedRules = rulesDetails.groups
    .flatMap((group) => group.rules)
    .filter((rule) => rule !== null);

  return (
    <div
      className="border border-slate-100 p-6 flex flex-col gap-4"
      key={exporter.slug}
    >
      <div className="flex items-center gap-2">
        <Image
          src={
            isImage
              ? `https://cdn.simpleicons.org/${serviceName.split(' ')[0].toLowerCase()}`
              : '/puzzle.svg'
          }
          alt={serviceName}
          width={24}
          height={24}
        />
        <p className="text-sm font-bold text-slate-600">{serviceName}</p>
      </div>
      <p className="text-xs font-medium text-slate-400 line-clamp-3 flex-1">
        <span className="bg-slate-100 rounded-full text-2xs font-bold uppercase px-1">
          {ungroupedRules.length} rules
        </span>{' '}
        {exporter.rules?.map((rule) => rule?.name).join(', ')}
      </p>
      <ViewButton
        rules={ungroupedRules}
        exporterRules={exporter.rules}
        serviceName={serviceName}
        isImage={isImage}
      />
    </div>
  );
};

export default Card;
