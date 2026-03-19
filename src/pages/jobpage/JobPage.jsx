// import { useEffect, useState } from "react";
// import googleImg from "../../assets/google.png";
// import amazonImg from "../../assets/amazon.png";
// import adobeImg from "../../assets/adobe.png";
// import microsoftImg from "../../assets/microsoft.png";
// import oracleImg from "../../assets/oracle.png";
// import openaiImg from "../../assets/openai.png";
// import "./JobPage.css";

// // ✅ KEEP THIS OUTSIDE
// function parseSalary(str) {
//   return parseInt(str.replace(/[$,]/g, ""));
// }

// function JobPage() {

//   const [Module, setModule] = useState(null);
//   const [filtered, setFiltered] = useState([]);

//   // ✅ FIXED: Proper WASM loading
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "/heap.js";

//     script.onload = () => {
//       window.Module.onRuntimeInitialized = () => {
//         setModule(window.Module);
//       };
//     };

//     document.body.appendChild(script);
//   }, []);

//   // ================= FUNCTIONS =================

//   function extractAll() {
//     const result = [];

//     while (true) {
//       const val = Module.ccall("extractMaxSalary", "number");
//       if (val === -1) break;

//       result.push(val);
//     }

//     setFiltered(result);
//   }

//   function handleHigh() {
//     if (!Module) return;

//     Module.ccall("clearJobs");

//     jobs.forEach((job) => {
//       Module.ccall("addJob", null, ["number", "number"], [
//         job.id,
//         parseSalary(job.salary),
//       ]);
//     });

//     Module.ccall("buildHighHeap");
//     extractAll();
//   }

//   function handleLow() {
//     if (!Module) return;

//     Module.ccall("clearJobs");

//     jobs.forEach((job) => {
//       Module.ccall("addJob", null, ["number", "number"], [
//         job.id,
//         parseSalary(job.salary),
//       ]);
//     });

//     Module.ccall("buildLowHeap");
//     extractAll();
//   }

//   function handleMerge() {
//     if (!Module) return;

//     Module.ccall("clearJobs");

//     jobs.forEach((job) => {
//       Module.ccall("addJob", null, ["number", "number"], [
//         job.id,
//         parseSalary(job.salary),
//       ]);
//     });

//     Module.ccall("buildHighHeap");
//     Module.ccall("buildLowHeap");
//     Module.ccall("mergeHeaps");

//     extractAll();
//   }

//   // ================= JOB DATA =================

//   const jobs = [
//     { id: 1, title: "Frontend Developer", company: "Google", rating: 4.8, salary: "$95,000", img: googleImg },
//     { id: 2, title: "Backend Developer", company: "Amazon", rating: 4.6, salary: "$100,000", img: amazonImg },
//     { id: 3, title: "UI/UX Designer", company: "Adobe", rating: 4.5, salary: "$85,000", img: adobeImg },
//     { id: 4, title: "Data Analyst", company: "Microsoft", rating: 4.4, salary: "$80,000", img: microsoftImg },
//     { id: 5, title: "Cloud Engineer", company: "Oracle", rating: 4.7, salary: "$110,000", img: oracleImg },
//     { id: 6, title: "ML Engineer", company: "OpenAI", rating: 4.9, salary: "$120,000", img: openaiImg },
//   ];

//   // ✅ FIXED: Preserve heap order
//   const displayJobs =
//     filtered.length > 0
//       ? filtered.map((salary) =>
//           jobs.find(
//             (job) => parseSalary(job.salary) === salary
//           )
//         )
//       : jobs;

//   return (
//     <div className="job-page">

//       <div className="job-navbar">
//         <h2 className="job-logo">Job Recommendations System</h2>
//       </div>

//       <div className="job-hero">

//         <div className="hero-left">
//           <h1>Find Jobs Using Smart Filters</h1>
//         </div>

//         <div className="hero-right">

//           <div className="toggle-box">
//             <span>Salary &gt; 100000</span>
//             <input type="checkbox" onChange={handleHigh} />
//           </div>

//           <div className="toggle-box">
//             <span>Salary &lt; 100000</span>
//             <input type="checkbox" onChange={handleLow} />
//           </div>

//           <div className="toggle-box">
//             <span>Merge</span>
//             <input type="checkbox" onChange={handleMerge} />
//           </div>

//         </div>
//       </div>

//       <div className="job-card-container">
//         {displayJobs.map((job) => (
//           <div className="job-card" key={job.id}>
//             <div className="job-card-left">
//               <img src={job.img} alt={job.title} />

