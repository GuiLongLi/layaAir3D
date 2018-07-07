var WeaponScript = (function(_super){
    function WeaponScript(){
        WeaponScript.super(this);
        //武器生命周期
        this.lifeTime = 100;
    }
    Laya.class(WeaponScript,'WeaponScript',_super);
    WeaponScript.prototype._load = function(owner){
        this.weapon = owner;
    }
    WeaponScript.prototype._update = function(state){
        //武器旋转更新
        this.weapon.transform.rotate(new Laya.Vector3(2,2,0),true,false);
        //武器移动更新
        this.weapon.transform.translate(new Laya.Vector3(0,0,0.2),false);
        //生命周期递减
        this.lifeTime--;
        if(this.lifeTime<0){
            this.lifeTime = 100;
            //直接销毁脚本绑定对象会报错，对象销毁后脚本还会更新一次，报找不到绑定对象错误
            //因此延迟一帧以销毁
            Laya.timer.frameOnce(1,this,function(){this.weapon.destroy();});
        }
    }
    return WeaponScript;
})(Laya.Script);