import * as THREE from 'three'; // 导入Three.js库
import {useRef, useLayoutEffect} from 'react'; // 导入React钩子
import {Text3D} from '@react-three/drei'; // 导入Three.js中的3D文本组件
import {GroupProps, useFrame} from '@react-three/fiber'; // 导入Three.js中的组相关组件

import typeFace from '@/assets/fonts/Roboto_Regular.json'; // 导入Roboto字体的JSON文件

// 设置文本的默认参数
const TEXT_OPTIONS = {
    size: 40,
    height: 30,
    curveSegments: 32,
    bevelEnabled: true,
    bevelThickness: 0,
    bevelSize: 2,
    bevelOffset: 0,
    bevelSegments: 8,
};

const ROTATION_SPEED = 0.002; // 设置旋转速度
const ROTATION_DELAY = 1000; // 设置旋转延迟时间

// 定义RotatingText组件的props类型
interface RotatingTextProps extends GroupProps {
    backgroundTexture?: THREE.Texture; // 背景纹理
    children?: React.ReactNode; // 子元素
    size?: number; // 大小
    color?: THREE.ColorRepresentation; // 颜色
    isControlled?: boolean; // 是否受控
}

// 定义RotatingText组件
export function RotatingText({
                                 children, // 子元素
                                 size = 1.5, // 大小，默认为1.5
                                 color = 0xffffff, // 颜色，默认为白色
                                 isControlled = false, // 是否受控，默认为false
                                 backgroundTexture, // 背景纹理
                                 ...props // 其他属性
                             }: RotatingTextProps) {
    // 创建对文本Mesh对象和组对象的引用
    const meshRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>(null!);
    const groupRef = useRef<THREE.Group>(null!);

    // 用于控制是否旋转的标志
    const shouldRotate = useRef(!isControlled);

    // 在每一帧更新旋转角度
    useFrame(() => {
        groupRef.current.rotation.y += +shouldRotate.current * ROTATION_SPEED;
    });

    // 在组件挂载或更新时设置是否旋转
    useLayoutEffect(() => {
        let timeout: NodeJS.Timeout | undefined;

        if (isControlled) shouldRotate.current = false;
        else timeout = setTimeout(() => (shouldRotate.current = true), ROTATION_DELAY);

        // 在组件卸载时清除定时器
        return () => clearTimeout(timeout);
    }, [isControlled]);

    // 确保文本的几何中心正确地居中
    useLayoutEffect(() => {
        meshRef.current.geometry.center();
    }, [children]);

    // 渲染旋转的文本
    return (
        <group ref={groupRef} {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
            <Text3D
                castShadow // 设置是否投射阴影
                receiveShadow // 设置是否接收阴影
                ref={meshRef} // 将Mesh对象引用传递给Text3D组件
                font={typeFace as any} // 设置字体，此处应为THREE.FontData类型，但无法直接导入，所以转换为any
                {...TEXT_OPTIONS} // 将文本参数传递给Text3D组件
            >
                {children} {/* 渲染子元素 */}
                <meshMatcapMaterial color={color} matcap={backgroundTexture}/>
                {/* 设置材质 */}
            </Text3D>
        </group>
    );
}

