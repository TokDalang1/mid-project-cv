import "./App.css";
import ContactInfoNumb from "./Components/ContactInfoNum";
import Header from "./Components/Header";
function App() {
  return (
    <div className="container">
      <Header />
      <div className="section">
        <h3>PROFIL</h3>
        <p>
          Saya lulusan Sistem Informasi 2025, saya sedang mencari pekerjaan yang
          berhubungan dengan Data Analyst, saya ingin merasakan bekerja dengan
          orang yang sudah sangat ahli dalam bidang tersebut.
        </p>
      </div>
      <div className="section">
        <h3>EDUKASI</h3>
        <p>Universitas Klabat</p>
        <p>S1 System Informasi (2021-2025)</p>
      </div>
      <div className="section">
        <h3>PENGALAMAN</h3>
        <div className="experience">
          <div className="item">
            <div className="dot" />
            <div className="details">
              <span>LARANA COMPANY</span>
              Data Analyst (10 Juli - 10 September) 2027
            </div>
          </div>
          <div className="item">
            <div className="dot" />
            <div className="details">
              <span>KRONII COMPANY</span>
              Data Analyst (20 September - 10 Desember) 2027
            </div>
          </div>
          <div className="item">
            <div className="dot" />
            <div className="details">
              <span>FAUGET NOWHERE</span>
              Magang (1 Januari - 4 April) 2024
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h3>BAHASA</h3>
        <p>INGGRIS</p>
        <p>INDONESIA</p>
      </div>
      <div className="section">
        <contactinfonum>
          <div className="contact-info">
            <i className="fas fa-envelope" />
            <p>Email: s22110547@student.unklab.ac.id</p>
          </div>
          <div className="contact-info">
            <i className="fas fa-map-marker-alt" />
            <p>Alamat: Kema 1, Kecamatan kema, JL.kema-bitung</p>
          </div>
          <ContactInfoNumb />
        </contactinfonum>
      </div>
    </div>
  );
}

export default App;
