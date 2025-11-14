import { useState, useEffect } from 'react';

export const useBlink = (interval: number = 530) => {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink(prev => !prev), interval);
    return () => clearInterval(blinkTimer);
  }, [interval]);

  return blink;
};
