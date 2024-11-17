import Header from "./Components/Header";
import Profil from "./Components/Section1";
import Edukasi from "./Components/Section2";
import Pengalaman from "./Components/Section3";
import Bahasa from "./Components/Section4";
import Kontak from "./Components/Section5";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Profil />
      <Edukasi />
      <Pengalaman />
      <Bahasa />
      <Kontak />
    </div>
  );
};
export default App;
