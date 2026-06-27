import { EmiForm } from "./components";
import { emiSEO } from "./seo";
import { emiContent } from "./content/emi-content";

export { EmiForm };

export const emiFeature = {
  slug: "emi-calculator",
  title: "EMI Calculator",
  component: EmiForm,
  seo: emiSEO,
  content: emiContent,
};