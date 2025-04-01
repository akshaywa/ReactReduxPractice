import React, { useState, useEffect } from 'react';
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs"; 
import './ContactComponent.css';

const ContactComponent: React.FC = () => {
    const [stompClient, setStompClient] = useState<Client | null>(null);
    const [messages, setMessages] = useState<string[]>([]);
  
    useEffect(() => {
      const socket = new SockJS("http://localhost:8082/ws"); // ✅ Ensure this matches backend
      const client = new Client({ webSocketFactory: () => socket });
  
      client.onConnect = () => {
        console.log("✅ Connected to WebSocket");
  
        // ✅ Subscribe to topic
        client.subscribe("/topic/order-updates", (message: { body: string }) => {
          setMessages((prev: string[]) => [...prev, message.body]);
        });
      };
  
      client.activate();
      setStompClient(client);
  
      return () => {
        if (client) client.deactivate();
      };
    }, []);
  
    const sendMessage = () => {
      if (stompClient) {
        stompClient.publish({ destination: "/app/send-order", body: "Order #123 placed!" });
      }
    };
  
    return (
      <div>
        <h2>Order Notifications</h2>
        <button onClick={sendMessage}>Send Order Notification</button>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    );
}

export default React.memo(ContactComponent);