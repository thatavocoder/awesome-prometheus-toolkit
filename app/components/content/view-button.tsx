'use client';

import React, { useState } from 'react';
import { ExporterRule, RuleDetailsRules } from './classes';
import Dialog from './dialog';
import Image from 'next/image';

interface ViewButtonProps {
  rules: RuleDetailsRules[];
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
        className="border border-slate-200 rounded bg-white py-2 px-1 text-xs text-slate-600 font-semibold"
        onClick={() => setIsDialogOpen(true)}
      >
        View Alert Rules
      </button>
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div className="px-6 py-4 flex items-center justify-between gap-4 border-b border-slate-200 sticky bg-white top-0">
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
            <p className="font-semibold text-slate-600">{serviceName}</p>
            <span className="bg-slate-100 text-slate-400 rounded-full text-2xs font-bold uppercase px-1">
              {rules.length} rules
            </span>
          </div>
          <Image
            src="/close.svg"
            alt="Close"
            width={24}
            height={24}
            onClick={() => setIsDialogOpen(false)}
            className="cursor-pointer"
          />
        </div>
        <div className="p-6 flex flex-col gap-6">
          {exporterRules?.map((rule, index) => {
            return (
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 rounded-full h-10 w-10 flex items-center justify-center">
                  <p className="text-xs font-bold text-slate-500">
                    {(index + 1).toString().padStart(2, '0')}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      {rule.name}
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      {rule.description}
                    </p>
                  </div>
                  <div className="bg-slate-50 py-6 px-2"></div>
                </div>
              </div>
            );
          })}
        </div>
      </Dialog>
    </>
  );
};

export default ViewButton;
