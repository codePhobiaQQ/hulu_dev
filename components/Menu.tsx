import logo from "../public/assets/svg/Logo.svg";

interface IMenu {
  nav: any;
  backgroundOne: any;
  backgroundTwo: any;
  line: any;
  dustParticles: any;
  social: any;
  links: any;
  title: any;
}

const Menu = ({
  nav,
  backgroundOne,
  backgroundTwo,
  line,
  dustParticles,
  links,
  social,
  title,
}: IMenu) => {
  return (
    <div className="menuUI">
      <nav ref={nav}>
        <div ref={backgroundOne} className="background-one"></div>
        <div ref={backgroundTwo} className="background-two"></div>
        <div className="menu">
          <ul ref={dustParticles} className="dust-particles">
            <li></li>
          </ul>
          <div className="left-side">
            <img ref={title} src={logo.src} alt="Logo" />
            <div className="social-media">
              <ul ref={social}>
                <li>
                  <i className="fab fa-facebook-square fa-2x"></i>
                </li>
                <li>
                  <i className="fab fa-instagram fa-2x"></i>
                </li>
                <li>
                  <i className="fab fa-twitter-square fa-2x"></i>
                </li>
              </ul>
            </div>
          </div>
          <div ref={line} className="line"></div>
          <ul ref={links} className="links">
            <li>home</li>
            <li>pictures</li>
            <li>blog</li>
            <li>other</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
