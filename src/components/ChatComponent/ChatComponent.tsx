import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import './ChatComponent.scss';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface PredefinedQuestion {
  id: number;
  question: string;
  answer: string | string[];
}

const BOT_AVATAR = (
  <span className="chat__avatar" aria-label="Bot Avatar" role="img">🤖</span>
);

const predefinedQuestions: PredefinedQuestion[] = [
  {
    id: 1,
    question: "What technologies do you specialize in?",
    answer: [
      "I specialize in React, Node.js, TypeScript, and Python.",
      "I also work with AWS, MongoDB, and PostgreSQL.",
      "I'm comfortable with both frontend and backend development."
    ]
  },
  {
    id: 2,
    question: "How many years of experience do you have?",
    answer: [
      "I have over 5 years of professional experience in full-stack development.",
      "I've worked on e-commerce, enterprise, and SaaS projects."
    ]
  },
  {
    id: 3,
    question: "Are you available for freelance work?",
    answer: [
      "Yes, I'm always open to interesting projects!",
      "You can reach me at vaibhav.heda@email.com or on LinkedIn."
    ]
  },
  {
    id: 4,
    question: "What's your preferred tech stack?",
    answer: [
      "I love using React/Next.js for frontend, Node.js/Express for backend.",
      "For databases, I use MongoDB or PostgreSQL, and AWS for cloud."
    ]
  },
  {
    id: 5,
    question: "Can you help with UI/UX design?",
    answer: [
      "Absolutely! I have experience with Figma and Adobe XD.",
      "I enjoy creating user-friendly, beautiful interfaces."
    ]
  }
];

interface ChatComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatComponent: React.FC<ChatComponentProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Vaibhav Bot. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [showQuestions, setShowQuestions] = React.useState(true);

  // Split bot answer into bubbles and show sequentially
  const showBotBubbles = (bubbles: string[]) => {
    if (bubbles.length === 0) {
      setShowQuestions(true);
      return;
    }
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: bubbles[0],
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
      showBotBubbles(bubbles.slice(1));
    }, 700);
  };

  const handleQuestionClick = (question: PredefinedQuestion) => {
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: question.question,
        sender: 'user',
        timestamp: new Date()
      }
    ]);
    setShowQuestions(false);
    const bubbles = Array.isArray(question.answer) ? question.answer : [question.answer];
    setTimeout(() => {
      showBotBubbles(bubbles);
    }, 500);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hi! I'm Vaibhav Bot. How can I help you today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    setShowQuestions(true);
  };

  // Reset chat when closed
  useEffect(() => {
    if (!isOpen) {
      resetChat();
    }
    // eslint-disable-next-line
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="chat-card chat--open">
      <div className="chat-card__header">
        {BOT_AVATAR}
        <div className="chat-card__header-info">
          <div className="chat-card__bot-name">Vaibhav Bot</div>
          <div className="chat-card__subtitle">Ask me a question</div>
        </div>
        <button className="chat-card__close" onClick={onClose} aria-label="Close chat">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="chat-card__messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-card__message chat-card__message--${message.sender}`}
          >
            <div className="chat-card__bubble">
              {message.text}
            </div>
            <div className="chat-card__time">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
      </div>
      {showQuestions && (
        <div className="chat-card__questions">
          <div className="chat-card__questions-title">Quick Questions:</div>
          {predefinedQuestions.map((question) => (
            <button
              key={question.id}
              className="chat-card__question-btn"
              onClick={() => handleQuestionClick(question)}
            >
              {question.question}
            </button>
          ))}
        </div>
      )}
      <div className="chat-card__actions">
        <Button variant="secondary" size="sm" onClick={resetChat}>
          Reset Chat
        </Button>
        <Button variant="primary" size="sm" icon={faPaperPlane}>
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default ChatComponent; 