// pages/page2/index.js
function  getDate(type) {
  const date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (type === 'start') {
    year = year - 10;
  } else if (type === 'end') {
    year = year + 10;
  }
  month = month > 9 ? month : '0' + month;;
  day = day > 9 ? day : '0' + day;

  return `${year}-${month}-${day}`;
}
Page({  
  data: {
    date: getDate({
      format: true
    }),
    startDate:getDate('start'),
    endDate:getDate('end'),
  },
  changeout: function(){
      wx.showModal({
        title: '提示',
        content: '出校码生成后需在半个小时内出校，超过时间则出校码失效！',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateTo({
              url: '/pages/changeout/index',
            })}
            else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      var that = this
      wx.setStorageSync('date', this.data.date);
    },
    changein:function(){
      wx.showModal({
        title: '提示',
        content: '入校码生成后需在半个小时内出校，超过时间则入校码失效！',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateTo({
              url: '/pages/changein/index',
            })}
            else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      var that = this
      wx.setStorageSync('date', this.data.date);
    },
    preview(){
      wx.navigateTo({
        url: '/pages/preview/index',
      })
     },
     onLoad: function (options) {
      var date = wx.getStorageSync('date');
      this.setData({
        date : date ,
      });
    },
  timechanger(){
    wx.navigateTo({
      url: '/pages/timechanger/index',
    })
  },
  bindDateChange(e){
    this.setData({
      date: e.detail.value
    })
  },
  })
  