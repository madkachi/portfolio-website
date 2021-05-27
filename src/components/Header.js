import Typed from "react-typed";

const Header = () => {
    return(
        <div className="header-wrapper">
            <div className="main-info">
                <h1>onyekachi madubuike</h1>
                <Typed
                className="typed-text"
                strings={["Software Engineer", "Front-End Developer", "IT Service Manager"]}
                typeSpeed = {40}
                backSpeed = {60}
                loop
                />
                <a href="#" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header;