//               <div className="job-card-content">
//                 <h3>{job.title}</h3>
//                 <p>{job.company}</p>
//                 <p>⭐ {job.rating}</p>
//                 <p>{job.salary}</p>
//               </div>
//             </div>

//             <div className="job-card-right">
//               <button className="job-apply-btn">Apply</button>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default JobPage;










import { useEffect, useState } from "react";
import googleImg from "../../assets/google.png";
import amazonImg from "../../assets/amazon.png";
import adobeImg from "../../assets/adobe.png";
import microsoftImg from "../../assets/microsoft.png";
import oracleImg from "../../assets/oracle.png";
import openaiImg from "../../assets/openai.png";
import "./JobPage.css";

// helper
function parseSalary(str) {
  return parseInt(str.replace(/[$,]/g, ""));
}

function JobPage() {

  const [Module, setModule] = useState(null);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/heap.js";

    script.onload = () => {
      window.Module.onRuntimeInitialized = () => {
        setModule(window.Module);
      };
    };

    document.body.appendChild(script);
  }, []);

  // ================= CORE =================

  function extractAll() {
    const result = [];

    while (true) {
      const val = Module.ccall("extractMaxSalary", "number");
      if (val === -1) break;

      result.push(val);
    }

    setFiltered(result);
  }

  function loadJobsToCpp() {
    Module.ccall("clearJobs");

    jobs.forEach((job) => {
      Module.ccall("addJob", null, ["number", "number"], [
        job.id,
        parseSalary(job.salary),
      ]);
    });
  }

  function handleHigh() {
    if (!Module) return;

    loadJobsToCpp();
    Module.ccall("buildHighHeap");

    extractAll();
  }

  function handleLow() {
    if (!Module) return;

    loadJobsToCpp();

    // build only low
    Module.ccall("buildLowHeap");

    // 🔥 FIX: move low heap → high heap
    Module.ccall("mergeHeaps");

    extractAll();
  }

  function handleMerge() {
    if (!Module) return;

    loadJobsToCpp();

    Module.ccall("buildHighHeap");
    Module.ccall("buildLowHeap");
    Module.ccall("mergeHeaps");

    extractAll();
  }

  // ================= DATA =================

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Google", rating: 4.8, salary: "$95,000", img: googleImg },
    { id: 2, title: "Backend Developer", company: "Amazon", rating: 4.6, salary: "$100,000", img: amazonImg },
    { id: 3, title: "UI/UX Designer", company: "Adobe", rating: 4.5, salary: "$85,000", img: adobeImg },
    { id: 4, title: "Data Analyst", company: "Microsoft", rating: 4.4, salary: "$80,000", img: microsoftImg },
    { id: 5, title: "Cloud Engineer", company: "Oracle", rating: 4.7, salary: "$110,000", img: oracleImg },
    { id: 6, title: "ML Engineer", company: "OpenAI", rating: 4.9, salary: "$120,000", img: openaiImg },
  ];

  // preserve heap order
  const displayJobs =
    filtered.length > 0
      ? filtered.map((salary) =>
          jobs.find((job) => parseSalary(job.salary) === salary)
        )
      : jobs;

  return (
    <div className="job-page">

      {/* NAVBAR (RESTORED) */}
      <div className="job-navbar">
        <h2 className="job-logo">Job Recommendation System</h2>

        <div className="job-nav-buttons">
          <button className="job-btn-outline">Search</button>
          <button className="job-btn-outline">Recent Jobs</button>
          <button className="job-btn-fill">Sign Out</button>
        </div>
      </div>

      {/* HERO (RESTORED FULLY) */}
      <div className="job-hero">

        <div className="hero-left">
          <h1>Find Jobs Using Smart Filters</h1>

          <p>
            Discover jobs that match your skills, experience, and preferences.
            Filter opportunities and find your dream career easily.
          </p>
        </div>

        <div className="hero-right">

          <div className="toggle-box">
            <span>Salary &gt; 100000</span>
            <input type="checkbox" onChange={handleHigh} />
          </div>

          <div className="toggle-box">
            <span>Salary &lt; 100000</span>
            <input type="checkbox" onChange={handleLow} />
          </div>

          <div className="toggle-box">
            <span>Merge</span>
            <input type="checkbox" onChange={handleMerge} />
          </div>

        </div>
      </div>

      {/* JOB LIST */}
      <div className="job-card-container">
        {displayJobs.map((job) => (
          <div className="job-card" key={job.id}>
            <div className="job-card-left">
              <img src={job.img} alt={job.title} />

              <div className="job-card-content">
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                <p>⭐ {job.rating}</p>
                <p>{job.salary}</p>
              </div>
            </div>

            <div className="job-card-right">
              <button className="job-apply-btn">Apply</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default JobPage;