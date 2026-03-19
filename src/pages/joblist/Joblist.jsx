import React from "react";
import JobCard from "../../components/JobCard";
import Sidebar from "../../components/Sidebar";
import styles from "./Joblist.module.css";   // ✅ changed

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
  return (
    <div className={styles.layout}>

      <Sidebar />

      <div className={styles.mainContent}>

        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search jobs or skills..."
        />

        <div className={styles.jobContainer}>

          {jobs.map((job) => (
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