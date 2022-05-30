// 创建一个场景
import * as THREE from 'three'
import { EdgesGeometry, ShaderMaterial, WebGLRenderer } from 'three'
const widthHeightRatio = window.innerWidth / window.innerHeight

// 创建一个场景
const scene = new THREE.Scene(window.innerWidth, window.innerHeight)

// 场景一个摄像机
const camera = new THREE.PerspectiveCamera(75, widthHeightRatio, 1, 1000)

// 摄像机位置
camera.position.x = 0
camera.position.y = 10
camera.position.z = 110

// 几何体
const geometry = new THREE.BoxGeometry(45, 45, 45)

//材质
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })

// 组合 材质+几何体 -> 模型
const cubeModel = new THREE.Mesh(geometry, material)

// 添加模型到场景
scene.add(cubeModel)
// 渲染器
const renderer = new WebGLRenderer()

// 挂在渲染器到页面
document.body.appendChild(renderer.domElement)

const fn = () => {
	cubeModel.rotateX(0.001)
	cubeModel.rotateY(0.001)
	renderer.setSize(window.innerWidth, window.innerHeight)

    // 场景+相机 去渲染
	renderer.render(scene, camera)
	requestAnimationFrame(fn)
}
requestAnimationFrame(fn)
