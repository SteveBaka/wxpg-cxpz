// index.js
Page({  
    
    data: {
    theme: 'light',
    date: '2022-02-02',
    semester: [['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']],
    index:[9,21],
    inputValue: '',


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
    wx.showToast({title:"发现彩蛋",})
  },
  imgInfo:function(event){
	  this.setData({
		  imgWidth:event.detail.width,
		  imgHeight:event.detail.height
	  })
  }



})