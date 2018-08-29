//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: 'Welcome to login Share Book',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    loginbutton: "Login",
    // 重写tabbar数据
    // tabbar: {}
    // loading: true,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getinf_request: function() {
    wx.request({
      url: 'https://14592619.qcloud.la/testRequest',
      data:{
        noncestr: Date.now(),
        test: "This is a test request!!"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      dataType: "json",
      success: function(result){
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration: 2000
        })
        // this.setData({
        //   loading: false,
        // })
        console.log('request success', result)
      },
      fail: function ( errMsg ) {
        console.log('request fail', errMsg)
        this.setData({
          loading: false
        })
      }
    })
  },
  onLoad: function () {
    // 重写tabbar方法
    // app.changeTabBar();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
