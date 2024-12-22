import "./App.css";
import Container from "./Container.js";
import dolls from "./data.js";

const App = () => {
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
          "https://i.namu.wiki/i/922N1EzfpBcCcMiuLvN1VXPcpl5WVdwPXrHTJJbwwMxssn4udDdryUawbuf__kWZtfq6WTjWDmCUG5nUkdxEMdMZsErdohyngpTbKwDs12X1UUlBxExwV8LlClDInPxu1M7_sSiPEjsWEm6Twnn7vQ.webp"
        }
        alt={"소녀전선2 : 망명"}
      />
    </div>
  );
};

const DollList = (props) => {
  return (
    <div className="doll-list">
      <h1 className="doll-list-title">{props.title}</h1>
      <div className="doll-container">
        {props.listDolls.map((doll) => (
          <Container key={doll.id} doll={doll} />
        ))}
      </div>
    </div>
  );
};

export default App;
