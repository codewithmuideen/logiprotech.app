import React from "react";
import { FiCalendar } from "react-icons/fi"; // ✅ calendar icon

// Data for Nigeria Agriculture News with external links
const articleData = [
  {
    title: "Nigeria Bans Raw Shea Nut Exports to Boost Local Processing",
    date: "Aug 28, 2025",
    summary:
      "The government enacts a six-month export ban on raw shea nuts to promote value-addition, rural income, and processing industries locally.",
    link: "https://apnews.com/article/7efb544eb2f7c4994cc3627cf07abc4c",
    buttonStyle: "solid",
  },
  {
    title: "Dangote and Ethiopia Partner on $2.5B Fertiliser Plant",
    date: "Aug 28, 2025",
    summary:
      "Dangote Group and Ethiopian government sign deal to build a fertiliser plant producing 3 million metric tons annually—boosting food security regionally.",
    link: "https://www.reuters.com/world/africa/nigerias-dangote-ethiopia-build-25-billion-fertiliser-plant-2025-08-28",
    buttonStyle: "outline",
  },
  {
    title: "Water Scarcity Threatens Nigeria’s Food Security",
    date: "May 2025",
    summary:
      "Climate-induced droughts and erratic rainfall are pushing millions of Nigerians into food insecurity, while smallholder farmers struggle to adapt.",
    link: "https://apnews.com/article/0985473d47de9b752cd4b07f6df99c22",
    buttonStyle: "outline",
  },
  {
    title: "Carbon Farming: Trees Planted to Offset and Support Farmers",
    date: "Nov 2024",
    summary:
      "ThriveAgric leads a pilot to plant fruit trees alongside staple crops, enabling farmers to earn carbon credits and improve climate resilience.",
    link: "https://thriveagric.com/", // ThriveAgric official site
    buttonStyle: "solid",
  },
  {
    title: "GMO Debate: Balancing Yield Gains with Seed Sovereignty",
    date: "Aug 24, 2025",
    summary:
      "Agricultural experts weigh in on GMO use in Nigeria—highlighting potential benefits like drought resistance, but also raising concerns around reliance on foreign seeds.",
    link: "https://www.vanguardngr.com/category/agriculture/", // Vanguard Nigeria agriculture section
    buttonStyle: "outline",
  },
  {
    title: "ICRC: 3.7 Million Face Hunger in Conflict-Ravaged Northeast",
    date: "Jul 21, 2025",
    summary:
      "Food insecurity hits millions in northeast Nigeria—many displaced farmers have lost access to farmlands amid ongoing conflict.",
    link: "https://www.icrc.org/en/where-we-work/africa/nigeria", // ICRC Nigeria
    buttonStyle: "outline",
  },
  {
    title: "IFC Says Nigeria’s Agri-Resources Offer Industrialisation Opportunity",
    date: "Aug 27, 2025",
    summary:
      "The IFC highlights Nigeria’s abundant agri-resources as a key driver for food processing industrialisation and improved food security.",
    link: "https://pressroom.ifc.org/all/pages/PressDetail.aspx?ID=30983", // IFC news
    buttonStyle: "solid",
  },
  {
    title: "Reforming Farmer Identity: NIN-Linked Registry Launched",
    date: "Early 2025",
    summary:
      "The government unveils a new NIN-based farmer registry and G2P card for digital verification and streamlined agricultural subsidies.",
    link: "https://fmard.gov.ng/", // Federal Ministry of Agriculture Nigeria
    buttonStyle: "outline",
  },
  {
    title: "ACReSAL Restores Degraded Northern Landscapes",
    date: "2025 Project Update",
    summary:
      "A World Bank-funded project to restore 1 million hectares in northern Nigeria by 2028 through climate-resilient landscape management and peacebuilding.",
    link: "https://projects.worldbank.org/en/projects-operations/project-detail/P170622", // ACReSAL World Bank
    buttonStyle: "outline",
  },
  {
    title: "Benue Study: Insecurity Hinders Crop and Livestock Output",
    date: "Jun 2025",
    summary:
      "Research shows that each 1% rise in insecurity leads to 0.2% and 0.3% drops in crop and livestock output respectively in Benue State.",
    link: "https://guardian.ng/category/news/agriculture/", // Guardian Nigeria agriculture section
    buttonStyle: "outline",
  },
  {
    title: "Federal Budget Still Undershoots Agricultural Needs",
    date: "Aug 2025",
    summary:
      "Despite talk of agriculture, the 2025 budget allocates only 1.5% to the sector (≈₦826 billion), well short of recommended targets.",
    link: "https://punchng.com/topics/agriculture/", // Punch Nigeria agriculture section
    buttonStyle: "outline",
  },
  {
    title: "Egusi Seeds in Space: Nigeria’s Crop Reaches the ISS",
    date: "Aug 2025",
    summary:
      "In a landmark experiment, egusi (melon) seeds from Nigeria were sent to the ISS to study stress adaptation and germination post-flight.",
    link: "https://spacewatch.africa/", // Africa Space/Agriculture news
    buttonStyle: "solid",
  },
];

// Reusable Article Card
const ArticleCard = ({ title, date, summary, buttonStyle, link }) => {
  const baseButtonClasses =
    "inline-block text-center text-sm font-semibold rounded-full py-2.5 px-6 transition-all duration-300 ease-in-out";
  const buttonStyles = {
    outline:
      "border border-[#4A4A4A] text-white hover:bg-white hover:text-black",
    solid:
      "bg-[#F95738] text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20",
  };

  return (
    <article className="flex flex-col h-full bg-[#1A1A1A] p-6 rounded-xl transition-shadow hover:shadow-2xl">
      <div className="mb-4 flex-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm mb-4 flex items-center gap-2">
          <FiCalendar className="text-zinc-400" /> {date}
        </p>
        <p className="text-zinc-300 text-base">{summary}</p>
      </div>
      <div className="mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseButtonClasses} ${buttonStyles[buttonStyle]}`}
        >
          Read more
        </a>
      </div>
    </article>
  );
};

// Main Section
const NewsArticles = () => {
  return (
    <section className="bg-[#121212] text-white font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <header className="flex justify-between items-center mb-12 sm:mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            Nigeria Agriculture News
          </h2>
          <a
            href="https://www.google.com/search?q=Nigeria+agriculture+news"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block border border-zinc-700 rounded-full py-2.5 px-7 text-sm font-semibold hover:bg-zinc-800 transition-all duration-300"
          >
            See all
          </a>
        </header>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articleData.map((article, idx) => (
            <ArticleCard key={idx} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsArticles;
