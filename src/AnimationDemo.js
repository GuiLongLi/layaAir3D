// //3d动画
// var LayaAir3D = (function(){
//     function LayaAir3D(){
//         //初始化
//         Laya3D.init(Laya.Browser.width,Laya.Browser.height,true);
//         // Laya.stage.bgColor = '#222';
//         //设配模式
//         Laya.stage.scaleMode = Laya.stage.SCALE_FULL;
//         Laya.stage.scaleMode = Laya.stage.SCREEN_NONE;
//         Laya.Stat.show();
//         Laya.loader.create('h5/threeDimen/skinModel/LayaMonkey/LayaMonkey.lh',Laya.Handler.create(this,onModelOK),null,Laya.Sprite3D);
        
//     }

//     function onModelOK(){
//         var scene = Laya.stage.addChild(new Laya.Scene());
//         // //摄像机
//         var camera = scene.addChild(new Laya.Camera(0,0.1,100));
//         camera.transform.translate(new Laya.Vector3(0,0.3,1));
//         camera.transform.rotate(new Laya.Vector3(0,0,0));
//         //移动脚本
//         // camera.addComponent(CameraMoveScript);
//         //灯光
//         var light = scene.addChild(new Laya.DirectionLight());
//         // light.position = new Laya.Vector3(10,10,10);
//         light.specularColor = new Laya.Vector3(.5,.5,.5);  //增加高光
//         light.ambientColor = new Laya.Vector3(.5,.5,.5);
//         light.diffuseColor = new Laya.Vector3(1,1,1);
//         light.direction = new Laya.Vector3(5,-1,-10);
//         //添加蒙皮动画角色模型
//         var role3D = Laya.Loader.getRes('h5/threeDimen/skinModel/LayaMonkey/LayaMonkey.lh');
//         scene.addChild(role3D);
//         //获取角色动作
//         ani = role3D.getChildByName('LayaMonkey').getComponentByType(Laya.Animator);
//         //加载一个动画文件创建动画剪辑（可以是已有的动画，也可以是此角色需增加的新动画文件）
//         // var clip = Laya.AnimationClip.load('h5/threeDimen/skinModel/LayaMonkey/Assets/LayaMonkey/LayaMonkey-Take_001.lani');
//         //从现有的动画中获取动画剪辑(根据.lani文件创建动画剪辑)
//         var clip = ani.clip;
//         console.log(clip);
//         //增加一个动画剪辑引用，从clip中的0-34帧创建名为stand的动画剪辑
//         ani.addClip(clip,'stand',0,34);
//         //增加一个动画剪辑引用，从clip中的40-70帧创建名为move的动画剪辑
//         ani.addClip(clip,'move',40,70);
//         //播放某个动画剪辑
//         ani.play('move');
//         Laya.stage.on(Laya.Event.MOUSE_DOWN,this,onMouseDown,[ani]);
//         trace('当前动画当前帧数为：'+ani.currentFrameIndex);
//         //可获取动画剪辑总数
//         trace('当前动画剪辑总数为：'+ani.getClipCount());        

//     }
//     function onMouseDown(ani){
//         ani.stop();
//         trace('当前动画当前帧数为：'+ani.currentFrameIndex);
//         ani.play('stand');
//         ani.on(Laya.Event.COMPLETE,this,onAniComplete,[ani]);
//     }
//     function onAniComplete(ani){
//         trace('当前动画当前onAniComplete帧数为：'+ani.currentFrameIndex);
//         ani.play('move');
//     }
//     return LayaAir3D;
// }());
// LayaAir3D();

// //材质动画
// var LayaAir3D = (function(){
//     function LayaAir3D(){
//         //初始化
//         Laya3D.init(Laya.Browser.width,Laya.Browser.height,true);
//         Laya.stage.scaleMode = Laya.stage.SCALE_FULL;
//         Laya.stage.scaleMode = Laya.stage.SCREEN_NONE;
//         Laya.Stat.show();
//         var scene = Laya.stage.addChild(new Laya.Scene());
//         //摄像机
//         var camera = scene.addChild(new Laya.Camera(0,0.1,100));
//         camera.transform.translate(new Laya.Vector3(0,0,5));
//         camera.transform.rotate(new Laya.Vector3(0,0,0));
//         //灯光
//         var light = scene.addChild(new Laya.PointLight());
//         light.transform.translate(new Laya.Vector3(0,5,5));
//         light.range = 15;
//         light.attenuation = new Laya.Vector3(0.01,0.01,0.03);
//         //模型
//         var box = Laya.MeshSprite3D.load('LayaScene_uvAction/uvAction.lh');
//         box.on(Laya.Event.HIERARCHY_LOADED,this,onLoadComplete);
//         scene.addChild(box);
//         function onLoadComplete(){
//             var ani = box.getChildAt(0).getComponentByType(Animator);
//             //动画2000毫秒后停止
//             Laya.timer.once(2000,this,onLoop,[ani]);
//             //动画每个10毫秒循环
//             Laya.timer.loop(10,null,function(){
//                 onLoop(ani);
//             })
//         }
//     }
//     function onLoop(ani){
//         ani.stop();
//     }
//     return LayaAir3D;
// }());
// LayaAir3D();

//刚体动画（变换动画）

