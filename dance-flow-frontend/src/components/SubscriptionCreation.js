import React, { useState } from 'react';
import axios from 'axios';

const SubscriptionCreation = () => {
  const [dancer, setDancer] = useState('');
  const [studio, setStudio] = useState('');
  const [isPremium, setIsPremium] = useState(false);

  const handleSubscriptionCreation = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/subscriptions/create/', {
        dancer,
        studio,
        isPremium,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Subscription creation error:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Subscription Creation</h2>
      <div>
        <label>Dancer:</label>
        <input type="text" value={dancer} onChange={(e) => setDancer(e.target.value)} />
      </div>
      <div>
        <label>Studio:</label>
        <input type="text" value={studio} onChange={(e) => setStudio(e.target.value)} />
      </div>
      <div>
        <label>Premium:</label>
        <input type="checkbox" checked={isPremium} onChange={() => setIsPremium(!isPremium)} />
      </div>
      <button onClick={handleSubscriptionCreation}>Create Subscription</button>
    </div>
  );
};

export default SubscriptionCreation;
