import "./navbar.css"

function NavBar(){
    return(
        <div className="navbar">

            <div className="nav-left">
                <p className="title">Job Recommendation System</p>
                <button className="btn">Explore</button>
            </div>

            <div className="nav-right">
                <button className="abtn">Admin</button>
                <button className="btn">Log In</button>
                <button className="btn">Sign Up</button>
            </div>

        </div>
    )
}

export default NavBar