import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Client, IMessage } from '@stomp/stompjs'; 
import './ContactComponent.css';

const WS_URL = import.meta.env.VITE_WS_URL ?? 'http://localhost:8082/ws';

const ContactComponent: React.FC = () => {
    const [stompClient, setStompClient] = useState<Client | null>(null);
    const [messages, setMessages] = useState<string[]>([]);
  
    useEffect(() => {
      let client: Client | null = null;

      try {
        const socketFactory = () => new SockJS(WS_URL);
        client = new Client({
          webSocketFactory: socketFactory,
          debug: (str) => {
            // Use console.debug for less noisy logs in production
            if (import.meta.env.DEV) console.debug(str);
          },
          reconnectDelay: 5000,
        });

        client.onConnect = () => {
          console.info('Connected to WebSocket');

          client?.subscribe('/topic/order-updates', (message: IMessage) => {
            try {
              const body = message.body ?? '';
              setMessages((prev) => [...prev, body]);
            } catch (err) {
              console.error('Failed to process incoming message', err);
            }
          });
        };

        client.onStompError = (frame) => {
          console.error('STOMP error', frame?.body);
        };

        client.activate();
        setStompClient(client);
      } catch (err) {
        console.error('WebSocket initialization error', err);
      }
  
      return () => {
        if (client) {
          client.deactivate().catch((err) => console.error('Error deactivating STOMP client', err));
        }
      };
    }, []);
  
    const sendMessage = () => {
      if (stompClient && stompClient.connected) {
        try {
          stompClient.publish({ destination: '/app/send-order', body: 'Order #123 placed!' });
        } catch (err) {
          console.error('Failed to send message', err);
        }
      } else {
        console.warn('STOMP client not connected');
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