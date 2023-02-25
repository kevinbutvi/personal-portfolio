import React from "react";

function ContactBubble() {
  return (
    <a href="#contact">
      <div className="fixed bottom-5 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 md:w-16 md:h-16 w-12 h-12 flex items-center justify-center rounded-full animate-bounce">
        <ion-icon name="chatbubble-ellipses" />
      </div>
    </a>
  );
}

export default ContactBubble;
