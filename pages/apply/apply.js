//获取应用实例 
const app = getApp() 
 
Page({ 
  data: { 
    StatusBar: app.globalData.StatusBar, 
    CustomBar: app.globalData.CustomBar, 
 
    inputName:'', 
    inputUnit:'', 
    inputPhone:'', 
    index: null, 
    time1: '13:01', 
    time2:'14:01', 
    date: '2018-12-25', 
    switchChecked: '', 
    modalName:null, 
    textareaAValue: '', 
    textareaBValue: '', 
     
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示 
    selectData: ['80人以下(包括80)','100人以下(包括100)','100人以上'],//下拉列表的数据 
    index: 0,//选择的下拉列表下标 
 
    //当前选中数组的下标值 
    customIndex: [0, 0, 0], 
    //当前选中数组 
    onlyArray: [ 
      [], 
      [], 
      [] 
    ], 
    //customArray假设为我们从后台获取到的json数据 
    customArray: [{ 
        name: '软件系', 
        position: [{ 
            name: '辅导员', 
            n: [{ 
                name: '宋安娜' 
              }, 
              { 
                name: '郑创兴' 
              }, 
            ] 
          }, 
          { 
            name: '指导老师', 
            n: [{ 
              name: '陈玉菲' 
            }, { 
              name: '钟伟涛' 
            }] 
          }, 
           
        ] 
      }, 
 
      { 
        name: '电子系', 
        position: [{ 
            name: '辅导员', 
            n: [{ 
                name: '德国人' 
              }, 
              { 
                name: '师傅' 
              }, 
            ] 
          }, 
          { 
            name: '指导老师', 
            n: [{ 
              name: '菲' 
            }, { 
              name: '钟伟' 
            }] 
          }, 
           
        ] 
      }, 
      { 
        name: '计算机系', 
        position: [{ 
            name: '辅导员', 
            n: [{ 
                name: '宋娜' 
              }, 
              { 
                name: '郑兴' 
              }, 
            ] 
          }, 
          { 
            name: '指导老师', 
            n: [{ 
              name: '玉菲' 
            }, { 
              name: '伟涛' 
            }] 
          }, 
           
        ] 
      }, 
      { 
        name: '网络系', 
        position: [{ 
            name: '辅导员', 
            n: [{ 
                name: '宋娜' 
              }, 
              { 
                name: '创兴' 
              }, 
            ] 
          }, 
          { 
            name: '指导老师', 
            n: [{ 
              name: '陈' 
            }, { 
              name: '钟' 
            }] 
          }, 
           
        ] 
      }, 
      { 
        name: '游戏系', 
        position: [{ 
            name: '辅导员', 
            n: [{ 
                name: '宋娜' 
              }, 
              { 
                name: '郑创' 
              }, 
            ] 
          }, 
          { 
            name: '指导老师', 
            n: [{ 
              name: '菲' 
            }, { 
              name: '涛' 
            }] 
          }, 
           
        ] 
      }, 
      { 
        name: '数码系', 
        position: [{ 
            name: '辅导员', 
            n: [{ 
                name: '宋后台安娜' 
              }, 
              { 
                name: '郑创认' 
              }, 
            ] 
          }, 
          { 
            name: '指导老师', 
            n: [{ 
              name: '陈菲' 
            }, { 
              name: '伟涛' 
            }] 
          }, 
           
        ] 
      }, 
      { 
        name: '财会系', 
        position: [{ 
            name: '辅导员', 
            n: [{ 
                name: '宋地方' 
              }, 
              { 
                name: '郑创' 
              }, 
            ] 
          }, 
          { 
            name: '指导老师', 
            n: [{ 
              name: '玉菲' 
            }, { 
              name: '钟涛' 
            }] 
          }, 
           
        ] 
      }, 
      { 
        name: '国贸系', 
        position: [{ 
            name: '辅导员', 
            n: [{ 
                name: '宋地娜' 
              }, 
              { 
                name: '郑创兴' 
              }, 
            ] 
          }, 
          { 
            name: '指导老师', 
            n: [{ 
              name: '陈发给' 
            }, { 
              name: '钟伟涛' 
            }] 
          }, 
           
        ] 
      }, 
      { 
        name: '外语系', 
        position: [{ 
            name: '辅导员', 
            n: [{ 
                name: '宋' 
              }, 
              { 
                name: '创兴' 
              }, 
            ] 
          }, 
          { 
            name: '指导老师', 
            n: [{ 
              name: '玉菲' 
            }, { 
              name: '钟涛' 
            }] 
          }, 
           
        ] 
      }, 
      { 
        name: '管理系', 
        position: [{ 
            name: '辅导员', 
            n: [{ 
                name: '安娜' 
              }, 
              { 
                name: '创兴' 
              }, 
            ] 
          }, 
          { 
            name: '指导老师', 
            n: [{ 
              name: '陈菲' 
            }, { 
              name: '钟伟' 
            }] 
          }, 
           
        ] 
      }, 
       
    ] 
 
 
  }, 
   
/** 
   * 生命周期函数--监听页面加载,选择收表老师 
   */ 
  onLoad: function(options) { 
    var data = { 
      customArray: this.data.customArray, 
      customIndex: this.data.customIndex, 
      onlyArray: this.data.onlyArray, 
    }; 
    for (var i = 0; i < data.customArray.length; i++) { 
      data.onlyArray[0].push(data.customArray[i].name); 
    } 
    for (var j = 0; j < data.customArray[data.customIndex[0]].position.length; j++) { 
      data.onlyArray[1].push(data.customArray[data.customIndex[0]].position[j].name); 
    } 
    for (var k = 0; k < data.customArray[data.customIndex[0]].position[data.customIndex[1]].n.length; k++) { 
      data.onlyArray[2].push(data.customArray[data.customIndex[0]].position[data.customIndex[1]].n[k].name); 
    } 
    this.setData(data); 
  }, 
  //多列自定义选择器改变value的方法 
  bindCustomPickerChange: function(e) { 
    var customArray = this.data.customArray, 
      customIndex = this.data.customIndex, 
      onlyArray = this.data.onlyArray; 
 
    console.log('picker发送选择改变，携带值为', e.detail.value); 
    //此处e.detail.value为当前选择的列的下标值数组，如[0,1,0] 
     
    console.log('picker最终选择值为：', onlyArray[0][customIndex[0]], onlyArray[1][customIndex[1]], onlyArray[2][customIndex[2]]); 
    this.setData({ 
      customIndex: e.detail.value 
    }) 
  }, 
 
  //多列自创选择器换列方法 
  bindCustomPickerColumnChange: function(e) { 
    var customArray = this.data.customArray, 
      customIndex = this.data.customIndex, 
      onlyArray = this.data.onlyArray; 
 
    customIndex[e.detail.column] = e.detail.value; 
    // console.log(onlyArray); 
 
    var searchColumn = () => { 
      for (var i = 0; i < customArray.length; i++) { 
        var arr1 = []; 
        var arr2 = []; 
        if (i == customIndex[0]) { 
          for (var j = 0; j < customArray[i].position.length; j++) { 
            arr1.push(customArray[i].position[j].name); 
            if (j == customIndex[1]) { 
              for (var k = 0; k < customArray[i].position[j].n.length; k++) { 
                arr2.push(customArray[i].position[j].n[k].name); 
              } 
              onlyArray[2] = arr2; 
            } 
          } 
          onlyArray[1] = arr1; 
        } 
      }; 
    } 
 
    switch (e.detail.column) { 
      case 0: 
        customIndex[1] = 0; 
        customIndex[2] = 0; 
        searchColumn(); 
        break; 
      case 1: 
        customIndex[2] = 0; 
        searchColumn(); 
        break; 
    } 
    this.setData({ 
      onlyArray: onlyArray, 
      customIndex: customIndex 
    }); 
  }, 
  
 
//获取申请人姓名 
inputName:function(e){ 
  this.setData({ 
    inputName:e.detail.value 
  }) 
}, 
//获取申请单位名字 
inputUnit:function(e){ 
  this.setData({ 
    inputUnit:e.detail.value 
  }) 
}, 
//获取联系电话号码 
inputPhone:function(e){ 
  this.setData({ 
    inputPhone:e.detail.value 
  }) 
}, 
 
//开始、结束时间 
  TimeChange1:function(e) { 
    this.setData({ 
      time1: e.detail.value 
    }) 
  }, 
  TimeChange2:function(e) { 
    this.setData({ 
      time2: e.detail.value 
    }) 
  }, 
  //日期改变 
  DateChange:function(e) { 
    this.setData({ 
      date: e.detail.value 
    }) 
  }, 
 
// 点击下拉显示框 
  selectTap() { 
    this.setData({ 
      selectShow: !this.data.selectShow 
    }); 
  }, 
  // 点击下拉列表 
  optionTap(e) { 
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标 
    this.setData({ 
      index: Index, 
      selectShow: !this.data.selectShow 
    }); 
  }, 
 
  //开关switch样式点击事件 
 switchChange: function (e){ 
  console.log('您对多媒体选择 ', e.detail.value); 
  this.setData({ 
    switchChecked: e.detail.value 
  }) 
  }, 
 
  //申请事由内容 
  textareaAInput:function(e) { 
    this.setData({ 
      textareaAValue: e.detail.value 
    }) 
  }, 
  //备注内容 
  textareaBInput:function(e) { 
    this.setData({ 
      textareaBValue: e.detail.value 
    }) 
  }, 
 
//显示modal 
  showModal(e) { 
    this.setData({ 
      modalName:e.currentTarget.dataset.target 
    }) 
  }, 
  //隐藏modal 
  hideModal(e) { 
    this.setData({ 
      modalName: null, 
    }) 
  }, 
 
//提交按钮事件 
submit: function (e) { 
  var that=this 
 
  var customArray = this.data.customArray, 
      customIndex = this.data.customIndex, 
      onlyArray = this.data.onlyArray; 
 
  var inputName=this.data.inputName 
  var inputUnit=this.data.inputUnit 
  var inputPhone=this.data.inputPhone 
  var time1=this.data.time1 
  var time2=this.data.time2 
  var date=this.data.date  
  var index=this.data.index 
  var switchChecked=this.data.switchChecked   
  var textareaAValue=this.data.textareaAValue 
  var textareaBValue=this.data.textareaBValue 
   
  wx.request({ 
    url: 'http://ydkfbw.natappfree.cc/student/addStudent',//后端网址 
    data: { 
      name:inputName, 
      unit:inputUnit, 
      phone:inputPhone, 
      time1:time1, 
      time2:time2, 
      date:date, 
      index:index, 
      customArray:customArray, 
      onlyArray:onlyArray, 
      customIndex:customIndex, 
      switch:switchChecked, 
      taA:textareaAValue, 
      taB:textareaBValue 
    }, 
    method: 'GET', 
    header: { 
      'content-type': 'application/json' // 默认值 
    }, 
    success: function (res) { 
      console.log(res.data + "成功") 
      //后台返回数据 
      that.setData({ 
        result:res.data 
      }) 
    }, 
    fail: function (res) { 
      console.log("失败"); 
    } 
  }) 
}, 
 
}) 