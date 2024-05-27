import React, { Dispatch, SetStateAction } from 'react';
import Dialog from '../../shared/components/dialog';
import Image from 'next/image';
import { ExporterRule, RuleDetailsRule } from './classes';
import RuleDetails from './rule-details';

interface RulesDialogProps {
  isDialogOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  isImage: boolean;
  serviceName: string;
  rules: RuleDetailsRule[];
  exporterRules: ExporterRule[];
}

const RulesDialog = ({
  isDialogOpen,
  setIsDialogOpen,
  isImage,
  serviceName,
  rules,
  exporterRules,
}: RulesDialogProps) => {
  return (
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
            {rules?.length} rules
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
        {exporterRules?.map((exporterRule, index) => (
          <RuleDetails
            exporterRule={exporterRule}
            rules={rules}
            index={index}
            key={index}
          />
        ))}
      </div>
    </Dialog>
  );
};

export default RulesDialog;
