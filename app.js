//app.js
App({
  globalData: {
    serverUrl: "https://fuyinkangfu.com",
    guide:1
  },
  onLaunch: function (q) {
    // console.log(this.globalData.guide=3)
    console.log("加载页面所带的参数↓")
    console.log(q)
    // console.log(scene)
    var id = q.query.id
    this.globalData.guide=id
    if (q.scene) {
      const scene = decodeURIComponent(q.scene)
      // wx.setStorageSync('doctorId', scene)
      wx.setStorageSync('doctorId', id)
    } else {
      wx.setStorageSync('doctorId', id)
    }
  },
})