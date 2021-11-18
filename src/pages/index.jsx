import React, { Fragment } from 'react';
import styles from './index.less';
import LeftNav from '@/components/HomeLeftNav';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

import logo from '@/assets/imgs/logo.png';

import homeHands from '@/assets/imgs/homeHands2.jpg';

export default function IndexPage() {
  return (
    <Fragment>
      <Helmet>
        <title>首页</title>
      </Helmet>
      <div className={styles.homeContainer}>
        <LeftNav />
        <div className={styles.imgContainer}>
          <div>
            <img src={logo} className={styles.logo} />
            <p>巴 勃 罗 设 计</p>
          </div>
          <div>
            <img src={homeHands} className={styles.homeHands} />
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}
