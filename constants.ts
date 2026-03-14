import { 
  ShieldCheck, 
  Calculator, 
  TrendingUp, 
  Building2, 
  Briefcase, 
  Users, 
  HardHat, 
  Store, 
  Globe,
  FileText,
  Search,
  Clipboard,
  Shield,
  BarChart,
  Receipt,
  User,
  Settings,
  PieChart,
  History,
  Wallet,
  Target
} from 'lucide-react';
import { Partner, Sector, ServiceCategory } from './types';

export const COMPANY_INFO = {
  name: "Lyno Associate",
  motto: "Integrity. Precision. Growth.",
  tagline: "Your Trusted Partner in Audit, Taxation, and Advisory.",
  address: "Ubungo, Dar es Salaam, Tanzania",
  phone: "+255 700 000 000", // Placeholder format based on TZ
  email: "info@lynoassociate.co.tz", // Placeholder format
  ids: {
    tin: "123-456-789",
    vrn: "40-123456-Q",
    bn: "12345"
  }
};

export const PARTNERS: Partner[] = [
  {
    name: "CPA Noel Bernard Sabuni",
    role: "Managing Partner",
    qualifications: ["Certified Public Accountant (CPA-T)", "Registered Auditor"],
    bio: "With extensive experience in the Tanzanian regulatory landscape, CPA Sabuni leads the firm with a focus on compliance excellence and strategic financial oversight.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" // African professional male
  },
  {
    name: "CPA Lyandete Faraji Katalambula",
    role: "Partner",
    qualifications: ["Certified Public Accountant (CPA-T)", "Tax Consultant"],
    bio: "CPA Katalambula brings deep expertise in taxation and assurance, ensuring clients navigate complex financial frameworks with confidence.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" // African professional male
  }
];

export const SERVICES: ServiceCategory[] = [
  {
    id: "assurance",
    title: "Assurance Services",
    icon: ShieldCheck,
    description: "Our assurance services go beyond basic compliance. We provide independent, objective verification that enhances the credibility of your financial information, giving stakeholders the confidence they need to make informed decisions in the Tanzanian market.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Enhanced credibility with lenders, investors, and regulatory bodies like NBAA and TRA.",
      "Identification of operational inefficiencies and internal control weaknesses.",
      "Mitigation of risk through rigorous examination and professional skepticism.",
      "Compliance with International Standards on Auditing (ISA) and local statutory requirements."
    ],
    items: [
      { title: "Statutory Audits", icon: FileText, description: "We conduct thorough examinations of your financial statements to ensure they present a true and fair view, strictly adhering to the Companies Act and NBAA guidelines." },
      { title: "Review Engagements", icon: Search, description: "A cost-effective solution for entities that do not require a full audit but need a level of assurance on their financial reporting." },
      { title: "Agreed-Upon Procedures", icon: Clipboard, description: "Tailored engagements where we perform specific procedures on financial data as requested by management or third parties." },
      { title: "Internal Control Assessments", icon: Shield, description: "We evaluate your organization's internal control environment to safeguard assets and ensure the reliability of financial records." },
      { title: "Cost Confirmations", icon: BarChart, description: "Independent verification of project costs, essential for construction firms and project-based organizations in Tanzania." },
      { title: "Expenditure Verification", icon: Receipt, description: "Detailed audits of project spending, ensuring donor funds and grants are used according to specific grant agreements." }
    ]
  },
  {
    id: "accounting",
    title: "Accounting & Taxation",
    icon: Calculator,
    description: "Navigating the Tanzanian tax landscape requires precision and up-to-date knowledge. We provide comprehensive accounting and tax solutions that ensure your business remains compliant while optimizing your tax position.",
    image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Peace of mind knowing your TRA filings (VAT, PAYE, Corporate Tax) are accurate and timely.",
      "Reduction of tax-related penalties and interest through proactive compliance.",
      "Access to real-time financial insights for better day-to-day operational management.",
      "Professional representation during TRA audits, protecting your business interests."
    ],
    items: [
      { title: "Bookkeeping & Payroll", icon: Users, description: "Outsource your day-to-day accounting and payroll to us. We ensure accurate records and compliance with WCF, NSSF, and PSSSF requirements." },
      { title: "Tax Compliance & Consulting", icon: Receipt, description: "From monthly returns to annual tax computations, we manage your relationship with the TRA so you can focus on growth." },
      { title: "Internal Control System Design", icon: Settings, description: "We design and implement accounting systems that prevent revenue leakage and ensure data integrity from the ground up." },
      { title: "Financial Reporting Support", icon: PieChart, description: "We assist in preparing IFRS-compliant financial statements that meet the high standards expected by Tanzanian banks and investors." },
      { title: "Tax Audit Representation", icon: User, description: "Our experts represent you during TRA tax audits, handling all correspondence and technical justifications to ensure a fair outcome." }
    ]
  },
  {
    id: "finance",
    title: "Financial Management",
    icon: TrendingUp,
    description: "Strategic financial management is the backbone of any successful enterprise. We act as your strategic partners, providing the high-level oversight and analysis needed to drive profitability and long-term sustainability.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Strategic financial leadership without the cost of a full-time CFO.",
      "Improved cash flow visibility and management, crucial for business continuity.",
      "Data-driven decision-making supported by accurate forecasting and budgeting.",
      "Enhanced operational efficiency through streamlined financial processes."
    ],
    items: [
      { title: "Outsourced Financial Management", icon: Briefcase, description: "We provide virtual CFO services, offering strategic guidance on capital structure, investment decisions, and financial performance." },
      { title: "Internal Control Procedures", icon: History, description: "We establish and monitor robust procedures to protect your business from fraud and operational errors." },
      { title: "Efficiency & Process Improvement", icon: Target, description: "We analyze your financial workflows to identify bottlenecks and implement best practices for maximum productivity." },
      { title: "Cash Flow Management", icon: Wallet, description: "We help you monitor and optimize your cash position, ensuring you have the liquidity needed for operations and expansion." },
      { title: "Budgeting & Forecasting", icon: BarChart, description: "We develop comprehensive financial models and budgets that serve as a roadmap for your business's future success." }
    ]
  }
];

export const SECTORS: Sector[] = [
  {
    title: "Construction",
    description: "Project-based accounting and cost verification for contractors.",
    icon: HardHat
  },
  {
    title: "NGOs",
    description: "Grant audit compliance and donor reporting transparency.",
    icon: Globe
  },
  {
    title: "Microfinance",
    description: "Portfolio audits and regulatory compliance for financial institutions.",
    icon: Building2
  },
  {
    title: "Trade & Commerce",
    description: "Serving wholesalers, retailers, and importers with inventory and tax controls.",
    icon: Store
  },
  {
    title: "Startups",
    description: "Setting up robust financial systems for growing businesses.",
    icon: Briefcase
  }
];