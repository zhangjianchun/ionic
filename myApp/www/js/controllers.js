angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$ionicSlideBoxDelegate,$timeout,$interval,$http,$ionicScrollDelegate,$ionicPlatform) {
 $scope.placeholder = '服饰家装爆款9.9元起'
 $scope.doRefresh = function() {
        $http.get('./')  
        .success(function() { })//处理响应成功
        .error(function(){})//处理响应失败 
        .finally(function() {
          if($scope.placeholder == '服饰家装爆款9.9元起'){$scope.placeholder = '全场家电8折起';}else
          if($scope.placeholder == '全场家电8折起'){$scope.placeholder = '秋冬进补好吃材';}else
          if($scope.placeholder == '秋冬进补好吃材'){$scope.placeholder = '购物满就送大礼包';}else
          if($scope.placeholder == '购物满就送大礼包'){$scope.placeholder = '服饰家装爆款9.9元起';}
          //处理响应完成
          $scope.$broadcast('scroll.refreshComplete');
        });
      };
    // 轮播图                           
    // $ionicView.beforeEnter 进入页面触发 $timeout 定时3秒后 触发轮播
    $scope.$on('$ionicView.beforeEnter', function() {  
      $timeout(function () {$ionicSlideBoxDelegate.next();
      }, 3000);
    });   
    
    $scope.imgs=[
    {img:'./img/1.jpg',url:'#'},
    {img:'./img/2.jpg',url:'#'},
    {img:'./img/3.jpg',url:'#'},
    {img:'./img/4.jpg',url:'#'}
    ];

    $scope.huotun1=[
    {url:'#',img:'./img/大聚惠.png',text:'大聚惠'},
    {url:'#',img:'./img/超市.png',text:'超市'},
    {url:'#',img:'./img/服装城.png',text:'服装城'},
    {url:'#',img:'./img/母婴.png',text:'母婴'},
    {url:'#',img:'./img/领云钻.png',text:'珠宝'},
    ];
    $scope.huotun2=[
    {url:'#',img:'./img/分类.png',text:'分类'},
    {url:'#',img:'./img/拼购.png',text:'拼购'},
    {url:'#',img:'./img/身边.png',text:'身边'},
    {url:'#',img:'./img/优惠券.png',text:'优惠券'},
    {url:'#',img:'./img/赚钱.png',text:'赚钱'},
    ];
    // 向上滚动新闻
    $scope.cxhd="今日头条";
    $scope.cxhds=[
    {url1:'#',iocn1:'',text1:'三星 8S手机 超大内存 4K高清',
    url2:'#',iocn2:'',text2:'海信发布 8K超高清彩电'},
    {url1:'#',iocn1:'',text1:'格力空调 3P柜机 ￥4999',
    url2:'#',iocn2:'',text2:'苹果 iphone7 最新上市'},
    {url1:'#',iocn1:'',text1:'小米24核 8S手机 超长续航',
    url2:'#',iocn2:'',text2:'华为 8S手机 双卡双待'},
    {url1:'#',iocn1:'',text1:'小米手机真的不如华为吗？',
    url2:'#',iocn2:'',text2:'尼康相机 PK 佳能相机  '},
    {url1:'#',iocn1:'',text1:'美的空调 大1P 冷暖变频 ￥1399',
    url2:'#',iocn2:'',text2:'松下冰箱 风冷无霜 ￥999'},
    {url1:'#',iocn1:'',text1:'三星 8S手机 超大内存 4K高清',
    url2:'#',iocn2:'',text2:'海信发布 8K超高清彩电'},
    {url1:'#',iocn1:'',text1:'格力空调 3P柜机 ￥4999',
    url2:'#',iocn2:'',text2:'苹果 iphone7 最新上市'},
    {url1:'#',iocn1:'',text1:'小米24核 8S手机 超长续航',
    url2:'#',iocn2:'',text2:'华为 8S手机 双卡双待'},
    {url1:'#',iocn1:'',text1:'小米手机真的不如华为吗？',
    url2:'#',iocn2:'',text2:'尼康相机 PK 佳能相机  '},
    {url1:'#',iocn1:'',text1:'美的空调 大1P 冷暖变频 ￥1399',
    url2:'#',iocn2:'',text2:'松下冰箱 风冷无霜 ￥999'}

    ];

    // 秒杀倒计时
    $scope.new = new Date('2016/9/30,00:00:00');
    $scope.myplaynew='活动结束';
    var time = null;
    var xhr = null;
    if(window.XMLHttpRequest){
      xhr = new window.XMLHttpRequest();
    }else{ // ie
      xhr = new ActiveObject("Microsoft")
    }
     // 通过get的方式请求当前文件
     xhr.open("get","http://www.runoob.com/try/demo_source/item.json");
     xhr.send(null);
    // 监听请求状态变化
    xhr.onreadystatechange = function(){
     if(xhr.readyState===2){
        // 获取响应头里的时间戳
       time = xhr.getResponseHeader("Date");
      }
    }
    $timeout(function () {
      if(time){
        $scope.news=Date.parse(time)+1000;
      }else{
        $scope.news=Date.parse(new Date());
      }
      $interval(function () {
        $scope.news+=1000
        $scope.mynew=new Date($scope.news).getHours();
        switch($scope.mynew)
        {
        case 0: case 1: case 2: case 3: case 4: case 5: case 5: case 7: case 8:
        $scope.new = new Date("2016/9/30,1:00:00") - $scope.news; //9:00:00
        $scope.myplaynew='9点开抢';
         break;
        case 9: case 10: case 11:
        $scope.new = new Date("2017/8/01,4:00:00") - $scope.news; //12:00:00
        $scope.myplaynew='9点专场';
        break;
        case 12: case 13: case 14:
        $scope.new = new Date("2017/8/01,7:00:00") - $scope.news; //15:00:00
        $scope.myplaynew='12点专场';
        break;
        case 15: case 16: case 17:
        $scope.new = new Date("2017/8/01,10:00:00") - $scope.news; //18:00:00
        $scope.myplaynew='15点专场';
        break;
        case 18: case 19: case 20:
        $scope.new = new Date("2017/8/01,13:00:00") - $scope.news; //21:00:00
        $scope.myplaynew='18点专场';
        break;
        default:
        $scope.new = new Date("2016/9/30,16:00:00") - $scope.news; //00:00:00
        $scope.myplaynew='21点专场';
      }
    },1000);
    },1000);
    // 左右滚动条
    $scope.scroll=[
    {url:'#',img:'./img/ff.png',cx:9,yj:38.00},
    {url:'#',img:'./img/ff1.png',cx:6,yj:18},
    {url:'#',img:'./img/ff2.png',cx:12.8,yj:36},
    {url:'#',img:'./img/ff3.jpg',cx:199,yj:399},
    {url:'#',img:'./img/ff6.jpg',cx:99,yj:199},
    {url:'#',img:'./img/ff7.jpg',cx:69,yj:99},
    {url:'#',img:'./img/ff4.jpg',cx:999,yj:1399},
    {url:'#',img:'./img/ff5.png',cx:34,yj:68},
    {url:'#',img:'./img/ff2.png',cx:12.8,yj:36},
    {url:'#',img:'./img/ff6.jpg',cx:99,yj:199},
    {url:'#',img:'./img/ff7.jpg',cx:69,yj:99},
    {url:'#',img:'./img/ff8.jpg',cx:99,yj:139}
    ];
   $scope.scrollfalse=function(){
    $scope.scrollnone='none';
  };
  $scope.scrolltrue=function(){
    $scope.scrollnone='block';
  };
   // 各种 热销品 好享购 高品质 图片
  $scope.df={z1:'./img/zy.jpg',zz41:'./img/zz4 (1).jpg',zz42:'./img/zz4 (2).jpg',zz43:'./img/zz4 (3).jpg',
  zz51:'./img/zz5 (1).jpg',zz52:'./img/zz5 (2).jpg',zz53:'./img/zz5 (3).jpg',zz54:'./img/zz5 (4).jpg',zz55:'./img/zz5 (5).jpg',
  zz44:'./img/zz4 (4).jpg',z2:'./img/qf.jpg',z31:'./img/z3 (1).jpg',z32:'./img/z3 (2).jpg',
  z33:'./img/z3 (3).jpg',h:'./img/h.png',w:'./img/w.png',z41:'./img/z4 (1).jpg',z42:'./img/z4 (2).jpg',
  w1:'./img/w1.jpg',w21:'./img/w2 (1).png',w22:'./img/w2 (2).png',
        w41:'./img/w4 (1).png',w42:'./img/w4 (2).png',w43:'./img/w4 (3).png',w44:'./img/w4 (4).png',
        w45:'./img/w4 (5).png',w46:'./img/w4 (6).png',w47:'./img/w4 (7).png',w48:'./img/w4 (8).png',
  };
  // 中间轮播
    $scope.imgx=[
    {img:'./img/hh1.jpg',url:'#'},
    {img:'./img/hh2.jpg',url:'#'},
    {img:'./img/hh3.jpg',url:'#'}
    ];
  $scope.flg=[
  {img1:'./img/flg (6).jpg',p1:'美的(Midea)WH517E2g 外塑内钢 双层保温 防烫 1.7L 无缝内胆 电热水瓶 电水壶 蓝色',s$1:'￥99.00',img2:'./img/flg (5).jpg',p2:'清风淡绿花抽纸 柔韧2层200抽*20包纸巾 整箱售卖',s$2:'￥19.00'},
  {img1:'./img/flg (4).jpg',p1:'德尔玛（Deerma） DEM-F470 3.5L 静音 迷你创意 加湿器 （蓝色）',s$1:'￥69.00',img2:'./img/flg (3).jpg',p2:'海信（Hisense）LED50EC520UA 50英寸 14核配置 炫彩4K VIDAA3智能液晶平板电视',s$2:'￥1999.00'},
  {img1:'./img/flg (2).jpg',p1:'雷士浴霸 吊顶灯暖卫浴霸 取暖换气照明三合一多功能卫浴照明',s$1:'￥199.00',img2:'./img/flg (1).jpg',p2:'香奈儿 /CHANEL 粉色邂逅柔情女士持久淡香水 35ML 法国进口',s$2:'￥168.00'},
  {img1:'./img/flg (6).jpg',p1:'美的(Midea)WH517E2g 外塑内钢 双层保温 防烫 1.7L 无缝内胆 电热水瓶 电水壶 蓝色',s$1:'￥99.00',img2:'./img/flg (5).jpg',p2:'清风淡绿花抽纸 柔韧2层200抽*20包纸巾 整箱售卖',s$2:'￥19.00'},
  {img1:'./img/flg (4).jpg',p1:'德尔玛（Deerma） DEM-F470 3.5L 静音 迷你创意 加湿器 （蓝色）',s$1:'￥69.00',img2:'./img/flg (3).jpg',p2:'海信（Hisense）LED50EC520UA 50英寸 14核配置 炫彩4K VIDAA3智能液晶平板电视',s$2:'￥1999.00'},
  {img1:'./img/flg (2).jpg',p1:'雷士浴霸 吊顶灯暖卫浴霸 取暖换气照明三合一多功能卫浴照明',s$1:'￥199.00',img2:'./img/flg (1).jpg',p2:'香奈儿 /CHANEL 粉色邂逅柔情女士持久淡香水 35ML 法国进口',s$2:'￥168.00'}
  ];
   $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop(true);
  };
    $scope.topup = document.getElementById("content").scrollTop < 800;
  $scope.stop=function(){
  $timeout(function () {
    $scope.topup = document.getElementById("content").scrollTop < 800;
      }, 2000);
  }   

}) 


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('FavoriteCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('CartCtrl', function($scope) {
  $scope.settings = {
    enableFriends: 0
  };
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: 0
  };
});
