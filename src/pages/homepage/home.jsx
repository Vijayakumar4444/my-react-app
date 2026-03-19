import { useNavigate } from "react-router-dom"
import NavBar from "../../components/navbar"
import job from "../../assets/job4.png"
import "./home.css"

function Home(){
    const navigate = useNavigate()
    return(
        <div className="home-container">

            <div className="card">

                <NavBar />

                <div className="hero">

                    <div className="text-section">
                        <p className="hook">
                        Discover Opportunities That Match Your Potential
                        </p>

                        <div className="desc-box">
                            <p className="desc">
                                Explore job opportunities from leading companies and take the next step
                                toward your dream career. Build your future by connecting your skills
                                with the right opportunities.
                            </p>
                        </div>

                        <button className="expbtn" onClick={() => navigate("/jobs")}>Explore Opportunities For Your Career</button>
                    </div>

                    <img src={job}/>

                </div>

            </div>

        </div>
    )
}

export default Home