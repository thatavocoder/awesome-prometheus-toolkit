import React from 'react';
import { ExporterRule, RuleDetailsRule } from './classes';
import Image from 'next/image';

interface RuleDetailsProps {
  index: number;
  exporterRule: ExporterRule;
  rules: RuleDetailsRule[];
}

const RuleDetails = ({ index, exporterRule, rules }: RuleDetailsProps) => {
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
                <span className="text-green-700 ml-2">expr</span>: {rule?.expr}
                <br />
                <span className="text-green-700 ml-2">for</span>: {rule?.for}
                <br />
                <span className="text-green-700 ml-2">labels</span>: <br />
                <span className="text-green-700 ml-6">severity</span>:{' '}
                {rule?.labels?.severity}
                <br />
                <span className="text-green-700 ml-2">annotations</span>
                : <br />
                <span className="text-green-700 ml-6">summary</span>:{' '}
                {rule?.annotations?.summary}
                <br />
                <span className="text-green-700 ml-6">description</span>:{' '}
                {rule?.annotations?.description}
              </li>
            </ul>
          </div>
          <button
            className="absolute top-0 right-0 flex items-center gap-1 bg-slate-100 py-2 px-3 text-2xs uppercase text-slate-500 font-bold font-inter rounded-tr rounded-bl"
            onClick={() => navigator.clipboard.writeText(copyText)}
          >
            <Image src="/copy.svg" alt="Copy" width={8.5} height={10} />
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default RuleDetails;
