import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import Sidebar from "../../components/Sidebar";
import styles from "./Joblist.module.css";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    experience: "2 years",
    skills: ["React", "JavaScript", "CSS"],
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Amazon",
    experience: "3 years",
    skills: ["Node.js", "MySQL", "REST API"],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Netflix",
    experience: "4 years",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Microsoft",
    experience: "1 year",
    skills: ["Python", "SQL", "Excel"],
  },
  {
    id: 5,
    title: "Machine Learning Engineer",
    company: "OpenAI",
    experience: "3 years",
    skills: ["Python", "TensorFlow", "Deep Learning"],
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "Adobe",
    experience: "2 years",
    skills: ["Figma", "UI Design", "Prototyping"],
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "IBM",
    experience: "4 years",
    skills: ["Docker", "Kubernetes", "AWS"],
  },
  {
    id: 8,
    title: "Mobile App Developer",
    company: "Spotify",
    experience: "2 years",
    skills: ["React Native", "JavaScript", "API"],
  },
  {
    id: 9,
    title: "Cloud Engineer",
    company: "Oracle",
    experience: "3 years",
    skills: ["AWS", "Terraform", "Linux"],
  },
  {
    id: 10,
    title: "Cybersecurity Analyst",
    company: "Cisco",
    experience: "2 years",
    skills: ["Network Security", "Penetration Testing", "Python"],
  },
  {
    id: 11,
    title: "Software Engineer",
    company: "Intel",
    experience: "1 year",
    skills: ["C++", "Data Structures", "Algorithms"],
  },
  {
    id: 12,
    title: "Product Manager",
    company: "Meta",
    experience: "5 years",
    skills: ["Product Strategy", "Agile", "Leadership"],
  },
];

const Joblist = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!window.Module || !window.Module.cwrap) return;

    // Load functions
    window.insert = window.Module.cwrap(
      "insertWord",
      null,
      ["string", "number"]
    );

    window.getSuggestions = window.Module.cwrap(
      "getSuggestions",
      "string",
      ["string"]
    );

    // Insert data into Trie
    jobs.forEach((job) => {
      job.skills.forEach((skill) => {
        window.insert(skill.toLowerCase(), job.id);
      });

      window.insert(job.title.toLowerCase(), job.id);
    });

    console.log("Trie Ready ✅");
  }, []);

  // 🔍 SEARCH + AUTOCOMPLETE
  const handleSearch = (value) => {
    const query = value.toLowerCase();

    if (!query) {
      setFilteredJobs(jobs);
      setSuggestions([]);
      return;
    }

    // 🔥 AUTOCOMPLETE
    if (window.getSuggestions) {
      const result = window.getSuggestions(query);
      const list = result.split(",").filter((s) => s !== "");
      setSuggestions(list);
    }

    // 🔥 MULTI SEARCH
    if (window.Module) {
      const sizePtr = window.Module._malloc(4);

      const resultPtr = window.Module.ccall(
        "searchAll",
        "number",
        ["string", "number"],
        [query, sizePtr]
      );

      const size = window.Module.getValue(sizePtr, "i32");

      const ids = [];

      for (let i = 0; i < size; i++) {
        ids.push(window.Module.getValue(resultPtr + i * 4, "i32"));
      }

      const filtered = jobs.filter((job) => ids.includes(job.id));
      setFilteredJobs(filtered);

      window.Module._free(sizePtr);
    }
  };

  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.mainContent}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search jobs or skills..."
          onChange={(e) => handleSearch(e.target.value)}
        />

        {/* 🔥 Suggestions */}
        {suggestions.length > 0 && (
          <div className={styles.suggestionsBox}>
            {suggestions.map((s, index) => (
              <div
                key={index}
                className={styles.suggestionItem}
                onClick={() => handleSearch(s)}
              >
                {s}
              </div>
            ))}
          </div>
        )}

        <div className={styles.jobContainer}>
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company}
              experience={job.experience}
              skills={job.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Joblist;