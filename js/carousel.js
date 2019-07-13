//ES5版面向对象
	function Carousel(id,width,length,is_auto, is_show) {
  this.container = document.querySelector(`[data-container=carousel${id}]`);
  this.carou = document.querySelector(`[data-inner=carousel_inner${id}]`);
  this.left = document.querySelector(`[data-left=left${id}]`);
  this.right = document.querySelector(`[data-right=right${id}]`);
  this.dots = document.querySelectorAll(`[data-choice=panel${id}]`);
  this.timer;
  this.index = 0;
  this.width = width;
  this.length = length;
  this.is_auto = is_auto;
  this.is_show = is_show;
  var that = this;
  this.container.onmouseover = function(){
    that.timer && clearInterval(that.timer);
	};
	this.container.onmouseout = function(){
    that.is_auto && that.auto();   
	};
	window.onload = function(){
    that.is_auto && that.auto();   
	  that.is_show && that._showClass();
	};
	this.left.onclick = function() {
     that.prev();
  };
     this.right.onclick = function() {
	  that.next();
	}
  };
  Carousel.prototype.init = function() {
    this.choose();
  };
  //重新设置位置
   Carousel.prototype._setPosition = function (step){
   this.carou.style.left = `${this.carou.offsetLeft+step}px`;
	}
  //重新设置样式
  Carousel.prototype._showClass = function() {
	  for(var i = 0; i < this.dots.length; i++){
		  this.dots[i].className = "";
	  };
        this.dots[this.index].className = "active";
  };
  //点击轮播
  Carousel.prototype.choose = function() {
    for(var i = 0; i< this.dots.length; i++){
		that = this;
	  (function(j){
		  that.dots[j].onclick = function(){
			  that.carou.style.left = -that.width*j + 'px';
			  that.index = j;
			  that.is_show && that._showClass();
		  }
	  })(i);
  };
  };
  //自动轮播
  Carousel.prototype.auto = function() {
  this.timer = setInterval(function(){
		 if(that.carou.offsetLeft>-that.width*(that.length-1)){
		   that._setPosition(-that.width);
		   that.index++;
		   that.is_show && that._showClass();
		 }else{
           that.carou.style.left = 0;
		   that.index = 0;
		   that.is_show && that._showClass();
		 }
		 
     }, 3000);
  };
  //上一张
  Carousel.prototype.prev = function() {
   if(this.carou.offsetLeft === 0) {
	   this.carou.style.left = -this.width*(this.length-1)+'px';
	   this.index = this.length-1;
   } else {
	   this._setPosition(this.width);;
	   this.index--;
   };
   this.is_show && this._showClass();
  };
  //下一张
  Carousel.prototype.next = function() {
   if(this.carou.offsetLeft>-this.width*(this.length-1)) {
	   this._setPosition(-this.width);
	   this.index++;
   } else {
	   this.carou.style.left = 0;
	   this.index = 0;
   };
   this.is_show && this._showClass();
  };