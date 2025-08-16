import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const customGPTUrl = "https://chatgpt.com/g/g-689fc65f302481918b50ab4271916e75-kennedy-equity-assistant";

  const handleChatClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      // Open the custom GPT in a new window
      window.open(customGPTUrl, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <Button
        onClick={handleChatClick}
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-foreground text-background px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with Kennedy Equity Assistant
      </div>
    </div>
  );
};

export default ChatBot;