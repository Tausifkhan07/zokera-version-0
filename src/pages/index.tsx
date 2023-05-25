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

export default function Home() {

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
        </div>
      </div>
      {/* home body end  */}
      <ResponsiveComponent Mobile={<BottomNav />} Desktop={null} />
    </>
  )
}
