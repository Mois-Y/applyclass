const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    openid: ''
  },
  onLoad: function (option) {
    var that = this
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        that.setData({
          openid: res.data
        })
      },
      fail: function (res) {}

    })

  },
  submit: function (e) {
    // console.log(e.detail.value);
    var res = e.detail.value
    var sid = res.sid
    var name = res.name
    var email = res.email
    var department = res.department
    var myClass = res.myClass
    var phone = res.phone

    if (sid == "" || name == "" || email == "" || department == "" || myClass == "" || phone == "") {
      wx.showToast({
        title: '请输入完整信息!',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else if (!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email))) {
      wx.showToast({
        title: '邮箱有误',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else if (!(/^1[34578]\d{9}$/.test(phone))) {
      wx.showToast({
        title: '手机号码有误',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else {
      wx.request({
        method: 'post',
        url: app.globalData.url+'/student/addStudent',
        data: e.detail.value,
        success: function (res) {
          if (res.data.code == 100) {
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
            setTimeout(function () {
              wx.hideToast()
            }, 2000)
            wx.navigateBack({
              delta: 1
            })

            console.log("返回" + res.data.code);
          }
        }
      })
      console.log(e)
    }
  }

})