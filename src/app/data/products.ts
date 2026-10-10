export const shopUrl = "https://zyforge.gumroad.com/";
export const facebookUrl = "https://www.facebook.com/profile.php?id=61579057059331";

export const products = [
  {
    slug: "free-lite-pricing",
    name: "Free Lite After-Fee Pricing Calculator",
    task: "Start with the cost you already know",
    description: "Enter your total batch cost, quantity, selling fees and target margin to estimate a break-even and target price. Optional payment is not required.",
    note: "A free starting point. It does not calculate filament or machine costs for you.",
    action: "Get the free calculator",
  },
  {
    slug: "fdm-print-pricing",
    name: "FDM Print Pricing & Profit Calculator",
    task: "Estimate a proposed print job",
    description: "Build up batch costs from material, machine time, labour and other expenses. Compare five prices and prepare a customer estimate.",
    note: "Your inputs determine the estimate; you choose the actual selling price.",
    action: "View the pricing calculator",
  },
  {
    slug: "print-job-profit-log",
    name: "Print Job Profit Log",
    task: "Record what happened after an order",
    description: "Keep completed-order costs, sales, refunds and fees in separate fields, then review profit and weighted margin.",
    note: "Includes space for 200 completed orders. Start a fresh period copy when full.",
    action: "View the job profit log",
  },
  {
    slug: "filament-inventory",
    name: "Filament Inventory & Reorder Tracker",
    task: "Reconcile the filament you have left",
    description: "Record pooled filament grams through receipts, use, scrap and adjustments, with remaining stock and reorder quantities.",
    note: "Tracks material pools, rather than individual spool identities.",
    action: "View the inventory tracker",
  },
  {
    slug: "fdm-operations-bundle",
    name: "FDM Operations Bundle",
    task: "Use all three paid tools",
    description: "The pricing calculator, job profit log and filament inventory tracker together, with blank and fictional example workbooks and guides.",
    note: "Separate workbooks. They do not automatically sync with each other.",
    action: "View the three-tool bundle",
  },
] as const;

export const expansionProducts = [
  {
    slug: "freelance-delivery-notion-system",
    name: "Freelance Delivery for Notion",
    task: "Keep one client project moving",
    description: "Connect clients, projects, tasks, proposals, changes, time and billing in a guided Notion workspace. Start with the fictional Cedar project walkthrough.",
    note: "Duplicate into your own Notion account. Desktop setup recommended; billing and approval records are manual.",
    action: "View the Notion system",
  },
  {
    slug: "junior-developer-application-bundle",
    name: "Junior Developer Application Bundle",
    task: "Prepare a truthful developer application",
    description: "Starter and expandable résumés, letters, references and examples in A4 and US Letter, with an application guide and manual tracker. Twelve Google Docs templates and DOCX downloads.",
    note: "Google Docs is the checked editing workflow. Review pagination after editing; ATS acceptance and employment outcomes are not guaranteed.",
    action: "View the application bundle",
  },
  {
    slug: "property-marketing-editable-pack",
    name: "Property Marketing Kit",
    task: "Create a useful property post",
    description: "24 square posts and 8 portrait stories, with all-page previews, matching captions and a 30-day plan. Import the editable PPTX files into Canva Free.",
    note: "Use your own authorised photos and accurate listing facts. Photo placeholders are ordinary rectangles; a native Canva template link is not included.",
    action: "View the marketing kit",
  },
  {
    slug: "fieldwork-nextjs-portfolio",
    name: "Fieldwork — Next.js Portfolio Kit",
    task: "Build a portfolio with independent case studies",
    description: "Editable Next.js source with project, service and writing pages, galleries, filters, themes and static export instructions. Includes six original sample illustrations.",
    note: "For buyers comfortable editing TypeScript and installing dependencies. One finished website; contact prepares an email draft. Explore the fictional demo from the listing.",
    action: "View Fieldwork and its demo",
  },
] as const;

export function productUrl(slug: string) {
  return `${shopUrl}l/${slug}`;
}
