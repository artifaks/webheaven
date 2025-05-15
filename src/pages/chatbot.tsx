import { useState } from "react";
import { Leaf, Send, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { useNavigate } from "react-router-dom";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatbotPage = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // In a real implementation, this would call the OpenAI API
      // For now, we'll simulate a response
      setTimeout(() => {
        const herbResponse = generateHerbResponse(input);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: herbResponse },
        ]);
        setIsLoading(false);
      }, 1000);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = {
        role: "assistant",
        content: data.choices[0].message.content,
      };
      setMessages((prev) => [...prev, assistantMessage]);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9f6] flex flex-col">
      {/* Header */}
      <header className="bg-[#2c5530] text-white p-4 md:p-6 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-300" />
              <h1 className="text-2xl font-bold">Herb Wisdom Chatbot</h1>
            </div>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-grow container mx-auto p-4 md:p-6 flex flex-col">
        <Card className="flex-grow flex flex-col bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto w-full">
          {/* Chat Messages */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${message.role === "user" ? "bg-green-100 text-green-900" : "bg-gray-100 text-gray-800"}`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-gray-100">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 p-4 flex gap-2"
          >
            <Input
              type="text"
              placeholder="Ask about medicinal herbs..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow"
              disabled={isLoading}
            />
            <Button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white"
              disabled={isLoading}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Card>

        {/* Information Panel */}
        <div className="mt-6 max-w-4xl mx-auto w-full bg-green-50 rounded-lg p-4 text-sm text-green-800">
          <p className="font-medium mb-2">About the Herb Wisdom Chatbot:</p>
          <p>
            This chatbot is designed to provide information about medicinal
            herbs, their benefits, and usage. It's powered by OpenAI's API to
            give you accurate and detailed responses about herbal medicine.
          </p>
          <p className="mt-2">
            Try asking about specific herbs like lavender, chamomile, ginger,
            echinacea, or turmeric! You can also ask about general topics like
            "herbs for sleep", "anti-inflammatory herbs", or "herbs for
            digestive health".
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2c5530] text-white/80 p-4 mt-auto">
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
