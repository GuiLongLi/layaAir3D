// //反射率
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// var scene = Laya.stage.addChild(new Laya.Scene());
// //摄像机
// var camera = scene.addChild(new Laya.Camera(0,0.1,100));
// camera.transform.translate(new Laya.Vector3(4,3,4));
// camera.transform.rotate(new Laya.Vector3(-30,45,0),true,false);

// //聚光
// var light = scene.addChild(new Laya.PointLight());
// light.transform.translate(new Laya.Vector3(-3,5,3));
// light.range = 15;
// light.attenuation = new Laya.Vector3(0.01,0.01,0.03);

// //创建盒子
// var box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(1.5,1.5,1.5)));

// //创建标准材质
// var material = new Laya.StandardMaterial();
// //创建漫反射二维纹理贴图
// material.diffuseTexture = Laya.Texture2D.load('res/layabox.png');
// //只有设置了渲染模式为透明混合类型才能达到透明效果
// //设置材质蓝色染色及50%半透明
// material.albedo = new Laya.Vector4(1,1,2,0.5);
// //渲染模式（也可设置树脂，5-13等为混合类型，可观察其效果变化）
// material.renderMode = Laya.StandardMaterial.RENDERMODE_DEPTHREAD_TRANSPARENTDOUBLEFACE;
// //为box模型赋材质
// box.meshRender.material = material;

// //漫反射贴图
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
// Laya.stage.scaleMode = Laya.Stage.SCREEN_NONE;
// Laya.Stat.show();
// var scene = Laya.stage.addChild(new Laya.Scene());
// //摄像机
// var camera = scene.addChild(new Laya.Camera(0,0.1,100));
// camera.transform.translate(new Laya.Vector3(-5,4,5));
// camera.transform.rotate(new Laya.Vector3(-30,-45,0),true,false);
// //添加方向光
// var directionLight = scene.addChild(new Laya.DirectionLight());
// directionLight.ambientClor = new Laya.Vector3(0.5,0.5,0.5);
// directionLight.specularColor = new Laya.Vector3(0,0,0);
// directionLight.diffuseColor = new Laya.Vector3(1,1,1);
// directionLight.direction = new Laya.Vector3(0.5,-1,0);
// //盒子
// var box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(1.5,1.5,1.5)));
// //材质
// var material = new Laya.StandardMaterial();
// //创建漫反射颜色
// material.diffuseColor = new Laya.Vector3(0.5,0.5,2);
// //创建漫反射二维纹理贴图
// material.diffuseTexture = Laya.Texture2D.load('res/layabox.png');
// //赋材质
// box.meshRender.material = material;

// //高光色与高光贴图
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// Laya.stage.scaleMode = Laya.stage.SCALE_FULL;
// Laya.stage.scaleMode = Laya.stage.getChildAtSCREEN_NONE;
// Laya.Stat.show();
// var scene = Laya.stage.addChild(new Laya.Scene());
// //摄像机
// var camera = scene.addChild(new Laya.Camera(0,0.1,100));
// camera.transform.translate(new Laya.Vector3(0,0,50));
// camera.transform.rotate(new Laya.Vector3(0,0,0),true,false);
// //平行光
// var light = scene.addChild(new Laya.DirectionLight());
// //修改灯光方向
// light.direction = new Laya.Vector3(0.3,-1,0);
// //设置高光色为白色
// light.specularColor = new Laya.Vector3(1,1,1);
// //加载模型
// this.role3D = Laya.Sprite3D.load('h5/threeDimen/staticModel/LizardCal/lizardCaclute.lh');
// //模型与材质加载事件监听
// this.role3D.on(Laya.Event.HIERARCHY_LOADED,this,onLoadComplete);
// scene.addChild(this.role3D);
// function onLoadComplete(){
//     //获取模型
//     var meshSprite3D = this.role3D.getChildAt(0).getChildAt(0);
//     //从模型上获取材质
//     var sharedMaterial = meshSprite3D.meshRender.sharedMaterial;
//     //修改材质的高光颜色，让高光偏红
//     sharedMaterial.specularColor = new Laya.Vector4(1,0,0,0.1);
//     //加载高光贴图（与漫反射一样，也可单独制作高光贴图）
//     sharedMaterial.specularTexture = sharedMaterial.diffuseTexture;
// }

// //环境色与贴图
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// Laya.stage.scaleMode = Laya.stage.SCALE_FULL;
// Laya.stage.scaleMode = Laya.stage.SCREEN_NONE;
// var scene = Laya.stage.addChild(new Laya.Scene());
// //摄像机
// var camera = scene.addChild(new Laya.Camera(0,0.1,100));
// camera.transform.translate(new Laya.Vector3(0,0,6));
// camera.transform.rotate(new Laya.Vector3(0,0,0),true,false);
// //方向光
// var directionLight = scene.addChild(new Laya.DirectionLight());
// directionLight.ambientColor = new Laya.Vector3(.5,.5,.5);
// directionLight.specularColor = new Laya.Vector3(0,0,0);
// directionLight.diffuseColor = new Laya.Vector3(1,1,1);
// directionLight.direction = new Laya.Vector3(.5,-1,0);
// //盒子
// var box = scene.addChild(new Laya.MeshSprite3D(new Laya.SphereMesh(1,12,12)));
// //创建材质
// var material = new Laya.StandardMaterial();
// //创建漫反射二维贴图
// material.diffuseTexture = Laya.Texture2D.load('res/layabox.png');
// //设置环境色，提亮模型
// material.ambientColor = new Laya.Vector3(2,2,2);
// //为box模型赋材质
// box.meshRender.material = material;

