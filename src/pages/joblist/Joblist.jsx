// import React, { useEffect, useState } from "react";
// import JobCard from "../../components/JobCard";
// import Sidebar from "../../components/Sidebar";
// import googleImg from "../../assets/google.png";
// import amazonImg from "../../assets/amazon.png";
// import adobeImg from "../../assets/adobe.png";
// import microsoftImg from "../../assets/microsoft.png";
// import oracleImg from "../../assets/oracle2.png";
// import openaiImg from "../../assets/openai.png";
// import netflixImg from "../../assets/netflix.png";
// import ciscoImg from "../../assets/cisco2.png";
// import appleImg from "../../assets/apple2.png";
// import nvidiaImg from "../../assets/nvidia.png";
// import coinbaseImg from "../../assets/coinbase.png";
// import ibmImg from "../../assets/ibm2.png";
// import uberImg from "../../assets/uber.png";
// import accentureImg from "../../assets/acc2.png";
// import metaImg from "../../assets/meta.png";
// import styles from "./Joblist.module.css";

// // const jobs = [
// //   {
// //     id: 1,
// //     title: "Frontend Developer",
// //     company: "Google",
// //     experience: "2 years",
// //     skills: ["React", "JavaScript", "CSS"],
// //   },
// //   {
// //     id: 2,
// //     title: "Backend Developer",
// //     company: "Amazon",
// //     experience: "3 years",
// //     skills: ["Node.js", "MySQL", "REST API"],
// //   },
// //   {
// //     id: 3,
// //     title: "Full Stack Developer",
// //     company: "Netflix",
// //     experience: "4 years",
// //     skills: ["React", "Node.js", "MongoDB"],
// //   },
// //   {
// //     id: 4,
// //     title: "Data Analyst",
// //     company: "Microsoft",
// //     experience: "1 year",
// //     skills: ["Python", "SQL", "Excel"],
// //   },
// //   {
// //     id: 5,
// //     title: "Machine Learning Engineer",
// //     company: "OpenAI",
// //     experience: "3 years",
// //     skills: ["Python", "TensorFlow", "Deep Learning"],
// //   },
// //   {
// //     id: 6,
// //     title: "UI/UX Designer",
// //     company: "Adobe",
// //     experience: "2 years",
// //     skills: ["Figma", "UI Design", "Prototyping"],
// //   },
// //   {
// //     id: 7,
// //     title: "DevOps Engineer",
// //     company: "IBM",
// //     experience: "4 years",
// //     skills: ["Docker", "Kubernetes", "AWS"],
// //   },
// //   {
// //     id: 8,
// //     title: "Mobile App Developer",
// //     company: "Spotify",
// //     experience: "2 years",
// //     skills: ["React Native", "JavaScript", "API"],
// //   },
// //   {
// //     id: 9,
// //     title: "Cloud Engineer",
// //     company: "Oracle",
// //     experience: "3 years",
// //     skills: ["AWS", "Terraform", "Linux"],
// //   },
// //   {
// //     id: 10,
// //     title: "Cybersecurity Analyst",
// //     company: "Cisco",
// //     experience: "2 years",
// //     skills: ["Network Security", "Penetration Testing", "Python"],
// //   },
// //   {
// //     id: 11,
// //     title: "Software Engineer",
// //     company: "Intel",
// //     experience: "1 year",
// //     skills: ["C++", "Data Structures", "Algorithms"],
// //   },
// //   {
// //     id: 12,
// //     title: "Product Manager",
// //     company: "Meta",
// //     experience: "5 years",
// //     skills: ["Product Strategy", "Agile", "Leadership"],
// //   },
// // ];

