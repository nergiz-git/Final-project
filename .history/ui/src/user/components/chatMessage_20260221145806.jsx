import React, { useState, useEffect, useRef } from "react";
import ChatBot from 'react-simple-chatbot';
import {TbMessageCircle } from "react-icons/tb";
import "./chatMessage.css"

function ChatMessage() {
    const [isVisible, setIsVisible] = useState(false);
    const chatRef = useRef();
    // const steps = [
    //     {
    //         id: 'Greet',
    //         message: 'Hello, Welcome to our website',
    //         trigger: 'Ask Name',
    //     },
    //     {
    //         id: 'Ask Name',
    //         message: 'Please enter your name',
    //         trigger: 'waiting1',
    //     },
    //     {
    //         id: 'waiting1',
    //         user: true,
    //         trigger: 'Name'
    //     },
    //     {
    //         id: 'Name',
    //         message: 'Hi {previousValue}, Please select your issue',
    //         trigger: 'issues'
    //     },
    //     {
    //         id: 'issues',
    //         options: [
    //             {
    //                 value: "Delivery", label: "Delivery", trigger: "Delivery"
    //             },
    //             {
    //                 value: "Service", label: "Service", trigger: "Service"
    //             }
    //         ]

    //     },
    //     {
    //         id: 'Delivery',
    //         message: 'Thanks for telling your delivery issue',
    //         end: true
    //     },
    //     {
    //         id: 'Service',
    //         message: 'Thanks for telling your service issue',
    //         end: true
    //     },
    // ];
   const steps = [
    {
        id: 'Greet',
        message: 'Hello, Welcome to our website',
        trigger: 'Ask Name',
    },
    {
        id: 'Ask Name',
        message: 'Please enter your name',
        trigger: 'waiting1',
    },
    {
        id: 'waiting1',
        user: true,
        trigger: 'Name'
    },
    {
        id: 'Name',
        message: 'Hi {previousValue}, Please select your issue',
        trigger: 'issues'
    },
    {
        id: 'issues',
        options: [
            { value: "Delivery", label: "Delivery", trigger: "DeliveryQ1" },
            { value: "Service", label: "Service", trigger: "ServiceQ1" }
        ]
    },

    // DELIVERY sualları
    {
        id: 'DeliveryQ1',
        message: 'Çatdırılma müddəti neçə gündür?',
        trigger: 'DeliveryA1',
    },
    {
        id: 'DeliveryA1',
        user: true,
        trigger: 'DeliveryQ2',
    },
    {
        id: 'DeliveryQ2',
        message: 'Standart çatdırılma 3-5 iş günüdür. Ünvanınız düzgündürmü?',
        trigger: 'DeliveryA2',
    },
    {
        id: 'DeliveryA2',
        user: true,
        trigger: 'DeliveryEnd',
    },
    {
        id: 'DeliveryEnd',
        message: 'Təşəkkür edirik! Başqa sualınız olarsa bizimlə əlaqə saxlayın.',
        end: true,
    },

    // SERVICE sualları
    {
        id: 'ServiceQ1',
        message: 'Məhsulla bağlı problem nədir?',
        trigger: 'ServiceA1',
    },
    {
        id: 'ServiceA1',
        user: true,
        trigger: 'ServiceQ2',
    },
    {
        id: 'ServiceQ2',
        message: 'Məhsulu neçə gün əvvəl aldınız?',
        trigger: 'ServiceA2',
    },
    {
        id: 'ServiceA2',
        user: true,
        trigger: 'ServiceEnd',
    },
    {
        id: 'ServiceEnd',
        message: 'Anladıq! Mütəxəssisimiz sizinlə əlaqə saxlayacaq.',
        end: true,
    },
];
    const chatMessage = () => {
     
      };
      useEffect(() => {
      
        const toggleVisibility = () => {
          if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);
    const showChat = () => {
        chatRef.current.classList.toggle("chatbot");
        console.log("kil");
    };
    return (
        <>
          {isVisible && (
        <div className="chat-bot" onClick={chatMessage}>
      
            <div className="chat-icon" onClick={showChat}>
                <TbMessageCircle />
            </div>
            <div className="chatbot-box" ref={chatRef}>
                <ChatBot steps={steps} />
            </div>
     
        </div>
             )}
        </>
    )
}

export default ChatMessage