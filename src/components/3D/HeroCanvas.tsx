import {useState, useLayoutEffect, useRef, useContext, memo, useEffect} from 'react'; // 导入React钩子
import {OrbitControls, useTexture} from '@react-three/drei'; // 导入OrbitControls和useTexture组件
import * as THREE from 'three'; // 导入Three.js库

import {ColorThemeContext} from '@/providers'; // 导入颜色主题上下文
import {useMinWidthMediaQuery} from '@/hooks'; // 导入自定义的钩子
import {RotatingText} from '@/components';
import {useTranslation} from "react-i18next"; // 导入RotatingText组件

// 背景图片URL
const backgroundImages = {

    dark: new URL('../../assets/images/mm.jpg', import.meta.url).toString(),
    light: new URL('../../assets/images/mm2.jpg', import.meta.url).toString(),
};

const backgroundText = {
    dark: new URL('../../assets/images/mm.jpg', import.meta.url).toString(),
    light: new URL('../../assets/images/mm2.jpg', import.meta.url).toString(),

};

// 定义HeroCanvas组件
export function HeroCanvas() {
    const { t } = useTranslation();
    const [theme] = useContext(ColorThemeContext); // 获取当前主题
    const [isControlled, setIsControlled] = useState(false); // 控制状态
    const sphereRef = useRef<THREE.SphereGeometry>(null!); // 对球体的引用
    const materialRef = useRef<THREE.MeshBasicMaterial>(null!); // 对材质的引用
    const isScreenSm = useMinWidthMediaQuery('sm'); // 是否为小屏幕
    const isScreenMd = useMinWidthMediaQuery('md'); // 是否为中等屏幕
    const textures = useTexture(backgroundImages); // 加载背景纹理
    const backgroundTexture = textures[theme]; // 根据主题获取背景纹理
    const textures_text = useTexture(backgroundText)
    const backgroundTexture_text = textures_text[theme]

    // 更新纹理
    useEffect(() => {
        textures.dark.needsUpdate = true;
        textures.light.needsUpdate = true;
    }, [textures.dark.source.data, textures.light.source.data]);

    // 在组件挂载时对球体进行缩放
    useLayoutEffect(() => void sphereRef.current.scale(1, 1, -1), []);

    // 渲染组件
    return (
        <>
            <OrbitControls // 渲染OrbitControls组件，用于控制相机
                enablePan={false}
                enableZoom={false}
                minDistance={isScreenMd || !isScreenSm ? 105 : 150}
                maxDistance={isScreenMd || !isScreenSm ? 105 : 150}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={(2 * Math.PI) / 3}
                onStart={() => setIsControlled(true)} // 开始交互时设置为受控状态
                onEnd={() => setIsControlled(false)} // 结束交互时取消受控状态
                dampingFactor={0.15}
            />
            <mesh> {/* 渲染一个mesh */}
                <sphereGeometry ref={sphereRef} args={[500, 60, 40]}/>
                {/* 球体几何体 */}
                <meshBasicMaterial map={backgroundTexture} ref={materialRef}/>
                {/* 材质 */}
            </mesh>
            <RotatingText // 渲染旋转文本组件
                isControlled={isControlled}
                position={[0, 4, 0]}
                backgroundTexture={backgroundTexture_text}
                size={2} // 修改文本大小为原来的两倍
            >
                {t('HeroCanvas.Serene')}
            </RotatingText>
            <RotatingText // 渲染旋转文本组件
                isControlled={isControlled}
                position={[0, -4, 0]}
                backgroundTexture={backgroundTexture_text}
                size={2} // 修改文本大小为原来的两倍
            >
                {t('HeroCanvas.Wang')}
            </RotatingText>
        </>
    );
}