// const jobs = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     company: "Google",
//     experience: "2 years",
//     skills: ["React", "JavaScript", "CSS"],
//     salary: "$95,000",
//     img: googleImg,
//   },
//   {
//     id: 2,
//     title: "Backend Developer",
//     company: "Amazon",
//     experience: "3 years",
//     skills: ["Node.js", "MySQL", "REST API"],
//     salary: "$100,000",
//     img: amazonImg,
//   },
//   {
//     id: 3,
//     title: "UI/UX Designer",
//     company: "Adobe",
//     experience: "2 years",
//     skills: ["Figma", "UI Design", "Prototyping"],
//     salary: "$85,000",
//     img: adobeImg,
//   },
//   {
//     id: 4,
//     title: "Data Analyst",
//     company: "Microsoft",
//     experience: "1 year",
//     skills: ["Python", "SQL", "Excel"],
//     salary: "$80,000",
//     img: microsoftImg,
//   },
//   {
//     id: 5,
//     title: "Cloud Engineer",
//     company: "Oracle",
//     experience: "3 years",
//     skills: ["AWS", "Terraform", "Linux"],
//     salary: "$110,000",
//     img: oracleImg,
//   },
//   {
//     id: 6,
//     title: "ML Engineer",
//     company: "OpenAI",
//     experience: "3 years",
//     skills: ["Python", "TensorFlow", "Deep Learning"],
//     salary: "$120,000",
//     img: openaiImg,
//   },
//   {
//     id: 7,
//     title: "Full Stack Developer",
//     company: "Meta",
//     experience: "4 years",
//     skills: ["React", "Node.js", "MongoDB"],
//     salary: "$105,000",
//     img: metaImg,
//   },
//   {
//     id: 8,
//     title: "DevOps Engineer",
//     company: "Netflix",
//     experience: "4 years",
//     skills: ["Docker", "Kubernetes", "AWS"],
//     salary: "$115,000",
//     img: netflixImg,
//   },
//   {
//     id: 9,
//     title: "Cybersecurity Analyst",
//     company: "Cisco",
//     experience: "2 years",
//     skills: ["Network Security", "Penetration Testing", "Python"],
//     salary: "$102,000",
//     img: ciscoImg,
//   },
//   {
//     id: 10,
//     title: "Mobile App Developer",
//     company: "Apple",
//     experience: "2 years",
//     skills: ["React Native", "JavaScript", "API"],
//     salary: "$108,000",
//     img: appleImg,
//   },
//   {
//     id: 11,
//     title: "AI Researcher",
//     company: "NVIDIA",
//     experience: "3 years",
//     skills: ["AI", "Deep Learning", "Python"],
//     salary: "$125,000",
//     img: nvidiaImg,
//   },
//   {
//     id: 12,
//     title: "System Engineer",
//     company: "IBM",
//     experience: "2 years",
//     skills: ["Linux", "Networking", "Shell"],
//     salary: "$90,000",
//     img: ibmImg,
//   },
//   {
//     id: 13,
//     title: "Blockchain Developer",
//     company: "Coinbase",
//     experience: "3 years",
//     skills: ["Blockchain", "Solidity", "Web3"],
//     salary: "$112,000",
//     img: coinbaseImg,
//   },
//   {
//     id: 14,
//     title: "Product Manager",
//     company: "Uber",
//     experience: "5 years",
//     skills: ["Agile", "Leadership", "Strategy"],
//     salary: "$118,000",
//     img: uberImg,
//   },
//   {
//     id: 15,
//     title: "Software Tester (QA)",
//     company: "Accenture",
//     experience: "2 years",
//     skills: ["Testing", "Selenium", "Automation"],
//     salary: "$78,000",
//     img: accentureImg,
//   },
// ];

// const Joblist = () => {
//   const [filteredJobs, setFilteredJobs] = useState(jobs);
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     if (!window.Module || !window.Module.cwrap) return;

//     // Load functions
//     window.insert = window.Module.cwrap(
//       "insertWord",
//       null,
//       ["string", "number"]
//     );

//     window.getSuggestions = window.Module.cwrap(
//       "getSuggestions",
//       "string",
//       ["string"]
//     );

//     // Insert data into Trie
//     jobs.forEach((job) => {
//       job.skills.forEach((skill) => {
//         window.insert(skill.toLowerCase(), job.id);
//       });

//       window.insert(job.title.toLowerCase(), job.id);
//     });

//     console.log("Trie Ready ✅");
//   }, []);

//   // 🔍 SEARCH + AUTOCOMPLETE
//   const handleSearch = (value) => {
//     const query = value.toLowerCase();

//     if (!query) {
//       setFilteredJobs(jobs);
//       setSuggestions([]);
//       return;
//     }

//     // 🔥 AUTOCOMPLETE
//     if (window.getSuggestions) {
//       const result = window.getSuggestions(query);
//       const list = result.split(",").filter((s) => s !== "");
//       setSuggestions(list);
//     }

//     // 🔥 MULTI SEARCH
//     if (window.Module) {
//       const sizePtr = window.Module._malloc(4);

//       const resultPtr = window.Module.ccall(
//         "searchAll",
//         "number",
//         ["string", "number"],
//         [query, sizePtr]
//       );

//       const size = window.Module.getValue(sizePtr, "i32");

//       const ids = [];

//       for (let i = 0; i < size; i++) {
//         ids.push(window.Module.getValue(resultPtr + i * 4, "i32"));
//       }

//       const filtered = jobs.filter((job) => ids.includes(job.id));
//       setFilteredJobs(filtered);

//       window.Module._free(sizePtr);
//     }
//   };

//   return (
//     <div className={styles.layout}>
//       <Sidebar />

//       <div className={styles.mainContent}>
//         <input
//           className={styles.searchBar}
//           type="text"
//           placeholder="Search jobs or skills..."
//           onChange={(e) => handleSearch(e.target.value)}
//         />

//         {/* 🔥 Suggestions */}
//         {suggestions.length > 0 && (
//           <div className={styles.suggestionsBox}>
//             {suggestions.map((s, index) => (
//               <div
//                 key={index}
//                 className={styles.suggestionItem}
//                 onClick={() => handleSearch(s)}
//               >
//                 {s}
//               </div>
//             ))}
//           </div>
//         )}

//         <div className={styles.jobContainer}>
//           {filteredJobs.map((job) => (
//             <JobCard
//               key={job.id}
//               title={job.title}
//               company={job.company}
//               experience={job.experience}
//               skills={job.skills}
//               salary={job.salary}  
//               img={job.img} 
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Joblist;

