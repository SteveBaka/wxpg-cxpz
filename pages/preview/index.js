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

save:function() {
  var that = this
  wx.setStorageSync('xhnum', this.data.xhnum);
  wx.setStorageSync('mzname', this.data.mzname);
  wx.setStorageSync('xyname', this.data.xyname);
  wx.setStorageSync('njnum', this.data.njnum);
  wx.setStorageSync('zyname', this.data.zyname);
  wx.getStorageSync('datenum', this.data.datenum);
  wx.showToast({
    title: '保存成功',
  });
  wx.navigateBack({
    delta: 0,
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
onShow() {
  const self = this
  let xhnum = wx.getStorageSync('xhnum');
  let mzname = wx.getStorageSync('mzname');
  let xyname = wx.getStorageSync('xyname');
  let njnum = wx.getStorageSync('njnum');
  let zyname = wx.getStorageSync('zyname');
  if (xhnum) {
    self.data.xhnum = xhnum
    self.setData(self.data)
}
  if (mzname) {
  self.data.mzname = mzname
  self.setData(self.data)
}
  if (xyname) {
  self.data.xyname = xyname
  self.setData(self.data)
}
  if (njnum) {
  self.data.njnum = njnum
  self.setData(self.data)
}
  if (zyname) {
  self.data.zyname = zyname
  self.setData(self.data)
}
},
onInputText(e) {
const self = this
const value = e.detail.value
if (value) {
  wx.setStorageSync('xhnum', this.data.xhnum);
  wx.setStorageSync('mzname', this.data.mzname);
  wx.setStorageSync('xyname', this.data.xyname);
  wx.setStorageSync('njnum', this.data.njnum);
  wx.setStorageSync('zyname', this.data.zyname);
} 
},

})