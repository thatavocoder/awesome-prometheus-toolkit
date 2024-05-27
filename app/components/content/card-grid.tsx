'use client';

import React from 'react';
import { Group } from './classes';
import Card from './card';

interface CardGridProps {
  group: Group;
}

const CardGrid = ({ group }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {group.services.map((service) =>
        service.exporters.map((exporter) => (
          <Card
            key={exporter.slug}
            exporter={exporter}
            serviceName={service.name}
          />
        )),
      )}
    </div>
  );
};

export default CardGrid;
