import { useEffect, useState } from 'react';

interface DemoScrapperProps {
  productLink: string;
}

export default function DemoScrapper({ productLink }: DemoScrapperProps) {
  const [price, setPrice] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/scrape?productLink=${encodeURIComponent(productLink)}`);
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
  }, [productLink]);

  return (
    <div>
      <h1>Flipkart Price: {price || 'Loading...'}</h1>
    </div>
  );
}
