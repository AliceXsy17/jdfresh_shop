;(function(){
    var $jd_lift = $(".jd_lift")
    //页面初始化时轮播图1生效    
    window.onload = function() {
        var jd_carousel2 = null;
        var jd_carousel1 = new Carousel(1, 800, 4, true);
            jd_carousel1.init();
    };
     window.onscroll = function() {
      var container1 = document.getElementById("jd_carousel1");
      var container2 = document.getElementById("jd_carousel2");
      var container3 = document.getElementById("jd_carousel3");          
      var distance1 = parseInt(container1.getBoundingClientRect().top);
      var distance2 = parseInt(container2.getBoundingClientRect().top);
      var distance3 = parseInt(container3.getBoundingClientRect().top);
      var windowHeight =  window.innerHeight;
      //轮播图1生效，取消轮播图2，避免互相干扰   
      if(distance1 < 200 && distance1 > -windowHeight){
              jd_carousel2 = null;
              var jd_carousel1 = new Carousel(1, 800, 4, true, true);
              jd_carousel1.init();
         };
       //轮播图2生效，取消轮播图1，避免互相干扰                     
          if(distance2 < windowHeight && distance2 > 175){
             jd_carousel1 = null;
             var jd_carousel2 = new Carousel(2, 790, 3, false, false);
               jd_carousel2.init();            
          }; // if 
      //底部轮播图生效，取消轮播图2，避免互相干扰
      if(distance3 < 498 && distance3 > 160){
        jd_carousel1 = null;
        var jd_carousel6 = new Carousel(6, 1190, 6, true, true);
          jd_carousel6.init();            
     }; // if  
     
     //楼层效果
     var scrollTop = document.documentElement.scrollTop || this.document.body.scrollTop;
     //console.log(scrollTop);
     if(scrollTop>=200) {
        $jd_lift.css("display","block");
     }else{
        $(".jd_lift").css("display","none");  
     }
     };//scroll

  //点播楼层滚动到响应楼层     
  $jd_lift.click(function(e){
      $(".jd_lift>div").removeClass("lift_active");
    var item = $(e.target);
    var pos = item.attr("data-position");
    item.addClass("lift_active");
    switch(pos) {
        case "ts":
        window.scrollTo(0,723);
        break;
        case "sl":
        window.scrollTo(0,2068);
        break;
        case "jd":
        window.scrollTo(0,2740);
        break;
        case "sx":
        window.scrollTo(0,5822);
        break;
        case "kf":
        window.scrollTo(0,0);
        break;
        case "gc":
        window.scrollTo(0,0);
        break;
        case "db":
        window.scrollTo(0,0);
        break;                                     
    }
  });
 //轮播图结束
(function (nums){
	//建立轮播图对象数组
	var jd_carousels = [];
    for(var i = 0; i<nums.length; i++){
        (function(a){
        	var choice = $(`[data-toggle=choice${nums[a]}]`);
            choice.click(function(){
                choice.addClass("card_active");
                var target = choice.attr("data-target");
                var target_box = document.getElementById(`${target }`);
                target_box.style.display = "block";
                //点击选项卡时创建相应的轮播图对象
                jd_carousels[a] = new Carousel(nums[a]+1, 790, 3, false, false);
                jd_carousels[a].init();
                var nums2 = JSON.parse(JSON.stringify(nums))
                nums2.splice(a,1);
                for(var j = 0; j< nums2.length; j++){
                	var choice2 = $(`[data-toggle=choice${nums2[j]}]`);
                	var target2 = choice2.attr("data-target");
                	var target_box2 = document.getElementById(`${target2}`);
                    if(choice2.hasClass("card_active")){
                        choice2.removeClass("card_active");
                        target_box2.style.display = "none";
                        //未点中时取消轮播图对象，避免多个轮播图造成冲突
                        jd_carousels[j] = null;
                 };
                }
            });
        })(i)

    }
})([1,2,3,4]);

//选项卡结束


})();

        function go1() {
            location.href = "https://www.baidu.com";
        };
        function go2() {
            location.href = "http://www.tmooc.cn/";
        };
        function go3() {
            location.href = "http://www.yangliyang.com/";
        };



