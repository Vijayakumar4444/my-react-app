// import styles from "../pages/joblist/Joblist.module.css";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className={styles.sidebar}>
      
//       <h2 className={styles.logo}>JobFinder</h2>

//       <div className={styles.menu}>
//         <Link to="/jobs" className={styles.menuLink}>
//           <p className={styles.item}>Dashboard</p>
//         </Link>

//         <p className={styles.item}>Search</p>

//         <Link to="/recent" className={styles.menuLink}>
//           <p className={styles.item}>Frequently Searched</p>
//         </Link>

//         <Link to="/filterjobs" className={styles.menuLink}>
//           <p className={styles.item}>Filter Jobs</p>
//         </Link>

//         <p className={styles.item}>Logout</p>
//       </div>

//     </div>
//   );
// };

// export default Sidebar;
import styles from "../pages/joblist/Joblist.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>JobFinder</h2>

      <div className={styles.menu}>
        <Link to="/jobs" className={styles.menuLink}>
          <p className={styles.item}>Dashboard</p>
        </Link>

        <p className={styles.item}>Search</p>

        <Link to="/recent" className={styles.menuLink}>
          <p className={styles.item}>Frequently Searched</p>
        </Link>

        <Link to="/filterjobs" className={styles.menuLink}>
          <p className={styles.item}>Filter Jobs</p>
        </Link>

        <p className={styles.item}>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;