// // //骨骼挂点
// // //初始化
// // Laya3D.init(Laya.Browser.width,Laya.Browser.height,true);
// // Laya.stage.scaleMode = Laya.stage.SCALE_FULL;
// // Laya.stage.scaleMode = Laya.stage.SCREEN_NONE;
// // var scene = Laya.stage.addChild(new Laya.Scene());
// // //摄像机
// // var camera = scene.addChild(new Laya.Camera(0,0.1,100));
// // camera.transform.translate(new Laya.Vector3(0,.5,1));
// // camera.transform.rotate(new Laya.Vector3(0,0,0));
// // //平行光
// // var light = scene.addChild(new Laya.DirectionLight());
// // light.ambientColor = new Laya.Vector3(.6,.6,.6);
// // light.specularColor = new Laya.Vector3(.6,.6,.6); //增加高光
// // light.diffuseColor = new Laya.Vector3(1,1,1);
// // light.direction = new Laya.Vector3(5,-1,-10);
// // //模型
// // Laya.loader.create('h5/threeDimen/skinModel/LayaMonkey/LayaMonkey.lh',Laya.Handler.create(this,onLoaded,[scene]),this,null,Laya.Sprite3D);
// // function onLoaded(scene){
// //     var monkey = Laya.loader.getRes('h5/threeDimen/skinModel/LayaMonkey/LayaMonkey.lh');
// //     scene.addChild(monkey);
// //     monkey.addComponent('BoneLinkControllerScript');
// //     var ani = monkey.getChildAt(0).getComponentByType(Laya.Animator);
// //     var clip = ani.clip;
// //     ani.addClip(clip,'attack',70,113);
// //     ani.play('attack');
// //     var children = monkey.getChildByName('LayaMonkey');
// //     console.log(children);
// //     //物品挂点
// //     var box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(.5,.5,0.5)));
// //     ani.linkSprite3DToAvatarNode('Bip001 R Hand',box);
// // }

// //骨骼挂点实例
// //初始化
// Laya3D.init(Laya.Browser.width,Laya.Browser.height,true);
// Laya.stage.scaleModel = Laya.stage.SCALE_FULL;
// Laya.stage.scaleModel = Laya.stage.SCREEN_NONE;
// Laya.Stat.show();
// this.weaponIsClone = false;
// //加载资源
// Laya.loader.create('LayaScene_monkey/monkey.ls',Laya.Handler.create(this,onComplete));
// function onComplete(){
//     //创建场景
//     this.scene = Laya.loader.getRes('LayaScene_monkey/monkey.ls');
//     Laya.stage.addChild(this.scene);
//     //获取模型
//     var monkey = this.scene.getChildByName('monkey');
//     //获取组件
//     this.monkeyAni = monkey.getComponentByType(Laya.Animator);
//     //获取骨骼
//     var handBip = monkey.getChildByName('RHand');
//     //获取武器模型
//     this.weapon = handBip.getChildByName('weapon');
//     //监听动画时间
//     this.monkeyAni.on(Laya.Event.COMPLETE,this,onAniComplete);
//     //帧循环，获取动画当前帧
//     Laya.timer.frameLoop(1,this,onFrame);
// }
// function onAniComplete(){
//     //动画播放完后武器显示
//     this.weapon.active = true;
//     //播放完后，设置为未克隆，下次克隆新武器
//     this.weaponIsClone = false;
// }
// //在攻击动画播放到一定帧时，克隆一个新武器特效
// function onFrame(){
//     //在35-37帧之间克隆一个飞出武器
//     //不能用==35帧方式，帧率不满时可能跳帧，导致克隆失败，后期版本将支持帧标签事件，可解决此问题
//     if(this.monkeyAni.currentFrameIndex >= 35 && this.monkeyAni.currentFrameIndex <= 37){
//         //确保在35-37之间只克隆一次
//         if(this.weaponIsClone) return;
//         //克隆新武器（模型，位置，矩阵等全部克隆）
//         var weaponClone = Laya.Sprite3D.instantiate(this.weapon);
//         //武器特效脚本
//         weaponClone.addComponent(WeaponScript);
//         //将武器放入场景中
//         this.scene.addChild(weaponClone);
//         //设置为已克隆
//         this.weaponIsClone = true;
//         //隐藏原始武器
//         this.weapon.active = false;
//     }
// }
