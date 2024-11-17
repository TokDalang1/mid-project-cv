import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties } from "react";

const Pengalaman = () => {
  const [Pengalaman, setPengalaman] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const pengalamanRef = ref(db, "pengalaman/");
    onValue(pengalamanRef, (snapshot) => {
      const data = snapshot.val();
      setPengalaman(data);
      setLoading(false);
    });
  }, []);

  return (
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
  );
};
export default Pengalaman;
