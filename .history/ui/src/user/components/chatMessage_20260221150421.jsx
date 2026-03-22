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
        message: 'Hello, Welcome to our website!',
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

    // DELIVERY
{
    id: 'DeliveryQ1',
    message: 'Please type your delivery question',
    trigger: 'DeliveryA1',
},
{
    id: 'DeliveryA1',
    user: true,  // ← istifadəçi sualını yazır
    trigger: 'DeliveryQ2',
},
{
    id: 'DeliveryQ2',
    message: 'Standard delivery takes 3-5 business days. Free shipping on orders over $500. Is there anything else?',
    trigger: 'DeliveryEnd',
},
{
    id: 'DeliveryEnd',
    options: [
        { value: "yes", label: "Yes", trigger: "DeliveryQ1" },
        { value: "no", label: "No, thanks", trigger: "Bye" }
    ]
},

// SERVICE
{
    id: 'ServiceQ1',
    message: 'Please type your service question',
    trigger: 'ServiceA1',
},
{
    id: 'ServiceA1',
    user: true,  // ← istifadəçi sualını yazır
    trigger: 'ServiceQ2',
},
{
    id: 'ServiceQ2',
    message: 'Our team will review your issue and contact you within 24 hours. Is there anything else?',
    trigger: 'ServiceEnd',
},
{
    id: 'ServiceEnd',
    options: [
        { value: "yes", label: "Yes", trigger: "ServiceQ1" },
        { value: "no", label: "No, thanks", trigger: "Bye" }
    ]
},

{
    id: 'Bye',
    message: 'Thank you for contacting us. Have a great day!',
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