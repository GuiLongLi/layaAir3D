var AssetLoadView = (function(_super){
    function AssetLoadView(){
        AssetLoadView.super(this);
    }
    Laya.class(AssetLoadView,'AssetLoadView',_super);
    //初始化，進度條计时
    AssetLoadView.prototype.init = function(){
        this.progress = 0;
        //进度条增加的帧循环
        Laya.timer.loop(20,this,this.onLoop);
    }
    AssetLoadView.prototype.onLoop = function(){
        //进度增加
        this.progress++;
        //最高100%进度
        if(this.progress > 100){
            this.progress = 100;
            this.tips.text = '游戏加载完毕，即将进入游戏';
            Laya.timer.clearAll(this);
            this.removeSelf();
        }
        else{
            this.pro.width = Laya.Browser.width;
            this.pro.value = this.progress/100;
            this.tips.text = '游戏正在加载中，当前进度为：'+this.progress+'%!';
        }
    }
    return AssetLoadView;
})(ui.ProgressBarUI);
