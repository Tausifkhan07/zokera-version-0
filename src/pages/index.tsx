import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import BottomNav from '../../components/mobile/BottomNav';
import ResponsiveComponent from '../../components/ResponsiveComponent';
import Header from '../../components/mobile/Header';
import DeskHeader from '../../components/desktop/DeskHeader';
import DeskHomeBanner from '../../components/desktop/DeskHomeBanner';
import MobHomeBanner from '../../components/mobile/MobHomeBanner';
import DeskNewsHomeSlider from '../../components/desktop/DeskNewsHomeSlider';
import MobNewsHomeSlider from '../../components/mobile/MobNewsHomeSlider';
import DeskProductGridCarousel from '../../components/desktop/DeskProductGridCarousel';
import MobProductGridCarousel from '../../components/mobile/MobProductGridCarousel';
import DeskProductCarousel from '../../components/desktop/DeskProductCarousel';
import MobProductCarousel from '../../components/mobile/MobProductCarousel';
import ProdImageCarousel from '../../components/comman/ProdImageCarousel';
import ProdImageGrid from '../../components/comman/ProdImageGrid';
import CategorySlider from '../../components/comman/CategorySlider';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';
import Scraper from '../../components/Scraper';

interface ScraperProps {
  flipkartPrice: string | null;
  ProdUrl: string;
}


export default function Home({ flipkartPrice, ProdUrl }: ScraperProps) {
  // const [flipkartPriceState] = useState(flipkartPrice);

  const mobBannerImg = [
    {
      id: 1,
      image: '/mobbanner/1.jpeg',
      alt: 'banner 1'
    },
    {
      id: 2,
      image: '/mobbanner/2.jpeg',
      alt: 'banner 2'
    },
    {
      id: 3,
      image: '/mobbanner/3.jpg',
      alt: 'banner 3'
    },
    {
      id: 4,
      image: '/mobbanner/4.jpg',
      alt: 'banner 4'
    },
    {
      id: 5,
      image: '/mobbanner/5.jpg',
      alt: 'banner 5'
    },
  ]
  return (
    <>
      <Head>
        <title>Zokera | Shop Online & Earn On Every Order</title>
        <meta name="description" content="zokera home page buy any product that you want." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveComponent Mobile={<Header />} Desktop={<DeskHeader />} />
      {/* header end  */}
      <div className={styles.homeBody}>
        <div className={styles.bodyContainer}>
          {/* banner and latest news section start section start  */}
          <section className={styles.bannerContainer}>
            <div className={styles.homeBanner}>
              <div className={styles.bannerSlider}>
                <ResponsiveComponent Mobile={<MobHomeBanner MobBannerImg={mobBannerImg} />} Desktop={<DeskHomeBanner DeskBannerImg={mobBannerImg} />} />
              </div>
            </div>
            <div className={styles.newsSection}>
              <div className={styles.newsSlider}>
                <ResponsiveComponent Mobile={<MobNewsHomeSlider />} Desktop={<DeskNewsHomeSlider />} />
              </div>
            </div>
          </section>
          {/* banner and latest news section end section end  */}
          {/* product grid carousel section start  */}
          <section className={styles.productGridCarousel}>
            <ResponsiveComponent Mobile={<MobProductGridCarousel />} Desktop={<DeskProductGridCarousel />} />
          </section>
          {/* product carousel section start  */}
          <section className={styles.productCarousel}>
            <ResponsiveComponent Mobile={<MobProductCarousel />} Desktop={<DeskProductCarousel BtnProps="laptop-btn-custom" />} />
          </section>
          <section className={styles.imgCarousel}>
              <ResponsiveComponent Mobile={<ProdImageGrid />} Desktop={<ProdImageCarousel />} />
          </section>
          <CategorySlider />
        </div>
        {/* <button onClick={handleScrape}>Scrap Data</button> */}
        {/* <Scraper /> */}
        <Scraper ProdUrl={ProdUrl} flipkartPrice={flipkartPrice} />
      </div>
      
      {/* home body end  */}
      <ResponsiveComponent Mobile={<BottomNav />} Desktop={null} />
    </>
  )
}

const ProdUrl =
  'https://www.flipkart.com/red-tape-solid-men-round-neck-blue-t-shirt/p/itm30bdb68df2cf9?pid=TSHGM6QFZVKKMPYB&lid=LSTTSHGM6QFZVKKMPYBY8IXRM&marketplace=FLIPKART&store=clo%2Fash%2Fank%2Fedy&srno=b_1_2&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BT-Shirts_IF56C41VGEYS&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&fm=organic&iid=en_f2ViGtqKyVXzDNl2ay5BM%2BdxKw89%2BtzbpZxkmah6sorKrMOqF0rKZolLSxYQD9qTfSsSz%2Fo8it%2FY35cwYWVpjA%3D%3D&ppt=browse&ppn=browse&ssid=4t4mmcta2o0000001687269057878';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch(ProdUrl);
    const html = await response.text();
    const $ = cheerio.load(html);
    const flipkartPrice = $('._30jeq3._16Jk6d').text().trim();

    return {
      props: {
        flipkartPrice,
        ProdUrl,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        flipkartPrice: null,
        ProdUrl,
      },
    };
  }
};
