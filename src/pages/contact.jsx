import React, { Fragment, useEffect, useState } from 'react';
import Layout from '@/components/InnerLayout';
import { Image } from 'antd';
import { Helmet } from 'react-helmet';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, Carousel } from 'antd';
import 'animate.css';
import styles from './contact.less';
import brand1 from '@/assets/imgs/brand1.png';
import brand2 from '@/assets/imgs/brand2.png';
import brand3 from '@/assets/imgs/brand3.png';
import brand4 from '@/assets/imgs/brand4.png';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function index() {
  return (
    <ConfigProvider locale={zhCN}>
      <Helmet>
        <title>联系我们</title>
      </Helmet>
      <Layout>
        <div className={styles.container}>
          <div
            className={`animate__animated animate__fadeInLeft ${styles.mobileContainer}`}
          >
            <div
              className={`animate__animated animate__fadeInLeft ${styles.title}`}
            >
              联系方式
            </div>
            <p>Pablo 17935698322</p>
            <p>Pablo 17935698322</p>
          </div>

          {/* 子品牌 */}
          <div className={`${styles.item} ${styles.test}`}>
            <div className={styles.leftContainer}>
              <div
                className={`animate__animated animate__fadeInLeft animate__delay-1s ${styles.sortContainer}`}
              >
                合作品牌
              </div>
              {/* <div
                className={`animate__animated animate__fadeInLeft animate__delay-1s ${styles.slanting}`}
              /> */}
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.brandContainer}>
                <div>
                  <img src={brand1} />
                  <p>FED 鱼眼设计</p>
                </div>
                <div>
                  <img src={brand2} />
                  <p>UCD 聚城设计</p>
                </div>
                <div>
                  <img src={brand3} />
                  <p>CAC 郑中设计艺术咨询</p>
                </div>
                <div>
                  <img src={brand4} />
                  <p>RARITAG 犀照科技</p>
                </div>
                <div>
                  <img src={brand1} />
                  <p>FED 鱼眼设计</p>
                </div>
                <div>
                  <img src={brand2} />
                  <p>UCD 聚城设计</p>
                </div>
                <div>
                  <img src={brand3} />
                  <p>CAC 郑中设计艺术咨询</p>
                </div>
                <div>
                  <img src={brand4} />
                  <p>RARITAG 犀照科技</p>
                </div>
                <div>
                  <img src={brand1} />
                  <p>FED 鱼眼设计</p>
                </div>
                <div>
                  <img src={brand2} />
                  <p>UCD 聚城设计</p>
                </div>
                <div>
                  <img src={brand3} />
                  <p>CAC 郑中设计艺术咨询</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ConfigProvider>
  );
}
