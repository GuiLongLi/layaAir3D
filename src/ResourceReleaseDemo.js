// //资源释放
// // 初始化
// Laya3D.init(Laya.Browser.width,Laya.Browser.height,true);
// Laya.stage.alignV = Laya.stage.ALIGN_MIDDLE;
// Laya.stage.alignH = Laya.stage.ALIGN_CENTER;
// //等比缩放
// Laya.stage.scaleMode = Laya.stage.SCALE_FIXED_AUTO;
// //自动横屏, 游戏水平方向始终与屏幕较短边垂直
// Laya.stage.screenMode = "horizontal";
// Laya.Stat.show();
// //加载2d资源
// Laya.loader.load('res/atlas/comp.atlas',Laya.Handler.create(this,on2DComplete));
// //加载2d后回调
// function on2DComplete(){
//     //实例化加载进度页面
//     this.progress = new AssetLoadView();
//     this.progress.init();
//     this.progress.loadTitle.text = '资源加载与释放实例';
//     Laya.stage.addChild(this.progress);
//     //加载第一个场景角色3d资源，不能全部加载，否则太占显存
//     Laya.loader.create([{url:'h5/threeDimen/scene/TerrainScene/XunLongShi.ls'},{url:'h5/threeDimen/skinModel/NvWu/NvWu-shenminvwu.lm'},{url:'h5/threeDimen/skinModel/CunMinNan/CunMinNan-cunminnan.lm'}],Laya.Handler.create(this,on3DComplete));
// }
// //加载3d资源后回调
// function on3DComplete(){
//     //实例化场景
//     this.scene = Laya.stage.addChild(Laya.loader.getRes('h5/threeDimen/scene/TerrainScene/XunLongShi.ls'));
//     Laya.stage.setChildIndex(this.scene,0);
//     // 摄像机
//     this.camera = scene.addChild(new Laya.Camera(0,0,100));
//     this.camera.transform.translate(new Laya.Vector3(0,1,15));
//     this.camera.addComponent(CameraMoveScript);
//     // //视野范围角度
//     // this.camera.fieldOfView = 25;
//     // //摄像机位置与对准
//     // this.camera.transform.position = new Laya.Vector3(0,1,8);
//     // this.camera.transform.lookAt(new Laya.Vector3(0,0,0),new Laya.Vector3(0,0,0));
//     this.scene.addChild(this.camera);
//     //实例化角色添加到场景
//     this.role = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load('h5/threeDimen/skinModel/NvWu/NvWu-shenminvwu.lm')));
//     //双击游戏画面切换场景
//     Laya.stage.on(Laya.Event.DOUBLE_CLICK,this,onChangeScene);
// }
// //加载第二关场景资源，切换场景
// function onChangeScene(){
//     //去除双击事件
//     Laya.stage.off(Laya.Event.DOUBLE_CLICK,this,this.onChangeScene);
//     //切换场景加载界面
//     this.progress.init();
//     this.progress.loadTitle.text ='正在切换场景，请稍后！';
//     Laya.stage.addChild(this.progress);
//     //移除摄像机与角色
//     this.scene.removeChild(this.camera);
//     this.scene.removeChild(this.role);

//     //列表释放显存资源方法(释放的资源配置表)
//     this.assetsDispose('h5/threeDimen/Scene.json');
//     //销毁之间的场景
//     this.scene.destroy();
//     //加载第二关场景到游戏
//     this.scene = Laya.stage.addChild(Laya.Scene.load('h5/threeDimen/scene/TerrainScene/XunLongShi.ls'));
//     this.role = new Laya.MeshSprite3D(Laya.Mesh.load('h5/threeDimen/skinModel/CunMinNan/CunMinNan-cunminnan.lm'));
//     //摄像机位置与对准
//     this.camera.transform.position = new Laya.Vector3(-1,1,8);
//     this.camera.transform.lookAt(new Laya.Vector3(-1.5,0.5,0),new Laya.Vector3(0,0,0));
//     //添加摄像机与角色
//     this.scene.addChild(this.camera);
//     this.scene.addChild(this.role);
//     this.role.transform.position = new Laya.Vector3(-1,0,-3.5);
//     //设置场景层级
//     Laya.stage.setChildIndex(this.scene,0);
//     //现有显存资源
//     console.log('现有显存中的资源：',Laya.Loader.loadedMap);
// }
//     /**
//  * 列表释放显存资源方法(利用资源表方式，每个场景配置资源路径表)
//  * target3D 需要释放资源的对象资源表assetsUrl:String
//  */ 
// function assetsDispose(assetsUrl){
//     //加载释放资源配置表
//     Laya.loader.load([{url:assetsUrl,type:Laya.loader.JSON}],Laya.Handler.create(this,onAssetsOK,[assetsUrl]));
// }
// //加载资源释放表后
// function onAssetsOK(assetsUrl){
//     //获取加载的数据 , json转数组
//     var arr = Laya.loader.getRes(assetsUrl);
//     for(var i = arr.length - 1;i > -1;i--){
//         // 根据资源路径获取资源 resource为材质、贴图、网格等基类
//         var resource = Laya.loader.getRes(arr[i].url);
//         //资源释放
//         resource.dispose();
//     }
// }