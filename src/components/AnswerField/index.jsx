import React from 'react';
import './AnswerField.scss';

const AnswerField = ({ answer }) => {
  return (
    <div className="answer-field">
      <span className="answer-field-content">{answer}</span>
    </div>
  );
};

export default AnswerField;
