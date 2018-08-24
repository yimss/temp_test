// pages/first_page.js
// const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // show_search: "搜索",
    origin_value: "搜索书名或作者",//内容提示
    inputShowed: false,//焦点是否在搜索框
    inputVal: "",//搜索的值
    // 轮播图swiper设置信息
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],//三个图片
    indicatorDots: true,//指示点
    vertical: false,//竖向播放
    autoplay: true,//自动播放
    circular: true,//循环
    interval: 2000,//静止时间
    duration: 500,//切换时间
    previousMargin: 0,//前空余
    nextMargin: 0,//后空余
    //选择按钮
    chooses: ["同班", "同级", "同校", "推荐"],
    _num: 4,
    books: [
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" },
      { booktype: "同班", bookimg: "图片", bookname: "书名" }
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
          selected: true
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
          selected: false
        }
      ],
      position: "bottom"
    }, 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 运行tabbar方法
    // app.changeTabBar();
    //canvas绘图
    // var context = wx.createContext()
    // context.beginPath()
    // context.arc(7.5, 7.5, 5, 0, Math.PI * 1.5, false)
    // context.moveTo(7.5, 2.5)
    // context.lineTo(12.5, 2.5)
    // context.lineTo(12.5, 7.5)
    // context.stroke()
    // wx.drawCanvas({
    //   canvasId: 'canvas',
    //   actions: context.getActions()
    // })

    // wx.canvasToTempFilePath({
    //   canvasId: 'canvas',
    //   success: function (res) {
    //     console.log(res)
    //   },
    //   fail: function (res) {
    //     console.log(res)
    //   }
    // })

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
  // input事件处理函数
  // showInput: function () {
  //   this.setData({
  //     inputShowed: true
  //   });
  // },
  // hideInput: function () {
  //   this.setData({
  //     inputVal: "",
  //     inputShowed: false
  //   });
  // },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //选择按钮方法
  choosekinds: function (e) {

    this.setData({
      _num: e.target.dataset.num

    })
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