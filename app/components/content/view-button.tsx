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
        <div className="px-6 py-4 flex items-center justify-between gap-4 border-b border-slate-200 sticky bg-white top-0 z-50">
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
        <div className="p-6 flex flex-col gap-6 max-w-full z-40">
          {exporterRules?.map((exporterRule, index) => {
            const ruleNameAlert = exporterRule.name
              .split(' ')
              .map((word) => word.toLowerCase())
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join('');
            const rule = rules.find((rule) => rule.alert === ruleNameAlert);

            const copyText = `alert: ${rule?.alert}\nexpr: ${rule?.expr}\nfor: ${rule?.for}\nlabels:\n  severity: ${rule?.labels?.severity}\nannotations:\n  summary: ${rule?.annotations?.summary}\n  description: ${rule?.annotations?.description}`;

            return (
              <div className="flex items-start gap-4 max-w-4xl overflow-x-hidden">
                <div className="bg-slate-100 rounded-full h-10 w-10 flex items-center justify-center">
                  <p className="text-xs font-bold text-slate-500">
                    {(index + 1).toString().padStart(2, '0')}
                  </p>
                </div>
                <div className="flex flex-col gap-4 overflow-x-hidden w-full">
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      {exporterRule.name}
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      {exporterRule.description}
                    </p>
                  </div>
                  <div className="bg-slate-50 w-full font-jetbrains-mono text-xs text-slate-600 relative rounded z-40">
                    <div className="py-6 px-2 overflow-x-scroll no-scrollbar">
                      <ul className="list-hyphen list-outside px-4">
                        <li className="text-nowrap">
                          <span className="text-green-700 ml-2">alert</span>:{' '}
                          {rule?.alert}
                          <br />
                          <span className="text-green-700 ml-2">
                            expr
                          </span>: {rule?.expr}
                          <br />
                          <span className="text-green-700 ml-2">for</span>:{' '}
                          {rule?.for}
                          <br />
                          <span className="text-green-700 ml-2">
                            labels
                          </span>: <br />
                          <span className="text-green-700 ml-6">
                            severity
                          </span>: {rule?.labels?.severity}
                          <br />
                          <span className="text-green-700 ml-2">
                            annotations
                          </span>
                          : <br />
                          <span className="text-green-700 ml-6">
                            summary
                          </span>: {rule?.annotations?.summary}
                          <br />
                          <span className="text-green-700 ml-6">
                            description
                          </span>
                          : {rule?.annotations?.description}
                        </li>
                      </ul>
                    </div>
                    <button
                      className="absolute top-0 right-0 flex items-center gap-1 bg-slate-100 py-2 px-3 text-2xs uppercase text-slate-500 font-bold font-inter rounded-tr rounded-bl"
                      onClick={() => navigator.clipboard.writeText(copyText)}
                    >
                      <Image
                        src="/copy.svg"
                        alt="Copy"
                        width={8.5}
                        height={10}
                      />
                      Copy
                    </button>
                  </div>
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
