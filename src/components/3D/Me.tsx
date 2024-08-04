import {useLayoutEffect, useRef} from 'react';
import * as THREE from 'three';
import {useGLTF, useAnimations} from '@react-three/drei';
import {GLTF} from 'three-stdlib';
import {Euler, MathUtils} from "three";

const modelURL = new URL('../../assets/models/cartoon_girl.glb', import.meta.url).toString();

type GLTFResult = GLTF & {
    nodes: {
        Object_2: THREE.Mesh;
    };
    materials: {
        Girl: THREE.MeshStandardMaterial;
    };
};

export function Me(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null!);
    const {nodes, materials} = useGLTF(modelURL) as unknown as GLTFResult;
    console.log('Loaded nodes:', nodes);
    console.log('Loaded materials:', materials);
    // 添加这行来创建一个绕X轴旋转90度的Euler对象
    const rotation = new Euler(MathUtils.degToRad(250), 0, 0);

    return (
        <group ref={group} {...props} dispose={null} position={[0, 0, 0]} rotation={rotation} scale={[1.8, 1.8, 1.8]}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model">
                    <group name="3a17da91ed5b46bba220f21a2e0fbd1dobjcleanermaterialmergergles">
                        <mesh
                            name="Object_2"
                            geometry={nodes.Object_2.geometry}
                            material={materials.Girl}
                            castShadow
                            receiveShadow
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}
