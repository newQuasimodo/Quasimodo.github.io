import Vue from 'vue'

// 日期处理
Vue.filter('formatTime1', v => {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})
// 日期处理
Vue.filter('formatTime', v => {
  return moment(v).format('YYYY.MM.DD')
})
