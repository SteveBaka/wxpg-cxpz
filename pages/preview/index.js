// pages/preview/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xhnum:'',
    mzname:'',
    xyname:'',
    njnum:'',
    zyname:'',
    datenum:'时间需要在修改页里面修改'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

save:function() {
  var that = this
  wx.setStorageSync('xhnum', this.data.xhnum);
  wx.setStorageSync('mzname', this.data.mzname);
  wx.setStorageSync('xyname', this.data.xyname);
  wx.setStorageSync('njnum', this.data.njnum);
  wx.setStorageSync('zyname', this.data.zyname);
  wx.getStorageSync('datenum', this.data.datenum);
  wx.showToast({
    title: '成功',
  });
  wx.navigateTo({
    url: '../page2/index',
  })
},

xhnum(e){
  this.setData({
    xhnum: e.detail.value
  })
},
mzname(e){
  this.setData({
    mzname: e.detail.value
  })
},
xyname(e){
  this.setData({
    xyname: e.detail.value
  })
},
njnum(e){
  this.setData({
    njnum: e.detail.value
  })
},
zyname(e){
  this.setData({
    zyname: e.detail.value
  })
},
bindDateChange(e){
  this.setData({
    datenum: e.detail.value
  })
},


})