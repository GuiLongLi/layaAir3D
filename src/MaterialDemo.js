// //创建标准材质
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// var scene = new Laya.Scene();
// Laya.stage.addChild(scene);
// //创建摄像机(横纵比，近距裁剪，远距裁剪);
// var camera= new Laya.Camera(0,0.1,100);
// scene.addChild(camera);
// camera.transform.translate(new Laya.Vector3(0,0,10));
// camera.transform.rotate(new Laya.Vector3(0,0,0),true,false);
// //创建盒子 长 宽 高
// var box = new Laya.BoxMesh(1.5,1.5,1.5);
// //盒子显示对象
// var box3D = new Laya.MeshSprite3D(box);
// box3D.transform.rotate(new Laya.Vector3(30,45,0),true,false);
// //加载对象
// scene.addChild(box3D);
// // //创建标准材质
// // var material = new Laya.StandardMaterial();
// // //创建漫反射二维纹理贴图
// // material.diffuseTexture = Laya.Texture2D.load('res/layabox.png');
// // //为box模型赋材质
// // box3D.meshRender.material = material;
// //异步加载材质文件创建标准材质(也可以预加载)
// var material = Laya.StandardMaterial.load('h5/threeDimen/skinModel/CunMinNan/cunminnan.lmat');
// //为box模型赋材质
// box3D.meshRender.material = material;


// //从加载的模型上获取材质
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// var scene = new Laya.Scene();
// Laya.stage.addChild(scene);
// //加载摄像机 (横纵比，近距裁剪，远距裁剪)
// var camera = scene.addChild(new Laya.Camera(0,0.1,1000));
// camera.transform.translate(new Laya.Vector3(0,1,2));
// camera.transform.rotate(new Laya.Vector3(-15,0,0),true,false);
// //加载灯光
// var spotLight = scene.addChild(new Laya.SpotLight());
// spotLight.transform.position = new Laya.Vector3(-2,4,1);
// spotLight.attenuation = new Laya.Vector3(0.1,0.1,0.1);
// spotLight.direction = new Laya.Vector3(0,-1,0);
// spotLight.range =50;
// spotLight.spot =3;
// spotLight.color = new Laya.Vector3(2,2,2);
// //加载模型
// var layaMonkey = new Laya.MeshSprite3D(Laya.Mesh.load("h5/threeDimen/skinModel/LayaMonkey/Assets/LayaMonkey/LayaMonkey-LayaMonkey.lm"));
// scene.addChild(layaMonkey);
// //加载材质
// layaMonkey.meshRender.material = Laya.StandardMaterial.load("h5/threeDimen/skinModel/LayaMonkey/Assets/LayaMonkey/Materials/T_Diffuse.lmat");
// layaMonkey.transform.localScale = new Laya.Vector3(0.3, 0.3, 0.3);
// layaMonkey.transform.rotation = new Laya.Quaternion(0.7071068, 0, 0, -0.7071067);

// //从加载的模型上获取材质
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// var scene = new Laya.Scene();
// Laya.stage.addChild(scene);

// //加载摄像机 (横纵比，近距裁剪，远距裁剪)
// var camera = scene.addChild(new Laya.Camera(0,0.1,1000));
// camera.transform.translate(new Laya.Vector3(0,1,2));
// camera.transform.rotate(new Laya.Vector3(-15,0,0),true,false);
// //加载灯光
// var spotLight = scene.addChild(new Laya.SpotLight());
// spotLight.transform.position = new Laya.Vector3(-2,4,1);
// spotLight.attenuation = new Laya.Vector3(0.1,0.1,0.1);
// spotLight.direction = new Laya.Vector3(0,-1,0);
// spotLight.range =50;
// spotLight.spot =3;
// spotLight.color = new Laya.Vector3(2,2,2);
// //加载模型
// Laya.loader.create('h5/threeDimen/staticModel/LizardCal/lizardCaclute.lh',Laya.Handler.create(this,onComplete));
// function onComplete(){
//     var monster1 = this.scene.addChild(Laya.Sprite3D.load('h5/threeDimen/staticModel/LizardCal/lizardCaclute.lh'));
//     monster1.on(Laya.Event.HIERARCHY_LOADED,this,onLoadComplete);
//     monster1.transform.position = new Laya.Vector3(-0.6,0,0);
//     monster1.transform.localScale = new Laya.Vector3(0.002,0.002,0.002);
    
// }

// //模型与材质加载完成后回调
// function onLoadComplete(){
//     //获取模型
//     var MeshSprite3D = layaMonkey.getChildAt(0).getChildAt(0);
//     //从模型上获取自身材质
//     var material = MeshSprite3D.meshRender.material;
//     console.log(material);
//     //修改配置的反射颜色，让模型偏红
//     material.albedo = new Laya.vector4(1,0,1,2);
// }