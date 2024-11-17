import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const headerRef = ref(db, "header/");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="header">
      <img
        alt="Eden J Mirontoneng"
        height={250}
        src={header.img}
        width={200}
        loading="lazy"
      />
      <div className="info">
        <h1>{header.title}</h1>
        <h2>{header.subTitle}</h2>
      </div>
    </div>
  );
};
export default Header;
