<template>
    <canvas id="viewport" width="100%" height="100%"/>
</template>

<script>
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
    import {AxesHelper} from 'three/src/helpers/AxesHelper'

    export default {
        name: 'home',
        data () {
            return {
                scene: null,
                camera: null,
                renderer: null,
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
             * 初始化辅助三围坐标系
             */
            initHelper() {
                let axesHelper = new AxesHelper(250)
                this.scene.add(axesHelper)
            },
            /**
             * 初始化几何体
             */
            initGeometry () {
                const geometry = new THREE.BufferGeometry()
                const vertices = new Float32Array([
                    0, 0, 0, //顶点1坐标
                    50, 0, 0, //顶点2坐标
                    0, 100, 0, //顶点3坐标
                    0, 0, 10, //顶点4坐标
                    0, 0, 100, //顶点5坐标
                    50, 0, 10, //顶点6坐标
                ])
                // 设置几何体attributes属性的位置属性
                geometry.attributes.position = new THREE.BufferAttribute(vertices, 3) //3个为一组，表示一个顶点的xyz坐标
                // 三角面网格渲染模式
                const material = new THREE.MeshBasicMaterial({
                    color: '#f00',
                    side: THREE.DoubleSide
                })
                const mesh = new THREE.Mesh(geometry, material)
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
                const renderer = new THREE.WebGLRenderer({ canvas: viewport, antialias: true })
                renderer.setSize(this.windowWidth, this.windowHeight)//设置渲染区域尺寸
                renderer.setClearColor('#F09988', 1) //设置背景颜色
                // document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
                this.renderer = renderer

            },

            //执行渲染操作   指定场景、相机作为参数
            render(){
                this.renderer.render(this.scene, this.camera)
            },
            init () {
                this.initScene()
                this.initHelper()
                this.initGeometry()
                this.initLight()
                this.initCamera()
                this.initRenderer()
                this.render()

                // 创建控件对象
                // let controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)
                const controls = new OrbitControls(this.camera, this.renderer.domElement)
                // controls.update()
                // console.log(new OrbitControls())
                controls.addEventListener('change', this.render) //监听鼠标，键盘事件
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
