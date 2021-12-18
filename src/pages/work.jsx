import React, { Fragment, useEffect, useState } from 'react';
import Layout from '@/components/InnerLayout';
import { Image, Pagination } from 'antd';
import { Helmet } from 'react-helmet';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import 'animate.css';
import { history } from 'umi';
import styles from './work.less';

import { getByType, getWorkById } from '@/api/model';

export default function index() {
  const [sort, setSort] = useState([]);
  const [work, setWork] = useState([]);
  const [activeSort, setActiveSort] = useState(-1);
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
    getByType(0).then((res) => {
      setSort(res);
      setActiveSort(res[0].id);
      const dto = { id: res[0].id };
      _getWorkById(dto);
    });
  };

  const _getWorkById = (dto) => {
    if (dto.id < 0) {
      return;
    }
    getWorkById(dto).then((res) => {
      setWork([...res.data]);
      setCurrent(res.current);
      setTotal(res.total);
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
    return work.map((item, index) => (
      <div
        key={item.id}
        style={{ animationDelay: `${index / 4}s` }}
        className={`animate__animated animate__fadeInDown ${styles.work}`}
        onClick={() => {
          localStorage.setItem('workDetail', JSON.stringify(item.images));
          history.push('/work-detail');
        }}
      >
        <Image
          width={400}
          src={item.images[0]?.filePath}
          preview={{
            src: item.images[0]?.filePath?.replace('_600*450', ''),
          }}
        />
        <div className={styles.itemDesc}>{item.name}</div>
      </div>
    ));
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Helmet>
        <title>案例</title>
      </Helmet>
      <Layout>
        <div className={styles.container}>
          {/* <div className={styles.leftContainer}> */}
          <div className={styles.sortContainer}>{createSort()}</div>
          {/* <div
              className={`animate__animated animate__fadeInLeft animate__delay-1s ${styles.slanting}`}
            /> */}
          <div className={styles.workContainer}>{createWork()}</div>

          <Pagination
            current={current}
            total={total}
            pageSize={10}
            onChange={(e) => {
              setCurrent(e);
            }}
          />
          {/* </div> */}
          {/* <div className={styles.rightContainer}>
            <Image
              width={400}
              src={work.filter((item) => item.id === activeWork)[0].src}
            />
          </div> */}
        </div>
      </Layout>
    </ConfigProvider>
  );
}
