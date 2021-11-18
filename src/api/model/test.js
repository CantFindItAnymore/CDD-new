import Axios from '../axios'

const test = () => {
  return Axios.ajax({
    url: '',
    // showLoading: true
  })
}

const getNewsDetail = (did) => {
  return Axios.ajax({
    url: 'news/detail?id=' + did,
    // showLoading: true
  })
}

export {
  test,
  getNewsDetail
}

