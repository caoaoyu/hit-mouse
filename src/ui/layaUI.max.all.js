var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.timeBar=null;
		    this.scoreNumber=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}
		GameUI.uiView={"type":"View","props":{"x":0,"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"comp/back.png"}},{"type":"Box","props":{"y":195,"x":158,"name":"item0"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-01.png"}},{"type":"Text","props":{"y":9,"x":22,"width":74,"text":"+10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreText","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#ee650b","bold":true,"align":"center"}},{"type":"Text","props":{"y":8,"x":26,"width":74,"text":"-10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreLost","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#c1200a","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":193,"x":345,"name":"item1"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-02.png"}},{"type":"Text","props":{"y":7,"x":27,"width":74,"text":"+10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreText","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#ee650b","bold":true,"align":"center"}},{"type":"Text","props":{"y":7,"x":31,"width":74,"text":"-10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreLost","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#c1200a","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":192,"x":507,"name":"item2"},"child":[{"type":"Image","props":{"y":8,"x":40,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":21,"x":40,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":90,"x":34,"width":138,"skin":"comp/mask-03.png","height":46}},{"type":"Text","props":{"y":7,"x":64,"width":74,"text":"+10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreText","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#ee650b","bold":true,"align":"center"}},{"type":"Text","props":{"y":7,"x":68,"width":74,"text":"-10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreLost","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#c1200a","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":285,"x":131,"name":"item3"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":4,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-04.png"}},{"type":"Text","props":{"y":13,"x":21,"width":74,"text":"+10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreText","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#ee650b","bold":true,"align":"center"}},{"type":"Text","props":{"y":12,"x":26,"width":74,"text":"-10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreLost","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#c1200a","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":286,"x":346,"name":"item4"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-05.png"}},{"type":"Text","props":{"y":6,"x":29,"width":74,"text":"+10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreText","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#ee650b","bold":true,"align":"center"}},{"type":"Text","props":{"y":5,"x":34,"width":74,"text":"-10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreLost","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#c1200a","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":284,"x":546,"name":"item5"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-06.png"}},{"type":"Text","props":{"y":5,"x":22,"width":74,"text":"+10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreText","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#ee650b","bold":true,"align":"center"}},{"type":"Text","props":{"y":5,"x":27,"width":74,"text":"-10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreLost","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#c1200a","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":383,"x":123,"name":"item6"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-07.png"}},{"type":"Text","props":{"y":-6,"x":24,"width":74,"text":"+10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreText","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#ee650b","bold":true,"align":"center"}},{"type":"Text","props":{"y":-6,"x":29,"width":74,"text":"-10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreLost","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#c1200a","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":388,"x":347,"name":"item7"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":4,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-08.png"}},{"type":"Text","props":{"y":1,"x":17,"width":74,"text":"+10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreText","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#ee650b","bold":true,"align":"center"}},{"type":"Text","props":{"y":1,"x":22,"width":74,"text":"-10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreLost","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#c1200a","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":389,"x":567,"name":"item8"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":6,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-09.png"}},{"type":"Text","props":{"y":8,"x":25,"width":74,"text":"+10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreText","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#ee650b","bold":true,"align":"center"}},{"type":"Text","props":{"y":8,"x":29,"width":74,"text":"-10","strokeColor":"#e32622","stroke":1,"pivotY":0.5,"pivotX":0.5,"name":"scoreLost","italic":true,"height":38,"fontSize":36,"font":"Helvetica","color":"#c1200a","bold":true,"align":"center"}}]},{"type":"ProgressBar","props":{"y":7,"x":4,"var":"timeBar","value":0.1,"skin":"comp/progress_time.png","sizeGrid":"1"}},{"type":"Box","props":{"y":40,"x":52,"visible":true,"var":"scoreNumber"},"child":[{"type":"Clip","props":{"visible":false,"skin":"comp/clip_number.png","name":"item0","index":0,"clipX":10}},{"type":"Clip","props":{"x":18,"visible":false,"skin":"comp/clip_number.png","name":"item1","index":0,"clipX":10}},{"type":"Clip","props":{"x":36,"visible":false,"skin":"comp/clip_number.png","name":"item2","index":0,"clipX":10}},{"type":"Clip","props":{"x":54,"visible":false,"skin":"comp/clip_number.png","name":"item3","index":0,"clipX":10}},{"type":"Clip","props":{"x":72,"visible":false,"skin":"comp/clip_number.png","name":"item4","index":0,"clipX":10}},{"type":"Clip","props":{"x":90,"visible":false,"skin":"comp/clip_number.png","name":"item5","index":0,"clipX":10}},{"type":"Clip","props":{"x":108,"visible":false,"skin":"comp/clip_number.png","name":"item6","index":0,"clipX":10}},{"type":"Clip","props":{"x":126,"visible":false,"skin":"comp/clip_number.png","name":"item7","index":0,"clipX":10}},{"type":"Clip","props":{"x":144,"visible":false,"skin":"comp/clip_number.png","name":"item8","index":0,"clipX":10}},{"type":"Clip","props":{"x":162,"visible":false,"skin":"comp/clip_number.png","name":"item9","index":0,"clipX":10}}]}]};
		return GameUI;
	})(View);
