import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { history, Link } from 'umi';
import logo from '@/assets/imgs/logo.png';
import wxCode from '@/assets/imgs/wxCode.jpg';

const items = [
  {
    abb: 'Gategory',
    name: '类别',
    path: 'gategory',
  },
  {
    abb: 'Words',
    name: '案例',
    path: 'work',
  },
  {
    abb: 'About',
    name: '关于我们',
    path: 'about',
  },
  {
    abb: 'Contect',
    name: '联系我们',
    path: 'contact',
  },
];

const index = () => {
  const [activeItem, setActiveItem] = useState('');
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    const path = history.location.pathname.split('/').pop();
    setActivePath(path);
  }, [history.location.pathname.split('/').pop()]);

  const checkoutRouter = (path) => {
    history.replace(`/${path}`);
  };

  const createNavItems = () => {
    return items.map((item) => {
      return (
        <div
          onClick={checkoutRouter.bind(null, item.path)}
          className={` ${styles.item}`}
          key={item.abb}
          onMouseEnter={() => {
            setActiveItem(item.abb);
          }}
          onMouseLeave={() => {
            setActiveItem('');
          }}
        >
          <div
            className={`${
              item.abb === activeItem || item.path === activePath
                ? styles.active
                : styles.free
            }`}
          >
            {item.abb === activeItem || item.path === activePath
              ? item.name
              : item.abb}
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.contaienr}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
      {createNavItems()}
      <img className={styles.wxCode} src={wxCode} />
    </div>
  );
};

export default index;
