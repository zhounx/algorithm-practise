<template>
    <canvas id="basic1" width="100%" height="100%"/>
</template>

<script>
  import * as THREE from 'three'

  export default {
    name: 'FirstThreeJs',
    data () {
      return {
        scene: null,
        camera: null,
        renderer: null,
        mesh: null,
        T0: new Date(),
        windowWidth: window.innerWidth - 200, //窗口宽度
        windowHeight: window.innerHeight - 115 //窗口高度
      }
    },
    methods: {
      initScene () {
        this.scene = new THREE.Scene()
      },
      /**
       * 创建网格模型
       * @param color
       */
      initMesh () {
        const geometry = new THREE.BoxGeometry(100, 100, 50)
        const material = new THREE.MeshLambertMaterial({ color: '#1aad19' })
        const mesh = new THREE.Mesh(geometry, material)
        this.mesh = mesh
        this.scene.add(mesh)
      },
      /**
       * 光源设置
       */
      initLight () {
        //点光源
        const point = new THREE.PointLight('#66F480')
        point.position.set(500, 500, 0) //点光源位置
        this.scene.add(point) //点光源添加到场景中
        //环境光
        const ambient = new THREE.AmbientLight('#F28899')
        this.scene.add(ambient)
      },
      /**
       * 相机设置
       */
      initCamera () {
        const k = this.windowWidth / this.windowHeight //窗口宽高比
        const s = 200 //三维场景显示范围控制系数，系数越大，显示的范围越大
        //创建相机对象
        const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
        camera.position.set(200, 300, 200) //设置相机位置
        camera.lookAt(this.scene.position) //设置相机方向(指向的场景对象)
        this.camera = camera
      },
      /**
       * 创建渲染器对象
       */
      initRenderer () {
        const renderer = new THREE.WebGLRenderer({ canvas: basic1, antialias: true })
        renderer.setSize(this.windowWidth, this.windowHeight)//设置渲染区域尺寸
        renderer.setClearColor('#F09988', 1) //设置背景颜色
        // document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
        this.renderer = renderer

      },
      render () {
        let T1 = new Date()
        let t = T1 - this.T0 // 时间差
        this.T0 = T1
        //执行渲染操作   指定场景、相机作为参数
        this.renderer.render(this.scene, this.camera)
        // this.mesh.rotateY(0.01)
        this.mesh.rotateY(0.001 * t) // 可以消除误差，保证旋转速度均匀
        requestAnimationFrame(this.render)
      },
      init () {
        this.initScene()
        this.initMesh()
        this.initLight()
        this.initCamera()
        this.initRenderer()
        this.render()
        // console.log(this.scene)
      }
    },
    mounted () {
      this.init()
    },
    components: {
      // BaseCharts
    }
  }
</script>
<style lang="scss" scoped>

</style>


