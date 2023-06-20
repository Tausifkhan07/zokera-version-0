import axios from 'axios';
import cheerio from 'cheerio';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const productLink =
      'https://www.flipkart.com/tundwal-s-solid-double-comforter-mild-winter/p/itmc9692d3839d7c?pid=BLAGFFJZHZK2ZBYA&lid=LSTBLAGFFJZHZK2ZBYAESOEMK&marketplace=FLIPKART&fm=productRecommendation%2FattachForSwatchProducts&iid=R%3Aas%3Bp%3AMATGK3BKHCS25U6G%3Bl%3ALSTMATGK3BKHCS25U6GXXN9TL%3Bpt%3App%3Buid%3Ab7d24406-0f73-11ee-9025-4ff28ce42c6a%3B.BLAGFFJZHZK2ZBYA&ssid=i4zr0vrzxs0000001687270026546&otracker=pp_reco_Frequently%2BBought%2BTogether_1_Frequently%2BBought%2BTogether_BLAGFFJZHZK2ZBYA_productRecommendation%2FattachForSwatchProducts_1&otracker1=pp_reco_PINNED_productRecommendation%2FattachForSwatchProducts_Frequently%2BBought%2BTogether_NA_productCard_cc_1_NA_view-all&cid=BLAGFFJZHZK2ZBYA';

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
