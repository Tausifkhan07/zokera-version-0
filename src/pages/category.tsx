import React from 'react';
import styles from '@/styles/Category.module.css';
import CategoryComp from '../../components/comman/CategoryComp';
import BottomNav from '../../components/mobile/BottomNav';
import ResponsiveComponent from '../../components/ResponsiveComponent';
import TitleHeader from '../../components/mobile/TitleHeader';
import DeskHeader from '../../components/desktop/DeskHeader';

const category = () => {
  return (
    <>
      <ResponsiveComponent Mobile={<TitleHeader TitleProps="All Categories" />} Desktop={<DeskHeader />} />
      <div className={styles.container}>
        <CategoryComp />
      </div>
      <ResponsiveComponent Mobile={<BottomNav />} Desktop={null} />
    </>
  )
}

export default category
