var ScenePlaceScript = (function(_super){
    function ScenePlaceScript(){
        ScenePlaceScript.super(this);
    }
    Laya.class(ScenePlaceScript,'ScenePlaceScript',_super);
    var scene;
    //摄像机
    var camera;
    //射线
    var ray;
    //矢量线3d对象
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
    ScenePlaceScript.prototype._load = function(owner){
        scene = owner;
    }
    //初始化场景，摄像机，碰撞对象，碰撞器
    ScenePlaceScript.prototype._start = function(state){
        //摄像机
        camera = scene.addChild(new Laya.Camera(0,0.1,100));
        camera.transform.position = new Laya.Vector3(0,3,5);
        camera.transform.rotate(new Laya.Vector3(-30,0,0),false,false); //一定要 rotate -30才能显示射线
        //摄像机脚本
        // camera.addComponent(CameraMoveScript);

        //射线
        ray = new Laya.Ray(new Laya.Vector3(),new Laya.Vector3());
        //矢量3d精灵
        phasorSprite3D = new Laya.PhasorSpriter3D();
        //碰撞信息
        rayCastHit = new Laya.RaycastHit();

        //鼠标点击需要创建物品，用于克隆
        box = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("h5/threeDimen/skinModel/XiaoFeiLong/XiaoFeiLong-xiaofeilong.lm")));
        //鼠标点击事件
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,onMouseDown);
    }
    //覆盖场景渲染后更新方法（相当于场景渲染后的帧循环）
    ScenePlaceScript.prototype._postRenderUpdate = function(state){
        //画参考线，碰撞检测
        //根据鼠标屏幕2d坐标修改射线数据
        camera.viewportPointToRay(new Laya.Vector2(Laya.stage.mouseX,Laya.stage.mouseY),ray);
        //射线检测，最近物体碰撞器信息，最大检测距离为300米，默认检测底0层
        Laya.Physics.rayCast(ray,rayCastHit,300);
        //摄像机位置
        var position = new Laya.Vector3(camera.position.x,0,camera.position.z);
        //开始绘制矢量精灵，类型为线型
        phasorSprite3D.begin(Laya.WebGLContext.LINES,camera);
        //如果与物品相交，画三面线
        if(rayCastHit.sprite3D){
            //从碰撞信息中获取碰撞处的三角面顶点
            var trianglePositions = rayCastHit.trianglePositions;
            //矢量绘制三角面边线
            phasorSprite3D.line(trianglePositions[0],new Laya.Vector4(1,0,0,1),
                                trianglePositions[1],new Laya.Vector4(1,0,0,1));
            phasorSprite3D.line(trianglePositions[1],new Laya.Vector4(1,0,0,1),
                                trianglePositions[2],new Laya.Vector4(1,0,0,1));
            phasorSprite3D.line(trianglePositions[2],new Laya.Vector4(1,0,0,1),
                                trianglePositions[0],new Laya.Vector4(1,0,0,1));
                                
        }
        // 根据射线的原点绘制参考直线
        phasorSprite3D.line(ray.origin,new Laya.Vector4(1,0,0,1),position,new Laya.Vector4(1,0,0,1));
        //结束绘制
        phasorSprite3D.end();

    }

    //鼠标点击拾取
    function onMouseDown(){
        //如果碰撞信息中的模型不为空，删除模型
        if(rayCastHit.sprite3D){
            //克隆一个货物模型
            var cloneBox = Laya.Sprite3D.instantiate(box);
            //添加网格碰撞器组件
            var meshCollider = cloneBox.addComponent(Laya.MeshCollider);
            //为碰撞器 mesh网格 ，否则没有尺寸，无法被射线检测
            meshCollider.mesh = cloneBox.meshFilter.sharedMesh;
            scene.addChild(cloneBox);
            //修改位置到碰撞点
            cloneBox.transform.position = rayCastHit.position;
            //更新提示信息
            nameArray.push(cloneBox.name);
            LayaAir3D.txt.text = '你复制了 '+nameArray.length+" 个人物";
        }
    }
    return ScenePlaceScript;
})(Laya.Script);