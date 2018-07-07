var SceneScript = (function(_super){
    function SceneScript(){
        SceneScript.super(this);
    }
    Laya.class(SceneScript,'SceneScript',_super);
    var scene;
    //摄像机
    var camera;
    //鼠标检测的摄像
    var ray;
    //画矢量先的3D显示对象
    var phasorSprite3D;
    //碰撞信息
    var rayCastHit;
    //鼠标点击创建的3D对象
    var box;
    //获取的物品
    var nameArray = [];

    /**
     * 覆写3D对象加载组件时执行的方法
     * @param owner 加载此组件的3D对象
     */  
    SceneScript.prototype._load = function(owner){
        //获取脚本所属对象
        scene = owner;
    }
    //初始化场景,摄像机,碰撞对象,碰撞器
    SceneScript.prototype._start = function(state){
        //创建摄像机
        camera = scene.addChild(new Laya.Camera(0,0.1,100));
        camera.transform.rotate(new Laya.Vector3(-30,0,0),false,false);  //设置了 rotate -30才会显示射线
        camera.transform.translate(new Laya.Vector3(0, 1, 3));
        // camera.clearColor = null;
        //摄像机脚本
        // camera.addComponent(CameraMoveScript);

        //添加模型
        sprite3d1 = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("h5/threeDimen/skinModel/NvWu/NvWu-shenminvwu.lm")));
        sprite3d2 = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("h5/threeDimen/skinModel/CunMinNan/CunMinNan-cunminnan.lm")));
        sprite3d3 = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("h5/threeDimen/skinModel/XiaoFeiLong/XiaoFeiLong-xiaofeilong.lm")));

        sprite3d1.transform.position = new Laya.Vector3(-0.6, 0, -0.2);
        sprite3d2.transform.position = new Laya.Vector3(0.1, 0, 0);
        sprite3d3.transform.position = new Laya.Vector3(-2.3, 0, 0);

        sprite3d1.name = "女巫";
        sprite3d2.name = "村民";
        sprite3d3.name = "小飞龙";

        //指定精灵的层
        sprite3d1.layer = Laya.Layer.getLayerByNumber(9);
        sprite3d2.layer = Laya.Layer.getLayerByNumber(10);
        sprite3d3.layer = Laya.Layer.getLayerByNumber(13);

        //创建一条射线
        ray = new Laya.Ray(new Laya.Vector3(),new Laya.Vector3());
        //创建矢量3d精灵
        phasorSprite3D = new Laya.PhasorSpriter3D();
        //创建碰撞信息
        rayCastHit = new Laya.RaycastHit();
        //场景中的3d对象添加组件
        //添加网格碰撞器组件
        var boxCollider1 = sprite3d1.addComponent(Laya.BoxCollider);
        //盒子碰撞器设置盒子大小
        boxCollider1.setFromBoundBox(sprite3d1.meshFilter.sharedMesh.boundingBox);
        //添加网格碰撞器组件
        var boxCollider2 = sprite3d2.addComponent(Laya.BoxCollider);
        //盒子碰撞器设置盒子大小
        boxCollider2.setFromBoundBox(sprite3d2.meshFilter.sharedMesh.boundingBox);
        //添加网格碰撞器组件
        var boxCollider3 = sprite3d3.addComponent(Laya.BoxCollider);
        //盒子碰撞器设置盒子大小
        boxCollider3.setFromBoundBox(sprite3d3.meshFilter.sharedMesh.boundingBox);

        //鼠标点击回调
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,onMouseDown);
    }

    //覆盖场景渲染后更新方法,即场景渲染后的帧循环
    SceneScript.prototype._postRenderUpdate = function(state){
        //画参考线，碰撞检测
        //根据鼠标屏幕2D坐标修改生成射线数据
        camera.viewportPointToRay(new Laya.Vector2(Laya.stage.mouseX,Laya.stage.mouseY),ray);
        //射线检测，最近物体碰撞器信息，最大检测距离为300米，默认检测第0层
        Laya.Physics.rayCast(ray,rayCastHit,300,9);  //设置了场景9层，只获取9层的人物
        //摄像机位置
        var position = new Laya.Vector3(camera.position.x,0,camera.position.z);
        //开始绘制矢量3d精灵，类型为线型
        phasorSprite3D.begin(Laya.WebGLContext.LINES,camera);
        //根据射线的原点绘制参考直线 ,为了观察方便而绘制，但矢量线并不是真正的射线路径
        phasorSprite3D.line(ray.origin,new Laya.Vector4(1,0,0,1),position,new Laya.Vector4(1,0,0,1));
        //结束绘制
        phasorSprite3D.end();
    }
    //鼠标点击拾取
    function onMouseDown(){
        //如果碰撞信息中的模型不为空，删除模型
        if(rayCastHit.sprite3D){
            //从场景中移除模型
            scene.removeChild(rayCastHit.sprite3D);
            //模型名字存入数组
            nameArray.push(rayCastHit.sprite3D.name);
            //文件提示信息
            LayaAir3D.txt.text = '你选取了人物'+rayCastHit.sprite3D.name+'!,现有的人物为：'+nameArray;
            //销毁物体，如不销毁还能被检测
            rayCastHit.sprite3D.destroy();
        }
    }
    return SceneScript;
})(Laya.Script);