import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import Sidebar from "../../components/Sidebar";
import googleImg from "../../assets/google.png";
import amazonImg from "../../assets/amazon.png";
import adobeImg from "../../assets/adobe.png";
import microsoftImg from "../../assets/microsoft.png";
import oracleImg from "../../assets/oracle2.png";
import openaiImg from "../../assets/openai.png";
import netflixImg from "../../assets/netflix.png";
import ciscoImg from "../../assets/cisco2.png";
import appleImg from "../../assets/apple2.png";
import nvidiaImg from "../../assets/nvidia.png";
import coinbaseImg from "../../assets/coinbase.png";
import ibmImg from "../../assets/ibm2.png";
import uberImg from "../../assets/uber.png";
import accentureImg from "../../assets/acc2.png";
import metaImg from "../../assets/meta.png";
import styles from "./Joblist.module.css";

const jobs = [
  { id: 1, title: "Frontend Developer", company: "Google", experience: "2 years", skills: ["React", "JavaScript", "CSS"], salary: "$95,000", img: googleImg },
  { id: 2, title: "Backend Developer", company: "Amazon", experience: "3 years", skills: ["Node.js", "MySQL", "REST API"], salary: "$100,000", img: amazonImg },
  { id: 3, title: "UI/UX Designer", company: "Adobe", experience: "2 years", skills: ["Figma", "UI Design", "Prototyping"], salary: "$85,000", img: adobeImg },
  { id: 4, title: "Data Analyst", company: "Microsoft", experience: "1 year", skills: ["Python", "SQL", "Excel"], salary: "$80,000", img: microsoftImg },
  { id: 5, title: "Cloud Engineer", company: "Oracle", experience: "3 years", skills: ["AWS", "Terraform", "Linux"], salary: "$110,000", img: oracleImg },
  { id: 6, title: "ML Engineer", company: "OpenAI", experience: "3 years", skills: ["Python", "TensorFlow", "Deep Learning"], salary: "$120,000", img: openaiImg },
  { id: 7, title: "Full Stack Developer", company: "Meta", experience: "4 years", skills: ["React", "Node.js", "MongoDB"], salary: "$105,000", img: metaImg },
  { id: 8, title: "DevOps Engineer", company: "Netflix", experience: "4 years", skills: ["Docker", "Kubernetes", "AWS"], salary: "$115,000", img: netflixImg },
  { id: 9, title: "Cybersecurity Analyst", company: "Cisco", experience: "2 years", skills: ["Network Security", "Penetration Testing", "Python"], salary: "$102,000", img: ciscoImg },
  { id: 10, title: "Mobile App Developer", company: "Apple", experience: "2 years", skills: ["React Native", "JavaScript", "API"], salary: "$108,000", img: appleImg },
  { id: 11, title: "AI Researcher", company: "NVIDIA", experience: "3 years", skills: ["AI", "Deep Learning", "Python"], salary: "$125,000", img: nvidiaImg },
  { id: 12, title: "System Engineer", company: "IBM", experience: "2 years", skills: ["Linux", "Networking", "Shell"], salary: "$90,000", img: ibmImg },
  { id: 13, title: "Blockchain Developer", company: "Coinbase", experience: "3 years", skills: ["Blockchain", "Solidity", "Web3"], salary: "$112,000", img: coinbaseImg },
  { id: 14, title: "Product Manager", company: "Uber", experience: "5 years", skills: ["Agile", "Leadership", "Strategy"], salary: "$118,000", img: uberImg },
  { id: 15, title: "Software Tester (QA)", company: "Accenture", experience: "2 years", skills: ["Testing", "Selenium", "Automation"], salary: "$78,000", img: accentureImg }
];

const Joblist = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.Module && window.Module.cwrap) {
        clearInterval(interval);

        window.insert = window.Module.cwrap("insertWord", null, ["string", "number"]);
        window.getSuggestions = window.Module.cwrap("getSuggestions", "string", ["string"]);

        jobs.forEach((job) => {
          job.skills.forEach((skill) => {
            window.insert(skill.toLowerCase(), job.id);
          });
          window.insert(job.title.toLowerCase(), job.id);
        });
      }
    }, 200);
  }, []);

  const handleSearch = (value) => {
    const query = value.toLowerCase();

    if (!query) {
      setFilteredJobs(jobs);
      setSuggestions([]);
      return;
    }

    if (window.getSuggestions) {
      const result = window.getSuggestions(query);
      const list = result.split(",").filter((s) => s !== "");
      setSuggestions(list);
    }

    if (window.Module) {
      const sizePtr = window.Module._malloc(4);

      const resultPtr = window.Module.ccall("searchAll", "number", ["string", "number"], [query, sizePtr]);

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
      <Sidebar className={styles.sidebar} />

      <div className={styles.mainContent}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search jobs or skills..."
          onChange={(e) => handleSearch(e.target.value)}
        />

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
              id={job.id}
              title={job.title}
              company={job.company}
              experience={job.experience}
              skills={job.skills}
              salary={job.salary}
              img={job.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Joblist;