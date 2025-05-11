// import React, { useState } from 'react';
// import './styles/Chatbot.css';

// function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (inputMessage.trim() === '') return;

//     // Add user message
//     const newMessage = {
//       text: inputMessage,
//       sender: 'user',
//       timestamp: new Date().toLocaleTimeString()
//     };

//     setMessages([...messages, newMessage]);
//     setInputMessage('');

//     // Simulate bot response
//     setTimeout(() => {
//       const botResponse = {
//         text: "I'm here to help you with your completed orders. How can I assist you today?",
//         sender: 'bot',
//         timestamp: new Date().toLocaleTimeString()
//       };
//       setMessages(prevMessages => [...prevMessages, botResponse]);
//     }, 1000);
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chatbot-header">
//         <h2>Export Assistant</h2>
//       </div>
      
//       <div className="chat-messages">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender}`}>
//             <div className="message-content">
//               <p>{message.text}</p>
//               <span className="timestamp">{message.timestamp}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <form onSubmit={handleSendMessage} className="chat-input-form">
//         <input
//           type="text"
//           value={inputMessage}
//           onChange={(e) => setInputMessage(e.target.value)}
//           placeholder="Type your message..."
//           className="chat-input"
//         />
//         <button type="submit" className="send-button">
//           <i className="fas fa-paper-plane"></i>
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Chatbot;

import React, { useState } from 'react';
import './styles/Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
      return "Hello there! How can I assist you with your export needs today?";
    }
    
    // Order status inquiries
    if (message.includes('status') || message.includes('track') || message.includes('where is')) {
      return "I can check your order status. Please provide your order number for more specific information.";
    }
    
    // Shipping questions
    if (message.includes('ship') || message.includes('deliver') || message.includes('arrive')) {
      return "Standard shipping takes 3-5 business days. Express shipping is available for faster delivery at an additional cost.";
    }
    
    // Return policy
    if (message.includes('return') || message.includes('exchange') || message.includes('refund')) {
      return "We accept returns within 30 days of purchase. Items must be in original condition. Would you like me to start a return process for you?";
    }
    
    // Pricing questions
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return "Pricing depends on the product and quantity. Could you specify which item you're inquiring about?";
    }
    
    // Product information
    if (message.includes('product') || message.includes('item') || message.includes('spec')) {
      return "I can provide detailed specifications for our products. Please let me know which product you're interested in.";
    }
    
    // Help or support
    if (message.includes('help') || message.includes('support') || message.includes('assistance')) {
      return "I'm here to help! Please describe your issue and I'll do my best to assist you or connect you with a human representative if needed.";
    }
    
    // Thank you responses
    if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
      return "You're welcome! Is there anything else I can help you with?";
    }
    
    // Default response for unrecognized queries
    const defaultResponses = [
      "I'm not sure I understand. Could you rephrase that?",
      "I specialize in export assistance. Could you tell me more about what you need help with?",
      "Let me connect you with a human representative who can better assist you with this.",
      "I'd be happy to help with that. Could you provide more details?",
      "For that question, you might want to check our FAQ section at example.com/faq"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    // Add user message
    const newMessage = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate bot response with typing indicator
    setTimeout(() => {
      const typingMessage = {
        text: "",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString(),
        isTyping: true
      };
      setMessages(prevMessages => [...prevMessages, typingMessage]);
      
      // After a short delay, replace typing indicator with actual response
      setTimeout(() => {
        setMessages(prevMessages => {
          const messagesWithoutTyping = prevMessages.filter(msg => !msg.isTyping);
          const botResponse = {
            text: getBotResponse(inputMessage),
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString()
          };
          return [...messagesWithoutTyping, botResponse];
        });
      }, 1500);
    }, 800);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h2>Export Assistant</h2>
        <p>How can I help you today?</p>
      </div>
      
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <div className="message-content">
              {message.isTyping ? (
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              ) : (
                <>
                  <p>{message.text}</p>
                  <span className="timestamp">{message.timestamp}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="chat-input-form">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button type="submit" className="send-button">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default Chatbot;