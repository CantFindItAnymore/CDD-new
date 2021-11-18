import React, { Fragment, useState } from 'react';
import Layout from '@/components/InnerLayout';
import { Helmet } from 'react-helmet';
import { Image } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, Carousel } from 'antd';
import styles from './news.less';

export default function index() {
  const [activeNews, setActiveNews] = useState(1);
  const news = [
    {
      id: 1,
      title: 'CCD出席2020亞太酒店設計年會',
      content: '2020第十屆亞太酒店設計年會在成都隆重舉辦，CCD香港鄭中設計事務所創始人/董事長鄭忠先生、總裁/合夥人胡偉堅先生、高級副總裁/合夥人/設計總監莊瑞安先生共同出席，與眾多享譽世界的設計大師、專家學者及著名國際品牌酒店管理名家等行業精英，深度探究後疫情時代酒店設計的未來發展趨勢，以及當前新形勢下酒店設計行業的應變之道。',
      srcs: [
        'http://wx4.sinaimg.cn/mw600/0089ndPTly1gpbgu0ku2wj30ku0npgvi.jpg',
        'http://wx4.sinaimg.cn/mw600/0089ndPTly1gpbgu0ku2wj30ku0npgvi.jpg',
        'http://wx4.sinaimg.cn/mw600/0089ndPTly1gpbgu0ku2wj30ku0npgvi.jpg',
      ],
      time: '2021-4-4 10:53'
    },
    {
      id: 2,
      title: '222222222222222222222',
      content: '22222222222222222222',
      srcs: [
        'http://wx4.sinaimg.cn/mw600/0089ndPTly1gpbgu0ku2wj30ku0npgvi.jpg',
        'http://wx4.sinaimg.cn/mw600/0089ndPTly1gpbgu0ku2wj30ku0npgvi.jpg',
        'http://wx4.sinaimg.cn/mw600/0089ndPTly1gpbgu0ku2wj30ku0npgvi.jpg',
      ],
      time: '2021-4-4 10:53'
    },
  ];

  const createNews = () => {
    return news.map((item, index) => (
      <div
        key={index}
        style={{ animationDelay: `${index / 4}s` }}
        className={`animate__animated animate__fadeInDown ${styles.new} ${
          item.id === activeNews ? styles.selectedWork : ''
        }`}
        onClick={() => {
          setActiveNews(item.id);
        }}
      >
        {item.title}
      </div>
    ));
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Helmet>
        <title>新闻中心</title>
      </Helmet>
      <Layout>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div
              className={`animate__animated animate__fadeInLeft ${styles.sortContainer}`}
            >
              新闻中心
            </div>
            <div
              className={`animate__animated animate__fadeInLeft animate__delay-1s ${styles.slanting}`}
            />
          </div>
          <div className={styles.centerContainer}>
            <div className={styles.carousel}>
              <Carousel autoplay dotPosition="top" draggable>
                <Image
                  width={600}
                  src="http://wx4.sinaimg.cn/mw600/0089ndPTly1gpbgu0ku2wj30ku0npgvi.jpg"
                />
                <Image
                  width={600}
                  src="http://wx4.sinaimg.cn/mw600/0089ndPTly1gpbgu0ku2wj30ku0npgvi.jpg"
                />
              </Carousel>
            </div>
            <div className={styles.newsTime}>
              {news.filter((item) => item.id === activeNews)[0].time}
            </div>
            <div className={styles.newsTitle}>
              {news.filter((item) => item.id === activeNews)[0].title}
            </div>
            <div className={styles.newsContent}>
              {news.filter((item) => item.id === activeNews)[0].content}
            </div>
          </div>
          <div className={styles.newsContainer}>{createNews()}</div>
        </div>
      </Layout>
    </ConfigProvider>
  );
}
