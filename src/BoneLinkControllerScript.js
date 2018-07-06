var BoneLinkControllerScript = (function(_super){
    function BoneLinkControllerScript(){
        BoneLinkControllerScript.super(this);
    }
    Laya.class(BoneLinkControllerScript,'BoneLinkControllerScript',_super);
    BoneLinkControllerScript.prototype._start = function(own){
        console.log(own);
    }
    return BoneLinkControllerScript;
})(Laya.Script);