var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var ProgressBarUI=(function(_super){
		function ProgressBarUI(){
			
		    this.tips=null;
		    this.pro=null;
		    this.loadTitle=null;

			ProgressBarUI.__super.call(this);
		}

		CLASS$(ProgressBarUI,'ui.ProgressBarUI',_super);
		var __proto__=ProgressBarUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ProgressBarUI.uiView);

		}

		ProgressBarUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Text","props":{"y":50,"x":285,"var":"tips","text":"text","name":"tips","fontSize":30,"align":"center"}},{"type":"ProgressBar","props":{"y":150,"width":600,"var":"pro","value":0.5,"skin":"comp/progress.png","name":"pro","height":40}},{"type":"Text","props":{"y":0,"x":0,"var":"loadTitle","text":"text","name":"loadTitle","fontSize":50,"color":"#f40400","align":"center"}}]};
		return ProgressBarUI;
	})(View);