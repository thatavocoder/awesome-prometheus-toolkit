export interface ExporterRule {
  name: string;
  description: string;
  query: string;
  severity: string;
}

export interface Exporter {
  name: string;
  slug: string;
  rules: ExporterRule[];
}

interface Service {
  name: string;
  exporters: Exporter[];
}

export interface Group {
  name: string;
  services: Service[];
}

export interface RulesData {
  groups: Group[];
}

export interface RuleDetailsRules {
  alert: string;
  expr: string;
  for: string;
  labels: { severity: string };
  annotations: {
    summary: string;
    description: string;
  };
}

interface RulesDetailsGroup {
  name: string;
  rules: RuleDetailsRules[];
}

export interface RulesDetails {
  groups: RulesDetailsGroup[];
}
