import styles from "../pages/joblist/Joblist.module.css";

const JobCard = ({ title, company, experience, skills }) => {
  return (
    <div className={styles.jobCard}>

      <h3>{title}</h3>
      <p><b>Company:</b> {company}</p>
      <p><b>Experience:</b> {experience}</p>
      <p><b>Skills:</b> {skills.join(", ")}</p>

      <button>Apply</button>

    </div>
  );
};

export default JobCard;