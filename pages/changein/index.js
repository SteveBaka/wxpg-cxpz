// pages/changein/index.js

Page({  
    
  data: {
  theme: 'light',
  semester: [['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','23:59']],
  index:[10,23],
  timer: '',//定时器名字
  countDownNum: '60',//倒计时初始值
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
onShareAppMessage: function(res) {
  return{
    title:"下次一定",
    path: '/pages/fkti/index'
  }
  },

onLoad: function (options) {
  var xhnum = wx.getStorageSync('xhnum');
  var mzname = wx.getStorageSync('mzname');
  var xyname = wx.getStorageSync('xyname');
  var njnum = wx.getStorageSync('njnum');
  var zyname = wx.getStorageSync('zyname');
  var date = wx.getStorageSync('date');
  this.setData({
    xhnum : xhnum ,
    mzname : mzname ,
    xyname : xyname ,
    njnum : njnum ,
    zyname : zyname ,
    date : date ,
  });
},
onShow: function(){
  this.countDown();
},
countDown: function () {
  let that = this;
  let countDownNum = that.data.countDownNum;
  that.setData({
    timer: setInterval(function () {
      countDownNum--;
      that.setData({
        countDownNum: countDownNum
      })
      if (countDownNum == 0) {
        clearInterval(that.data.timer);
      }
    }, 1000)
  })
},
})