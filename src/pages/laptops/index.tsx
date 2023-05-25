import Head from 'next/head';
import React from 'react';
import ResponsiveComponent from '../../../components/ResponsiveComponent';
import styles from '@/styles/Laptops.module.css';
import DeskHeader from '../../../components/desktop/DeskHeader';
import TitleHeader from '../../../components/mobile/TitleHeader';
import BottomNav from '../../../components/mobile/BottomNav';
import Link from 'next/link';
import MobLaptopListing from '../../../components/mobile/MobLaptopListing';
import DeskLaptopListing from '../../../components/desktop/DeskLaptopListing';

const laptops = () => {
  return (
    <>
      <Head>
        <title>Buy Laptop Online And Earn Money</title>
        <meta name="description" content="zokera home page buy any product that you want." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ResponsiveComponent Mobile={<TitleHeader TitleProps="All Laptops" />} Desktop={<DeskHeader />} />
      {/* header end  */}
      <main className={styles.laptopsContainer}>
        
        <ResponsiveComponent Mobile={<MobLaptopListing />} Desktop={<DeskLaptopListing />} />
      </main>
      <ResponsiveComponent Mobile={<BottomNav />} Desktop={null} />
    </>
  )
}

export default laptops;
