import type { NextPage } from 'next'
import { useEffect } from 'react'
import * as THREE from 'three'

const Home: NextPage = () => {
  useEffect(() => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#myCanvas') as HTMLCanvasElement,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // ドーナツを作成
    const geometry = new THREE.TorusGeometry(300, 100, 64, 100);
    // マテリアルを作成
    const material = new THREE.MeshBasicMaterial({ color: 0x541260 });
    // メッシュを作成
    const mesh = new THREE.Mesh(geometry, material);
    // 3D空間にメッシュを追加
    scene.add(mesh);

    tick();

    // 毎フレーム時に実行されるループイベントです
    function tick() {
      // メッシュを回転させる
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      // レンダリング
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    }
  }, [])

  return (
    <canvas id="myCanvas"></canvas>
  )
}

export default Home;
