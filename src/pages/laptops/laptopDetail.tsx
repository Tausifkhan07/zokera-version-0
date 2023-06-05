import Head from 'next/head';
import React, {useState} from 'react';
import styles from '@/styles/LaptopsDetail.module.css';
import ResponsiveComponent from '../../../components/ResponsiveComponent';
import TitleHeader from '../../../components/mobile/TitleHeader';
import BottomNav from '../../../components/mobile/BottomNav';
import DeskHeader from '../../../components/desktop/DeskHeader';
import ThumbLaptSlider from '../../../components/comman/ThumbLaptSlider';
import { BsStarFill } from 'react-icons/bs';
import Link from 'next/link';
import { GiComputerFan, GiProcessor } from 'react-icons/gi';
import { AiOutlineDatabase } from 'react-icons/ai';
import { MdBatteryCharging30, MdOutlineDesktopAccessDisabled, MdOutlineSdStorage } from 'react-icons/md';
import TableProdKey from '../../../components/comman/TableProdKey';
import ProductDetailPopUp from '../../../components/popupbox/ProductDetailPopUp';
import KeyFeatureProd from '../../../components/comman/KeyFeatureProd';
import ProdDetailsPara from '../../../components/comman/ProdDetailsPara';

const laptopDetail = () => {
  const [productDetailPopUp, setProductDetailPopUp] = useState<boolean>(false);

  const images = [
    "https://cdn.moglix.com/p/w2OHDD7CXmnkt-xxlarge.jpg",
    "https://cdn.moglix.com/p/w2OHDD7CXmnkt-xxlarge.jpg",
    "https://cdn.moglix.com/p/w2OHDD7CXmnkt-xxlarge.jpg",
    "https://cdn.moglix.com/p/w2OHDD7CXmnkt-xxlarge.jpg",
    "https://cdn.moglix.com/p/w2OHDD7CXmnkt-xxlarge.jpg",
    "https://cdn.moglix.com/p/w2OHDD7CXmnkt-xxlarge.jpg",
    "https://cdn.moglix.com/p/w2OHDD7CXmnkt-xxlarge.jpg",
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
                    <h1 className={styles.title}>Lenovo Chromebook 14e AMD A6-9220C Processor R5 Graphics/Chrome OS/14 inch FHD Touch Mineral Grey Laptop, 81MH0037HA</h1>
                    <div className={styles.retingPrice}>
                      <div className={styles.left}>
                        <div className={styles.ratting}><span>4.5</span><BsStarFill /></div>
                        <div className={styles.count}>6,193 Ratings</div>
                      </div>
                      <div className={styles.right}>
                        <h3 className={styles.mrp}>₹ 49990</h3>
                        <h3 className={styles.price}><Link href="#">₹ 33990</Link></h3>
                        <div className={styles.provider}><Link href="#">Buy On Amazon</Link></div>
                      </div>
                    </div>
                    <section className={styles.keyBox}>
                        <KeyFeatureProd />
                    </section>
                    <section className={styles.proSpacificaion}>
                        <TableProdKey />
                        <button onClick={()=>setProductDetailPopUp(!productDetailPopUp)} className={styles.readMore}>Read More</button>
                    </section>
                    <section className={styles.proDetails}>
                      <ProdDetailsPara />
                      <button onClick={()=>setProductDetailPopUp(!productDetailPopUp)} className={styles.readMore}>Read More</button>
                    </section>
                </div>
              </div>
            </div>
            <aside className={styles.asideLatest}>
              <div className={styles.sideBar}>side bar news section</div>
            </aside>
        </section>
        {productDetailPopUp && <ProductDetailPopUp setProductDetailPopUp={setProductDetailPopUp} />}
      </main>
      <ResponsiveComponent Mobile={<BottomNav />} Desktop={null} />
    </>
  )
}

export default laptopDetail;