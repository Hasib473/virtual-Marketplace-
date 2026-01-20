import { useEffect, useState } from "react";
import JobCard from "../Components/JobCard";
import { jobs } from "../data/job.json";

const JobSearch = () => {
  const [query, setQuery] = useState("");
  const [listening, setListening] = useState(false);

  // frontend skills (later backend theke asbe)
  const mySkills = ["React", "JS", "Firebase"];

  // voice search
  const startVoiceSearch = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice search not supported");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      setQuery(event.results[0][0].transcript);
      setListening(false);
    };

    recognition.onerror = () => setListening(false);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-300">Job Search 🔍</h1>

      {/* Search bar */}
<div className="flex items-center gap-2 mb-6">
  {/* Input */}
  <input
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search jobs..."
    className="flex-1 px-3 py-2 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
  />

  {/* Voice Search Button */}
  <button
    onClick={startVoiceSearch}
    className={`p-2 rounded-lg flex items-center justify-center text-white ${
      listening ? "bg-red-500 animate-pulse" : "bg-emerald-500 hover:bg-emerald-600"
    } transition`}
    title="Voice Search"
  >
    {/* Microphone icon (using emoji for simplicity) */}
    🎤
  </button>
</div>


      {/* Jobs */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredJobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            mySkills={mySkills}
          />
        ))}
      </div>
    </div>
  );
};

export default JobSearch;
