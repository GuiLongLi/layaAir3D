// var LayaAir3D = (function () {
//     function LayaAir3D() {

//         //初始化引擎
//         Laya3D.init(0, 0, true);

//         //适配模式
//         Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
//         Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;

//         //开启统计信息
//         Laya.Stat.show();

//         //添加3D场景
//         var scene = Laya.stage.addChild(new Laya.Scene());

//         //添加照相机
//         var camera = (scene.addChild(new Laya.Camera(0, 0.1, 100)));
//         //移动摄像机位置
//         camera.transform.translate(new Laya.Vector3(0, 3, 3));
//         //旋转摄像机方向（角度）
//         camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
//         camera.clearColor = null;

//         //添加方向光
//         var directionLight = scene.addChild(new Laya.DirectionLight());
//         directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
//         directionLight.direction = new Laya.Vector3(1, -1, 0);
//         //灯光的环境色
//         directionLight.ambientColor = new Laya.Vector3(0.6,0.6,0.6);
//         //灯光的高光色
//         directionLight.specularColor = new Laya.Vector3(0.6,0.6,0.6);
//         //灯光的漫反射颜色
//         directionLight.diffuseColor = new Laya.Vector3(1.6,1.6,1.6);

//         //添加自定义模型
//         var box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(1, 1, 1)));
//         box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
//         var material = new Laya.StandardMaterial();
//         material.diffuseTexture = Laya.Texture2D.load("res/layabox.png");
//         box.meshRender.material = material;

//         //这里添加转动的逻辑---------------------
//         //旋转方向与角度设置
//         var vect = new Laya.Vector3(1,1,0);
//         //每10毫秒旋转一次
//         Laya.timer.loop(10,null,function(){
//             box.transform.rotate(vect,true,false);
//         });
//     }
//     return LayaAir3D;
// } ());

// LayaAir3D();

// //加载3d场景
// var LayaAir3D = (function(){
//     function LayaAir3D(){
//         //初始化
//         Laya3D.init(0,0,true);
//         Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
//         Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
//         Laya.Stat.show();

//         //添加3d场景
//         var scene = Laya.Scene.load('h5/threeDimen/scene/Arena/Arena.ls');
//         Laya.stage.addChild(scene);

//         //创建摄像机（恒总比，近距裁剪，远距裁剪）
//         var camera = new Laya.Camera(0,0.1,1000);
//         //加载到场景
//         scene.addChild(camera);
//         //移动摄像机位置
//         camera.transform.position = new Laya.Vector3(-8,4,15);
//         //旋转摄像机角度
//         camera.transform.rotate(new Laya.Vector3(-8,-25,0),true,false);
//     }
//     return LayaAir3D;
// }());

// LayaAir3D();
