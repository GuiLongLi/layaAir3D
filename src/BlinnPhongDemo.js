// //BlinnPhong材质
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// Laya.stage.scaleMode = Laya.stage.SCALE_FULL;
// Laya.stage.scaleMode = Laya.stage.SCREEN_NONE;
// var scene = Laya.stage.addChild(new Laya.Scene());
// //摄像机
// var camera = scene.addChild(new Laya.Camera(0,0.1,100));
// camera.transform.translate(new Laya.Vector3(0,0,5));
// camera.transform.rotate(new Laya.Vector3(0,0,0));
// //灯光
// var light = scene.addChild(new Laya.DirectionLight());
// // light.position = new Laya.Vector3(10,10,10);
// light.specularColor = new Laya.Vector3(.5,.5,.5);  //增加高光
// light.ambientColor = new Laya.Vector3(.5,.5,.5);
// light.diffuseColor = new Laya.Vector3(1,1,1);
// light.direction = new Laya.Vector3(5,-1,-10);
// //盒子模型
// var box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(1.5,1.5,1.5)));
// //创建BlinnPhong材质
// var material = new Laya.BlinnPhongMaterial();
// material.albedoColor = new Laya.Vector4(.5,.3,.3,1);
// material.albedoTexture = Laya.Texture2D.load('res/layabox.png');
// box.meshRender.material = material;