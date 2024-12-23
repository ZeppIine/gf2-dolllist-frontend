import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Container = (dolls) => {
  const [specsExpanded, setSpecsExpanded] = useState(false);

  const toggleSpecs = () => {
    setSpecsExpanded((prevState) => !prevState);
  };
  console.log(dolls.doll);

  return (
    <>
      <div className="container">
        <img
          className="doll-img"
          src={`https://i.namu.wiki/i/${dolls.doll.img}.webp`}
          alt={`${dolls.doll.name} 이미지`}
          onClick={toggleSpecs}
        />
        <a
          href={`https://www.youtube.com/results?search_query=소녀전선2%20${dolls.doll.name}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="doll-name">
            {dolls.doll.name}
            {specsExpanded && (
              <pre onClick={toggleSpecs}>
                {`${dolls.doll.dclass}(${dolls.doll.type})`}
              </pre>
            )}
          </div>
        </a>
        <div className="doll-star">
          {[...Array(dolls.doll.star)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Container;
