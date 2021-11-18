import Axios from '../axios'

const getCarousel = () => {
  return Axios.ajax({
    url: 'img/list',
    showLoading: true,
    data: {
      'apply': 'carousel'
    }
  })
}

export {
  getCarousel
}

