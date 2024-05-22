import Button from "../Button";
import "./QuestionField.scss";
import { IoIosArrowUp } from "react-icons/io";
import PropTypes from "prop-types";
import { useState } from "react";

const QuestionField = ({ placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState(""); // State để theo dõi giá trị nhập vào

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(e);
  };

  return (
    <div className="question-field">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        className="question-field-input"
      />
      <Button disable={!inputValue}>
        {" "}
        {/* Sử dụng disable prop của Button dựa trên giá trị nhập vào */}
        <IoIosArrowUp />
      </Button>
    </div>
  );
};

QuestionField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default QuestionField;
