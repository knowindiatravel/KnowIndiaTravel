// src/components/LiveChatWidget.jsx
import { useEffect } from "react";

export default function LiveChatWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/686da599efcdba190ae50262/1ivm4to71";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script if needed
      document.body.removeChild(script);
    };
  }, []);

  return null; // No UI needed
}
