// // //鼠标交互
// // //碰撞器Collider
// // /**
// // * 给3D精灵添加碰撞器组件
// // * BoxCollider    : 盒型碰撞器
// // * SphereCollider : 球型碰撞器
// // * MeshCollider   : 网格碰撞器
// // */
// // //添加Mesh碰撞器组件并获取
// // var meshCollider = meshSprite3d1.addComponent(MeshCollider);
// // //设置mesh碰撞器网格属性,否则无法被检测
// // meshCollider.mesh = meshSprite3d1.meshFilter.sharedMesh;

// // //球形碰撞器组件并获取
// // var sphereCollider = meshSprite3d2.addComponent(SphereCollider);
// // //设置球形碰撞器中心位置
// // sphereCollider.center = meshSprite3d2.meshFilter.sharedMesh.boundingSphere.center.clone();
// // //设置球形碰撞器半径
// // sphereCollider.radius = meshSprite3d2.meshFilter.sharedMesh.boundingSphere.radius;

// // //盒子碰撞器
// // var boxCollider = meshSprite3d3.addComponent(BoxCollider);
// // boxCollider.setFromBoundBox(meshSprite3d3.meshFilter.sharedMesh.boundingBox);

// // //层Layer
// // //默认场景有32层，用在摄像机上，摄像机可以根据层级进行裁剪；用在碰撞检测上，可以控制碰撞什么层，不碰撞什么层。
// // //指定3d精灵层
// // meshSprite3d1.layer = Layer.getLayerByNumber(10);
// // meshSprite3d2.layer = Layer.getLayerByNumber(13);

// // //射线ray
// // //射线初始化
// // var ray = new Laya.Ray(Laya.Vector3.ZERO,Laya.Vector3.ZERO);
// // //获取鼠标在屏幕空间位置
// // var pointer = new Laya.Vector2();
// // point.elements[0] = Laya.stage.mouseX;
// // point.elements[1] = Laya.stage.mouseY;
// // //设置产生射线的方法，通过2d坐标获取与屏幕垂直的一条射线
// // camera.viewportPointToRay(point,ray);

// // //射线碰撞实例
// // var LayaAir3D = (function(){
// //     function LayaAir3D(){
// //         //初始化
// //         Laya3D.init(Laya.Browser.width,Laya.Browser.height,true);
// //         Laya.stage.scaleMode = Laya.stage.SCALE_FULL;
// //         Laya.stage.scaleMode = Laya.stage.SCREEN_NONE;
// //         Laya.Stat.show();
        
// //         //加载资源
// //         Laya.loader.create(["h5/threeDimen/skinModel/NvWu/NvWu-shenminvwu.lm", "h5/threeDimen/skinModel/CunMinNan/CunMinNan-cunminnan.lm", "h5/threeDimen/skinModel/XiaoFeiLong/XiaoFeiLong-xiaofeilong.lm", "h5/threeDimen/scene/TerrainScene/XunLongShi.ls"],Laya.Handler.create(this,onComplete));
// //         //创建信息提示框
// //         LayaAir3D.txt = new Laya.Text();
// //         LayaAir3D.txt.text = '还未选取人物';
// //         LayaAir3D.txt.color = '#ff0000';
// //         LayaAir3D.txt.bold = true;
// //         LayaAir3D.txt.fontSize = 30;
// //         LayaAir3D.txt.pos(100,50);
// //         Laya.stage.addChild(LayaAir3D.txt);

// //         function onComplete(){
// //             //添加3d场景
// //             // var scene = Laya.Loader.getRes('h5/threeDimen/scene/TerrainScene/XunLongShi.ls');
// //             var scene = new Laya.Scene();
// //             Laya.stage.addChild(scene);
// //             scene.addScript(SceneScript);
// //         }
// //     }
// //     return LayaAir3D;
// // }());
// // LayaAir3D();

// //鼠标放置实例
// var LayaAir3D = (function(){
//     function LayaAir3D(){
//         //初始化
//         Laya3D.init(Laya.Browser.width,Laya.Browser.height,true);
//         Laya.stage.scaleMode = Laya.stage.SCALE_FULL;
//         Laya.stage.scaleMode = Laya.stage.SCREEN_NONE;
//         Laya.Stat.show();
//         //加载资源
//         Laya.loader.create(["h5/threeDimen/skinModel/NvWu/NvWu-shenminvwu.lm", "h5/threeDimen/skinModel/CunMinNan/CunMinNan-cunminnan.lm", "h5/threeDimen/skinModel/XiaoFeiLong/XiaoFeiLong-xiaofeilong.lm"],Laya.Handler.create(this,onComplete));

//         //创建信息提示框
//         LayaAir3D.txt = new Laya.Text();
//         LayaAir3D.txt.text = '还未获取人物';
//         LayaAir3D.txt.color = '#f00';
//         LayaAir3D.txt.bold = true;
//         LayaAir3D.txt.fontSize = 30;
//         LayaAir3D.txt.pos(100,50);
//         Laya.stage.addChild(LayaAir3D.txt);

//         function onComplete(){
//             //创建场景
//             var scene = Laya.stage.addChild(new Laya.Scene());
//             //添加脚本
//             scene.addScript(ScenePlaceScript);
//             //模型
//             // var nvwu =  scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("h5/threeDimen/skinModel/NvWu/NvWu-shenminvwu.lm")));
//             var nvwu =  scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(5,5,0.01)));

//             //模型碰撞器组件
//             var meshCollider = nvwu.addComponent(Laya.MeshCollider);
//             //为碰撞器mesh网格
//             meshCollider.mesh = nvwu.meshFilter.sharedMesh;
//         }
//     }
//     return LayaAir3D;
// }());
// LayaAir3D();