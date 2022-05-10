// pages/preview/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    xhnum:'',
    mzname:'',
    xyname:'',
    njnum:'',
    zyname:''
  },

save:function() {
  var that = this
  wx.setStorageSync('xhnum', this.data.xhnum);
  wx.setStorageSync('mzname', this.data.mzname);
  wx.setStorageSync('xyname', this.data.xyname);
  wx.setStorageSync('njnum', this.data.njnum);
  wx.setStorageSync('zyname', this.data.zyname);
  wx.showToast({
    title: '成功保存',
  });
  wx.navigateTo({
    url: '/pages/page2/index',
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

onShow() {
  const self = this
  let xhnum = wx.getStorageSync('xhnum');
  let mzname = wx.getStorageSync('mzname');
  let xyname = wx.getStorageSync('xyname');
  let njnum = wx.getStorageSync('njnum');
  let zyname = wx.getStorageSync('zyname');

  if ({ xhnum,mzname,zyname,xyname,njnum }) {
    self.data.xhnum = xhnum
    self.data.mzname = mzname
    self.data.zyname = zyname
    self.data.xyname = xyname
    self.data.njnum = njnum
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