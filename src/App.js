import "./App.css";
function App() {
  return (
    <body>
      <div class="container">
        <div class="header">
          <img
            alt="my photo"
            height="250"
            src="images/Screenshot 2024-11-12 230633.png"
            width="200"
          />
          <div class="info">
            <h1>Eden J Mirontoneng</h1>
            <h2>Data Analyst</h2>
          </div>
        </div>
        <div class="section">
          <h3>PROFIL</h3>
          <p>
            Saya lulusan Sistem Informasi 2025, saya sedang mencari pekerjaan
            yang berhubungan dengan Data Analyst, saya ingin merasakan bekerja
            dengan orang yang sudah sangat ahli dalam bidang tersebut.
          </p>
        </div>
        <div class="section">
          <h3>EDUKASI</h3>
          <p>Universitas Klabat</p>
          <p>S1 System Informasi (2021-2025)</p>
        </div>
        <div class="section">
          <h3>PENGALAMAN</h3>
          <div class="experience">
            <div class="item">
              <div class="dot"></div>
              <div class="details">
                <span>LARANA COMPANY</span>
                Data Analyst (10 Juli - 10 September) 2027
              </div>
            </div>
            <div class="item">
              <div class="dot"></div>
              <div class="details">
                <span>KRONII COMPANY</span>
                Data Analyst (20 September - 10 Desember) 2027
              </div>
            </div>
            <div class="item">
              <div class="dot"></div>
              <div class="details">
                <span>FAUGET NOWHERE</span>
                Magang (1 Januari - 4 April) 2024
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <h3>BAHASA</h3>
          <p>INGGRIS</p>
          <p>INDONESIA</p>
        </div>
        <div class="section">
          <div class="contact-info">
            <i class="fas fa-phone"></i>
            <p>Telepon: 0813-4214-3692</p>
          </div>
          <div class="contact-info">
            <i class="fas fa-envelope"></i>
            <p>Email: s22110547@student.unklab.ac.id</p>
          </div>
          <div class="contact-info">
            <i class="fas fa-map-marker-alt"></i>
            <p>Alamat: Kema 1, Kecamatan kema, JL.kema-bitung</p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
