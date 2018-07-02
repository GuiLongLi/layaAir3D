// //创建3D模型
// class LayaAir3D{
//     constructor(){
//         //初始化引擎
//         Laya3D.init(0,0,true);

//         //设配模式
//         Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
//         Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;

//         //开启统计信息
//         Laya.Stat.show();

//         //添加3D场景 -----------
//         var scene = new Laya.Scene();
//         Laya.stage.addChild(scene);
//         //创建摄像机(横纵比，近距裁剪，远距裁剪) -- 
//         var camera = new Laya.Camera(0,0.1,1000);
//         //加载到场景
//         scene.addChild(camera);
//         //移动摄像机位置
//         camera.transform.position = new Laya.Vector3(0,3,10);
//         //旋转摄像机角度
//         camera.transform.rotate(new Laya.Vector3(-17,0,0),true,false);
//         // camera.addComponent(CameraMoveScript);
//         //创建方向光
//         var light = scene.addChild(new Laya.DirectionLight());
//         //移动灯光位置
//         light.transform.translate(new Laya.Vector3(0,2,5));
//         //调整灯光方向
//         light.direction = new Laya.Vector3(0.5,-1,0);
//         //设置灯光环境色
//         light.ambientColor = new Laya.Vector3(1,1,1);
//         //设置灯光漫反射颜色
//         light.diffuseColor = new Laya.Vector3(0.3,0.3,0.3);
//         //创建模型----
//         //创建盒子模型(参数为：长、宽、高，单位：米);
//         var boxMesh = new Laya.BoxMesh(2,2,2);
//         //创建模型显示对象
//         var box3D = new Laya.MeshSprite3D(boxMesh);
//         scene.addChild(box3D);
//         //创建球体模型（参数为：半径，水平层数，垂直层数）
//         var sphereMesh = new Laya.SphereMesh(1,8,8);
//         //创建模型显示对象
//         var sphere3D = new Laya.MeshSprite3D(sphereMesh);
//         //x轴上移动-3米（世界坐标,向左）
//         sphere3D.transform.translate(new Laya.Vector3(-3,0,0),false);
//         scene.addChild(sphere3D);
//         //创建圆柱体模型（参数为：半径、高、圆截面线段数)
//         var cylinderMesh = new Laya.CylinderMesh(1,2,8);
//         //创建模型显示对象
//         var cylinder3D = new Laya.MeshSprite3D(cylinderMesh);
//         //x轴上移动3米（世界坐标，向右）
//         cylinder3D.transform.translate(new Laya.Vector3(3,0,0),false);
//         scene.addChild(cylinder3D);
//         //创建材质---
//         var material = new Laya.StandardMaterial();
//         //为模型赋材质(单个材质可赋给多个模型)
//         box3D.meshRender.material = material;
//     }
// }
// new LayaAir3D();

// //加载3d场景 lh
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// this.scene = new Laya.Scene();
// Laya.stage.addChild(this.scene);

// //方法一：直接异步加载
// // var sprite3D = new Laya.Sprite3D('h5/threeDimen/skinModel/dude/dude.lh');
// // this.scene.addChild(sprite3D);

// //方法二：预加载，创建为Sprite3D类型
// Laya.loader.create('h5/threeDimen/skinModel/dude/dude.lh',Laya.Handler.create(this,onCreateComplete));

// function onCreateComplete(){
//     var sprite3D = new Laya.loader.getRes('h5/threeDimen/skinModel/dude/dude.lh');
//     this.scene.addChild(sprite3D);
// }

// //加载3d场景 lm
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);

// //添加3d场景
// this.scene = new Laya.Scene();
// Laya.stage.addChild(this.scene);

//方法一 直接异步加载
// var mesh = Laya.Mesh.load('h5/threeDimen/skinModel/XiaoFeiLong/XiaoFeiLong-xiaofeilong.lm');
// var MeshSprite3D = new Laya.MeshSprite3D(mesh);
// this.scene.addChild(MeshSprite3D);

// //方法二 预加载，创建为Sprite3D类型
// Laya.loader.create("h5/threeDimen/skinModel/XiaoFeiLong/XiaoFeiLong-xiaofeilong.lm",Laya.Handler.create(this,onCreateComplete));

// function onCreateComplete(){
//     //创建预加载的模型
//     var mesh = Laya.loader.getRes('h5/threeDimen/skinModel/XiaoFeiLong/XiaoFeiLong-xiaofeilong.lm');
//     //创建3D模型
//     var meshSprite3D = new Laya.MeshSprite3D(mesh);
//     this.scene.addChild(meshSprite3D);
// }

// //获取子对象模型及网格 getChildAt() getChildByName()
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// this.scene = new Laya.Scene();
// //加载导出的卡车模型
// this.truck3D = Laya.Sprite3D.load('h5/threeDimen/skinModel/dude/dude.lh');
// //模型与材质加载完成事件监听
// this.truck3D.on(Laya.Event.HIERARCHY_LOADED,this,this.onLoaded);
// this.scene.addChild(this.truck3D);
// //模型与材质加载完成后回调
// function onLoaded(){
//     console.log(this.truck3D);
//     //获取模型（查看.lh文件，有两个子对象模型，一为车头“head”，一为车身“body”，暂取其中一个模型）
//     this.MeshSprite3D = this.truck3D.getChildAt(0).getChildAt(0);
//     //输出模型名字
//     console.log(this.truck3D.getChildAt(0));
//     console.log(MeshSprite3D);
//     console.log(MeshSprite3D.name);

//     //2秒后更换模型网格
//     Laya.timer.once(2000,this,onTimerOnce);
// }
// function onTimerOnce(){
//     //创建模型网格并更换原始网格
//     this.MeshSprite3D.meshFilter.sharedMesh = Laya.Mesh.load('h5/threeDimen/skinModel/dude/Assets/dude/dude-him.lm');

//     //因使用了卡车头网格，位置会冲突，所以进行位置移动
//     this.MeshSprite3D.transform.translate(new Laya.Vector3(0,0,-8));
// }