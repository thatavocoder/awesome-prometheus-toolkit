import React from 'react';
import { Group } from './classes';
import { getRulesDetailsYml, isImageFound } from './api';
import Card from './card';

interface CardGridProps {
  group: Group;
}

const CardGrid = ({ group }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {group.services.map((service) =>
        service.exporters.map(async (exporter) => {
          const rulesDetailsYml = await getRulesDetailsYml(
            service.name,
            exporter.slug,
          );

          const isImage = await isImageFound(
            `https://cdn.simpleicons.org/${service.name.split(' ')[0].toLowerCase()}` ??
              'not found',
          );

          return (
            <Card
              key={exporter.slug}
              exporter={exporter}
              rulesDetailsYml={rulesDetailsYml}
              isImage={isImage}
              serviceName={service.name}
            />
          );
        }),
      )}
    </div>
  );
};

export default CardGrid;
