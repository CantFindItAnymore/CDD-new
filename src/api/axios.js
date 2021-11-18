
import axios from 'axios'
import { baseURL, timeout } from './config'
import { isObjectValueEqual } from '../utils/utils'
// import Loading from '../components/Loading'

// 防抖
let timer = null
let last_conf = null

export default class Axios {

  // axios封装
  static ajax(option) {
    if (!option) {
      return
    }

    // axios参数对象
    let conf = {
      url: baseURL + option.url,
      headers: {
        'Content-type': "application/json"
      },
      method: option.method || 'GET',
      timeout
    }

    // 判断post/get以确定参数
    if (!option.method || option.method === 'GET') {
      conf.params = option.data || '' // get参数
    } else if (option.method === 'POST') {
      conf.data = option.data || {} // post参数
    } else {
      return
    }

    console.log(0, conf)

    // 根据参数来判断是否显示loading层
    // let loading;
    // if (option.showLoading) {
    //   loading = document.getElementById('loading')
    //   ReactDOM.render(<Loading />, document.getElementById('loading'))
    //   loading.style.display = 'block'
    // }

    // 返回promise
    return new Promise((resolve, reject) => {
      // 防抖
      if (timer && isObjectValueEqual(conf, last_conf)) {
        // 重复同一个请求
        clearTimeout(timer)
        console.log('触发防抖')
      } else {
        last_conf = conf
      }
      timer = setTimeout(() => {
        axios(conf)
          .then(res => {
            let data = res.data
            if (res.status === 200) {
              if (data.code === '10000') {
                console.log(0.5, data)
                resolve(data.data)
              } else {
                console.log('IO成功但请求失败')
                reject(data.msg)
              }
            } else {
              reject('请求出错')
            }
          })
          .catch(() => {
            reject('io失败')
          })
          .finally(() => {
            // 最后都清除loading层
            // if (option.showLoading) {
            //   loading = document.getElementById('loading')
            //   loading.style.display = 'none'
            // }
            // 清除last_conf
            last_conf = {}
          })
      }, 200)
    })
  }
}