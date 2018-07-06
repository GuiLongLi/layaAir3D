// //脚本组件
// //初始化
// Laya3D.init(Laya.Browser.width,Laya.Browser.height,true);
// //设配模式
// Laya.stage.scaleMode = Laya.stage.SCALE_FULL;
// Laya.stage.scaleMode = Laya.stage.SCREEN_NONE;
// Laya.Stat.show();
// var scene = Laya.stage.addChild(new Laya.Scene());
// //摄像机
// var camera = scene.addChild(new Laya.Camera(0,0.1,100));
// camera.transform.translate(new Laya.Vector3(0,2,4));
// camera.transform.rotate(new Laya.Vector3(-30,0,0),true,false);
// camera.clearColor = null;
// //平行光
// var light = scene.addChild(new Laya.DirectionLight());
// //灯光的环境色
// light.ambientColor = new Laya.Vector3(0.6,0.6,0.6);
// //灯光的高光色
// light.specularColor = new Laya.Vector3(0.6,0.6,0.6);
// //灯光的漫反射颜色
// light.diffuseColor = new Laya.Vector3(1.6,1.6,1.6);
// //灯光的方向（弧度）
// light.direction = new Laya.Vector3(0.3,-1,0);
// //模型
// this.box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(1,1,1)));
// //模型旋转方向
// // box.transform.rotate(new Laya.Vector3(0,45,0),false,false);
// //创建模型材质
// var material = new Laya.StandardMaterial();
// //漫反射贴图
// material.diffuseTexture = Laya.Texture2D.load('res/layabox.png');
// //赋材质
// this.box.meshRender.material = material;
// //添加自动以脚本并实例化脚本对象
// this.box.addComponent(BoxControlScript);
// //添加组件时获取组件对象
// // this.boxScript = box.addComponent(BoxControlScript);
// //添加定时4秒执行一次回调函数
// Laya.timer.once(4000,this,onLoop);
// //4秒后回调函数，移除脚本组件
// function onLoop(){
//     //移除组件
//     this.box.removeComponentsByType(BoxControlScript);
//     //移除所有组件
//     // this.box.removeAllComponent();
//     //不移除组件，设置为不启用（组件_update方法将不会更新）
//     // this.boxScript.enable = false;
// }
