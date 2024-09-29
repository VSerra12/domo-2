import logo from '../assets/m-logo.png'


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="77" height="77" />
          </a>
          <div className='nav-space'>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <hr className='border' />
              <div className='menu'>
                <p>A digital agency<br />based in Munich</p>
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Work</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Cart<span>(</span>0<span>)</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
)
}

export default Navbar