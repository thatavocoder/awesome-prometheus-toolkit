import NextImage from 'next/image';
import React, { useEffect, useState } from 'react';
import { Exporter, RulesDetails } from './classes';
import { ymlToJson } from './utils';
import ViewButton from './view-button';
import { getRulesDetailsYml } from './api';

interface CardProps {
  exporter: Exporter;
  serviceName: string;
}

const Card = ({ exporter, serviceName }: CardProps) => {
  const [isImage, setIsImage] = useState(false);
  const [rulesDetailsYml, setRulesDetailsYml] = useState('');

  const rulesDetails: RulesDetails = ymlToJson(rulesDetailsYml);

  const ungroupedRules = rulesDetails?.groups
    .flatMap((group) => group.rules)
    .filter((rule) => rule !== null);

  useEffect(() => {
    getRulesDetailsYml(serviceName, exporter.slug).then((res) => {
      if (res) setRulesDetailsYml(res);
    });

    const img = new Image();
    img.src = `https://cdn.simpleicons.org/${serviceName.split(' ')[0].toLowerCase()}`;
    img.onload = () => {
      setIsImage(true);
    };
    img.onerror = () => {
      setIsImage(false);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [exporter.slug, serviceName]);

  return (
    <div
      className="border border-slate-100 p-6 flex flex-col gap-4"
      key={exporter.slug}
    >
      <div className="flex items-center gap-2">
        <NextImage
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
          {ungroupedRules?.length} rules
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
