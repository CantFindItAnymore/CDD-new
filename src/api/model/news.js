import Axios from '../axios'

const getNewsList = () => {
  return Axios.ajax({
    url: 'news/list',
    showLoading: true
  })
}

const getNewsDetail = (did) => {
  return Axios.ajax({
    url: 'news/detail?id=' + did,
    showLoading: true
  })
}

export {
  getNewsList,
  getNewsDetail
}