var GameOverUI=(function(_super){
		function GameOverUI(){
			
		    this.againBtn=null;
		    this.scoreOver=null;

			GameOverUI.__super.call(this);
		}

		CLASS$(GameOverUI,'ui.GameOverUI',_super);
		var __proto__=GameOverUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverUI.uiView);
		}
		GameOverUI.uiView={"type":"View","props":{"width":400,"height":300},"child":[{"type":"Image","props":{"y":0,"x":0,"width":400,"skin":"comp/overBg.png","sizeGrid":"15,15,15,15","height":300}},{"type":"Image","props":{"y":12,"x":6,"skin":"comp/total Score.png"}},{"type":"Button","props":{"y":193,"x":112,"var":"againBtn","stateNum":2,"skin":"comp/btn_restart.png"}},{"type":"Box","props":{"y":108,"x":40,"visible":true,"var":"scoreOver"},"child":[{"type":"Clip","props":{"width":25,"visible":false,"skin":"comp/clip_number.png","name":"item0","height":51,"clipX":10}},{"type":"Clip","props":{"x":33,"width":25,"visible":false,"skin":"comp/clip_number.png","name":"item1","height":51,"clipX":10}},{"type":"Clip","props":{"x":66,"width":25,"visible":false,"skin":"comp/clip_number.png","name":"item2","height":51,"clipX":10}},{"type":"Clip","props":{"x":99,"width":25,"visible":false,"skin":"comp/clip_number.png","name":"item3","height":51,"clipX":10}},{"type":"Clip","props":{"x":132,"width":25,"visible":false,"skin":"comp/clip_number.png","name":"item4","height":51,"clipX":10}},{"type":"Clip","props":{"x":165,"width":25,"visible":false,"skin":"comp/clip_number.png","name":"item5","height":51,"clipX":10}},{"type":"Clip","props":{"x":198,"width":25,"visible":false,"skin":"comp/clip_number.png","name":"item6","height":51,"clipX":10}},{"type":"Clip","props":{"x":231,"width":25,"visible":false,"skin":"comp/clip_number.png","name":"item7","height":51,"clipX":10}},{"type":"Clip","props":{"x":264,"width":25,"visible":false,"skin":"comp/clip_number.png","name":"item8","height":51,"clipX":10}},{"type":"Clip","props":{"x":297,"width":25,"visible":false,"skin":"comp/clip_number.png","name":"item9","height":51,"clipX":10}}]}]};
		return GameOverUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.startBtn=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);
		}
		GameStartUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55,"x":38,"skin":"comp/help.png"}},{"type":"Button","props":{"y":424,"x":287,"var":"startBtn","stateNum":2,"skin":"comp/btn_start.png"}}]};
		return GameStartUI;
	})(View);
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);
		}
		HammerUI.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":62,"x":63,"width":98,"skin":"comp/hammer.png","rotation":-20,"pivotY":52,"pivotX":58,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"rotation":[{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
		return HammerUI;
	})(View);