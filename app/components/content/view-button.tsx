'use client';

import React, { useState } from 'react';
import { ExporterRule, RuleDetailsRule } from './classes';
import RulesDialog from './rules-dialog';

interface ViewButtonProps {
  rules: RuleDetailsRule[];
  exporterRules: ExporterRule[];
  serviceName: string;
  isImage: boolean;
}

const ViewButton = ({
  rules,
  exporterRules,
  serviceName,
  isImage,
}: ViewButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <button
        className="border border-slate-200 rounded bg-white py-2 px-1 text-xs text-slate-600 disabled:text-slate-300 font-semibold"
        onClick={() => setIsDialogOpen(true)}
        disabled={!exporterRules || exporterRules.length === 0}
      >
        View Alert Rules
      </button>
      <RulesDialog
        exporterRules={exporterRules}
        isDialogOpen={isDialogOpen}
        isImage={isImage}
        rules={rules}
        serviceName={serviceName}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
};

export default ViewButton;
