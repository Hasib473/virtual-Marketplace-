const features = [
  { title: "Skill Gap Analyzer", desc: "AI checks missing skills", live: true },
  { title: "Real-time Collaboration", desc: "Live project room", live: true },
  { title: "Voice to Text", desc: "AI speech recognition", live: true },
  { title: "Smart Wallet", desc: "Auto earnings tracking", live: true },
  { title: "Nearby Work", desc: "Geo-based jobs", live: true },
  { title: "Verified Badge", desc: "Trust system", live: true },
  { title: "Your Growth", desc: "AI analytics graph", live: true },
  { title: "AI Assistant", desc: "Chat + suggestions", live: true },
];

const FeatureGrid = () => {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      {features.map((f, i) => (
        <div key={i} className=" p-5  bg-black/40 border border-white/20 rounded-xl shadow hover:scale-105 transition">
          <h3 className="font-semibold text-lg text-gray-300">{f.title}</h3>
          <p className="text-sm text-gray-400 mt-2">{f.desc}</p>
          <span className="inline-block mt-3 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            ● Live
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
