import React, { useState } from 'react';
import styles from './index.less';
import { Link } from 'umi';
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

  const createNavItems = () => {
    return items.map((item) => {
      return (
        <Link
          to={item.path}
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
              item.abb === activeItem ? styles.active : styles.free
            }`}
          >
            {activeItem === item.abb ? item.name : item.abb}
          </div>
        </Link>
      );
    });
  };

  return (
    <div className={styles.contaienr}>
      {/* <div className={styles.logoContainer}>
        <img src={logo} />
      </div> */}
      {createNavItems()}

      <img className={styles.wxCode} src={wxCode} />
    </div>
  );
};

export default index;
