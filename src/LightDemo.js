// // //LayaAir3D light光源
// // Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// // //设配模式
// // Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
// // Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
// // //开启统计信息
// // Laya.Stat.show();
// // var scene = new Laya.Scene();
// // Laya.stage.addChild(scene);
// // //添加照相机 设置纵横比，0为自动匹配。0.1是最近看到的距离，100是最远看到的距离
// // var camera = (scene.addChild(new Laya.Camera(0, 0.1, 100)));
// // //移动摄像机位置
// // camera.transform.translate(new Laya.Vector3(0,6,10));
// // //旋转摄像机方向（角度）
// // camera.transform.rotate(new Laya.Vector3(-30,0,0), true, false);
// // camera.clearColor = null;

// // // //创建点光
// // // var light = scene.addChild(new Laya.PointLight());
// // // //移动灯光位置 x y z
// // // light.transform.translate(new Laya.Vector3(-3,5,0));
// // // //设置点光照亮的范围
// // // light.range = 6;
// // // //设置点光衰弱
// // // light.attenuation = new Laya.Vector3(0.01,0.01,0.03);

// // // //创建平行光
// // // var light = scene.addChild(new Laya.DirectionLight());
// // // //设置平行光
// // // light.direction = new Laya.Vector3(0.5,-1,0);

// // //创建聚光
// // var light = scene.addChild(new Laya.SpotLight());
// // //设置聚光的位置
// // light.transform.position = new Laya.Vector3(0,5,0);
// // //设置聚光的衰弱
// // light.attenuation = new Laya.Vector3(0.1,0,0.1);
// // //设置聚光的方向
// // light.direction = new Laya.Vector3(0,-1,0);
// // //设置聚光的范围
// // light.range = 5;
// // //设置聚光值
// // light.spot = 5;
// // //设置灯光的漫反射色为纯红色
// // // light.diffuseColor = new Laya.Vector3(0,1,0);
// // //设置灯光颜色
// // light.color = new Laya.Vector3(1,0,0);

// // //创建模型
// // var boxMesh = new Laya.BoxMesh(2,2,2);
// // var box3D = new Laya.MeshSprite3D(boxMesh);
// // box3D.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
// // scene.addChild(box3D);
// // //创建材质----------------------------------
// // var material = new Laya.StandardMaterial();
// // material.diffuseTexture = Laya.Texture2D.load("res/layabox.png");
// // //为模型赋材质（单个材质可赋给多个模型）
// // box3D.meshRender.material = material;

// //投影
// var LayaAir3D = (function(){
//     function LayaAir3D(){
//         //初始化
//         Laya3D.init(0,0,true);
//         //适配模式
//         Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
//         Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
//         //开启统计信息
//         Laya.Stat.show();

//         //添加3D场景
//         var scene = Laya.stage.addChild(new Laya.Scene());
//         //创建摄像机(横纵比，近距裁剪，远距裁剪);
//         var camera = new Laya.Camera(0,0.1,100);
//         //加载到场景
//         scene.addChild(camera);
//         //移动摄像机的位置
//         camera.transform.translate(new Laya.Vector3(0,4,8));
//         //旋转摄像机角度
//         camera.transform.rotate(new Laya.Vector3(-30,0,0),true,false);
        
//         //创建方向光
//         var light = scene.addChild(new Laya.DirectionLight());
//         //移动灯光位置
//         light.transform.translate(new Laya.Vector3(0,5,0));
//         //设置灯光方向
//         light.direction = new Laya.Vector3(0.3,-1,0);
//         //设置灯光漫反射颜色
//         light.diffuseColor = new Laya.Vector3(1,0,0);
//         //设置灯光高光色
//         light.specularColor = new Laya.Vector3(0,0.5,0.5);
//         //添加灯光投影
//         light.shadow = true;
//         //产生投影的范围(如过小将不会产生投影)
//         light.shadowDistance = 10;
//         //生产阴影的贴图数量
//         light.shadowPSSMCount = 1;
//         //模糊等级，越大越高，效果更新，更好性能
//         light.shadowPCFType = 1;
//         //投影质量
//         light.shadow.Resolution = 2048;

//         //创建盒子模型
//         var box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(1.5,1.5,1.5)));
//         //自身y坐标旋转
//         box.transform.rotate(new Laya.Vector3(0,45,0),true,false);
//         //接受阴影
//         box.meshRender.receiveShadow=true;
//         //创建球体模型
//         var sphere = scene.addChild(new Laya.MeshSprite3D(new Laya.SphereMesh()));
//         //按父空间移动球体
//         sphere.transform.translate(new Laya.Vector3(0,1.5,0),false);
//         //产生阴影
//         sphere.meshRender.castShadow=true;
//         //创建材质
//         var material = new Laya.StandardMaterial();
//         //材质加载漫反射贴图
//         material.diffuseTexture = Laya.Texture2D.load('res/layabox.png');
//         //为模型赋材质(单个材质可赋给多个模型);
//         sphere.meshRender.material = material;
//         box.meshRender.material = material;
//     }
//     return LayaAir3D;
// }());
// LayaAir3D();