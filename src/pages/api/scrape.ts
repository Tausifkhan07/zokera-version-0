import axios from 'axios';
import cheerio from 'cheerio';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const productLink = req.query.productLink as string;

    const response = await axios.get(productLink);
    const html = response.data;

    const $ = cheerio.load(html);

    const flipkartPriceElement = $('._30jeq3._16Jk6d');
    const flipkartPrice = flipkartPriceElement?.text()?.trim() || null;

    res.status(200).json({ flipkartPrice });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
