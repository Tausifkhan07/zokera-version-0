import axios from 'axios';
import cheerio from 'cheerio';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { productLink, cssSelector } = req.query;

    const response = await axios.get(productLink as string);
    const html = response.data;

    const $ = cheerio.load(html);

    const selectedElement = $(cssSelector as string);
    const selectedText = selectedElement?.text()?.trim() || null;

    res.status(200).json({ flipkartPrice: selectedText });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
