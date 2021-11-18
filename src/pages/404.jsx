import React, {useEffect} from 'react';
import {history} from 'umi'

const notFound = () => {

  useEffect(() => {
    history.replace('/')
  }, []);


  return (
    <div/>
  );
}

export default notFound;
