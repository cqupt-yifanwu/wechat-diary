//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    msg: '',
    msgs: [],
    count: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindmsg: function (e) {
    this.setData({
      msg: e.detail.value
    });
  },
  finishiHandle: function (e) {
    const {msg, msgs, count} = this.data;
    if(msg.trim().length == 0) {
      console.log(msg);
      return;
    }
    const newMsg = {
      id: new Date().getTime(),
      msg: this.data.msg
    };
    msgs.push(newMsg);
    this.setData({
      msg: '',
      msgs,
      count: count + 1
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
