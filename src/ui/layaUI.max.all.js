var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}
		GameUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"comp/back.png"}},{"type":"Box","props":{"y":195,"x":158,"name":"item0"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-01.png"}}]},{"type":"Box","props":{"y":193,"x":345,"name":"item1"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-02.png"}}]},{"type":"Box","props":{"y":192,"x":507,"name":"item2"},"child":[{"type":"Image","props":{"y":8,"x":40,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":21,"x":40,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":90,"x":34,"width":138,"skin":"comp/mask-03.png","height":46}}]},{"type":"Box","props":{"y":285,"x":131,"name":"item3"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":4,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-04.png"}}]},{"type":"Box","props":{"y":286,"x":346,"name":"item4"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-05.png"}}]},{"type":"Box","props":{"y":284,"x":546,"name":"item5"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-06.png"}}]},{"type":"Box","props":{"y":383,"x":123,"name":"item6"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-07.png"}}]},{"type":"Box","props":{"y":388,"x":347,"name":"item7"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":4,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-08.png"}}]},{"type":"Box","props":{"y":389,"x":567,"name":"item8"},"child":[{"type":"Image","props":{"y":2,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":6,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"comp/mask-09.png"}}]}]};
		return GameUI;
	})(View);