// pages/timechanger/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  yrinput(e){
    this.setData({
      yrinput: e.detail.value
    })
  },
  mouinput(e){
    this.setData({
      mouinput: e.detail.value
    })
  },
  dayinput(e){
    this.setData({
      dayinput: e.detail.value
    })
  },
  save:function() {
    var that = this
    wx.setStorageSync('yrinput', this.data.yrinput);
    wx.setStorageSync('mouinput', this.data.mouinput);
    wx.setStorageSync('dayinput', this.data.dayinput);
    wx.showToast({
      title: '修改成功',
    });
    wx.navigateBack({
      delta: 0,
    })
  },

onShow() {
    const self = this
    let yrinput = wx.getStorageSync('yrinput');
    let mouinput = wx.getStorageSync('mouinput');
    let dayinput = wx.getStorageSync('dayinput');
    if (yrinput) {
      self.data.yrinput = yrinput
      self.setData(self.data)
  }
    if (mouinput) {
    self.data.mouinput = mouinput
    self.setData(self.data)
  }
    if (dayinput) {
    self.data.dayinput = dayinput
    self.setData(self.data)
}
},
onInputText(e) {
  const self = this
  const value = e.detail.value
  if (value) {
      wx.setStorageSync('yrinput', value)
      wx.setStorageSync('mouinput', value)
      wx.setStorageSync('dayinput', value)
  } 
},

})