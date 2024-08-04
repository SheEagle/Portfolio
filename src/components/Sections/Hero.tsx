import {HashLink} from 'react-router-hash-link';
import Marquee from 'react-fast-marquee';
import {Canvas} from '@react-three/fiber';
import {Suspense} from 'react';
import {motion} from 'framer-motion';

import {Icon, ScrollDownTextCircle, HeroCanvas, Spinner} from '@/components';
import dog from '@/assets/images/dog.png';
import {useTranslation} from "react-i18next";

export function Hero() {
    const {t} = useTranslation()
    return (
        <section className="relative overflow-hidden">
            <div className="mt-24 sm:mt-0 h-[400px] md:h-screen relative">
                <Suspense
                    fallback={
                        <div className="mt-24 sm:mt-0 h-[400px] md:h-screen w-screen flex justify-center items-center">
                            <Spinner/>
                        </div>
                    }
                >
                    <Canvas camera={{fov: 30}} dpr={1} className="cursor-pointer">
                        <HeroCanvas/>
                    </Canvas>
                </Suspense>
                <motion.div
                    className="absolute left-4 bottom-4 lg:left-10 lg:bottom-10 flex items-center gap-4 group w-16 sm:w-20 lg:w-24"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.5}}
                >
                    <Icon type="swipe" className="h-full w-full shrink-0"/>
                    <p className="sm:text-xl font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none shrink-0 w-80">
                        {t('Hero.drag')}
                        <br/>
                        {t('Hero.cam')}
                    </p>
                </motion.div>

                <HashLink
                    smooth
                    to="#hero-about"
                    className="hidden sm:block absolute right-8 md:right-10 bottom-0 translate-y-1/2"
                >
                    <motion.div
                        className="animate-spinSlowly"
                        whileHover={{scale: 1.1}}
                    >
                        <ScrollDownTextCircle className="h-56 w-56 lg:h-80 lg:w-80"/>
                    </motion.div>
                </HashLink>

            </div>
            <div className="main-layout mt-8 sm:mt-24 relative" id="hero-about">
                <motion.h2
                    className="text-4xl 2xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-righteous relative font-bold"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.7}}
                >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            {t('Hero.professional')} <br className="sm:hidden"/>  {t('Hero.full')}{' '}
          </span>
                    <motion.img
                        src={dog}
                        alt=""
                        className="inline sm:hidden absolute bottom-14 2xs:bottom-[100px] h-10 2xs:h-12"
                        whileHover={{rotate: 360}}
                        transition={{duration: 0.5}}
                    />
                    <br/>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
             {t('Hero.developer')}

          </span>
                    <motion.img
                        src={dog}
                        alt=""
                        className="hidden sm:inline absolute bottom+1 h-16 md:h-20 lg:h-24 ml-4"
                        whileHover={{rotate: 360}}
                        transition={{duration: 0.5}}
                    />
                </motion.h2>
                <motion.p
                    className="text-xl xs:text-2xl md:w-7/12 font-semibold"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.9}}
                >

                    {t('Hero.subtitle')}
                </motion.p>
                <motion.div
                    className="absolute top-0 right-0 w-1/2 h-full opacity-10"
                    initial={{opacity: 0}}
                    animate={{opacity: 0.1}}
                    transition={{delay: 1.1}}
                >
                    <div
                        className="w-full h-full bg-gradient-to-bl from-blue-500 via-purple-500 to-pink-500 blur-3xl"></div>
                </motion.div>
            </div>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.3}}
            >
                <Marquee
                    gradient={false}
                    className="text-7xl xs:text-8xl sm:text-[112px] md:text-9xl lg:text-[160px] xl:text-[208px] 2xl:text-[256px] tracking-tight font-righteous text-stroke text-transparent overflow-hidden mt-8 lg:mt-16 mb-20"
                    speed={100}
                >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            READY FOR HIRE!{'ㅤ·ㅤ'}READY FOR HIRE!{'ㅤ·ㅤ'}
          </span>
                </Marquee>
            </motion.div>
        </section>
    );
}