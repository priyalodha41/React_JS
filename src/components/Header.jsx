
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container">
            <a className="navbar-brand" href="#"><img src="assets/images/logo.svg" alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse display"  id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link display" aria-current="page" href="#">Home
                            <i class="ri-arrow-drop-down-line"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#" >Menu</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link display" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Pages  <i className="ri-arrow-drop-down-line"></i>          
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
                    <div className="navbar-btn display align-items-center">
                        <button className="book-btn">
                            Book a Table <i className="ri-arrow-right-long-line ps-2"></i>
                        </button>
                    </div>
            </div>
        </div>
    </nav>
  )
}

export default Header