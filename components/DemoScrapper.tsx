import React, { useEffect, useState } from 'react';

interface DemoScrapperProps {
  productLink: string;
  cssSelector: string;
}

export default function DemoScrapper({ productLink, cssSelector }: DemoScrapperProps) {
  const [price, setPrice] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/scrape?productLink=${encodeURIComponent(productLink)}&cssSelector=${encodeURIComponent(cssSelector)}`);
        const data = await response.json();

        if (response.ok) {
          const { flipkartPrice } = data;
          const correctPrice = extractPrice(flipkartPrice);
          setPrice(correctPrice);
        } else {
          console.error('Error fetching data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productLink, cssSelector]);

  // Function to extract the correct price from the received data
  const extractPrice = (prices: string) => {
    const priceArray = prices.split('.', 2); // Split on the second comma
    const cleanedPrices = priceArray.map((price) => {
      return price.replace(/[^0-9.,]/g, '');
    });

    const correctPrice = cleanedPrices.find((price) => {
      return !isNaN(parseFloat(price));
    });

    return correctPrice || 'Price not found.';
  };

  return (
    <div>
      <h1>Flipkart Price: {price || 'Loading...'}</h1>
    </div>
  );
}
