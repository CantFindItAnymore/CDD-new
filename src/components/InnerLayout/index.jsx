import React from 'react';
import InnerLeftNav from '@/components/InnerLeftNav';
import Footer from '@/components/Footer'
import styles from './index.less'

const index = props => {

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <InnerLeftNav />
        <div className={styles.child}>
          {props.children}
        </div>
      </div>
      <div className={styles.footer}>
        <Footer/>
      </div>
    </div>
  );
}

export default index;
