//骨骼挂点
//初始化
Laya3D.init(Laya.Browser.width,Laya.Browser.height,true);
Laya.stage.scaleMode = Laya.stage.SCALE_FULL;
Laya.stage.scaleMode = Laya.stage.SCREEN_NONE;
var scene = Laya.stage.addChild(new Laya.Scene());
//摄像机
var camera = scene.addChild(new Laya.Camera(0,0.1,100));
camera.transform.translate(new Laya.Vector3(0,.5,1));
camera.transform.rotate(new Laya.Vector3(0,0,0));
//平行光
var light = scene.addChild(new Laya.DirectionLight());
light.ambientColor = new Laya.Vector3(.6,.6,.6);
light.specularColor = new Laya.Vector3(.6,.6,.6); //增加高光
light.diffuseColor = new Laya.Vector3(1,1,1);
light.direction = new Laya.Vector3(5,-1,-10);
//模型
Laya.loader.create('h5/threeDimen/skinModel/LayaMonkey/LayaMonkey.lh',Laya.Handler.create(this,onLoaded,[scene]),this,null,Laya.Sprite3D);
function onLoaded(scene){
    var monkey = Laya.loader.getRes('h5/threeDimen/skinModel/LayaMonkey/LayaMonkey.lh');
    scene.addChild(monkey);
    monkey.addComponent('BoneLinkControllerScript');
    var ani = monkey.getChildAt(0).getComponentByType(Laya.Animator);
    var clip = ani.clip;
    ani.addClip(clip,'attack',70,113);
    ani.play('attack');
    var children = monkey.getChildByName('LayaMonkey');
    console.log(children);
    //物品挂点
    var box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(.5,.5,0.5)));
    ani.linkSprite3DToAvatarNode('Bip001 R Hand',box);
}