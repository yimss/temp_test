// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "王咪咪",
    personclass: "六年级 四班",
    coinnumber: 36,
    book_information_name: "图书讯息",
    book_information_list: [
      { name: "我的借阅", icon: "kind_list_1_1.png", info: "18" },
      { name: "我的分享", icon: "kind_list_1_2.png", info: "4" },
      { name: "我的书库", icon: "kind_list_1_3.png", info: "18" },
      { name: "想读图书", icon: "kind_list_1_4.png", info: "18" }
    ],
    function_name: "功能",
    function_list: [
      { name: "添加至桌面", icon: "kind_list_2_1.png", info: "新增桌面捷径" }
    ],
    // 重写tabbar数据
    // tabbar: {}
    tabbar: {
      color: "##333333",
      selectedColor: "#1D82D2",
      backgroundColor: "#ffffff",
      borderStyle: "#d7d7d7",
      list: [
        {
          pagePath: "/pages/first_page/first_page",
          text: "首页",
          iconPath: "../../images/index.png",
          selectedIconPath: "../../images/index_click.png",
          selected: false
        },
        {
          pagePath: "/pages/logs/logs",
          text: "",//扫一扫
          iconPath: "../../images/scan.png",
          selectedIconPath: "../../images/scan.png",
          selected: false
        },
        {
          pagePath: "/pages/mine/mine",
          text: "我的",
          iconPath: "../../images/mine.png",
          selectedIconPath: "../../images/mine_click.png",
          selected: true
        }
      ],
      position: "bottom"
    }, 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  // //tabBar方法
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
  // },
})