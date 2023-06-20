import { useEffect, useState } from 'react';

export default function DemoScrapper() {
  const [price, setPrice] = useState<string | null>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/scrape');
        const data = await response.json();

        if (response.ok) {
          const { flipkartPrice } = data;
          setPrice(flipkartPrice);
        } else {
          console.error('Error fetching data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Flipkart Price: {price || 'Loading...'}</h1>
    </div>
  );
}
