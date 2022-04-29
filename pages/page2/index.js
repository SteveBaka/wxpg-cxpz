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

     delc(){
      wx.showModal({
        title: 'Steve提示您',
        content: '确定删除空空如也的这里吗？',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.showToast({
              title: '成功',
            })}
            else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
     wx.vibrateShort({
       type: 'light',
     })
     },
     preview(){
      wx.navigateTo({
        url: '/pages/preview/index',
      })
     },
     onLoad: function (options) {
      var dateinput = wx.getStorageSync('dateinput');
      this.setData({
        dateinput : dateinput ,
      });
    },
  timechanger(){
    wx.navigateTo({
      url: '/pages/timechanger/index',
    })
  },
  
  })
  