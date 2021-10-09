//index.js
//获取应用实例
const app = getApp()
var numarr1=[0,0,0,0,0,0];
Page({
  data: {
    one_img:'../../image/6.png',
    two_img: '../../image/6.png',
    three_img: '../../image/6.png',
    four_img: '../../image/6.png',
    five_img: '../../image/6.png',
    six_img: '../../image/6.png',
    flag:true,
    timer:null,
    msg:'摇一摇',
    msg2:'返回',
    total:0,
    txt:'开始你的回合吧',

    arr:[
      '../../image/1.png',
      '../../image/2.png',
      '../../image/3.png',
      '../../image/4.png',
      '../../image/5.png',
      '../../image/6.png',
    ]
 
  },
  enter1:function(event){
    let obj = this;
    if(obj.data.flag==true){
       obj.data.timer = setInterval(function () {
        let one = Math.floor(Math.random() * 6);
        let two = Math.floor(Math.random() * 6);
        let three = Math.floor(Math.random() * 6);
        let four = Math.floor(Math.random() * 6);
        let five = Math.floor(Math.random() * 6);
        let six = Math.floor(Math.random() * 6);
        obj.setData({
          one_img: obj.data.arr[one],
          two_img: obj.data.arr[two],
          three_img: obj.data.arr[three],
          four_img: obj.data.arr[four],
          five_img: obj.data.arr[five],
          six_img: obj.data.arr[six],
          flag:false,
          msg:'停止',
          txt:'',
          numarr2:[one,two,three,four,five,six],
        })
      }, 50);

    }else{
      clearInterval(obj.data.timer);
      obj.setData({
           msg:'摇一摇',
           flag:true,
      })
      for(var i=0;i<6;i++){
        numarr1[obj.data.numarr2[i]]=numarr1[obj.data.numarr2[i]]+1;
      }
      if(numarr1[3]==4 && numarr1[0]==2){
        obj.setData({
          txt:'您获得状元（状元插金花）',
        })
      }else if(numarr1[3]==6){
        obj.setData({
          txt:'您获得状元（六杯红）',
        })
      }else if(numarr1[0]==6 || numarr1[1]==6 || numarr1[2]==6 || numarr1[4]==6 || numarr1[5]==6){
        obj.setData({
          txt:'您获得状元（六杯黑）',
        })
      }else if(numarr1[3]==5){
        obj.setData({
          txt:'您获得状元（五王）',
        })
      }else if((numarr1[0]==5 || numarr1[1]==5 || numarr1[2]==5 || numarr1[4]==5 || numarr1[5]==5)&&numarr1[3]==1){
        obj.setData({
          txt:'您获得状元（五子带一秀）',
        })
      }else if((numarr1[0]==5 || numarr1[1]==5 || numarr1[2]==5 || numarr1[4]==5 || numarr1[5]==5)){
        obj.setData({
          txt:'您获得状元（五子登科）',
        })
      }else if(numarr1[3]==4){
        obj.setData({
          txt:'您获得状元',
        })
      }else if(numarr1[0]==1 && numarr1[1]==1 && numarr1[2]==1 && numarr1[4]==1 && numarr1[5]==1 && numarr1[3]==1){
        obj.setData({
          txt:'您获得榜眼（对堂）',
        })
      }else if(numarr1[3]==3){
        obj.setData({
          txt:'您获得探花（三红）',
        })
      }else if((numarr1[0]==4 || numarr1[1]==4 || numarr1[2]==4 || numarr1[4]==4 || numarr1[5]==4)){
        obj.setData({
          txt:'您获得进士（四进）',
        })
      }else if(numarr1[3]==2){
        obj.setData({
          txt:'您获得举人（二举）',
        })
      }else if (numarr1[3]==1){
        obj.setData({
          txt:'您获得秀才（一秀）',
        })
      }else{
        obj.setData({
          txt:'很遗憾您未获奖',
        })
      }
      numarr1=[0,0,0,0,0,0];
 
      }
    
   
  },
  enter2:function(event){
    wx.navigateTo({
      url:'/pages/home/home',
    })
  }
  
})
  