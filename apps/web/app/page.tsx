"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import classes from './page.module.css';
import { useSocket } from '../context/SocketProvider';



export default function Page() {
  const { sendMessage } = useSocket();
  const [message, setMessage] = useState('');

  return (
    <div>
      <div>
        <h1>All messages will appear here</h1>
      </div>
      
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <input onChange={e => setMessage(e.target.value)} className={classes["chat-input"]} placeholder="Message..." />
        <button onClick={e => sendMessage(message)} className={classes["button"]}>Send</button>
      </div>
    </div>
  );
}
