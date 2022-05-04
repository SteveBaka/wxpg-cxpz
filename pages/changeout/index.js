// pages/changein/index.js
const app = getApp()
Page({  
    
  data: {
  theme: 'light',
  date: '',
  semester: [['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','23:59']],
  index:[10,22],
  inputValue: '',
  xhnum: '',

},

bindPickerChange: function (e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
    index: e.detail.value
  })
},
bindMultiPickerChange: function (e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
    multiIndex: e.detail.value
  })
},
bindMultiPickerColumnChange: function (e) {
  console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
  var data = {
    multiArray: this.data.multiArray,
    multiIndex: this.data.multiIndex
  };
  data.multiIndex[e.detail.column] = e.detail.value;

  this.setData(data);
},
bindDateChange: function(e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
    date: e.detail.value
  })
},

bindSemesterChange:function(e){
  console.log(e.detail)
  this.setData({
    index: e.detail.value
  })
},
bindColumnChange:function(e){
  console.log(e.detail)    
},

bindKeyInput: function (e) {
  this.setData({
    inputValue: e.detail.value
  })
},
changein(){
  wx.navigateTo({
    url: '/pages/changein/index',
  })
},

onLoad: function (options) {
  var xhnum = wx.getStorageSync('xhnum');
  var mzname = wx.getStorageSync('mzname');
  var xyname = wx.getStorageSync('xyname');
  var njnum = wx.getStorageSync('njnum');
  var zyname = wx.getStorageSync('zyname');
  var datenum = wx.getStorageSync('datenum');
  var dateinput = wx.getStorageSync('dateinput');
  var yrinput = wx.getStorageSync('yrinput');
  var mouinput = wx.getStorageSync('mouinput');
  var dayinput = wx.getStorageSync('dayinput');
  this.setData({
    xhnum : xhnum ,
    mzname : mzname ,
    xyname : xyname ,
    njnum : njnum ,
    zyname : zyname ,
    datenum : datenum ,
    dateinput : dateinput ,
    yrinput : yrinput ,
    mouinput : mouinput ,
    dayinput : dayinput ,
  });
},

})