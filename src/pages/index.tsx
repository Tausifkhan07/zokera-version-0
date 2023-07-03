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
import DemoScrapper from '../../components/DemoScrapper';

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
        {/* <Scraper ProdUrl={ProdUrl} flipkartPrice={flipkartPrice} /> */}
      </div>
      <DemoScrapper cssSelector="._30jeq3._16Jk6d" productLink="https://www.flipkart.com/samsung-galaxy-book2-core-i5-12th-gen-16-gb-512-gb-ssd-windows-11-home-np750xed-kc3in-thin-light-laptop/p/itmefc44b5cae8a4?pid=COMGE82N4NN5FGHC&lid=LSTCOMGE82N4NN5FGHCXFRFSS&marketplace=FLIPKART&q=samsung+laptop&store=6bo%2Fb5g&spotlightTagId=FkPickId_6bo%2Fb5g&srno=s_1_3&otracker=AS_QueryStore_OrganicAutoSuggest_1_11_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_11_na_na_na&fm=search-autosuggest&iid=586d156a-68c6-4a30-a7fd-c86232e130c0.COMGE82N4NN5FGHC.SEARCH&ppt=sp&ppn=sp&ssid=69aeohkfjh3x6c5c1687651378476&qH=af4522800d2749f5" />
      <DemoScrapper cssSelector=".a-price-whole" productLink="https://www.amazon.in/John-Karsun-Mens-Formal-Shoes/dp/B08VH8JPNS/?_encoding=UTF8&pd_rd_w=279TC&content-id=amzn1.sym.5e4a35ae-3279-4dea-a0e4-1f5e54a0b2da&pf_rd_p=5e4a35ae-3279-4dea-a0e4-1f5e54a0b2da&pf_rd_r=A2QW1XBFFKRRZ0VFPZYX&pd_rd_wg=gHBzG&pd_rd_r=e5d2758f-5347-45c5-9566-ae30f7436e10&ref_=pd_gw_GW_ko_reftag" />
      
      {/* home body end  */}
      <ResponsiveComponent Mobile={<BottomNav />} Desktop={null} />
    </>
  )
}

// const ProdUrl =
//   'https://www.flipkart.com/tundwal-s-solid-double-comforter-mild-winter/p/itmc9692d3839d7c?pid=BLAGFFJZHZK2ZBYA&lid=LSTBLAGFFJZHZK2ZBYAESOEMK&marketplace=FLIPKART&fm=productRecommendation%2FattachForSwatchProducts&iid=R%3Aas%3Bp%3AMATGK3BKHCS25U6G%3Bl%3ALSTMATGK3BKHCS25U6GXXN9TL%3Bpt%3App%3Buid%3Ab7d24406-0f73-11ee-9025-4ff28ce42c6a%3B.BLAGFFJZHZK2ZBYA&ssid=i4zr0vrzxs0000001687270026546&otracker=pp_reco_Frequently%2BBought%2BTogether_1_Frequently%2BBought%2BTogether_BLAGFFJZHZK2ZBYA_productRecommendation%2FattachForSwatchProducts_1&otracker1=pp_reco_PINNED_productRecommendation%2FattachForSwatchProducts_Frequently%2BBought%2BTogether_NA_productCard_cc_1_NA_view-all&cid=BLAGFFJZHZK2ZBYA';

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const response = await fetch(ProdUrl);
//     const html = await response.text();
//     const $ = cheerio.load(html);
//     const flipkartPrice = $('._30jeq3._16Jk6d').text().trim();

//     return {
//       props: {
//         flipkartPrice,
//         ProdUrl,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         flipkartPrice: null,
//         ProdUrl,
//       },
//     };
//   }
// };
