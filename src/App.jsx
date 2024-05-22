import Header from './components/Header';
import Avatar from './components/Avatar';
import AnswerField from './components/AnswerField';
import QuestionField from './components/QuestionField';
import Enable from './assets/logo/logo es.png';

const App = () => {
  return (
    <div
      className="app"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Header />

      <div className="app-container">
        <Avatar src={Enable} alt="Logo" />
        <AnswerField answer="👋🏻 Welcome to ESbot. I’m ChatBot, your AI assistant. Let me know how I can help you." />
      </div>

      <QuestionField placeholder="Nhập câu hỏi của bạn tại đây" />
    </div>
  );
};

export default App;

