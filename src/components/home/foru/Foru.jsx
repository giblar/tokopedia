import React from 'react';
import { Card } from './fragments/Card';

const Foru = () => {
  return (
    <div className='flex gap-2'>
      
      <Card 
        text="for user"
        gradient1="#A01F6F"
        gradient2="#CC238E"
      />
      <Card 
      text="Tinta Printer"
      gradient1="#EC9217"
      gradient2="#FDBD03"
      />
      <Card 
      text="Mouse Gaming"
      gradient1="#118F46"
      gradient2="#3BAE49"
      />
      <Card 
      text="Paket Perawatan Wajah"
      gradient1="#A01F6F"
      gradient2="#CC238E"
      />
      <Card 
      text="Mirip yang kamu cek"
      gradient1="#0577A9"
      gradient2="#16A6A7"
      />
    </div>
  );
};

export default Foru;
