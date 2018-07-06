var BoxControlScript = (function(_super){
    function BoxControlScript(){
        BoxControlScript.super(this);
    }
    Laya.class(BoxControlScript,'BoxControlScript',_super);
    //3d对象加载组件时的执行方法
    //owner加载此组件的对象
    BoxControlScript.prototype._load = function(owner){
        console.log('_load');
        //获取脚本对象
        this.box = owner;
    }
    //覆写组件所属对象实例化后，第一更新执行的方法
    BoxControlScript.prototype._start = function(state){
        console.log('_start');
        //获取模型上的材质
        var material = this.box.meshRender.material;
        //修改材质的反射率颜色，让模型偏红
        material.albedo = new Laya.Vector4(1,0,0,1);
    }
    //覆写组件的更新方法（相当于帧循环）
    //state渲染状态
    BoxControlScript.prototype._update = function(state){
        console.log('_update');
        //所属脚本对象旋转更新
        this.box.transform.rotate(new Laya.Vector3(0,0.5,0),true,false);
    }
    return BoxControlScript;
})(Laya.Script);