// pages/home1/home.js
Page({
  player(audio) {
    var that = this
    audio.title = ' '
    audio.src = 'https://www.ytmp3.cn/down/48858.mp3'
    audio.onEnded(() => {
      that.player(wx.getBackgroundAudioManager())
    })
  },
  onLoad: function () {
    this.player(wx.getBackgroundAudioManager())
  },
  enter1:function(event){
    wx.navigateTo({
      url:'/pages/game/index',
    })
  },
  enter2:function(event){
    wx.navigateTo({
      url:'/pages/multiplay/multiplay',
    })
  },
  enter3:function(event){
    wx.navigateTo({
      url:'/pages/rules/rules',
    })
  }

})