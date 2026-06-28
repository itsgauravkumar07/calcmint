import { emiSEO } from "./seo";
import { emiContent } from "./content/emi-content";
import { EmiPage } from "./components/emi-page";

export { EmiPage };
export * from "./components";
export * from "./lib";
export * from "./hooks";

export const emiFeature = {
  slug: "emi-calculator",
  title: "EMI Calculator",
  component: EmiPage,
  seo: emiSEO,
  content: emiContent,
};