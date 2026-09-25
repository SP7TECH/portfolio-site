import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="sp7tech">
          <div className="green-dot"></div>
          <h2>
            SUMIT_PANDEY
            <span>.sh</span>
          </h2>
        </div>

        <nav>
          <ul>
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>

            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#systems">Systems</a>
            </li>

            <li>
              <a href="#capabilities">Capabilities</a>
            </li>
          </ul>
        </nav>

        <div className="header-ctas">
          <div className="sde-4">
            <span className="green-dot-small"></span>
            <p>SDE IV</p>
          </div>

          <button className="mail-cta">spandey19012001@gmail.com</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
