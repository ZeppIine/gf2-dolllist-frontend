import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "./Container.js";
// import dolls from "./data.js";

const App = () => {
  const [dolls, setDolls] = useState([]);

  const getDoll = async () => {
    try {
      const apiUri = process.env.DOLLS_URL;

      const res = await axios.get(apiUri);

      console.log(res);

      setDolls(res.data);
    } catch (err) {
      console.log(err);

      setDolls([]);
    }
  };

  useEffect(() => {
    getDoll();
  }, []);

  return (
    <div>
      <Header />
      <DollList title="인형 목록" listDolls={dolls} />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo-img"
        src={
          "https://i.namu.wiki/i/V0rsNeiU9TIkc0WGzyMe3wVWy-Mzu8pfHnw3EYvre4kKt8Msl_mpL1_RfdPVu4-8oFBLqsN5Rb81HCp6QMbSYGgE21XkGE0pK01CMJ0YpMptMADXXqgy66BwjXCyO8UAV2XkZDGh6IGAJm8GVs4q4g.webp"
        }
        alt={"소녀전선2 : 망명"}
      />
    </div>
  );
};

const DollList = (title, listDolls) => {
  return (
    <div className="doll-list">
      <h1 className="doll-list-title">{title}</h1>
      <div className="doll-container">
        {listDolls.map((doll) => (
          <Container key={doll.id} doll={doll} />
        ))}
      </div>
    </div>
  );
};

export default App;
