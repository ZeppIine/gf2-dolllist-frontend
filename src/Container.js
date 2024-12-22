import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Container = (props) => {
  const [specsExpanded, setSpecsExpanded] = useState(false);

  const toggleSpecs = () => {
    setSpecsExpanded((prevState) => !prevState);
  };
  console.log(props);

  return (
    <>
      <div className="container">
        <img
          className="doll-img"
          src={`https://i.namu.wiki/i/${props.dolls.img}.webp`}
          alt={`${props.dolls.name} 이미지`}
          onClick={toggleSpecs}
        />
        <a
          href={`https://www.youtube.com/results?search_query=소녀전선2%20${props.dolls.name}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="doll-name">
            {props.dolls.name}
            {specsExpanded && (
              <pre onClick={toggleSpecs}>
                {`${props.dolls.dclass}(${props.dolls.type})`}
              </pre>
            )}
          </div>
        </a>
        <div className="doll-star">
          {[...Array(props.dolls.star)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Container;
