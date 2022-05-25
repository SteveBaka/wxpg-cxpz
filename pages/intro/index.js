// pages/intro/index.js
Page({
  onLoad: function (options) {
    var mzname = wx.getStorageSync('mzname');
    this.setData({
      mzname : mzname ,
    });
  },
})