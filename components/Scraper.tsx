import { useEffect, useState } from 'react';
import axios from 'axios';

interface ScraperProps {
  flipkartPrice: string | null;
  ProdUrl: string;
}

export default function Scraper({ flipkartPrice, ProdUrl }: ScraperProps) {
  const [price, setPrice] = useState<string | null>(flipkartPrice);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/${ProdUrl}`,
          {
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
        const html = response.data;

        // Process the HTML using DOM manipulation if needed
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Example: Extracting data using DOM selectors
        const flipkartPriceElement = doc.querySelector('._30jeq3._16Jk6d');
        const flipkartPrice =
          flipkartPriceElement?.textContent?.trim() || null;

        setPrice(flipkartPrice);
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
