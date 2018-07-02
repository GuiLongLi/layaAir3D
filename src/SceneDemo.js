// //初始化
// Laya3D.init(0,0,true);
// Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
// Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
// Laya.Stat.show();
// //加载插件导出的场景
// var scene = Laya.Scene.load('h5/threeDimen/scene/PBRScene/Demo.ls');
// Laya.stage.addChild(scene);
// //创建摄像机（横纵比，近距裁剪，远距裁剪）
// var camera = new Laya.Camera(0,0.1,1000);
// //加载到场景
// scene.addChild(camera);
// //移动摄像机位置
// camera.transform.position = new Laya.Vector3(0,5,23);
// //旋转摄像机角度
// camera.transform.rotate(new Laya.Vector3(-17,0,0),true,false);
// //设置摄像机视野范围（角度）
// camera.fieldOfView = 35;
// //设置背景颜色
// camera.clearColor = new Laya.Vector4(0,0,0.6,1);
// //加入摄像机移动控制脚本
// camera.addComponent(CameraMoveScript);
// //创建方向光--------------
// var light = scene.addChild(new Laya.DirectionLight());
// //移动灯光位置
// light.transform.translate(new Laya.Vector3(0,2,5));
// //调整灯光方向
// light.direction = new Laya.Vector3(0,-0.5,1);
// //设置灯光环境色
// light.color = new Laya.Vector3(1,1,1);

//场景资源预加载
// //单个资源
// Laya.loader.create('h5/threeDimen/scene/PBRScene/Demo.ls',Laya.Handler.create(this,completeHandler));
// //批量加载
// Laya.loader.create(['h5/threeDimen/scene/particle/Example_01.ls','h5/threeDimen/scene/PBRScene/Demo.ls','h5/threeDimen/scene/ColliderScene/ColliderDemo.ls'],Laya.Handler.create(this,completeHandler));
// //批量加载，并创建不同的类型
// Laya.loader.create([{url:'h5/threeDimen/scene/particle/Example_01.ls','type':Laya.Scene},{url:'h5/threeDimen/staticModel/earth/EarthPlanet.lh','type':Laya.Sprite3D},{url:'h5/threeDimen/skinModel/PangZi/PangZi-doubipangzi.lm','type':Laya.MeshSprite3D}],Laya.Handler.create(this,completeHandler));

// //雾化效果
// //初始化
// Laya3D.init(0, 0, true);
// Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
// Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
// Laya.Stat.show();
// //因为只有一个资源 所以我们传进去字符串就可以，队列的话可以传递一个数组队列。
// Laya.loader.create("h5/threeDimen/scene/TerrainScene/XunLongShi.ls",Laya.Handler.create(this, this.completeHandler), null, Laya.Scene);
// function completeHandler() {
//     // 第一种方法 获取场景
//     // var scene=Laya.Scene.load("h5/threeDimen/scene/TerrainScene/XunLongShi.ls");
//     // 第二种方法，缓存后加载方式
//     var scene = Laya.loader.getRes("h5/threeDimen/scene/TerrainScene/XunLongShi.ls");
//     //开启雾化效果
//     scene.enableFog = true;
//     //设置雾化颜色
//     scene.fogColor = new Laya.Vector3(0,0,0.6);
//     //设置雾化的起始位置，相对于相机的距离
//     scene.fogStart = 10;
//     //设置雾化最浓处的距离
//     scene.fogRange = 40;
    
//     Laya.stage.addChild(scene);

// }
