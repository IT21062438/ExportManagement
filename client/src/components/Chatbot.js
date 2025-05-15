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

  // const getBotResponse = (userMessage) => {
  //   const message = userMessage.toLowerCase();
    
  //   // Greetings
  //   if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
  //     return "Hello there! How can I assist you with your export needs today?";
  //   }
    
  //   // Order status inquiries
  //   if (message.includes('status') || message.includes('track') || message.includes('where is')) {
  //     return "I can check your order status. Please provide your order number for more specific information.";
  //   }
    
  //   // Shipping questions
  //   if (message.includes('ship') || message.includes('deliver') || message.includes('arrive')) {
  //     return "Standard shipping takes 3-5 business days. Express shipping is available for faster delivery at an additional cost.";
  //   }
    
  //   // Return policy
  //   if (message.includes('return') || message.includes('exchange') || message.includes('refund')) {
  //     return "We accept returns within 30 days of purchase. Items must be in original condition. Would you like me to start a return process for you?";
  //   }
    
  //   // Pricing questions
  //   if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
  //     return "Pricing depends on the product and quantity. Could you specify which item you're inquiring about?";
  //   }
    
  //   // Product information
  //   if (message.includes('product') || message.includes('item') || message.includes('spec')) {
  //     return "I can provide detailed specifications for our products. Please let me know which product you're interested in.";
  //   }
    
  //   // Help or support
  //   if (message.includes('help') || message.includes('support') || message.includes('assistance')) {
  //     return "I'm here to help! Please describe your issue and I'll do my best to assist you or connect you with a human representative if needed.";
  //   }
    
  //   // Thank you responses
  //   if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
  //     return "You're welcome! Is there anything else I can help you with?";
  //   }
    
  //   // Default response for unrecognized queries
  //   const defaultResponses = [
  //     "I'm not sure I understand. Could you rephrase that?",
  //     "I specialize in export assistance. Could you tell me more about what you need help with?",
  //     "Let me connect you with a human representative who can better assist you with this.",
  //     "I'd be happy to help with that. Could you provide more details?",
  //     "For that question, you might want to check our FAQ section at example.com/faq"
  //   ];
    
  //   return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  // };
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Existing responses
    if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
      return "Hello there! How can I assist you with your export needs today?";
    }
    
    if (message.includes('status') || message.includes('track') || message.includes('where is')) {
      return "I can check your order status. Please provide your order number for more specific information.";
    }
  
    // Additional responses
    if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return "You can reach our customer service at support@exportcompany.com or call +1 (800) 123-4567 from 9AM to 5PM EST.";
    }
  
    if (message.includes('documents') || message.includes('paperwork') || message.includes('certificate')) {
      return "For export documentation, you'll typically need commercial invoices, packing lists, and certificates of origin. Which documents do you need help with?";
    }
  
    if (message.includes('time') || message.includes('long') || message.includes('duration')) {
      return "Processing times vary by destination country. Standard processing takes 2-3 business days plus shipping time. Would you like specific timing for a particular country?";
    }
  
    if (message.includes('custom') || message.includes('duty') || message.includes('tax')) {
      return "Customs duties depend on the destination country and product category. I can provide estimates if you tell me the product and destination country.";
    }
  
    if (message.includes('payment') || message.includes('pay') || message.includes('credit card')) {
      return "We accept all major credit cards, bank transfers, and PayPal. For large orders, we also offer payment plans.";
    }
  
    if (message.includes('discount') || message.includes('coupon') || message.includes('promo')) {
      return "We currently have a 10% discount for first-time buyers with code WELCOME10. Bulk orders may qualify for additional discounts.";
    }
  
    if (message.includes('cancel') || message.includes('stop') || message.includes('terminate')) {
      return "Orders can be cancelled within 24 hours of placement if they haven't entered processing. Would you like me to check if your order is eligible for cancellation?";
    }
  
    if (message.includes('update') || message.includes('change') || message.includes('modify')) {
      return "I can help you update shipping addresses or contact information. What would you like to change?";
    }
  
    if (message.includes('problem') || message.includes('issue') || message.includes('wrong')) {
      return "I'm sorry to hear you're having trouble. Please describe the issue and I'll help resolve it or escalate to our support team.";
    }
  
    if (message.includes('urgent') || message.includes('emergency') || message.includes('asap')) {
      return "For urgent matters, please call our 24/7 emergency line at +1 (800) 987-6543. Otherwise, describe your situation and I'll prioritize it.";
    }
  
    if (message.includes('holiday') || message.includes('closed') || message.includes('weekend')) {
      return "Our offices are closed on national holidays but our online system operates 24/7. The next holiday closure will be on December 25th for Christmas.";
    }
  
    if (message.includes('country') || message.includes('region') || message.includes('ship to')) {
      return "We currently ship to over 150 countries worldwide. Are you looking for information about restrictions to a specific country?";
    }
  
    if (message.includes('weight') || message.includes('size') || message.includes('dimension')) {
      return "Shipping costs are calculated based on either actual weight or dimensional weight, whichever is greater. What product are you inquiring about?";
    }
  
    if (message.includes('insurance') || message.includes('cover') || message.includes('protected')) {
      return "All shipments include basic insurance coverage up to $100. Additional insurance can be purchased for valuable items.";
    }
  
    // Default responses
    const defaultResponses = [
      "I'm focused on export assistance. Could you rephrase your question?",
      "I'd recommend checking our Help Center at support.exportcompany.com for detailed guides on that topic.",
      "Let me transfer you to a specialist who can better answer that question.",
      "I'm still learning about that aspect of our service. Could you ask in a different way?",
      "That's an interesting question. Let me consult my resources and get back to you.",
      "For security reasons, I can't access that information. Please contact our support team directly."
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