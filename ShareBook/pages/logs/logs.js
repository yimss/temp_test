//logs.js
const util = require('../../utils/util.js')
// const app = getApp();
Page({
  data: {
    logs: [],
    // 重写tabbar数据
    // tabbar: {}
    tabbar: {
      color: "#242424",
      selectedColor: "#fa8582",
      backgroundColor: "#ffffff",
      borderStyle: "#d7d7d7",
      list: [
        {
          pagePath: "/pages/first_page/first_page",
          text: "首页",
          iconPath: "../../images/first_test.png",
          selectedIconPath: "../../images/first_test.png",
          selected: true
        },
        {
          pagePath: "/pages/logs/logs",
          text: "扫一扫",
          iconPath: "../../images/circle.png",
          selectedIconPath: "../../images/tab_new.png",
          selected: false
        },
        {
          pagePath: "/pages/mine/mine",
          text: "我的",
          iconPath: "../../images/my_test.png",
          selectedIconPath: "../../images/tab4_cur.png",
          selected: false
        }
      ],
      position: "bottom"
    }, 
  },
  onLoad: function () {
    // 重写tabbar方法
    // app.changeTabBar();
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  //tabBar方法
  changeTabBar: function () {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.tabbar;
    for (var i = 0; i < tabBar.list.length; i++) {
      console.log(_pagePath + '--' + tabBar.list[i].pagePath)
      tabBar.list[i].selected = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].selected = true;//根据页面地址设置当前页面状态  
      }
    }
  },
})
