const app = getApp();
Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: true,
    //openid:''
  },
  onShow: function () {
    var user = wx.getStorageSync('userInfo');
    var expiration = wx.getStorageSync('userInfoDate');
    // debugger;
    console.log("user", user)
    if (user && expiration > Date.parse(new Date())) {
      wx.switchTab({
        url: '../../pages/index/index'
      })
    }
  },
  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      // 获得微信名、微信头像、性别
      wx.setStorage({
        key: 'nickName',
        data: e.detail.userInfo.nickName
      })
      wx.setStorage({
        key: 'avatarUrl',
        data: e.detail.userInfo.avatarUrl
      })
      wx.setStorage({
        key: 'gender',
        data: e.detail.userInfo.gender
      })
      wx.login({
        success: res => {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: app.globalData.url + '/student/login?code=' + res.code,
              method: "POST",
              success: function (res1) {
                wx.setStorage({
                  key: 'openid',
                  data: res1.data.data
                }),
                  // wx.navigateTo({
                  //   url: '../../pages/user/information/information?openid=222',
                  // })
                  console.log("消息:" + res1.data.msg)
                console.log("数据:" + res1.data.data)
                console.log("code:" + res1.data.code)
              }
            })
            //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来

            wx.setStorageSync("userInfo", res.code);
            // 设置过期时间为120分钟
            wx.setStorageSync("userInfoDate", Date.parse(new Date()) + 7200000);
            wx.switchTab({
              url: '../../pages/index/index'
            })

          } else {
            console.log('登录失败！' + res.errMsg)
          }
          // 获取到用户的 code 之后：res.code
          console.log("用户的code:" + res.code);
          // console.log(res)
          // console.log("用户的openid:" + res.data);


        }
      });


    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  },
  onLoad: function (option) {

  }
})