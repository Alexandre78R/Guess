import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Pokemon({ question }) {
  const [rightAnswer, setRightAnwser] = useState({});
  const [index, setIndex] = useState({});
  useEffect(() => {
    setRightAnwser(question.answers);
    setIndex(question.rightAnswer);
  }, [question]);
  return <img src={rightAnswer[index]?.url} alt={rightAnswer?.name} />;
}

Pokemon.propTypes = {
  question: PropTypes.shape({
    apiName: PropTypes.string.isRequired,
    quest: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        idDrink: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
        strDrinkThumb: PropTypes.string.isRequired,
      })
    ).isRequired,
    rightAnswer: PropTypes.number.isRequired,
  }).isRequired,
};

export default Pokemon;
