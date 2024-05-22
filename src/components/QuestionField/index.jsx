import Button from '../Button';
import './QuestionField.scss';
import { IoIosArrowUp } from 'react-icons/io';

const QuestionField = ({ placeholder, onChange }) => {
  return (
    <div className='question-field'>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="question-field-input"
      />
      <Button variants="primary">
        <IoIosArrowUp />
      </Button>
    </div>
  );
};

export default QuestionField;
