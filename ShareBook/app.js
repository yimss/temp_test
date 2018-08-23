//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  // 重写tabBar
  // tabbar: {
  //   color: "#242424",
  //   selectedColor: "#fa8582",
  //   backgroundColor: "#ffffff",
  //   borderStyle: "#d7d7d7",
  //   list: [
  //     {
  //       pagePath: "/pages/index/index",
  //       text: "扫描",
  //       iconPath: "../../images/circle.png",
  //       selectedIconPath: "../../images/tab1_cur.png",
  //       selected: true
  //     },
  //     {
  //       pagePath: "/pages/logs/logs",
  //       text: "首页",
  //       iconPath: "../../images/tab_new.png",
  //       selectedIconPath: "../../images/tab_new.png",
  //       selected: false
  //     },
  //     {
  //       pagePath: "/pages/first_page/first_page",
  //       text: "我的",
  //       iconPath: "../../images/tab4.png",
  //       selectedIconPath: "../../images/tab4_cur.png",
  //       selected: false
  //     }
  //   ],
  //   position: "bottom"
  // },
  // changeTabBar: function () {
  //   var _curPageArr = getCurrentPages();
  //   var _curPage = _curPageArr[_curPageArr.length - 1];
  //   var _pagePath = _curPage.__route__;
  //   if (_pagePath.indexOf('/') != 0) {
  //     _pagePath = '/' + _pagePath;
  //   }
  //   var tabBar = this.tabbar;
  //   for (var i = 0; i < tabBar.list.length; i++) {
  //     console.log(_pagePath + '--' + tabBar.list[i].pagePath)
  //     tabBar.list[i].selected = false;
  //     if (tabBar.list[i].pagePath == _pagePath) {
  //       tabBar.list[i].selected = true;//根据页面地址设置当前页面状态  
  //     }
  //   }
  //   _curPage.setData({
  //     tabbar: tabBar
  //   });
  // },
})