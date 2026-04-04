// import styles from "../pages/Joblist/Joblist.module.css";
// const handleApply = () => {
//   if (window.Module && window.Module.ccall) {
//     window.Module.ccall("insertNode", null, ["number"], [id]);
//   }
// };

// const JobCard = ({ title, company, experience, skills, salary, img }) => {
//   return (
//     <div className={styles.jobCard}>
//       <img src={img} alt={title} width="60" />
//       <h3>{title}</h3>
//       <p>{company}</p>
//       <p>{experience}</p>
//       <p>{salary}</p>
//       <p>{skills.join(", ")}</p>
//       <button onClick={handleApply}>Apply</button>
//     </div>
//   );
// };

// export default JobCard;


import styles from "../pages/joblist/Joblist.module.css";

const JobCard = ({ id, title, company, experience, skills, salary, img }) => {

  const handleApply = () => {
  if (!window.isWasmReady) {
    console.log("⏳ Wait... WASM loading");
    return;
  }

  window.Module.ccall("insertNode", null, ["number"], [id]);
  console.log("✅ Inserted:", id);
};

  return (
    <div className={styles.jobCard}>
      <img src={img} alt={title} width="60" />
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{experience}</p>
      <p>{salary}</p>
      <p>{skills.join(", ")}</p>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default JobCard;