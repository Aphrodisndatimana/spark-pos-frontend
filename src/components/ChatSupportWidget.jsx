import React, { useState } from 'react';

export default function ChatSupportWidget({ isDarkMode }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'admin', text: 'Hello! How can we help you today with SparkPOS?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Handle sending user input
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: inputMessage };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');

    // Simulate auto-response from admin
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'admin',
          text: 'Thanks for reaching out! An admin will reply to your request shortly.'
        }
      ]);
    }, 1000);
  };

  // Quick Chat Prompts
  const handleQuickQuestion = (questionText) => {
    const userMsg = { id: Date.now(), sender: 'user', text: questionText };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      let reply = 'Thank you! Our support team will get back to you shortly.';
      if (questionText.includes('Report an issue')) {
        reply = 'Please describe the issue you are facing, and we will look into it right away.';
      } else if (questionText.includes('How to register')) {
        reply = 'Click on "Get Started For Free" at the top of the page to create your store account.';
      }

      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'admin', text: reply }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Box Window */}
      {isChatOpen && (
        <div className={`mb-4 w-[320px] sm:w-[380px] h-[480px] rounded-2xl shadow-2xl border flex flex-col overflow-hidden transition-all duration-300 ${
          isDarkMode ? 'bg-neutral-900 border-neutral-700 text-white' : 'bg-white border-gray-300 text-black'
        }`}>
          {/* Header */}
          <div className="bg-[#2563eb] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white text-[#2563eb] font-bold flex items-center justify-center text-xs">
                <img src="/images/logo.jpg" className='rounded-full' alt="SparkPos logo"/>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight">SparkPOS Admin Support</h3>
                <p className="text-[10px] text-blue-100">Typically replies within a few minutes</p>
              </div>
            </div>

            {/* Close / Times Button inside the Chat Box */}
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-blue-700 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Quick Questions Banner */}
          <div className={`px-3 py-2 border-b text-xs flex gap-1.5 overflow-x-auto no-scrollbar ${
            isDarkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-gray-50 border-gray-200'
          }`}>
            <button 
              onClick={() => handleQuickQuestion('How to register a store?')}
              className="px-2.5 py-1 bg-[#2563eb] text-white text-[11px] font-semibold rounded-full hover:opacity-90 whitespace-nowrap cursor-pointer"
            >
              Registration
            </button>
            <button 
              onClick={() => handleQuickQuestion('Report an issue / problem')}
              className="px-2.5 py-1 bg-red-600 text-white text-[11px] font-semibold rounded-full hover:opacity-90 whitespace-nowrap cursor-pointer"
            >
              Report Issue
            </button>
          </div>

          {/* Message History */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-xl px-3.5 py-2.5 font-medium leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-[#e800c7] text-white rounded-br-none' 
                    : isDarkMode 
                      ? 'bg-neutral-800 text-gray-200 rounded-bl-none border border-neutral-700' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className={`p-3 border-t flex items-center gap-2 ${
            isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-gray-200'
          }`}>
            <input 
              type="text"
              placeholder="Ask admin or specify issue..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className={`flex-1 text-xs px-3 py-2.5 rounded-lg border outline-none ${
                isDarkMode 
                  ? 'bg-neutral-800 border-neutral-700 text-white placeholder-gray-500 focus:border-[#2563eb]' 
                  : 'bg-gray-50 border-gray-300 text-black placeholder-gray-400 focus:border-[#2563eb]'
              }`}
            />
            <button 
              type="submit"
              className="bg-[#2563eb] hover:bg-blue-700 text-white px-3.5 py-2.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="bg-[#2563eb] hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer group"
        aria-label="Chat with admin"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="hidden group-hover:inline text-xs font-bold pr-1">Chat with Admin</span>
      </button>
    </div>
  );
}