// //反射颜色和反射贴图
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// Laya.stage.scaleMode = Laya.stage.SCALE_FULL;
// Laya.stage.scaleMode = Laya.stage.SCREEN_NONE;
// var scene = Laya.stage.addChild(new Laya.Scene());
// //摄像机
// var camera = scene.addChild(new Laya.Camera(0,0.1,100));
// camera.transform.translate(new Laya.Vector3(0,0,4));
// camera.transform.rotate(new Laya.Vector3(0,0,0));
// //添加方向光
// var directionLight = scene.addChild(new Laya.DirectionLight());
// directionLight.ambientColor = new Laya.Vector3(.5,.5,.5);
// directionLight.specularColor = new Laya.Vector3(.5,.5,.5);//增加高光
// directionLight.diffuseColor = new Laya.Vector3(1,1,1);
// directionLight.direction = new Laya.Vector3(.5,-1,0);
// //添加自定义模型
// var sphere = scene.addChild(new Laya.MeshSprite3D(new Laya.SphereMesh()));
// sphere.transform.rotate(new Laya.Vector3(0,45,0),false,false);
// //创建标准材质
// var material = new Laya.StandardMaterial();
// //创建漫反射二维纹理贴图
// material.diffuseTexture = Laya.Texture2D.load('res/layabox.png');
// //降低反射率，加强反射贴图反射
// material.albedo = new Laya.Vector4(.2,.2,.2,0);
// //设置渲染模式为双面不透明（否则无法显示反射贴图）
// material.renderMode = Laya.StandardMaterial.RENDERMODE_OPAQUEDOUBLEFACE;
// //创建反射贴图，用立方体全视角贴图进行赋值
// material.reflectTexture = Laya.TextureCube.load('h5/threeDimen/skyBox/skyBox1/SkyCube.ltc');
// //为球形赋材质
// sphere.meshRender.material = material;

// //法线贴图
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// Laya.stage.scaleMode = Laya.stage.SCALE_FULL;
// Laya.stage.scaleMode = Laya.stage.SCREEN_NONE;
// var scene = Laya.stage.addChild(new Laya.Scene());
// //摄像机
// var camera = scene.addChild(new Laya.Camera(0,0.1,100));
// // camera.transform.scale(new Laya.Vector3(0,0,0));
// camera.transform.translate(new Laya.Vector3(0,0,5));
// camera.transform.rotate(new Laya.Vector3(0,0,0),true,false);
// // var vect = new Laya.Vector3(0,0,1);
// // var start = 5,bools = 1;
// // Laya.timer.loop(80,null,function(){
// //     if(start >= 15){
// //         vect = new Laya.Vector3(0,0,-1);
// //         camera.transform.translate(vect);
// //         bools = 2;
// //         start--;
// //     }else if(start <= 2){
// //         vect = new Laya.Vector3(0,0,1);
// //         camera.transform.translate(vect);
// //         bools = 1;
// //         start++;
// //     }else{
// //         if(bools == 1){
// //             start++;
// //         }
// //         else if(bools == 2){
// //             start--;
// //         }
// //         camera.transform.translate(vect);
// //     }
// // })
// //方向光
// var directionLight = scene.addChild(new Laya.DirectionLight());
// directionLight.ambientColor = new Laya.Vector3(.5,.5,.5);
// directionLight.specularColor = new Laya.Vector3(.5,.5,.5);// 为球体增加高光
// directionLight.diffuseColor = new Laya.Vector3(1,1,1);
// directionLight.direction = new Laya.Vector3(-5,-5,-8);

// //模型
// this.box = Laya.Sprite3D.load('h5/threeDimen/staticModel/LayaPlane/LayaPlane.lh');
// this.box.on(Laya.Event.HIERARCHY_LOADED,this,onLoadComplete);
// //代码加载法线贴图
// scene.addChild(this.box);
// function onLoadComplete(){
//     var meshSprite3D = this.box.getChildAt(0);
//     //获取模型材质
//     var material = meshSprite3D.meshRender.material;
//     //添加法线贴图
//     material.normalTexture = Laya.Texture2D.load('h5/threeDimen/staticModel/LayaPlane/Assets/Test/Layabox_normal.png');
// }

// //材质 .lmat文件修改
// Laya3D.init(Laya.Browser.width,Laya.Browser.height);
// Laya.stage.scaleMode = Laya.stage.SCALE_FULL;
// Laya.stage.scaleMode = Laya.stage.SCREEN_NONE;
// var scene = Laya.stage.addChild(Laya.Scene.load('h5/threeDimen/scene/TerrainScene/XunLongShi.ls'));
// //摄像机
// var camera = scene.addChild(new Laya.Camera(0,0.1,100));
// camera.transform.translate(new Laya.Vector3(0,0,5));
// camera.transform.rotate(new Laya.Vector3(0,0,0),true,false);
// //灯光
// var light = scene.addChild(new Laya.DirectionLight());
// //灯光方向
// light.direction = new Laya.Vector3(.3,-1,0);
// //设置无高光
// light.specularColor = new Laya.Vector3(0,0,0);
// //环境光偏暗蓝
// light.ambientColor = new Laya.Vector3(.2,.2,1);
// //设置漫反射偏暗
// light.diffuseColor = new Laya.Vector3(.5,.5,.5);
