import { useState, useRef } from "react";
import { Leaf, Send, ArrowLeft, Flower2, RefreshCw } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { useNavigate } from "react-router-dom";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatbotPage = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your medicinal herb assistant. Ask me anything about herbs, their benefits, or how to use them for natural wellness.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Function to generate herb responses based on user input
  const generateHerbResponse = (userInput: string) => {
    const input = userInput.toLowerCase();

    // Check for specific herbs
    if (input.includes("lavender")) {
      return "Lavender is known for its calming properties. It can help with anxiety, insomnia, and stress relief. You can use it as an essential oil, in tea, or in sachets under your pillow.";
    } else if (input.includes("chamomile")) {
      return "Chamomile is excellent for sleep and digestive issues. It has mild sedative effects and can soothe an upset stomach. It's commonly consumed as a tea before bedtime.";
    } else if (input.includes("ginger")) {
      return "Ginger is a powerful anti-inflammatory and digestive aid. It helps with nausea, motion sickness, and can boost circulation. You can use it fresh in cooking, as a tea, or in juices.";
    } else if (input.includes("echinacea")) {
      return "Echinacea is known for boosting the immune system. It's commonly used to prevent colds and reduce their duration. It can be taken as a tea, tincture, or supplement.";
    } else if (input.includes("turmeric")) {
      return "Turmeric contains curcumin, which has powerful anti-inflammatory properties. It's beneficial for joint pain, digestive issues, and may have anti-cancer properties. It's often used in cooking or as a supplement.";
    } else if (input.includes("mint") || input.includes("peppermint")) {
      return "Mint is refreshing and cooling. It helps with digestive issues, headaches, and can clear sinuses. It's easy to grow and can be used fresh in teas, cooking, or as an essential oil.";
    }

    // Check for conditions or benefits
    if (input.includes("sleep") || input.includes("insomnia")) {
      return "For sleep issues, consider herbs like valerian root, chamomile, lavender, and passionflower. These can be consumed as teas before bedtime or used in essential oil diffusers.";
    } else if (input.includes("anxiety") || input.includes("stress")) {
      return "For anxiety and stress, adaptogenic herbs like ashwagandha, holy basil, and rhodiola can be helpful. Calming herbs include lavender, lemon balm, and passionflower.";
    } else if (input.includes("digestive") || input.includes("stomach")) {
      return "For digestive health, consider ginger, peppermint, fennel, and chamomile. These can soothe the digestive tract and reduce symptoms like bloating, gas, and indigestion.";
    } else if (
      input.includes("inflammation") ||
      input.includes("anti-inflammatory")
    ) {
      return "Anti-inflammatory herbs include turmeric, ginger, boswellia, and devil's claw. These can help with conditions like arthritis, inflammatory bowel disease, and general inflammation.";
    } else if (input.includes("immune")) {
      return "To support your immune system, consider herbs like elderberry, echinacea, astragalus, and reishi mushroom. These can be taken as teas, tinctures, or supplements.";
    }

    // Default response
    return "That's an interesting question about herbs! I can provide information about specific herbs like lavender, chamomile, ginger, and many others. I can also suggest herbs for specific conditions like sleep problems, anxiety, digestive issues, or immune support. Feel free to ask more specific questions!";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Simulate a response with a timeout
      setTimeout(() => {
        const herbResponse = generateHerbResponse(input);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: herbResponse },
        ]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, I encountered an error processing your request. Please try again later.",
        },
      ]);
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hello! I'm your medicinal herb assistant. Ask me anything about herbs, their benefits, or how to use them for natural wellness.",
      },
    ]);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Suggestions for the chatbot
  const SUGGESTION_CATEGORIES = [
    { label: "Lavender benefits", value: "What are the benefits of lavender?" },
    { label: "Chamomile uses", value: "How can I use chamomile?" },
    { label: "Sleep herbs", value: "What herbs help with sleep?" },
    { label: "Digestive remedies", value: "Herbs for digestive issues" },
    { label: "Anxiety relief", value: "Which herbs help with anxiety?" },
  ];

  return (
    <div className="min-h-screen bg-herbal-pattern flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-green-600 text-white p-4 md:p-6 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Flower2 className="h-32 w-32 text-green-200" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-300" aria-hidden="true" />
              <h1 className="text-2xl font-bold">Herb Wisdom Chatbot</h1>
            </div>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10"
              onClick={() => navigate("/")}
              aria-label="Back to Home"
            >
              <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
              <span>Back to Home</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-grow container mx-auto p-4 md:p-6 flex flex-col">
        <Card className="flex-grow flex flex-col bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto w-full border border-green-100">
          {/* Chat Controls */}
          <div className="bg-green-50/80 p-2 border-b border-green-100 flex justify-end space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-green-700 hover:text-green-800 hover:bg-green-100"
              onClick={clearChat}
              aria-label="Clear chat history"
            >
              <RefreshCw className="h-4 w-4 mr-1" aria-hidden="true" />
              <span className="sr-only md:not-sr-only md:inline-block">
                Clear
              </span>
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow p-4 space-y-4 bg-gradient-to-b from-green-50/50 to-transparent overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-4`}
              >
                {message.role === "assistant" && (
                  <div className="flex-shrink-0 mr-2">
                    <div
                      className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <Leaf className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
                <div className={`max-w-[80%] md:max-w-[70%]`}>
                  <div
                    className={`rounded-2xl p-4 shadow-sm ${message.role === "user" ? "bg-green-100 text-green-900 rounded-tr-none" : "bg-white text-gray-800 rounded-tl-none border border-green-100"}`}
                    role={message.role === "assistant" ? "region" : undefined}
                    aria-label={
                      message.role === "assistant"
                        ? "Assistant response"
                        : undefined
                    }
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div
                  className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center mr-2"
                  aria-hidden="true"
                >
                  <Leaf className="h-4 w-4 text-white" />
                </div>
                <div className="max-w-[80%] md:max-w-[70%] rounded-2xl p-4 bg-white border border-green-100 rounded-tl-none">
                  <div className="flex space-x-2" aria-label="Loading response">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div className="border-t border-green-100 p-3 bg-green-50/50 overflow-x-auto">
            <div className="flex gap-2 flex-nowrap pb-1">
              {SUGGESTION_CATEGORIES.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap bg-white hover:bg-green-50 text-green-700 border-green-200 hover:border-green-300 hover:text-green-800 flex-shrink-0"
                  onClick={() => handleSuggestionClick(suggestion.value)}
                >
                  {suggestion.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-green-100 p-4 flex gap-2 bg-white sticky bottom-0"
          >
            <Input
              type="text"
              placeholder="Ask about medicinal herbs or symptoms..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow rounded-full border-green-200 focus:border-green-500 focus:ring-green-500 pl-4 pr-4 py-2 shadow-sm"
              disabled={isLoading}
              ref={inputRef}
              aria-label="Type your message"
            />
            <Button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center p-0"
              disabled={isLoading}
              aria-label="Send message"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </Button>
          </form>
        </Card>

        {/* Information Panel */}
        <div className="mt-6 max-w-4xl mx-auto w-full bg-white/80 backdrop-blur-sm rounded-lg p-4 text-sm text-green-800 border border-green-100 shadow-sm">
          <p className="font-medium mb-2">About the Herb Wisdom Chatbot:</p>
          <p>
            This chatbot is designed to provide information about medicinal
            herbs, their benefits, and usage. It connects to our herb database
            to give you accurate and detailed responses about herbal medicine.
          </p>
          <p className="mt-2">
            Try asking about specific herbs like lavender, chamomile, ginger,
            echinacea, or turmeric! You can also ask about symptoms like
            "headache", "anxiety", or "digestive issues" to get herb
            recommendations.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-800 to-green-600 text-white/80 p-4 mt-auto">
        <div className="container mx-auto text-center text-sm">
          <p>
            © {new Date().getFullYear()} Herb Wisdom Emporium. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ChatbotPage;
