import './App.css';
import { Banner} from './Componets/MainSection/MainSection';
import { Feature1,Feature2,Feature3,Feature4 } from './Componets/FeaturesSection/Features';
import { FAQ } from './Componets/FAQ Section/Faq';
import { Footer } from './Componets/FooterSection/Footer';

function App() {
  return (
    <>
      <Banner />
      <Feature1/>
      <Feature2/>
      <Feature3/>
      <Feature4/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;
