// src/components/Insights.jsx
import React from "react";
import {
  Users,
  ShoppingBag,
  Truck,
  Building2,
  Globe,
  MessageCircle,
  BarChart3,
} from "lucide-react";
import CountUp from "react-countup";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Insights() {
  const stats = [
    {
      title: "Active Farmers",
      value: "12500",
      icon: <Users className="w-8 h-8 text-green-400" />,
      desc: "Verified smallholder & commercial farmers onboarded.",
    },
    {
      title: "Customer Orders",
      value: "48200",
      icon: <ShoppingBag className="w-8 h-8 text-blue-400" />,
      desc: "Processed and delivered successfully via our marketplace.",
    },
    {
      title: "Logistics Providers",
      value: "350",
      icon: <Truck className="w-8 h-8 text-yellow-400" />,
      desc: "Efficient transporters connecting farms to cities.",
    },
    {
      title: "Partner Hubs",
      value: "120",
      icon: <Building2 className="w-8 h-8 text-purple-400" />,
      desc: "Agri hubs across Nigeria ensuring smooth distribution.",
    },
  ];

  const highlights = [
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      text: "Expanding across Africa with cross-border trade.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-pink-400" />,
      text: "Instant communication between farmers, buyers & logistics.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      text: "Powerful analytics for better decision-making.",
    },
  ];

  const growthData = [
    { month: "Jan", farmers: 2000, orders: 5000 },
    { month: "Feb", farmers: 3500, orders: 8000 },
    { month: "Mar", farmers: 5000, orders: 12000 },
    { month: "Apr", farmers: 7000, orders: 18000 },
    { month: "May", farmers: 10000, orders: 25000 },
    { month: "Jun", farmers: 12500, orders: 48200 },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[600px] h-[600px] bg-red-600/30 rounded-full blur-3xl absolute -top-20 -left-20"></div>
        <div className="w-[500px] h-[500px] bg-green-600/20 rounded-full blur-3xl absolute bottom-0 right-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            Insights & Impact
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            See how LogiProTech is transforming agriculture, connecting farmers,
            customers, and logistics providers in one seamless ecosystem.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 mb-4">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold">
                <CountUp
                  end={parseInt(s.value)}
                  duration={2.5}
                  separator=","
                />{" "}
                +
              </h3>
              <p className="text-red-400 font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-white/10 shadow-xl hover:translate-y-[-6px] transition-transform"
            >
              <div className="mb-4">{h.icon}</div>
              <p className="text-lg text-gray-200">{h.text}</p>
            </div>
          ))}
        </div>

        {/* Growth Chart */}
        <div className="mt-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
            Growth Trend
          </h3>
          <div className="w-full h-80">
            <ResponsiveContainer>
              <LineChart data={growthData}>
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="farmers"
                  stroke="#22c55e"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#facc15"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
