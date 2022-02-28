import Header from "../hoc/Header/Header";
import MainSection from "../sections/MainSection/MainSection";
import BiographySection from "../sections/BiographySection/BiographySection";
import FormSection from "../sections/FormSection/FormSection";
import Footer from "../hoc/Footer/Footer";

const MainPage = () => {
  return (
    <Header>
      <Footer>
        <MainSection />
        <BiographySection />
        <FormSection />
      </Footer>
    </Header>
  );
};

export default MainPage;
