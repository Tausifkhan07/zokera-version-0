import Head from 'next/head';
import React from 'react';
import styles from '@/styles/LaptopsDetail.module.css';
import ResponsiveComponent from '../../../components/ResponsiveComponent';
import TitleHeader from '../../../components/mobile/TitleHeader';
import BottomNav from '../../../components/mobile/BottomNav';
import DeskHeader from '../../../components/desktop/DeskHeader';
import ThumbLaptSlider from '../../../components/comman/ThumbLaptSlider';

const laptopDetail = () => {

  const images = [
    "/laptops/laptop-img.webp",
    "/laptops/laptop-img.webp",
    "/laptops/laptop-img.webp",
    "/laptops/laptop-img.webp"
  ];
  return (
    <>
      <Head>
        <title>Buy Laptop Online And Earn Money</title>
        <meta name="description" content="zokera home page buy any product that you want." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ResponsiveComponent Mobile={<TitleHeader TitleProps="SAMSUNG Galaxy Book 2 Core i5 12th Gen - 8 GB/512 GB" />} Desktop={<DeskHeader />} />
      {/* header end  */}
      <main className={styles.laptopDetail}>
        <section className={styles.detailsInner}>
            <div className={styles.productInner}>
              <div className={styles.proBox}>
                <div className={styles.slider}>
                  <ThumbLaptSlider images={images} />
                </div>
                <div className={styles.content}>
                  contnet
                </div>
              </div>
            </div>
            <aside className={styles.asideLatest}>
              <div className={styles.sideBar}>side bar news section</div>
            </aside>
        </section>
      </main>
      <ResponsiveComponent Mobile={<BottomNav />} Desktop={null} />
    </>
  )
}

export default laptopDetail