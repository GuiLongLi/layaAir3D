// var LayaAir3D = (function(){
//     // function LayaAir3D(){
//     //     //初始化引擎
//     //     Laya3D.init(0,0,true);

//     //     //适配模式
//     //     Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
//     //     Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
//     //     //开启统计信息
//     //     Laya.Stat.show();
//     //     //预加载角色动画资源
//     //     Laya.loader.create('h5/threeDimen/scene/PBRScene/Demo.ls',Laya.Handler.create(this,onSceneOK));
//     //     function onSceneOK(){
//     //         //添加3D场景
//     //         var scene = Laya.loader.getRes('h5/threeDimen/scene/PBRScene/Demo.ls');
//     //         Laya.stage.addChild(scene);
            
//     //         //从场景中获取摄像机
//     //         //var camera= scene.getChildByName("Main Camera");

//     //         // //实例化一个相机，设置纵横比，0为自动匹配。0.1是最近看到的距离，100是最远看到的距离
//     //         // var camera = new Laya.Camera();
//     //         //后续对摄像机的逻辑操作
//     //         // //移动相机，设置相机向z轴移动3米，true代表的是局部坐标，false是相对世界坐标
//     //         // camera.transform.translate(new Laya.Vector3(0,0,3),false);
//     //         // //欧拉角旋转相机。局部坐标，弧度制（false为角度制）
//     //         // camera.transform.rotate(new Laya.Vector3(0,0,3),true,true);

//     //         //正交投影属性设置
//     //         // camera.orthographicProjection = true;
//     //         // //正交垂直矩阵距离，控制3D物件远近与现实大小
//     //         // camera.orthographicVerticalSize = 7;
//     //         // //移动摄像机位置
//     //         // camera.transform.translate(new Laya.Vector3(0,26.5,45));
//     //         // //旋转摄像机角度
//     //         // camera.transform.rotate(new Laya.Vector3(-30,0,0),true,false);
//     //         // //加载到场景
//     //         // scene.addChild(camera);

//     //         //创建摄像机时初始化裁剪（纵横比，近距裁剪，远距裁剪）
//     //         // var camera = new Laya.Camera(0,0.1,100);
//     //         // //近距裁剪
//     //         // camera.nearPlane = 0;
//     //         // //远距裁剪
//     //         // camera.farPlane = 100;
//     //         // //设置相机的视野范围90度
//     //         // camera.fieldOfView = 90;
//     //         // // //加载到场景
//     //         // scene.addChild(camera);
            
//     //         //添加自定义模型
//     //         // var box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(1,1,1)));
//     //         // box.transform.rotate(new Laya.Vector3(0,45,0),false,false);
//     //         // scene.addChild(box);
//     //         // //添加摄像机
//     //         // var camera = scene.addChild(new Laya.Camera());
//     //         // camera.transform.translate(new Laya.Vector3(0,26,45));
//     //         // //摄像机捕捉模型目标
//     //         // camera.transform.lookAt(box.transform.position,new Laya.Vector3(0,0.5,0));
//     //         // //设置背景颜色
//     //         // camera.clearColor = new Laya.Vector3(1,1,1);
            
//     //         // scene.addChild(camera);
            


//     //     }
//     // }

//     //天空盒的使用
//     // function LayaAir3D(){
//     //     //初始化引擎
//     //     Laya3D.init(0,0,true);

//     //     //适配模式
//     //     Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
//     //     Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;

//     //     Laya.Stat.show();

//     //     //添加3D场景
//     //     var scene = new Laya.Scene();
//     //     Laya.stage.addChild(scene);
//     //     //添加自定义模型
//     //     var box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(1,1,1)));
//     //     box.transform.rotate(new Laya.Vector3(15,45,15),false,false);
//     //     scene.addChild(box);
//     //     var material = new Laya.StandardMaterial();
//     //     material.diffuseTexture = Laya.Texture2D.load("res/layabox.png");
//     //     box.meshRender.material = material;

//     //     //添加摄像机
//     //     var camera = scene.addChild(new Laya.Camera());

//     //     camera.transform.translate(new Laya.Vector3(0,1,10));
//     //     //摄像机捕捉模型目标
//     //     camera.transform.lookAt(box.transform.position,new Laya.Vector3(0,0,0));

//     //     //创建天空盒
//     //     var skyBox = new Laya.SkyBox();
//     //     //清除标记，使用天空（必须设置，否则无法显示天空）
//     //     camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY;
//     //     //绑定天空盒对象到摄像机
//     //     camera.sky = skyBox;
//     //     //为天空盒加载贴图文件
//     //     skyBox.textureCube = Laya.TextureCube.load("h5/threeDimen/skyBox/skyBox1/skyCube.ltc");
        
//     //     var vect = new Laya.Vector3(1,1,0);
//     //     //盒子，每10毫秒旋转一次
//     //     Laya.timer.loop(10,null,function(){
//     //         box.transform.rotate(vect,true,false);
//     //     });
        
//     //     var vect = new Laya.Vector3(0,0,1);
//     //     //天空，每10毫秒旋转一次
//     //     Laya.timer.loop(10,null,function(){
//     //         camera.transform.rotate(vect,true,false);
//     //     });
//     // }


//     //多摄像机的使用 ，同屏两个窗口
//     function LayaAir3D() 
//     {
//         //初始化引擎
//         Laya3D.init(1280, 720, true);
//         //适配模式
//         Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
//         Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
//         //开启统计信息
//         Laya.Stat.show();        
//         //预加载资源
//               Laya.loader.create("h5/threeDimen/scene/TerrainScene/XunLongshi.ls",Laya.Handler.create(this,on3DComplete));
//         function on3DComplete()
//         {
//           //创建场景
//           var scene=Laya.Scene.load("h5/threeDimen/scene/TerrainScene/XunLongshi.ls");
//           Laya.stage.addChild(scene);
//           //创建摄像机1添加到场景
//           var camera1=new Laya.Camera();
//           scene.addChild(camera1);
//           //摄像机1添加控制脚本
//         //   camera1.addComponent(CameraMoveScript);
//           //修改摄像机1位置及角度
//           camera1.transform.translate(new Laya.Vector3(0,2,8),true);
//           camera1.transform.rotate(new Laya.Vector3(-23,0,0),true,false);
//           //设置视口为左半屏
//           camera1.viewport=new Laya.Viewport(0,0,640,720);
//           //创建摄像机2添加到场景
//           var camera2=new Laya.Camera();
//           scene.addChild(camera2);
//           //修改摄像机2位置及角度
//           camera2.transform.rotate(new Laya.Vector3(-45,0,0),false,false);
//           camera2.transform.translate(new Laya.Vector3(0,0,25),true);
//           //设置视口为右半屏
//           camera2.viewport=new Laya.Viewport(640,0,640,720);
//         }
//     }
//     return LayaAir3D;
// }());

// LayaAir3D();