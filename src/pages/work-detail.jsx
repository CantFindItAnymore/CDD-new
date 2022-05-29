import React, { Fragment, useEffect, useState } from 'react';
import { Divider, Image } from 'antd';
import { Helmet } from 'react-helmet';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import Footer from '@/components/Footer';
import 'animate.css';
import styles from './work-detail.less';

export default function index(props) {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    setDetail(JSON.parse(localStorage.getItem('workDetail')));
  }, []);

  const createDetail = () => {
    return detail.map((item) => {
      return (
        <div className={styles.detailItem} key={item.id}>
          <Image
            width={760}
            src={item.filePath}
            preview={{
              src: item.filePath,
            }}
          />
          <p style={{ fontSize: '16px' }}>{item.text}</p>
          <Divider />
        </div>
      );
    });
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Helmet>
        <title>案例详情</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.detail}>{createDetail()}</div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </ConfigProvider>
  );
}
