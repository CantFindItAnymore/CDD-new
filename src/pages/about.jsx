import React, { Fragment, useState, useEffect } from 'react';
import Layout from '@/components/InnerLayout';
import { Helmet } from 'react-helmet';
import { Carousel, Image } from 'antd';
import styles from './about.less';

import { getCarousel } from '@/api/model';
import { isTemplateMiddle } from 'typescript';

// const people = [
//   {
//     id: '1',
//     name: '鄭忠',
//     post: '老板',
//     src: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f31f47665b6541f2b0f7afd6bf744b07~tplv-k3u1fbpfcp-watermark.image',
//     introduce:
//       'CCD香港鄭中設計事務所（Cheng Chung Design）的創始人、設計總監, 並擔任“ CTBUH世界高層建築與都市人居學會首届室內設計評委會主席”、“Frame Awards酒店設計類別評委”。鄭忠先生被譽為“資本圈第一時尚先生”，曾被授予“聯合國文化大使”、“中國設計年度人物”、“Hall of Fame名人堂成員”、廣州美術學院教授、2019年胡潤百富“產業領袖”等多個榮譽頭銜。鄭忠先生以“東意西境”的設計理念享譽國際酒店室內設計領域，帶領CCD從2001年創立至今已獲得包括室內設計界最高榮譽——“Gold Key Awards（金鑰匙獎）”最佳酒店設計獎項在內的91項頂級國際大獎，成為首家囊括全系列酒店設計大獎的華人設計公司。CCD在美國《室內設計》雜誌2019年的全球酒店室內設計百大排名中名列第三， 綜合排名亞洲第一。2019年、2020年榮登“亞洲品牌500強”，2020年榮登“中國500最具價值品牌”，品牌估值97.58億，均成為第一個也是唯一上榜的設計品牌。',
//   },
//   {
//     id: '2',
//     name: '胡偉堅',
//     post: '合伙人',
//     src: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad0a2ce1f97d4ba285c92aabe6bc5417~tplv-k3u1fbpfcp-watermark.image',
//     introduce:
//       '胡偉堅先生從事建築與室內設計行業超過35年。華南理工大學建築學碩士，師從著名建築師莫伯治院士研究中國傳統庭院與現代建築設計，在華南理工大學設計研究院完成了許多獲獎作品。1993年進入HBA洛杉磯總部工作長達15年，並成為HBA合夥人。直至2008年回國成為CCD合夥人，與鄭忠先生並肩將CCD從中國帶上國際的新平臺，完成逾百个國際酒店項目。由建築師到室內設計，從中國本土傳統到西方設計文化，這些豐富的求學、海外工作經驗，使他形成了獨到的個人見解與國際化的視野，總能賦予項目独特的創新性。',
//   },
// ];

export default function index() {
  const [activePerson, setActivePerson] = useState('1');

  const [companyCarouse, setCompanyCarousel] = useState([]);
  const [bossCarouse, setBossCarousel] = useState([]);

  useEffect(() => {
    getCarousel(2).then((res) => {
      setCompanyCarousel(res.data);
    });
    getCarousel(3).then((res) => {
      console.log(1, res.data);
      setBossCarousel(res.data);
    });
  }, []);

  const afterChange = (index) => {
    setActivePerson(bossCarouse[index]?.id);
  };
  return (
    <Fragment>
      <Helmet>
        <title>品牌故事</title>
      </Helmet>
      <Layout>
        <div className={styles.container}>
          <div
            className={`animate__animated animate__fadeInLeft ${styles.titleContainer}`}
          >
            品牌故事
          </div>
          <div className={styles.item}>
            <div className={styles.carousel}>
              <Carousel autoplay dotPosition="top" draggable>
                {companyCarouse.map((item) => (
                  <img key={isTemplateMiddle.id} src={item.filePath} />
                ))}
              </Carousel>
            </div>
            <p className="animate__animated animate__fadeInDown">
              CCD香港鄭中設計事務所（Cheng Chung
              Design）由著名設計師鄭忠先生（Joe
              Cheng）創立，專業為國際品牌酒店提供室內設計及顧問服務，為全球客戶提供綜合的一體化設計服務和方案，是國際頂級品牌酒店室內設計機構之一。CCD獲得了包括GOLD
              KEY，IIDA，HD等多個國際獎項，並在在美國《室內設計》雜誌2019年的全球酒店室內設計百大排名中名列第三，
              綜合排名亞洲第一。2019年榮登“亞洲品牌500強”，2020年榮登“中國500最具價值品牌”，品牌估值97.58億，均成為第一個也是唯一上榜的設計品牌。創立至今，CCD已為30多個國際酒店管理集團如Marriott（萬豪）、InterContinental
              Hotels Group（洲際） 、Hilton（希爾頓） 、Accor（雅高）
              、Hyatt（凱悅） 、Mandarin Oriental（文華東方） 、Alila（阿麗拉）
              、Shangri-La（香格里拉）、DIAOYUTAI MGM(釣魚臺美高梅）
              、Wyndham（溫德姆）等旗下50多個國際品牌、100多家豪華酒店提供了出色的室內設計及顧問服務工作。最新酒店項目如上海佘山世茂洲際酒店、北京前門文華東方酒店、上海董家渡麗思卡爾頓酒店、美國洛杉磯環球影城喜來登酒店等。
            </p>
          </div>
          <div className={styles.person}>
            <div className={styles.carousel}>
              <Carousel
                autoplay
                dotPosition="top"
                draggable
                afterChange={afterChange}
              >
                {bossCarouse.map((item) => (
                  <img key={item.id} src={item.filePath} />
                ))}
              </Carousel>
            </div>
            {/* <div className={styles.intro}>
              <div
                className={`animate__animated animate__fadeInLeft animate__delay-1s ${styles.name}`}
              >
                {bossCarouse.find((item) => item.id === activePerson)?.text}
              </div>
              <div
                className={`animate__animated animate__fadeInLeft animate__delay-1s ${styles.slanting}`}
              />
              <div
                className={`animate__animated animate__fadeInLeft animate__delay-1s ${styles.post}`}
              >
                {bossCarouse.find((item) => item.id === activePerson)?.text}
              </div>
            </div> */}
          </div>
          <div
            className={`animate__animated animate__fadeInDown animate__delay-1s ${styles.desc}`}
          >
            {/* {bossCarouse.find((item) => item.id === activePerson)?.text} */}
            CCD香港鄭中設計事務所（Cheng Chung Design）由著名設計師鄭忠先生（Joe
            Cheng）創立，專業為國際品牌酒店提供室內設計及顧問服務，為全球客戶提供綜合的一體化設計服務和方案，是國際頂級品牌酒店室內設計機構之一。CCD獲得了包括GOLD
            KEY，IIDA，HD等多個國際獎項，並在在美國《室內設計》雜誌2019年的全球酒店室內設計百大排名中名列第三，
            綜合排名亞洲第一。2019年榮登“亞洲品牌500強”，2020年榮登“中國500最具價值品牌”，品牌估值97.58億，均成為第一個也是唯一上榜的設計品牌。創立至今，CCD已為30多個國際酒店管理集團如Marriott（萬豪）、InterContinental
            Hotels Group（洲際） 、Hilton（希爾頓） 、Accor（雅高）
            、Hyatt（凱悅） 、Mandarin Oriental（文華東方） 、Alila（阿麗拉）
            、Shangri-La（香格里拉）、DIAOYUTAI MGM(釣魚臺美高梅）
            、Wyndham（溫德姆）等旗下50多個國際品牌、100多家豪華酒店提供了出色的室內設計及顧問服務工作。最新酒店項目如上
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}
