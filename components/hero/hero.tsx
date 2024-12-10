"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [messages, setMessages] = useState(["Elevator", "Escalator", " COP & LOP"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < messages[currentIndex].length) {
        setText(prevText => prevText + messages[currentIndex].charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setIndex(0);
          setCurrentIndex(prevIndex => (prevIndex + 1) % messages.length);
        }, 2000);
      }
    }, 40);

    return () => clearTimeout(timer);
  }, [index, currentIndex, messages]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prevShowCursor => !prevShowCursor);
    }, 350);
    return () => clearInterval(cursorTimer);
  }, [showCursor]);

  const clipPathStyle = {
    clipPath: "polygon(10% 0px, 100% 0%, 100% 100%, 0px 100%)"
  };


  return (
    <div className="space-y-32">
      <div className="flex flex-wrap pt-5">
        <div className="flex w-full">
          <div className="mb-8 space-y-5 md:flex">
            <Image src={'/banner.png'} width={1000} height={1000} alt="Banner" className="brightness-[1.10] rounded-lg saturate-200 w-full md:w-1/2" />
            <div className="flex flex-col pb-4 space-y-2">
              <div className="text-justify text-base px-2 py-4 rounded">
                Welcome to Sujata Technical Services, your trusted partner in vertical and horizontal transport solutions. With a steadfast commitment to safety, innovation, and reliability, we specialize in the design, installation, and maintenance of state-of-the-art elevators, escalators, COPs, and LOPs. Our experienced team ensures seamless mobility, enhancing the accessibility and efficiency of your building. Choose Sujata Technical Services for unparalleled quality and service excellence, elevating your experience to new heights.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
