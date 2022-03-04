import logo from "../public/assets/svg/Logo.svg";

const FooterSection = () => {
  return (
    <footer className="footerSection">
      <div className="container">
        <div className="leftCol">
          <img src={logo.src} alt="Logo" />
        </div>
        <div className="centerCol"></div>
        <div className="rightCol"></div>
      </div>
    </footer>
  );
};

export default FooterSection;
