import styles from "../pages/joblist/Joblist.module.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>

      <h2 className={styles.logo}>JobFinder</h2>

      <div className={styles.menu}>

        <h4>Dashboard</h4>
        <h4>Profile</h4>
        

        <div className={styles.section}>
          <h3>Frequently Searched</h3>
          <p>React</p>
          <p>Python</p>
          <p>AWS</p>
        </div>

        <div className={styles.section}>
         <Link to="/filterjobs"><h3>Highest Rated</h3></Link>
          <p>Frontend Developer</p>
          <p>ML Engineer</p>
          <p>Cloud Engineer</p>
        </div>

        <h4>Logout</h4>

      </div>

    </div>
  );
};

export default Sidebar;