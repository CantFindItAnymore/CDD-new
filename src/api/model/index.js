import Axios from '../axios'


const getByType = (type) => {
  // 0 案例
  // 1 类别
  return Axios.ajax({
    url: `type/all/${type}`,
  })
}

const getWorkById = (dto) => {
  return Axios.ajax({
    url: 'programme/page',
    method: 'POST',
    data: dto
  })
}

const getCarousel = (type) => {
  return Axios.ajax({
    url: `resource/banner/${type}`,
    method: 'POST',
    data: {
      size: -1,
      curren: -1
    }
  })
}


export {
  getByType,
  getWorkById,
  getCarousel
}

