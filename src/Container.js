import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Container = (props) => {
  const [specsExpanded, setSpecsExpanded] = useState(false);

  const toggleSpecs = () => {
    setSpecsExpanded((prevState) => !prevState);
  };

  return (
    <>
      <div className="container">
        <img
          className="doll-img"
          src={props.doll.img}
          alt={`${props.doll.name} 이미지`}
          onClick={toggleSpecs}
        />
        <a
          href={`https://www.youtube.com/results?search_query=소녀전선2%20${props.doll.name}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="doll-name">
            {props.doll.name}
            {specsExpanded && (
              <pre onClick={toggleSpecs}>
                {`${props.doll.class}(${props.doll.type})`}
              </pre>
            )}
          </div>
        </a>
        <div className="doll-star">
          {[...Array(props.doll.star)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Container;
