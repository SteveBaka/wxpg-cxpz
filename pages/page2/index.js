// pages/page2/index.js
Page({  
  changeout(){
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
    },
    changein(){
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
    },
    preview(){
      wx.navigateTo({
        url: '/pages/preview/index',
      })
     },
     onLoad: function (options) {
      var yrinput = wx.getStorageSync('yrinput');
      var mouinput = wx.getStorageSync('mouinput');
      var dayinput = wx.getStorageSync('dayinput');
      this.setData({
        yrinput : yrinput ,
        mouinput : mouinput ,
        dayinput : dayinput ,
      });
    },
  timechanger(){
    wx.navigateTo({
      url: '/pages/timechanger/index',
    })
  },
  
  })
  