import React, { Fragment, useEffect, useState } from 'react';
import Layout from '@/components/InnerLayout';
import { Image, Pagination } from 'antd';
import { Helmet } from 'react-helmet';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import 'animate.css';
import styles from './gategory.less';
import logo from '@/assets/imgs/logo.jpg';

import { getByType, getWorkById } from '@/api/model';

export default function index() {
  const [sort, setSort] = useState([]);
  const [work, setWork] = useState([]);
  const [activeSort, setActiveSort] = useState(-1);
  const [activeWork, setActiveWork] = useState({});
  // 分页
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    _getByType();
  }, []);

  useEffect(() => {
    setCurrent(1);
    const dto = { type: activeSort };
    _getWorkById(dto);
  }, [activeSort]);

  useEffect(() => {
    const dto = { type: activeSort, current };
    _getWorkById(dto);
  }, [current]);

  const _getByType = () => {
    getByType(1).then((res) => {
      setSort(res);
      setActiveSort(res[0].id);
      const dto = { type: res[0].id };
      _getWorkById(dto);
    });
  };

  const _getWorkById = (dto) => {
    if (dto.type < 0) {
      return;
    }
    getWorkById(dto).then((res) => {
      console.log(667, res);
      setWork([...res.data]);
      setCurrent(res.current);
      setTotal(res.total);
      setActiveWork(res.data[0]);
    });
  };

  const createSort = () => {
    return sort.map((item, index) => (
      <div
        key={item.id}
        style={{ animationDelay: `${index / 4}s` }}
        className={`animate__animated animate__fadeInLeft ${styles.sort} ${
          activeSort === item.id ? styles.selected : ''
        }`}
        onClick={() => {
          setActiveSort(item.id);
        }}
      >
        {item.typeName}
      </div>
    ));
  };

  const createWork = () => {
    console.log(7, work);

    return work.map((item, index) => {
      // if (item.images?.length === 0 && item.videos?.length === 0) {
      //   return null;
      // }
      console.log(8, item, activeWork);
      return (
        <div
          key={item.id}
          style={{ animationDelay: `${index / 4}s` }}
          className={`animate__animated animate__fadeInDown ${styles.work} ${
            activeWork?.id === item.id ? styles.workSelected : ''
          }`}
          onClick={() => {
            setActiveWork(item);
          }}
        >
          {item.images.length > 0 && <img src={item.images[0].filePath} />}
          {item.images.length > 0 ||
            (item.videos.length > 0 && (
              <video controls>
                <source src={item.videos[0].filePath} type="video/mp4" />
              </video>
            ))}
          {item.images?.length === 0 && item.videos?.length === 0 && (
            <img src={logo} />
          )}
        </div>
      );
    });
  };

  const createContent = () => {
    console.log(6, activeWork);
    return (
      <Fragment>
        {activeWork?.videos?.map((child) => {
          return (
            <div key={child.id}>
              <video controls>
                <source src={child.filePath} type="video/mp4" />
              </video>
              <p>{child.text}</p>
            </div>
          );
        })}
        {activeWork?.images?.map((child) => {
          return (
            <div key={child.id}>
              <Image
                src={child.filePath}
                preview={{
                  src: child.filePath?.replace('_600*450', ''),
                }}
              />
              <p>{child.text}</p>
            </div>
          );
        })}
      </Fragment>
    );
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Helmet>
        <title>类别</title>
      </Helmet>
      <Layout>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div className={styles.sortContainer}>{createSort()}</div>
            <div className={styles.workContainer}>{createWork()}</div>
            <Pagination
              current={current}
              total={total}
              pageSize={10}
              onChange={(e) => {
                setCurrent(e);
              }}
            />
          </div>
          <div className={styles.rightContainer}>{createContent()}</div>
        </div>
      </Layout>
    </ConfigProvider>
  );
}
