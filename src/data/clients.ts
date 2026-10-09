import { withBase } from '../utils/url';

export interface ClientLogo {
  name: string;
  logo?: string;
  href?: string;
  caseStudySlug?: string;
}

export const clients: ClientLogo[] = [
  { name: 'Air France KLM', logo: '/logos/air-france-klm.webp', href: withBase('/cas-clients/air-france-klm/'), caseStudySlug: 'air-france-klm' },
  { name: 'Louis Vuitton', logo: '/logos/louis-vuitton.svg', href: withBase('/cas-clients/louis-vuitton/'), caseStudySlug: 'louis-vuitton' },
  { name: 'PwC', logo: '/logos/pwc.webp' },
  { name: 'MG2Mix', logo: '/logos/mg2mix.webp', href: withBase('/cas-clients/mg2mix/'), caseStudySlug: 'mg2mix' },
  { name: 'Ressources', logo: '/logos/ressources.webp', href: withBase('/cas-clients/ressources/'), caseStudySlug: 'ressources' },
  { name: 'Mairie de Valbonne' },
  { name: 'JCI Monaco', logo: '/logos/jci-monaco.webp', href: withBase('/cas-clients/jci-monaco/'), caseStudySlug: 'jci-monaco' },
  { name: 'URSSAF', logo: '/logos/urssaf.webp', href: withBase('/cas-clients/urssaf-acoss/'), caseStudySlug: 'urssaf-acoss' },
  { name: "Commune d'Angers" },
  { name: 'CAF Rhône-Alpes' },
  { name: 'CEC', logo: '/logos/cec.webp', href: withBase('/cas-clients/cec/'), caseStudySlug: 'cec' },
  { name: 'FIBOIS', href: withBase('/cas-clients/fibois/'), caseStudySlug: 'fibois' },
  { name: 'Osan We', logo: '/logos/osanwe.webp' },
  { name: 'IA2P' },
  { name: 'MediaSchool' },
  { name: 'LaMAREC', href: withBase('/cas-clients/lamarec/'), caseStudySlug: 'lamarec' },
];
